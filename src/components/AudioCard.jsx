import React from 'react'

const AudioCard = ({name}) => {
    return (
        <div className='song'>
            <audio src={"https://d33a9k4anozn7y.cloudfront.net/"+name} type="audio/mpeg" controls>
                {/* <source src="horse.mp3" type="audio/mpeg"  /> */}
            </audio>
                {(name.slice(6,-4)).split('%20').join(' ')}
                Hey there
        </div>
    )
}

export default AudioCard