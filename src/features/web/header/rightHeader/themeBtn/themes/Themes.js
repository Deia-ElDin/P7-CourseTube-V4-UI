import { useAppDispatch, useAppSelector } from '../../../../../../hooks/hooks';
import { ActiveTheme, handleThemeBtnClick, handleThemeClick } from '../../rightHeaderSlice';
import Theme from './theme/Theme';
import colorsData from '../../../../dependencies/data/colorsData';

function Themes() {
  const activeTheme = useAppSelector(ActiveTheme);
  const dispatch = useAppDispatch();

  const themes = colorsData.map((theme) => {
    const { themeName, colors } = theme;

    if (themeName !== activeTheme) {
      return (
        <Theme
          key={themeName}
          id={themeName}
          colorsArray={colors}
          handleClick={() => {
            toggleTheme(themeName);
          }}
        />
      );
    } else return null;
  });

  function toggleTheme(themeName) {
    dispatch(handleThemeClick(themeName));
    dispatch(handleThemeBtnClick());
  }

  return <div className="themes">{themes}</div>;
}

export default Themes;
