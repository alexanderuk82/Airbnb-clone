import Container from '../Container';
import Logo from './Logo';
import UserMenu from '../Menu';
import Searchbox from './Searchbox';

const Navbar = () => {
  return (
    <nav className="fixed w-full bg-white z-10 shadow-sm">
      <div className="py-4 border-b-[1px]">
        <Container>
          <div className="flex flex-row items-center justify-between gap-3 md:gap-0">
            <Logo />
            <Searchbox />
            <UserMenu />
          </div>
        </Container>
      </div>
    </nav>
  );
};

export default Navbar;
