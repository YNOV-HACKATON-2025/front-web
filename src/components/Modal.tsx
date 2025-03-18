interface ModalProps {
  children: React.ReactNode;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ children, onClose }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80">
      <div className="bg-white w-full max-w-lg mx-auto rounded-lg shadow-lg relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
        >
          <svg
            version="1.0"
            xmlns="http://www.w3.org/2000/svg"
            width="15px"
            height="15px"
            viewBox="0 0 512.000000 512.000000"
            preserveAspectRatio="xMidYMid meet"
          >
            <g
              transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
              fill="#000000"
              stroke="none"
            >
              <path
                d="M710 5109 c-31 -12 -676 -653 -697 -693 -37 -70 -76 -27 875 -978
l877 -878 -877 -877 c-767 -769 -877 -883 -883 -914 -4 -22 -2 -46 5 -60 17
-34 659 -677 694 -696 70 -37 27 -76 979 875 l877 877 878 -877 c951 -951 908
-912 978 -875 35 19 677 662 694 696 7 14 9 38 5 60 -6 31 -116 145 -883 914
l-877 877 877 878 c951 951 912 908 875 978 -19 35 -662 677 -696 694 -14 7
-38 9 -60 5 -31 -6 -145 -116 -914 -883 l-877 -877 -873 872 c-489 489 -884
877 -900 883 -34 12 -44 12 -77 -1z"
              />
            </g>
          </svg>
        </button>
        <div>{children}</div>
      </div>
    </div>
  );
};

export default Modal;
