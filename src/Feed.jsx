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
        timestamp="20:25"
        username="A. Striver"
        image="https://media.istockphoto.com/photos/very-closeup-view-of-amazing-domestic-pet-in-mirror-round-fashion-is-picture-id1281804798?b=1&k=20&m=1281804798&s=170667a&w=0&h=HIWbeaP_cQSngCz7l9t3xwyE2eyzVgIy3K6xIqPhJQA="
      />
      <Post
        profilePic="https://ichef.bbci.co.uk/news/999/cpsprodpb/15951/production/_117310488_16.jpg"
        message="What next? Back End!"
        timestamp="12:53"
        username="Norman Rest"
        image="https://media.istockphoto.com/photos/programming-source-code-abstract-background-picture-id1047259374?k=20&m=1047259374&s=612x612&w=0&h=pt3XbBvrmiYgoYmVzsaUeXtV8vw_jJI9Ly8P7AL6Qig="
      />
      <Post
        profilePic="https://thumbs.dreamstime.com/b/rock-guitarist-19113213.jpg"
        message="Just hanging around!"
        timestamp="11:33"
        username="Alex Honnold"
        image="https://i.guim.co.uk/img/media/1ba9bd4ca9e43b21553fe633830acd6fa1f6071c/396_716_2259_1355/master/2259.jpg?width=1200&quality=85&auto=format&fit=max&s=79d6f3f6c2b525324a90621d47312659"
      />
      <Post
        profilePic="https://media-exp1.licdn.com/dms/image/C4E03AQFjH2M4r3umhQ/profile-displayphoto-shrink_200_200/0/1629117547194?e=1642636800&v=beta&t=4u_D_k0dRgzK84Xu5-2S3DFN-zdierUdEeay9LJv4Wg"
        message="I had a great time building this, learned a lot as I went and cannot wait to apply these skills to some newfound ideas! I am forever striving to broaden my coding horizons and expand my skills in Full Stack development, with a particular fondness for the Front End. You can find my LinkedIn @ https://www.linkedin.com/in/paul-murray-519659197/"
        timestamp="08:01 Friday"
        username="Paul Murray"
        image="https://about.linkedin.com/etc.clientlibs/settings/wcm/designs/gandalf/clientlibs/resources/images/og-social-share-image.jpg"
      />
    </div>
  );
}

export default Feed;
