import React, { useState } from 'react'
import "./MessageSender.css";
import { Avatar } from "@material-ui/core";

import VideocamIcon from "@material-ui/icons/Videocam";
import PhotoLibraryIcon from "@material-ui/icons/PhotoLibrary";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";

const MessageSender = ({ image, profileSrc, title }) => {
	const [input, setInput] = useState("");
	
	const handleSubmit = (e) => {
		e.preventDefault();

	}
        return (
                <div className="messageSender">
			<div className="messageSender__top">
				<Avatar 
					src='https://avatars0.githubusercontent.com/u/47069849?s=60&v=4'
				/>
				<form>
					<input  className="messageSender__input"
						placeholder={`What's on your mind ?`}
						onChange={(e) => setInput(e.target.value)}
						value={input}
					/>
					<input
						placeholder="image URL (Optional)" /> 
					<button 
						onClick={handleSubmit} 
						type="submit">
					Hidden submit
					</button>	
				</form>
			</div>
			<div className="messageSender__bottom">
				<div className="messageSender__option">
					<VideocamIcon style={{ color: "red" }} />
					<h3>Live Video</h3>
				</div>
				<div className="messageSender__option">
                                	<PhotoLibraryIcon style={{ color: "green" }} />
					<h3>Photo/Video</h3>
				</div>
				<div className="messageSender__option">
                                        <InsertEmoticonIcon style={{ color: "orange" }} />
					<h3>Feeling/Activity</h3>
                                </div>
			</div>
		</div>
        )
}

export default MessageSender;
