import s from './index.module.scss';
import cn from 'classnames';
import { CommonClassProps } from '../types';

interface NavigationProps extends CommonClassProps {
    disabledPrev?: boolean;
    disabledNext?: boolean;
    onPrevClick: () => void;
    onNextClick: () => void;
}

export const Navigation: React.FC<NavigationProps> = ({
    disabledPrev,
    disabledNext,
    onPrevClick,
    onNextClick,
    className,
}) => {
    return (
        <div className={cn(className, s.navigation)}>
            <button disabled={disabledPrev} className={cn(s.navigationBtn, s.navigationBtnLeft)} onClick={onPrevClick}>
                Previous
            </button>
            <button disabled={disabledNext} className={cn(s.navigationBtn, s.navigationBtnRight)} onClick={onNextClick}>
                Next
            </button>
        </div>
    );
};
