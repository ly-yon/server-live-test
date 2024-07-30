import ping from "ping";
import nodemailer from "nodemailer";
import "dotenv/config";
console.log(process.env.email);
const transporter = nodemailer.createTransport({
  host: process.env.host,
  port: 465,
  secure: true, // Use `true` for port 465, `false` for all other ports
  auth: {
    user: process.env.email,
    pass: process.env.pass,
  },
});
let hosts = "private.lyonworld.store";
setInterval(async () => {
  let res = await ping.promise.probe(hosts);
  let sent = await send({
    live: res.alive ? "LIVE" : "Dead",
    priority: res.alive ? "low" : "high",
    ip: res.numeric_host,
  });
  console.log(sent.messageId);
}, 1000 * 60 * 60 * 1);
async function send(status) {
  // send mail with defined transport object
  const info = await transporter.sendMail({
    priority: status.priority,
    from: `"Server" <${process.env.email}>`, // sender address
    to: process.env.rec, // list of receivers
    subject: `Check ${Date()}`, // Subject line
    html: `
    <!DOCTYPE html>
<html
  xmlns="http://www.w3.org/1999/xhtml"
  xmlns:v="urn:schemas-microsoft-com:vml"
  xmlns:o="urn:schemas-microsoft-com:office:office"
>
  <head>
    <title>Server Email</title>
    <!--[if !mso]><!-->
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <!--<![endif]-->
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <style type="text/css">
      #outlook a {
        padding: 0;
      }
      body {
        margin: 0;
        padding: 0;
        -webkit-text-size-adjust: 100%;
        -ms-text-size-adjust: 100%;
      }
      table,
      td {
        border-collapse: collapse;
      }
      img {
        border: 0;
        height: auto;
        line-height: 100%;
        outline: none;
        text-decoration: none;
        -ms-interpolation-mode: bicubic;
      }
      p {
        display: block;
        margin: 13px 0;
      }
    </style>
    <!--[if mso]>
      <noscript>
        <xml>
          <o:OfficeDocumentSettings>
            <o:AllowPNG />
            <o:PixelsPerInch>96</o:PixelsPerInch>
          </o:OfficeDocumentSettings>
        </xml>
      </noscript>
    <![endif]-->
    <!--[if lte mso 11]>
      <style type="text/css">
        .mj-outlook-group-fix {
          width: 100% !important;
        }
      </style>
    <![endif]-->

    <!--[if !mso]><!-->
    <link
      href="https://fonts.googleapis.com/css?family=Lato:400,700"
      rel="stylesheet"
      type="text/css"
    />
    <link
      href="https://fonts.googleapis.com/css?family=Ubuntu:400,700"
      rel="stylesheet"
      type="text/css"
    />
    <style type="text/css">
      @import url(https://fonts.googleapis.com/css?family=Lato:400,700);
      @import url(https://fonts.googleapis.com/css?family=Ubuntu:400,700);
    </style>
    <!--<![endif]-->

    <style type="text/css">
      @media only screen and (min-width: 480px) {
        .mj-column-per-33-333333333333336 {
          width: 33.333333333333336% !important;
          max-width: 33.333333333333336%;
        }
        .mj-column-per-50 {
          width: 50% !important;
          max-width: 50%;
        }
      }
    </style>
    <style media="screen and (min-width:480px)">
      .moz-text-html .mj-column-per-33-333333333333336 {
        width: 33.333333333333336% !important;
        max-width: 33.333333333333336%;
      }
      .moz-text-html .mj-column-per-50 {
        width: 50% !important;
        max-width: 50%;
      }
    </style>

    <style type="text/css">
      @media only screen and (max-width: 479px) {
        table.mj-full-width-mobile {
          width: 100% !important;
        }
        td.mj-full-width-mobile {
          width: auto !important;
        }
      }
    </style>
    <style type="text/css">
      .hide_on_mobile {
        display: none !important;
      }
      @media only screen and (min-width: 480px) {
        .hide_on_mobile {
          display: block !important;
        }
      }
      .hide_section_on_mobile {
        display: none !important;
      }
      @media only screen and (min-width: 480px) {
        .hide_section_on_mobile {
          display: table !important;
        }

        div.hide_section_on_mobile {
          display: block !important;
        }
      }
      .hide_on_desktop {
        display: block !important;
      }
      @media only screen and (min-width: 480px) {
        .hide_on_desktop {
          display: none !important;
        }
      }
      .hide_section_on_desktop {
        display: table !important;
        width: 100%;
      }
      @media only screen and (min-width: 480px) {
        .hide_section_on_desktop {
          display: none !important;
        }
      }

      p,
      h1,
      h2,
      h3 {
        margin: 0px;
      }

      ul,
      li,
      ol {
        font-size: 11px;
        font-family: Ubuntu, Helvetica, Arial;
      }

      a {
        text-decoration: none;
        color: inherit;
      }

      @media only screen and (max-width: 480px) {
        .mj-column-per-33 {
          width: 100% !important;
          max-width: 100% !important;
        }
        .mj-column-per-100 > .mj-column-per-33 {
          width: 33.333333333333336% !important;
          max-width: 33.333333333333336% !important;
        }
        .mj-column-per-50 {
          width: 100% !important;
          max-width: 100% !important;
        }
        .mj-column-per-100 > .mj-column-per-50 {
          width: 50% !important;
          max-width: 50% !important;
        }
      }
    </style>
  </head>
  <body style="word-spacing: normal; background-color: #ffffff">
    <div style="background-color: #ffffff">
      <!--[if mso | IE]><table align="center" border="0" cellpadding="0" cellspacing="0" class="" role="presentation" style="width:600px;" width="600" bgcolor="#FFFFFF" ><tr><td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;"><![endif]-->

      <div
        style="
          background: #ffffff;
          background-color: #ffffff;
          margin: 0px auto;
          max-width: 600px;
        "
      >
        <table
          align="center"
          border="0"
          cellpadding="0"
          cellspacing="0"
          role="presentation"
          style="background: #ffffff; background-color: #ffffff; width: 100%"
        >
          <tbody>
            <tr>
              <td
                style="
                  direction: ltr;
                  font-size: 0px;
                  padding: 18px 26px 18px 26px;
                  text-align: center;
                "
              >
                <!--[if mso | IE]><table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td class="" style="vertical-align:top;width:182.66666666666669px;" ><![endif]-->

                <div
                  class="mj-column-per-33-333333333333336 mj-outlook-group-fix"
                  style="
                    font-size: 0px;
                    text-align: left;
                    direction: ltr;
                    display: inline-block;
                    vertical-align: top;
                    width: 100%;
                  "
                >
                  <table
                    border="0"
                    cellpadding="0"
                    cellspacing="0"
                    role="presentation"
                    style="vertical-align: top"
                    width="100%"
                  >
                    <tbody>
                      <tr>
                        <td
                          align="left"
                          style="
                            font-size: 0px;
                            padding: 8px 0px 8px 0px;
                            word-break: break-word;
                          "
                        >
                          <!--[if mso | IE]><table align="left" border="0" cellpadding="0" cellspacing="0" role="presentation" ><tr><td><![endif]-->
                          <table
                            align="left"
                            border="0"
                            cellpadding="0"
                            cellspacing="0"
                            role="presentation"
                            style="float: none; display: inline-table"
                          >
                            <tbody>
                              <tr>
                                <td
                                  style="padding: 4px; vertical-align: middle"
                                >
                                  <table
                                    border="0"
                                    cellpadding="0"
                                    cellspacing="0"
                                    role="presentation"
                                    style="
                                      background: transparent;
                                      border-radius: 3px;
                                      width: 20px;
                                    "
                                  >
                                    <tbody>
                                      <tr>
                                        <td
                                          style="
                                            padding: 0px;
                                            font-size: 0;
                                            height: 20px;
                                            vertical-align: middle;
                                            width: 20px;
                                          "
                                        >
                                          <a
                                            href="https://www.instagram.com/buildizer"
                                            target="_blank"
                                            style="color: #0000ee"
                                          >
                                            <img
                                              alt="Instagram"
                                              height="20"
                                              src="https://s3-eu-west-1.amazonaws.com/ecomail-assets/editor/social-icos/rounded/instagram.png"
                                              style="
                                                border-radius: 3px;
                                                display: block;
                                              "
                                              width="20"
                                            />
                                          </a>
                                        </td>
                                      </tr>
                                    </tbody>
                                  </table>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                          <!--[if mso | IE]></td></tr></table><![endif]-->
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <!--[if mso | IE]></td><td class="" style="vertical-align:top;width:182.66666666666669px;" ><![endif]-->

                <div
                  class="mj-column-per-33-333333333333336 mj-outlook-group-fix"
                  style="
                    font-size: 0px;
                    text-align: left;
                    direction: ltr;
                    display: inline-block;
                    vertical-align: top;
                    width: 100%;
                  "
                >
                  <table
                    border="0"
                    cellpadding="0"
                    cellspacing="0"
                    role="presentation"
                    style="vertical-align: top"
                    width="100%"
                  >
                    <tbody>
                      <tr>
                        <td
                          align="center"
                          style="
                            font-size: 0px;
                            padding: 0px 0px 0px 0px;
                            word-break: break-word;
                          "
                        >
                          <table
                            border="0"
                            cellpadding="0"
                            cellspacing="0"
                            role="presentation"
                            style="
                              border-collapse: collapse;
                              border-spacing: 0px;
                            "
                          >
                            <tbody>
                              <tr>
                                <td style="width: 137px">
                                  <img
                                    src="https://drive.google.com/thumbnail?id=1Y_ButwCSMwNGXiKXXM8gGN-qsCRPfHMX"
                                    style="
                                      border: 0;
                                      border-radius: 0px 0px 0px 0px;
                                      display: block;
                                      outline: none;
                                      text-decoration: none;
                                      height: auto;
                                      width: 100%;
                                      font-size: 13px;
                                    "
                                    width="137"
                                    height="auto"
                                  />
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <!--[if mso | IE]></td><td class="" style="vertical-align:top;width:182.66666666666669px;" ><![endif]-->

                <div
                  class="mj-column-per-33-333333333333336 mj-outlook-group-fix"
                  style="
                    font-size: 0px;
                    text-align: left;
                    direction: ltr;
                    display: inline-block;
                    vertical-align: top;
                    width: 100%;
                  "
                >
                  <table
                    border="0"
                    cellpadding="0"
                    cellspacing="0"
                    role="presentation"
                    style="vertical-align: top"
                    width="100%"
                  >
                    <tbody>
                      <tr>
                        <td style="font-size: 0px; word-break: break-word">
                          <div
                            style="
                              height: 25.4765625px;
                              line-height: 25.4765625px;
                            "
                          >
                            &#8202;
                          </div>
                        </td>
                      </tr>

                      <tr>
                        <td
                          align="left"
                          style="
                            font-size: 0px;
                            padding: 19px 19px 19px 19px;
                            word-break: break-word;
                          "
                        >
                          <div
                            style="
                              font-family: Ubuntu, Helvetica, Arial, sans-serif;
                              font-size: 13px;
                              line-height: 1.7600000000000002;
                              text-align: left;
                              color: #000000;
                            "
                          >
                            <p
                              style="
                                font-family: Ubuntu, sans-serif;
                                font-size: 11px;
                                text-align: center;
                              "
                            >
                              <span
                                style="
                                  font-family: Georgia, sans-serif;
                                  font-size: 12px;
                                "
                                >Local Server Status:-&nbsp; ${status.live}</span
                              >
                            </p>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <!--[if mso | IE]></td></tr></table><![endif]-->
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <!--[if mso | IE]></td></tr></table><table align="center" border="0" cellpadding="0" cellspacing="0" class="" role="presentation" style="width:600px;" width="600" bgcolor="#FFFFFF" ><tr><td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;"><![endif]-->

      <div
        style="
          background: #ffffff;
          background-color: #ffffff;
          margin: 0px auto;
          max-width: 600px;
        "
      >
        <table
          align="center"
          border="0"
          cellpadding="0"
          cellspacing="0"
          role="presentation"
          style="background: #ffffff; background-color: #ffffff; width: 100%"
        >
          <tbody>
            <tr>
              <td
                style="
                  direction: ltr;
                  font-size: 0px;
                  padding: 21px 0px 21px 0px;
                  text-align: center;
                "
              >
                <!--[if mso | IE]><table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td class="" style="vertical-align:top;width:300px;" ><![endif]-->

                <div
                  class="mj-column-per-50 mj-outlook-group-fix"
                  style="
                    font-size: 0px;
                    text-align: left;
                    direction: ltr;
                    display: inline-block;
                    vertical-align: top;
                    width: 100%;
                  "
                >
                  <table
                    border="0"
                    cellpadding="0"
                    cellspacing="0"
                    role="presentation"
                    style="vertical-align: top"
                    width="100%"
                  >
                    <tbody>
                      <tr>
                        <td
                          align="left"
                          style="
                            font-size: 0px;
                            padding: 0px 35px 0px 35px;
                            word-break: break-word;
                          "
                        >
                          <div
                            style="
                              font-family: Lato, Tahoma, sans-serif;
                              font-size: 11px;
                              line-height: 1.5;
                              text-align: left;
                              color: #1d1d1d;
                            "
                          >
                            <p
                              style="
                                font-family: Ubuntu, sans-serif;
                                font-size: 11px;
                              "
                            >
                              <span style="font-size: 14px"
                                >ip address ${status.ip}&nbsp;<br />BAHRAIN Cloud</span
                              >
                            </p>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <!--[if mso | IE]></td><td class="" style="vertical-align:top;width:300px;" ><![endif]-->

                <div
                  class="mj-column-per-50 mj-outlook-group-fix"
                  style="
                    font-size: 0px;
                    text-align: left;
                    direction: ltr;
                    display: inline-block;
                    vertical-align: top;
                    width: 100%;
                  "
                >
                  <table
                    border="0"
                    cellpadding="0"
                    cellspacing="0"
                    role="presentation"
                    style="vertical-align: top"
                    width="100%"
                  >
                    <tbody>
                      <tr>
                        <td
                          align="left"
                          style="
                            font-size: 0px;
                            padding: 15px 15px 15px 15px;
                            word-break: break-word;
                          "
                        >
                          <div
                            style="
                              font-family: Ubuntu, Helvetica, Arial, sans-serif;
                              font-size: 13px;
                              line-height: 1.5;
                              text-align: left;
                              color: #000000;
                            "
                          >
                            <p
                              style="
                                font-family: Ubuntu, sans-serif;
                                font-size: 11px;
                                text-align: center;
                              "
                            >
                              LYON CO.
                            </p>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <!--[if mso | IE]></td></tr></table><![endif]-->
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <!--[if mso | IE]></td></tr></table><![endif]-->
    </div>
  </body>
</html>
    `, // html body
  });

  return info;
  // Message sent: <d786aa62-4e0a-070a-47ed-0b0666549519@ethereal.email>
}
