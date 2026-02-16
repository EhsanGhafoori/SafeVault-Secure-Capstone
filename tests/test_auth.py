"""Tests for authentication and RBAC."""
import pytest
from auth import authenticate, has_permission, Role


def test_authenticate_success():
    user = authenticate("admin", "admin_secure_123")
    assert user is not None
    assert user["role"] == Role.ADMIN


def test_authenticate_failure():
    assert authenticate("admin", "wrong") is None
    assert authenticate("", "pass") is None


def test_rbac_admin_can_delete():
    assert has_permission(Role.ADMIN, "delete") is True
    assert has_permission(Role.ADMIN, "manage_users") is True


def test_rbac_viewer_read_only():
    assert has_permission(Role.VIEWER, "read") is True
    assert has_permission(Role.VIEWER, "delete") is False
