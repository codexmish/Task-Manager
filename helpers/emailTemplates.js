const OTPMailTemp = (otp)=>{
    return `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Verification Email</title>
  </head>
  <body
    style="
      margin: 0;
      padding: 0;
      font-family: Arial, sans-serif;
      background: linear-gradient(135deg, #0f172a, #1e3a8a, #2563eb);
    "
  >
    <table
      width="100%"
      cellpadding="0"
      cellspacing="0"
      border="0"
      style="padding: 40px 20px"
    >
      <tr>
        <td align="center">
          <table
            width="100%"
            cellpadding="0"
            cellspacing="0"
            border="0"
            style="
              max-width: 600px;
              background: rgba(255, 255, 255, 0.12);
              border-radius: 24px;
              overflow: hidden;
              backdrop-filter: blur(14px);
              box-shadow: 0 8px 30px rgba(0, 0, 0, 0.25);
              border: 1px solid rgba(255, 255, 255, 0.18);
            "
          >
            <tr>
              <td
                align="center"
                style="
                  padding: 40px 30px 20px;
                  background: linear-gradient(
                    135deg,
                    rgba(255, 255, 255, 0.18),
                    rgba(255, 255, 255, 0.05)
                  );
                "
              >
                <h1
                  style="
                    margin: 0;
                    font-size: 30px;
                    color: #ffffff;
                    font-weight: bold;
                    letter-spacing: 1px;
                  "
                >
                  Task Manager
                </h1>
                <p
                  style="
                    margin: 12px 0 0;
                    font-size: 15px;
                    color: #dbeafe;
                  "
                >
                  Secure verification for your account
                </p>
              </td>
            </tr>

            <tr>
              <td
                style="
                  padding: 35px 30px;
                  text-align: center;
                  background: rgba(255, 255, 255, 0.08);
                "
              >
                <h2
                  style="
                    margin: 0 0 12px;
                    font-size: 24px;
                    color: #ffffff;
                  "
                >
                  Verify Your Email
                </h2>

                <p
                  style="
                    margin: 0 0 25px;
                    font-size: 16px;
                    line-height: 1.7;
                    color: #e0f2fe;
                  "
                >
                  Hello,<br />
                  Use the OTP below to verify your email address. This code is
                  valid for a limited time.
                </p>

                <div
                  style="
                    display: inline-block;
                    padding: 18px 36px;
                    font-size: 32px;
                    font-weight: bold;
                    letter-spacing: 8px;
                    color: #ffffff;
                    background: linear-gradient(135deg, #3b82f6, #06b6d4);
                    border-radius: 16px;
                    box-shadow: 0 6px 20px rgba(59, 130, 246, 0.45);
                  "
                >
                  ${otp}
                </div>

                <p
                  style="
                    margin: 28px 0 0;
                    font-size: 14px;
                    line-height: 1.7;
                    color: #cbd5e1;
                  "
                >
                  If you did not request this email, you can safely ignore it.
                </p>
              </td>
            </tr>

            <tr>
              <td
                align="center"
                style="
                  padding: 22px 20px;
                  border-top: 1px solid rgba(255, 255, 255, 0.12);
                  background: rgba(15, 23, 42, 0.35);
                "
              >
                <p
                  style="
                    margin: 0;
                    font-size: 13px;
                    color: #bfdbfe;
                  "
                >
                  © 2026 Task Manager. All rights reserved.
                </p>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>`
}



module.exports = {OTPMailTemp}