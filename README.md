# SafeVault: Secure Code, Authentication, and Security Vulnerability Fixes

Capstone project combining secure coding, input validation, SQL injection prevention, authentication and authorization (RBAC), and resolution of security vulnerabilities (SQL injection, XSS).

## Summary

**Vulnerabilities identified:** Missing input validation on user-supplied fields, SQL injection risks from concatenated queries, XSS risks from unsanitized output, and gaps in authentication and authorization.

**Fixes applied:** Server-side input validation, parameterized queries (prepared statements), output escaping/sanitization for XSS, authentication and role-based access control (RBAC), and secure coding practices.

**Copilot assistance:** Used to generate secure validation and parameterized query code, draft auth and RBAC logic, and suggest fixes when debugging vulnerabilities.

## Project structure

- `app.py` – Main application with validation, parameterized DB access, auth, and RBAC
- `validation.py` – Input validation helpers
- `auth.py` – Authentication and RBAC
- `tests/` – Security and functionality tests

## Setup

```bash
pip install -r requirements.txt
python -m pytest tests/ -v
```

## Run

```bash
python app.py
```
