import { FontWeightValues } from '@/types/styles';
import { Sections } from '@/types';
import { MoreHoriz } from '@mui/icons-material';
import {
  Badge,
  Box,
  ClickAwayListener,
  Collapse,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  Typography,
  type SxProps,
} from '@mui/material';
import React, { forwardRef, useCallback, useEffect, useMemo, useState } from 'react';
import useDeviceQuery from '@/hooks/useDeviceQuery';
import useStartedScroll from '@/hooks/useStartedScroll';

type NavBarProps = {
  openNavigator?: () => void;
  startedScroll?: boolean;
  version?: string;
  sx?: SxProps;
  children?: React.ReactNode;
};

const NavBar = forwardRef<HTMLDivElement, NavBarProps>(
  ({ startedScroll = false, version = '', openNavigator, sx, children }, ref) => {
    const { isMobile } = useDeviceQuery();

    const navBarStyles: SxProps = useMemo(
      () => ({
        position: 'fixed',
        top: startedScroll ? 10 : 0,
        left: startedScroll ? 10 : 0,
        width: startedScroll ? 'calc(100vw - 20px)' : '100vw',
        borderRadius: startedScroll ? `${isMobile ? 25 : 30}px` : 0,
        alignItems: 'flex-start',
        bgcolor: startedScroll ? 'rgba(255,255,255,0.5)' : 'none',
        zIndex: 10,
        transition: 'all 0.2s ease-in-out',
        boxShadow: startedScroll ? '0px 0px 7px 2px rgba(0,0,0,0.1)' : 'none',
        backdropFilter: startedScroll ? 'blur(10px)' : 'none',
        ...sx,
      }),
      [startedScroll, isMobile, sx],
    );

    return (
      <Box ref={ref} sx={navBarStyles}>
        <NavBarContent
          version={version}
          isMobile={isMobile}
          openNavigator={openNavigator}
          startedScroll={startedScroll}
        />
        {children}
      </Box>
    );
  },
);

type NavBarContentProps = {
  version: string;
  isMobile: boolean;
  openNavigator?: () => void;
  startedScroll: boolean;
};

const NavBarContent: React.FC<NavBarContentProps> = React.memo(
  ({ version, isMobile, openNavigator, startedScroll }) => {
    const badgeContentStyles: SxProps = useMemo(
      () => ({
        fontSize: isMobile ? 10 : 11,
        fontWeight: FontWeightValues.BOLD,
        mb: -2,
        ml: 2,
      }),
      [isMobile],
    );

    const typographyStyles: SxProps = useMemo(
      () => ({
        fontSize: isMobile ? 18 : 22,
        fontWeight: FontWeightValues.BOLD,
      }),
      [isMobile],
    );

    const iconButtonStyles: SxProps = useMemo(
      () => ({
        opacity: startedScroll ? 1 : 0.7,
      }),
      [startedScroll],
    );

    return (
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          width: '100%',
          height: isMobile ? 50 : 60,
          px: 3,
        }}
      >
        <Badge badgeContent={<Typography sx={badgeContentStyles}>{version}</Typography>}>
          <Typography sx={typographyStyles}>Portfolio</Typography>
        </Badge>
        <IconButton onClick={openNavigator} disabled={!startedScroll}>
          <MoreHoriz sx={iconButtonStyles} />
        </IconButton>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Typography sx={typographyStyles}>by.</Typography>
          <img src="/images/memoji.png" alt="미모지" style={{ width: '40px', marginTop: '2px', marginRight: '-8px' }} />
        </Box>
      </Box>
    );
  },
);

type TopNavProps = {
  containerRef: React.MutableRefObject<HTMLDivElement>;
  version?: string;
};

function TopNav(props: TopNavProps) {
  const { containerRef, version } = props;
  const { startedScroll } = useStartedScroll(containerRef);
  const { isMobile } = useDeviceQuery();
  const [isOpen, setIsOpen] = useState(false);

  const onClickNavigator = useCallback((section: string) => {
    setIsOpen(false);
    const elem = document.getElementById(section);
    if (elem) elem.scrollIntoView({ behavior: 'smooth' });
  }, []);

  const openNavigator = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  useEffect(() => {
    if (!startedScroll && isOpen) setIsOpen(false);
  }, [startedScroll, isOpen]);

  const listItems = useMemo(
    () =>
      Object.values(Sections).map((section) => (
        <ListItem key={section} disablePadding>
          <ListItemButton sx={{ mx: 1, borderRadius: 23 }} onClick={() => onClickNavigator(section)}>
            <Typography sx={{ fontSize: isMobile ? 16 : 20, fontWeight: FontWeightValues.MEDIUM }}>
              {section}
            </Typography>
          </ListItemButton>
        </ListItem>
      )),
    [isMobile, onClickNavigator],
  );

  return (
    <Box component="nav">
      <ClickAwayListener onClickAway={() => isOpen && setIsOpen(false)}>
        <NavBar
          version={version}
          startedScroll={startedScroll}
          openNavigator={openNavigator}
          sx={{ opacity: startedScroll ? 1 : 0.5 }}
        >
          <Collapse in={isOpen}>
            <Box px={3}>
              <Divider />
            </Box>
            <Box width="100%">
              <List sx={{ py: 2 }}>{listItems}</List>
            </Box>
          </Collapse>
        </NavBar>
      </ClickAwayListener>
    </Box>
  );
}

export default TopNav;
