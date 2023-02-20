////////////////////////////////////////////////////////////
// loading message
export const startLoading = () => {
	const loadingMessage = document.querySelector('.mainContent .searchArea > div:last-of-type');
	loadingMessage.classList.add('show');
};
export const stopLoading = () => {
	const loadingMessage = document.querySelector('.mainContent .searchArea > div:last-of-type');
	loadingMessage.classList.remove('show');
};

////////////////////////////////////////////////////////////
// skeleton loader
const skeletonLoader = document.querySelectorAll('.skeletonLoader');

export const removeSkeletonLoader = () => {
	for (const loader of skeletonLoader) loader.classList.remove('skeletonLoader');
};
export const addSkeletonLoader = () => {
	for (const loader of skeletonLoader) loader.classList.add('skeletonLoader');
};
