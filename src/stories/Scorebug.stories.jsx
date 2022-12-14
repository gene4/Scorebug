// Scorebug.stories.js|jsx

import Scorebug from "../components/Scorebug";

//๐ This default export determines where your story goes in the story list
export default {
    /* ๐ The title prop is optional.
     * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
     * to learn how to generate automatic titles
     */
    title: "Scorebug",
    component: Scorebug,
};

//๐ We create a โtemplateโ of how args map to rendering
// const Main = (args) => <Scorebug {...args} />;

export const Main = () => <Scorebug />;
