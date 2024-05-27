import { Button } from '@artemix/web-shared-ui';
import { DataTableDemo } from '@artemix/web-ui-examples-ui';
import { CardDemo,  SliderDemo} from '@artemix/web-ui-examples-ui/server';

const UIElements = () => {
  return (
    <div className="space-y-4">
      <Button> Test Button </Button>
      <CardDemo />
      <SliderDemo />
      <DataTableDemo />
    </div>
  );
};

export default UIElements;
