import styled from "styled-components/native";

// theme disini dikirim dari styled Text daribawah
// flex-wrap : wrap, supaya si text kalo lebih ke kanan dipindahkan kebawah gitu lah
const defaultTextStyles = (theme) => `
    font-family: ${theme.fonts.body};
    font-weight: ${theme.fontWeights.regular};
    color: ${theme.colors.text.primary};
    flex-wrap: wrap;
    margin-top: 0px;
    margin-bottom: 0px;
`;

const body = (theme) => `
    font-size: ${theme.fontSizes.body};
`;

const label = (theme) => `
    font-family: ${theme.fonts.heading};
    font-size: ${theme.fontSizes.body};
    font-weight: ${theme.fontWeights.medium};
`;

const caption = (theme) => `
    font-size: ${theme.fontSizes.caption};
    font-weight: ${theme.fontWeights.bold};
`;

const error = (theme) => `
    color: ${theme.colors.text.error};
`;

const hint = (theme) => `
    font-size: ${theme.fontSizes.body};
`;

// dibawah ini ex. body,label.etc adalah (shorthand) untuk mereference function
const variants = {
  body,
  label,
  caption,
  error,
  hint,
};
// contoh buat diatas : console.log(variants["label"]) maka akan mereferensikan ke function label

// theme disini asalnya adalah dari props => dari usetheme nya styled components
// terus function defaultTextStyles kan masukin params themes, supaya
// si function defaulttextstyles tersebut bisa menggunakan variabel dari theme

// variants dibawah adalah object variants yang berisikan referensi ke function
// referensi function diakses melalui key ("bukan index, karena ini") kemudian mengirimkan props theme
// variants[variant](theme)
// =    objek[key](props)

export const Text = styled.Text`
  ${({ theme }) => defaultTextStyles(theme)}
  ${({ variant, theme }) => variants[variant](theme)}
`;

Text.defaultProps = {
  variant: "body",
};
