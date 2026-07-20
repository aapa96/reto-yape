# Security and lifecycle QA matrix

Validated on an iPhone 17 Pro simulator running iOS 26.5.

## Automated coverage

| Area | Scenario | Expected result | Status |
| --- | --- | --- | --- |
| Token | Valid HMAC token for the requested card | Request is accepted | Passed |
| Token | Expired token | `TOKEN_EXPIRED` | Passed |
| Token | Tampered signature | `TOKEN_INVALID` | Passed |
| Token | Token for another card | `TOKEN_INVALID` | Passed |
| Token | Unsafe or empty card identifier | Token is not issued | Passed |
| Native data | Unknown card with a valid token | `CARD_NOT_FOUND` | Passed |
| Presentation | A second secure view is requested | `VIEW_ALREADY_PRESENTED` | Passed |
| Events | Valid presentation | `opened` then `cardDataShown` | Passed |
| Lifecycle | App resigns active | Sensitive content is concealed | Passed |
| Lifecycle | Session expires in background | Content remains concealed and closes with `BACKGROUND_TIMEOUT` | Passed |
| Timeout | Foreground session reaches its deadline | Closes with `TIMEOUT` | Passed |
| Capture | Screen recording or mirroring is active | Sensitive content is concealed | Passed |
| Screenshot | Screenshot notification is received | Content is concealed and closes with `CAPTURE_DETECTED` | Passed |
| Manual close | Hide action is invoked | Closes with `USER_DISMISS` | Passed |
| Cleanup | Controller prepares for dismissal | PAN, CVV, expiry and holder labels are cleared | Passed |
| Performance | 1,000 HMAC validations | Completes in less than 2 seconds | Passed, approximately 15–19 ms |

Native suite result: 19 passed, 0 failed, 0 skipped.

React Native suite result: 5 passed, 0 failed. ESLint and TypeScript also pass.

## Static security checks

- No `console.log`, `NSLog` or `print` calls exist in application or package source.
- PAN and CVV exist only in `CardSecureViewKit` native mock data and native UIKit views.
- The TurboModule contract exposes only `cardId`, short-lived token and metadata-only events.
- Sensitive labels are cleared before dismissal.

## Platform limitation and manual checks

iOS public APIs notify the application after a screenshot is taken; they do not provide a supported way to prevent the screenshot before capture. The package responds by immediately concealing and closing the session. Screen recording and mirroring can be detected while active and are concealed proactively.

Before delivery, repeat these checks on a physical iPhone:

1. Open the secure view and send the app to the background.
2. Start Control Center screen recording and return to the app.
3. Take a screenshot and confirm the secure session closes.
4. Leave the view open until its 45-second timeout.
5. Inspect the app switcher snapshot and confirm sensitive content is not visible.
