import {classNames} from "shared/lib/classNames/classNames";
import cls from "./Navbar.module.scss";
import AppLink, {AppLinkTheme} from "shared/ui/AppLinks/AppLink";
import {ThemeSwitcher} from "shared/ui/ThemeSwitcher";

interface NavbarProps {
    className?: string;
}

export const Navbar = ({className}: NavbarProps) => {
    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <ThemeSwitcher/>
            <div className={cls.links}>
                <AppLink to="/" className={cls.mainLink} theme={AppLinkTheme.SECONDARY}>
                    Главная
                </AppLink>
                <AppLink to="/about" theme={AppLinkTheme.SECONDARY}>
                    About
                </AppLink>
            </div>
        </div>
    );
};
