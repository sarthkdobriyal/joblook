export const checkImageUrl = (url) => {
    if(!url) return false;
    const pattern = RegExp('^https?:\\/\\/.+\\.(png|jpg|jpeg|bmp|gif|webp)$', 'i');
    return pattern.test(url);
}