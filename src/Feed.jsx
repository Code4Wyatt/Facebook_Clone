import React from "react";
import "./Feed.css";
import Post from "./Post";
import StoryReel from "./StoryReel";
import MessageSender from "./MessageSender";

function Feed() {
  return (
    <div className="feed">
      <StoryReel />
      <MessageSender />

      <Post
        profilePic="https://media.gettyimages.com/photos/smiling-man-outdoors-in-the-city-picture-id1179420343?s=612x612"
        message="Woop woop!"
        timestamp="2h"
        username="A. Striver"
        image="https://media.istockphoto.com/photos/very-closeup-view-of-amazing-domestic-pet-in-mirror-round-fashion-is-picture-id1281804798?b=1&k=20&m=1281804798&s=170667a&w=0&h=HIWbeaP_cQSngCz7l9t3xwyE2eyzVgIy3K6xIqPhJQA="
      />
      <Post
        profilePic="https://ichef.bbci.co.uk/news/999/cpsprodpb/15951/production/_117310488_16.jpg"
        message="What next? Back End!"
        timestamp="4h"
        username="Norman Rest"
        image="https://media.istockphoto.com/photos/programming-source-code-abstract-background-picture-id1047259374?k=20&m=1047259374&s=612x612&w=0&h=pt3XbBvrmiYgoYmVzsaUeXtV8vw_jJI9Ly8P7AL6Qig="
      />
      <Post
        profilePic="https://thumbs.dreamstime.com/b/rock-guitarist-19113213.jpg"
        message="Just hanging around!"
        timestamp="16 July 2021"
        username="Alex Honnold"
        image="https://i.guim.co.uk/img/media/1ba9bd4ca9e43b21553fe633830acd6fa1f6071c/396_716_2259_1355/master/2259.jpg?width=1200&quality=85&auto=format&fit=max&s=79d6f3f6c2b525324a90621d47312659"
      />
      <Post
        profilePic="https://media-exp1.licdn.com/dms/image/C4E03AQFjH2M4r3umhQ/profile-displayphoto-shrink_200_200/0/1629117547194?e=1642636800&v=beta&t=4u_D_k0dRgzK84Xu5-2S3DFN-zdierUdEeay9LJv4Wg"
        message="I had a great time building this, learned a lot as I went and cannot wait to apply these skills to some new ideas! I am forever striving to broaden my coding horizons and expand my skills in Full Stack development, with a particular fondness for the Front End. You can find my LinkedIn @ https://www.linkedin.com/in/paul-murray-519659197/"
        timestamp="19 November 2021"
        username="Paul Murray"
        image="data:image/jpeg;base64,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"
      />
    </div>
  );
}

export default Feed;
