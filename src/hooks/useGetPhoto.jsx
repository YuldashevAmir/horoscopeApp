import aquariusIcon from '@assets/icons/aquariusIcon.svg'
import ariesIcon from '@assets/icons/ariesIcon.svg'
import cancerIcon from '@assets/icons/cancerIcon.svg'
import capricornIcon from '@assets/icons/capricornIcon.svg'
import geminiIcon from '@assets/icons/geminiIcon.svg'
import leoIcon from '@assets/icons/leoIcon.svg'
import libraIcon from '@assets/icons/libraIcon.svg'
import piscesIcon from '@assets/icons/piscesIcon.svg'
import sagittariusIcon from '@assets/icons/sagittariusIcon.svg'
import scorpioIcon from '@assets/icons/scorpioIcon.svg'
import taurusIcon from '@assets/icons/taurusIcon.svg'
import virgoIcon from '@assets/icons/virgoIcon.svg'

const photos = {
	aquarius: aquariusIcon,
	aries: ariesIcon,
	cancer: cancerIcon,
	capricorn: capricornIcon,
	leo: leoIcon,
	libra: libraIcon,
	pisces: piscesIcon,
	sagittarius: sagittariusIcon,
	scorpio: scorpioIcon,
	taurus: taurusIcon,
	virgo: virgoIcon,
	gemini: geminiIcon
}

export const useGetPhoto = () => {
	const getPhoto = sign => {
		return photos[sign]
	}

	return { getPhoto }
}
