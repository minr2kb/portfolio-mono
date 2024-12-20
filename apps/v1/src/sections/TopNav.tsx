import { FontWeightValues } from '@/types/styles';
import { Badge, Box, Grid, Typography } from '@mui/material';

import { animated, type SpringValue } from '@react-spring/web';
import { Link } from 'react-router-dom';
import useDeviceQuery from '@/hooks/useDeviceQuery';
import { getAssetsUrl } from '@packages/shared';

export interface Props {
  startedScroll?: boolean;
  scrollY: SpringValue<number>;
  pageHeight: number;
}

function TopNav({ startedScroll, scrollY, pageHeight }: Props) {
  const { isMobile } = useDeviceQuery();

  return (
    <Grid
      container
      sx={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: isMobile ? '50px' : '60px',
        alignItems: 'center',
        bgcolor: 'rgba(255,255,255,0.6)',
        zIndex: 2,
        transition: 'all 0.2s ease-in-out',
        boxShadow: startedScroll ? '0px 0px 10px 5px rgba(0,0,0,0.1)' : 'none',
        backdropFilter: startedScroll ? 'blur(10px)' : 'none',
      }}
    >
      <Grid
        container
        sx={{
          alignItems: 'center',
          px: 3,
          mx: 'auto',
        }}
      >
        <Link
          to="/v2"
          style={{
            textDecoration: 'none',
            color: 'inherit',
          }}
        >
          <Badge
            badgeContent={
              <Typography
                sx={{
                  fontSize: isMobile ? 10 : 11,
                  fontWeight: FontWeightValues.BOLD,
                  mb: -2,
                  ml: 2,
                }}
              >
                V1
              </Typography>
            }
          >
            <Typography
              sx={{
                fontSize: isMobile ? 18 : 22,
                fontWeight: FontWeightValues.BOLD,
              }}
            >
              포트폴리오
            </Typography>
          </Badge>
        </Link>
        <Grid
          container
          sx={{
            mx: 2,
            flex: 1,
            alignItems: 'center',
            minHeight: '15px',
            borderRadius: '5px',
          }}
        >
          <animated.div
            style={{
              width: scrollY.to((val) => `${Math.max(Math.min(val / pageHeight, 1), 0) * 100}%`),
              height: '1px',
              backgroundColor: ' #1ECCA2',
            }}
          />
          <animated.div
            style={{
              width: scrollY.to((val) => `${Math.max(Math.min(1 - val / pageHeight, 1), 0) * 100}%`),
              height: '1px',
              backgroundColor: 'rgba(0,0,0,0.2)',
            }}
          />
        </Grid>

        <Box
          style={{
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <Typography
            sx={{
              fontSize: isMobile ? 18 : 22,
              fontWeight: FontWeightValues.BOLD,
            }}
          >
            by. 경배 민
          </Typography>

          <img
            src={getAssetsUrl('/images/memoji.png')}
            alt="미모지"
            style={{
              transition: 'all 0.2s ease-in-out',
              width: startedScroll ? '30px' : 0,
              marginTop: '2px',
            }}
          />
        </Box>
      </Grid>
    </Grid>
  );
}

export default TopNav;
