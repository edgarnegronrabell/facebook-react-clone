import React from 'react'
import "./StoryReel.css";
import Story from './Story';

const StoryReel = () => {
        return (
                <div className="storyReel">
			<Story
				image=""
				profileSrc='https://avatars2.githubusercontent.com/u/24712956?s=400&u=b71527e605ae1b748fc2d4157a842e57e427ad44&v=4'
				title='Sonny Sangha' />

			<Story 
				image="https://unsplash.com/photos/WTrfvtoe3yM"
				profileSrc="https://avatars0.githubusercontent.com/u/8461930?s=400&v=4"
				title="Rafeh Qazi"
			/>
			<Story 
				image="https://unsplash.com/photos/WtIDbK4DtnY"
				profileSrc=""
				title="Frankie "
			/>
			<Story 
				image="https://unsplash.com/photos/lpmD2BCBP9Y"
				profileSrc=""
				title="Aaron Bernaz"
			/>
			<Story 
                                image=""
                                profileSrc=""
                                title="Naz"
                        />
		</div>
        )
}

export default StoryReel; 
