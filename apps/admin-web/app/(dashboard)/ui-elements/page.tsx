import { Button } from '@promptus/web-shared-ui';
import { CardDemo } from '@promptus/web/ui-examples/ui-elements/server';

const UIElements = () => {
  return (
    <div className="flex space-x-4">
      <Button> Test Button </Button>
      <CardDemo />
    </div>
  );
};

export default UIElements;
