import React from "react";

function Footer() {
	return (
		<footer className="footer">
			<div>
				<a
					href="https://github.com/BaileyB227"
					target="_blank"
					rel="noopener noreferrer"
				>
					<img
						src={require("../assets/githublogo.png").default}
						alt="Github"
						className="logo"
					></img>
				</a>
			</div>
			<div>
				<a
					href="https://www.linkedin.com/in/BaileyB227/"
					target="_blank"
					rel="noopener noreferrer"
				>
					<img
						src={require("../assets/linkedinlogo.png").default}
						alt="LinkedIn"
						className="logo"
					></img>
				</a>
			</div>
			<div>
				<a
					href="https://mail.google.com/"
					target="_blank"
					rel="noopener noreferrer"
				>
					<img
						src={require("../assets/gmaillogo.png").default}
						alt="Gmail"
						className="logo"
					></img>
				</a>
			</div>
		</footer>
	);
}

export default Footer;