 import { toast } from 'react-toastify';

    const ParentComponent = () => {
      const showParentToast = () => {
        toast.info('This is a parent component toast!', {
          position: 'top-right',
          autoClose: 3000,
          style: {
            backgroundColor: '#007bff', // Blue background
            color: 'white',
          },
          className: 'parent-toast-class', // Custom CSS class
        });
      };

      return (
        <div>
          <button onClick={showParentToast}>Show Parent Toast</button>
        </div>
      );
    };

    export default ParentComponent;