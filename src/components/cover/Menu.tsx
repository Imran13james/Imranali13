// NOT IN USE
import { FC } from 'react';
import List from '../ui/List';

interface MenuProps {}

const Menu: FC<MenuProps> = ({}) => {
    return (
        <div className="flex gap-4">
            <List
                link="/home"
                variant="secondary"
                sizes="small"
                effect="changeColor"
            >
                Home
            </List>
            <List
                link="/home"
                variant="secondary"
                sizes="small"
                effect="changeColor"
            >
                About Me
            </List>
            <List
                link="/home"
                variant="secondary"
                sizes="small"
                effect="changeColor"
            >
                Projects
            </List>
            <List
                link="/home"
                variant="secondary"
                sizes="small"
                effect="changeColor"
            >
               Contact 
            </List>
        </div>
    );
};

export default Menu;
