"""
SafeVault application - secure code: input validation, parameterized queries,
authentication, RBAC, and XSS prevention.
"""
import sqlite3
import os
from validation import validate_username, validate_item_name, sanitize_for_display
from auth import authenticate, has_permission, Role

DB_PATH = os.path.join(os.path.dirname(__file__), "safevault.db")


def get_connection():
    """Return a DB connection. Use parameterized queries only."""
    return sqlite3.connect(DB_PATH)


def init_db():
    """Create tables with parameterized-ready schema."""
    conn = get_connection()
    try:
        conn.execute(
            """CREATE TABLE IF NOT EXISTS items (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT NOT NULL,
            owner TEXT NOT NULL
            )"""
        )
        conn.commit()
    finally:
        conn.close()


def add_item(name: str, owner: str, current_user_role: Role) -> tuple[bool, str]:
    """
    Add item only if input is valid and user has permission.
    Uses parameterized query to prevent SQL injection.
    """
    if not has_permission(current_user_role, "create"):
        return False, "Forbidden"
    if not validate_item_name(name):
        return False, "Invalid item name"
    if not validate_username(owner):
        return False, "Invalid owner"
    conn = get_connection()
    try:
        # Parameterized query - prevents SQL injection
        conn.execute("INSERT INTO items (name, owner) VALUES (?, ?)", (name, owner))
        conn.commit()
        return True, "OK"
    finally:
        conn.close()


def get_items_for_display():
    """Fetch items and return sanitized data for safe display (XSS prevention)."""
    conn = get_connection()
    try:
        cur = conn.execute("SELECT id, name, owner FROM items")
        rows = cur.fetchall()
        return [(r[0], sanitize_for_display(r[1]), sanitize_for_display(r[2])) for r in rows]
    finally:
        conn.close()


if __name__ == "__main__":
    init_db()
    # Demo: add item as admin using validated input and parameterized query
    ok, msg = add_item("Secret Document", "admin", Role.ADMIN)
    print("Add item:", ok, msg)
    print("Items:", get_items_for_display())
