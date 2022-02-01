import { Box } from '@chakra-ui/layout';
import React from 'react';

interface wrapperProps {
    variant? : "small" | "regular"
}

const Wrapper : React.FC<wrapperProps> = ({children, variant = "regular"}) => {
    return (<Box mt={10} mx ="auto" maxW="800px" w="100%" >
        {children}
    </Box>)
}

export default Wrapper;