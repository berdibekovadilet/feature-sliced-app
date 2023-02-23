import { classNames } from "shared/lib/classNames/classNames";
import cls from "./Adilet.module.scss";

interface Props {
  className?: string;
}

const Adilet = ({ className }: Props) => {
  return (
    <div className={classNames(cls.Adilet, {}, [className])}>
     
    </div>
  );
};

export default Adilet;

