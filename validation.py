"""
Input validation for SafeVault - prevents invalid/malicious input.
Secure code: validation and sanitization before processing.
"""
import re


def validate_username(value: str, max_length: int = 50) -> bool:
    """Allow only alphanumeric and underscore."""
    if not value or not isinstance(value, str):
        return False
    if len(value) > max_length:
        return False
    return bool(re.match(r"^[a-zA-Z0-9_]+$", value))


def validate_password(value: str, min_length: int = 8) -> bool:
    """Basic password strength check."""
    if not value or not isinstance(value, str):
        return False
    return len(value) >= min_length


def validate_item_name(value: str, max_length: int = 100) -> bool:
    """Safe item name: letters, numbers, spaces, hyphen, underscore."""
    if not value or not isinstance(value, str):
        return False
    if len(value) > max_length:
        return False
    return bool(re.match(r"^[a-zA-Z0-9 _\-]+$", value))


def sanitize_for_display(value: str) -> str:
    """Escape HTML to prevent XSS when rendering user content."""
    if not value:
        return ""
    return (
        str(value)
        .replace("&", "&amp;")
        .replace("<", "&lt;")
        .replace(">", "&gt;")
        .replace('"', "&quot;")
        .replace("'", "&#x27;")
    )
