 import { toast } from 'react-toastify';

    const ChildComponent = () => {
      const showChildToast = () => {
        toast.success('This is a child component toast!', {
          position: 'bottom-left',
          autoClose: 2000,
          style: {
            backgroundColor: '#28a745', // Green background
            color: 'yellow',
            border: '2px solid yellow',
          },
          className: 'child-toast-class', // Custom CSS class
        });
      };

      return (
        <div>
          <button onClick={showChildToast}>Show Child Toast</button>
        </div>
      );
    };

    export default ChildComponent;