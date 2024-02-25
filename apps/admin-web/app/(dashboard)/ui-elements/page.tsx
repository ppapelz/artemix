import { Button } from '@promptus/web-shared-ui';
import { CardDemo, SliderDemo } from '@promptus/web/ui-examples/ui-elements/server';

const UIElements = () => {
  return (
    <div className="space-y-4">
      <Button> Test Button </Button>
      <CardDemo />
      <SliderDemo />
    </div>
  );
};

export default UIElements;
