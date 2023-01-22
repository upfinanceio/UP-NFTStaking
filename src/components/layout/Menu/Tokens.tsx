import * as React from 'react';
import { BsChevronDown } from 'react-icons/bs';

export default function Tokens() {
  const [showMenu, setShowMenu] = React.useState(false);
  const showMenuHandler = () => setShowMenu((showMenu) => !showMenu);

  const menuRef = React.useRef(null);

  const tokens = [
    { id: 1, label: '$UP', link: 'https://app.upfinance.io' },
    { id: 2, label: '$upRISE', link: 'https://uprise.upfinance.io' },
    { id: 3, label: '$upEMP', link: 'https://upemp.upfinance.io/' },
    { id: 4, label: 'oNFT Staking', Link 'https://nft.upfinance.io'}
  ];

  React.useEffect(() => {
    const outsideClickDetect = (event: any) => {
      if (menuRef.current && !(menuRef.current as any).contains(event.target)) {
        setShowMenu(false);
      }
    };
    document.addEventListener('mousedown', outsideClickDetect);
    return () => {
      document.removeEventListener('mousedown', outsideClickDetect);
    };
  }, [showMenu, menuRef]);

  return (
    <div className='mr-2 pt-1 font-medium uppercase text-white transition-colors hover:text-yellow-500'>
      <label
        tabIndex={1}
        className='animated-underline m-1 flex cursor-pointer items-center'
        style={
          {
            '--tw-bg-opacity': 1,
          } as any
        }
        onClick={showMenuHandler}
      >
        <span>Up Tokens</span>
        <BsChevronDown className='ml-2 -mr-1 h-4 w-4' aria-hidden='true' />
      </label>
      {showMenu && (
        <ul
          tabIndex={0}
          ref={menuRef}
          className='dropdown-content rounded-box menu bg-neutral-content text-neutral rounded-box absolute w-52 rounded-md border-white/20 bg-white/10 p-2 shadow shadow backdrop-blur-sm transition-all'
          style={
            {
              '--tw-bg-opacity': 1,
              color: 'white',
            } as any
          }
        >
          {!tokens ? (
            <></>
          ) : (
            tokens?.map((token) => (
              <li
                key={token.id}
                className='cursor-pointer rounded-md p-1 hover:bg-white/20'
              >
                <a
                  className='hover:bg-neutral-focus hover:text-neutral-content'
                  onClick={async () => {
                    window.location.href = token.link;
                    setShowMenu(false);
                  }}
                >
                  {token.label}
                </a>
              </li>
            ))
          )}
        </ul>
      )}
    </div>
  );
}
