import useDeviceQuery from '@/hooks/useDeviceQuery';
import { Sections, SectionsType } from '@/types';
import { FontWeightValues } from '@/types/styles';
import { EmailOutlined, MoreHoriz, Phone } from '@mui/icons-material';
import { Box, BoxProps, Grid, SxProps, Theme, Typography, Zoom } from '@mui/material';
import { useCallback, useMemo } from 'react';
import HelloAnimation from '@/components/HelloAnimation';
import { skillsData } from '@/data/sectionData';
import { getAssetsUrl } from '@packages/shared';

type WidgetCardProps = {
  bgImage?: string;
  bgcolor?: string;
  index?: number;
} & BoxProps;

const WidgetCard: React.FC<WidgetCardProps> = ({
  children,
  bgImage,
  index = 0,
  bgcolor = '#F5F5F5',
  onClick,
  ...boxProps
}) => {
  const { isMobile } = useDeviceQuery();

  const cardStyles: SxProps<Theme> = useMemo(
    () => ({
      position: 'relative',
      width: '100%',
      height: '100%',
      minHeight: '20vh',
      bgcolor,
      borderRadius: '20px',
      overflow: 'hidden',
      p: isMobile ? 2 : 3,
      cursor: onClick ? 'pointer' : 'auto',
      backgroundImage: bgImage ? `url(${bgImage})` : undefined,
      backgroundSize: bgImage ? 'cover' : undefined,
      backgroundPosition: bgImage ? 'center' : undefined,
      ...boxProps.sx,
    }),
    [bgImage, bgcolor, onClick, boxProps.sx],
  );

  return (
    <Zoom
      in
      style={{
        transitionDuration: '400ms',
        transitionDelay: `${index * 50}ms`,
      }}
    >
      <Box {...boxProps} sx={cardStyles} onClick={onClick}>
        {children}
      </Box>
    </Zoom>
  );
};

const ContactInfo = () => {
  const contactDetails = [
    { icon: Phone, text: '010-4554-1664' },
    { icon: EmailOutlined, text: 'kbmin1129@gmail.com' },
    { icon: MoreHoriz, text: '더보기' },
  ];

  return (
    <>
      {contactDetails.map((detail, index) => (
        <Box
          key={index}
          sx={{
            display: 'flex',
            alignItems: 'center',
            bgcolor: 'rgba(255,255,255,0.3)',
            pl: 0.5,
            pr: 2,
            height: 32,
            width: 'fit-content',
            borderRadius: 16,
            flexShrink: 1,
            mb: 1,
          }}
        >
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              bgcolor: 'rgba(255,255,255,0.3)',
              height: 24,
              width: 24,
              borderRadius: 12,
              mr: 1,
            }}
          >
            <detail.icon sx={{ fontSize: 14, color: '#F9F9F9' }} />
          </Box>
          <Typography
            variant="body2"
            color="primary.contrastText"
            sx={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}
          >
            {detail.text}
          </Typography>
        </Box>
      ))}
    </>
  );
};

const SkillWidgets = () => {
  const scrollAnimation: SxProps<Theme> = {
    '@keyframes scroll': {
      '0%': { transform: 'translateX(0)' },
      '100%': { transform: 'translateX(-50%)' },
    },
    display: 'flex',
    flexWrap: 'nowrap',
    whiteSpace: 'nowrap',
    gap: 2,
    animation: 'scroll 25s linear infinite',
    width: 'fit-content',
    ':hover': { animationPlayState: 'paused' },
  };

  return (
    <Box sx={{ overflow: 'hidden', borderRadius: '20px', position: 'relative' }}>
      <Box sx={scrollAnimation}>
        {[...skillsData, ...skillsData].map((skill, i) => (
          <Box key={skill.name + i} sx={{ whiteSpace: 'normal' }}>
            <WidgetCard
              index={i}
              sx={{
                minHeight: 0,
                aspectRatio: '5 / 3',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                px: 5,
              }}
            >
              <img src={getAssetsUrl(skill.image)} width={40} />
            </WidgetCard>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

function HeroSection() {
  const { isMobile } = useDeviceQuery();

  const onClickNavigator = useCallback((section: SectionsType) => {
    const elem = document.getElementById(section);
    if (elem) elem.scrollIntoView({ behavior: 'smooth' });
  }, []);

  const renderTags = useMemo(
    () => (
      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5, mt: 5 }}>
        {['빠른실험', 'UI/UX', '스타트업', '디자인시스템', '프론트엔드'].map((tag) => (
          <Box
            key={tag}
            sx={{
              display: 'flex',
              alignItems: 'center',
              bgcolor: 'rgba(255,255,255,0.4)',
              px: 2,
              height: 32,
              borderRadius: 16,
              backdropFilter: 'blur(2px)',
            }}
          >
            <Typography variant="body2" color="primary.contrastText">
              #{tag}
            </Typography>
          </Box>
        ))}
      </Box>
    ),
    [],
  );

  return (
    <Box
      component="header"
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100vw',
        minHeight: '100vh',
        px: 3,
        py: 10,
        bgcolor: '#CBD5E1',
      }}
    >
      {!isMobile && (
        <Box
          sx={{
            position: 'absolute',
            width: '100%',
            opacity: 0.2,
            pointerEvents: 'none',
          }}
        >
          <HelloAnimation />
        </Box>
      )}
      <Grid container rowSpacing={2} sx={{ maxWidth: '1024px', width: '100%' }}>
        {/* SECTION: 상단 */}
        <Grid container item spacing={2} xs={12}>
          <Grid item xs={isMobile ? 12 : 4}>
            <WidgetCard
              index={0}
              bgImage={getAssetsUrl('images/me_back.webp')}
              onClick={() => onClickNavigator(Sections.ABOUT)}
            >
              <Box
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                }}
              >
                <Box>
                  <Typography variant="h3" color="primary.contrastText">
                    민경배
                  </Typography>
                  <Typography fontSize={16} fontWeight={FontWeightValues.MEDIUM} color="primary.contrastText">
                    2000.11.29
                  </Typography>
                </Box>
                {renderTags}
              </Box>
            </WidgetCard>
          </Grid>
          <Grid container spacing={2} item xs={isMobile ? 12 : 8}>
            <Grid container item spacing={2} xs={12}>
              <Grid item xs={6}>
                <WidgetCard
                  index={1}
                  bgcolor="#E7EFF6"
                  sx={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'flex-end' }}
                  onClick={() => onClickNavigator(Sections.PROJECTS)}
                >
                  <Typography variant="h3" lineHeight={1}>
                    프로젝트
                  </Typography>
                  <img
                    src={getAssetsUrl('images/widget_projects.webp')}
                    style={{ width: '60%', position: 'absolute', top: 20, left: 0 }}
                  />
                </WidgetCard>
              </Grid>
              <Grid item xs={6}>
                <WidgetCard
                  index={2}
                  bgImage={getAssetsUrl('images/me_grad.webp')}
                  sx={{
                    display: 'flex',
                    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)) , url(${getAssetsUrl(
                      'images/me_grad.webp',
                    )})`,
                  }}
                  onClick={() => onClickNavigator(Sections.EDUCATION)}
                >
                  <Box>
                    <Typography variant="h3" lineHeight={1} color="primary.contrastText">
                      Stony Brook Univ.
                    </Typography>
                    <Typography variant="body1" color="primary.contrastText">
                      응용수학통계학/컴퓨터과학 학사
                    </Typography>
                  </Box>
                </WidgetCard>
              </Grid>
            </Grid>
            <Grid item xs={12}>
              <WidgetCard index={3} sx={{ px: 0 }}>
                <img
                  src={getAssetsUrl('images/memoji-lg.webp')}
                  style={{
                    height: isMobile ? '70%' : '90%',
                    position: 'absolute',
                    bottom: 0,
                    left: '10%',
                  }}
                />
                <Typography
                  color="text.disabled"
                  sx={{
                    overflow: 'auto',
                    textAlign: 'center',
                    fontSize: 128,
                    fontWeight: FontWeightValues.BOLD,
                  }}
                >
                  안녕하세요
                </Typography>
                <Typography
                  variant="h4"
                  color="primary"
                  sx={{
                    position: 'absolute',
                    ...(isMobile ? { top: 32 } : { bottom: 32 }),
                    right: 32,
                    whiteSpace: 'pre-wrap',
                    textAlign: 'end',
                  }}
                >
                  {'더 나은 팀플레이어로 성장중인\nFE 엔지니어 민경배입니다'}
                </Typography>
              </WidgetCard>
            </Grid>
          </Grid>
        </Grid>

        {/* SECTION: 스킬 리스트 */}
        <Grid item xs={12}>
          <SkillWidgets />
        </Grid>

        {/* SECTION: 하단 리스트 */}
        <Grid container item spacing={2} xs={12}>
          <Grid item xs={isMobile ? 12 : 8}>
            <WidgetCard index={4} bgcolor="#E7EFF6" onClick={() => onClickNavigator(Sections.EXPERIENCE)}>
              <Box>
                <Typography variant="h3" color="primary">
                  3년의 경험을 통한 성장
                </Typography>
                <Typography variant="body1" color="secondary">
                  스타트업의 시작부터 마지막 과정까지
                </Typography>
              </Box>
              <img
                src={getAssetsUrl('images/widget_career.webp')}
                style={{ width: '90%', position: 'absolute', bottom: 0, right: 0 }}
              />
            </WidgetCard>
          </Grid>
          <Grid item xs={isMobile ? 12 : 4}>
            <WidgetCard index={5} bgcolor="#334155" onClick={() => onClickNavigator(Sections.CONTACTS)}>
              <Typography variant="h3" color="primary.contrastText" sx={{ mb: 2 }}>
                연락처
              </Typography>
              <ContactInfo />
            </WidgetCard>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}

export default HeroSection;
