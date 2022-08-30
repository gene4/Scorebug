// Scorebug.stories.js|jsx

import Scorebug from "../components/Scorebug";

//👇 This default export determines where your story goes in the story list
export default {
    /* 👇 The title prop is optional.
     * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
     * to learn how to generate automatic titles
     */
    title: "Scorebug",
    component: Scorebug,
};

//👇 We create a “template” of how args map to rendering
// const Main = (args) => <Scorebug {...args} />;

export const Main = () => <Scorebug />;
