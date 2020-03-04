import * as React from "react";
import renderer from "react-test-renderer";

import { MonoText } from "../StyledText";

it(`renders correctly`, () => {
  const tree = renderer.create(<Text>Snapshot test!</Text>).toJSON();

  expect(tree).toMatchSnapshot();
});
