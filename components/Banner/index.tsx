import { Image } from "@chakra-ui/react";

const Banner = ({ game, h='120px', w='full'}: {game: any, h: string, w: string}) => {

    const games = { impact: '/impactBanner.png', question: '/questionBanner.png', other: '/otherBanner.png' }

    return (
        <Image
            h={h}
            w={w}
            src={game ? games[game as keyof typeof games] : games.other}
            objectFit={'cover'}
        />
    );
    }

export default Banner