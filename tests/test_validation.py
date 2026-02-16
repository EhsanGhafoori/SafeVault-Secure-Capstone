"""Tests for input validation and XSS prevention."""
import pytest
from validation import validate_username, validate_item_name, sanitize_for_display


def test_validate_username_accepts_valid():
    assert validate_username("alice") is True
    assert validate_username("user_123") is True


def test_validate_username_rejects_invalid():
    assert validate_username("") is False
    assert validate_username("user<script>") is False
    assert validate_username("a" * 51) is False


def test_validate_item_name_accepts_safe():
    assert validate_item_name("My Item") is True
    assert validate_item_name("Item-1") is True


def test_validate_item_name_rejects_unsafe():
    assert validate_item_name("<script>") is False
    assert validate_item_name("'; DROP TABLE items;--") is False


def test_sanitize_for_display_escapes_xss():
    assert "<script>" not in sanitize_for_display("<script>alert(1)</script>")
    assert "&lt;" in sanitize_for_display("<")
    assert "&gt;" in sanitize_for_display(">")
