"""
Authentication and authorization (RBAC) for SafeVault.
Secure code: role-based access control.
"""
from enum import Enum
from typing import Optional


class Role(str, Enum):
    ADMIN = "admin"
    USER = "user"
    VIEWER = "viewer"


# In-memory user store for demo; use proper DB + hashed passwords in production.
USERS = {
    "admin": {"password": "admin_secure_123", "role": Role.ADMIN},
    "user1": {"password": "user_secure_456", "role": Role.USER},
    "viewer1": {"password": "viewer_secure_789", "role": Role.VIEWER},
}


def authenticate(username: str, password: str) -> Optional[dict]:
    """Verify credentials and return user info (role) or None."""
    if not username or not password:
        return None
    user = USERS.get(username)
    if not user or user["password"] != password:
        return None
    return {"username": username, "role": user["role"]}


def has_permission(role: Role, action: str) -> bool:
    """RBAC: check if role is allowed to perform action."""
    permissions = {
        Role.ADMIN: ["create", "read", "update", "delete", "manage_users"],
        Role.USER: ["create", "read", "update"],
        Role.VIEWER: ["read"],
    }
    return action in permissions.get(role, [])
