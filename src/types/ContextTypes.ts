export interface UI_Props {
    isClicked: boolean,
    setIsClicked: (active: (isClicked: boolean) => boolean) => void | ((active: boolean) => void);
   
}