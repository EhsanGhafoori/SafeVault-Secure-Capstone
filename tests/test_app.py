"""Tests for app: validation, RBAC, and secure behavior."""
import os
import sys

import pytest

sys.path.insert(0, os.path.dirname(os.path.dirname(os.path.abspath(__file__))))


def test_add_item_rbac_viewer_forbidden():
    """Viewer role cannot create items."""
    from app import add_item, Role, init_db
    init_db()
    ok, msg = add_item("Test", "user1", Role.VIEWER)
    assert ok is False
    assert "Forbidden" in msg


def test_add_item_admin_success():
    """Admin can create with valid input."""
    from app import add_item, Role, init_db
    init_db()
    ok, msg = add_item("ValidItem", "admin", Role.ADMIN)
    assert ok is True


def test_add_item_rejects_invalid_name():
    """Invalid item name is rejected by validation."""
    from app import add_item, Role, init_db
    init_db()
    ok, msg = add_item("<script>", "admin", Role.ADMIN)
    assert ok is False
