import { useEffect, useState } from "react";

export const useLoadingImage = (imgUrl: string | undefined): boolean => {
    const [hasImage, setHasImage] = useState(false);
    useEffect(() => {
        const image = new Image();
        image.onload = () => {
            setHasImage(true);
        };
        image.onerror = () => {
            setHasImage(false);
        };
        image.src = imgUrl ?? "";
    }, []);
    return hasImage
}