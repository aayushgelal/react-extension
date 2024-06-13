import React, { EventHandler, FormEventHandler, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Button from "../components/Button";

function ContentScript() {
	const translateText = async (text:string) => {
		// This is a placeholder. Replace with actual translation logic or API call.
		return `Translated: ${text}`;
	  };
	const handleTranslateClick = async (event:Event) => {
		event.preventDefault();
	  // Locate the text area on the page
	  const textArea = document.querySelector("textarea")
	  const canvas= document.querySelector("canvas");
  
	  if (textArea) {
		const text = textArea.value;
		const translated = await translateText(text);
		textArea.value = translated; // Update the text area with translated text
	  } else {
		alert("No text area found on the page.");
	  }
	};
	useEffect(() => {
		// Locate the text area by its name attribute
		const textAreas = document.querySelectorAll('textarea');

		if (textAreas.length > 0) {
			const textArea = textAreas[0];
			const buttonContainer = document.createElement("div");
			textArea.parentNode?.insertBefore(buttonContainer, textArea.nextSibling);

			ReactDOM.createRoot(buttonContainer).render(
				<React.StrictMode>
					<Button onClick={handleTranslateClick}>Translate</Button>
				</React.StrictMode>
			);
		}
	}, []);

	return (
		<div className="App">
			<header className="App-header">
				<Button>Translate</Button>
			</header>
		</div>
	);
}

const index = document.createElement("div");
index.id = "content-script";
document.body.appendChild(index);

ReactDOM.createRoot(index).render(
	<React.StrictMode>
		<ContentScript />
	</React.StrictMode>
);
