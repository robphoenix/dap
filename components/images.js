import { css } from '@emotion/react'
import Image from 'next/image'

const imageConfig = {
  width: 501,
  height: 334,
  layout: 'responsive',
}

const Version2FirstImage = () => (
  <div
    css={css`
      position: relative;
      overflow: hidden;
      border: 1px solid;
    `}
  >
    <div
      aria-hidden="true"
      css={css`
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        width: '100%';
        height: '100%';
        object-fit: 'cover';
        object-position: 'center';
        filter: blur(24px);
        transform: scale(1.2);
        background-image: linear-gradient(
            90deg,
            rgb(223, 223, 216) 10%,
            rgb(225, 224, 217) 10% 20%,
            rgb(228, 226, 218) 20% 30%,
            rgb(228, 227, 217) 30% 40%,
            rgb(227, 225, 215) 40% 50%,
            rgb(224, 223, 212) 50% 60%,
            rgb(221, 219, 209) 60% 70%,
            rgb(216, 214, 204) 70% 80%,
            rgb(206, 205, 194) 80% 90%,
            rgb(191, 192, 184) 90% 100%
          ),
          linear-gradient(
            90deg,
            rgb(236, 234, 228) 10%,
            rgb(239, 236, 230) 10% 20%,
            rgb(245, 240, 232) 20% 30%,
            rgb(245, 240, 230) 30% 40%,
            rgb(247, 243, 231) 40% 50%,
            rgb(242, 238, 226) 50% 60%,
            rgb(234, 231, 220) 60% 70%,
            rgb(214, 214, 206) 70% 80%,
            rgb(206, 208, 200) 80% 90%,
            rgb(210, 209, 200) 90% 100%
          ),
          linear-gradient(
            90deg,
            rgb(247, 244, 237) 10%,
            rgb(251, 247, 240) 10% 20%,
            rgb(245, 242, 235) 20% 30%,
            rgb(238, 237, 230) 30% 40%,
            rgb(221, 222, 217) 40% 50%,
            rgb(221, 220, 217) 50% 60%,
            rgb(204, 206, 207) 60% 70%,
            rgb(177, 184, 187) 70% 80%,
            rgb(158, 167, 171) 80% 90%,
            rgb(205, 207, 200) 90% 100%
          ),
          linear-gradient(
            90deg,
            rgb(230, 232, 230) 10%,
            rgb(223, 225, 226) 10% 20%,
            rgb(200, 204, 209) 20% 30%,
            rgb(191, 199, 204) 30% 40%,
            rgb(203, 206, 210) 40% 50%,
            rgb(190, 195, 201) 50% 60%,
            rgb(192, 196, 200) 60% 70%,
            rgb(185, 190, 194) 70% 80%,
            rgb(183, 185, 190) 80% 90%,
            rgb(169, 174, 177) 90% 100%
          ),
          linear-gradient(
            90deg,
            rgb(197, 206, 210) 10%,
            rgb(179, 190, 199) 10% 20%,
            rgb(211, 211, 218) 20% 30%,
            rgb(199, 203, 209) 30% 40%,
            rgb(198, 203, 208) 40% 50%,
            rgb(192, 196, 200) 50% 60%,
            rgb(181, 187, 192) 60% 70%,
            rgb(179, 185, 191) 70% 80%,
            rgb(177, 181, 186) 80% 90%,
            rgb(173, 175, 182) 90% 100%
          ),
          linear-gradient(
            90deg,
            rgb(232, 234, 232) 10%,
            rgb(216, 219, 223) 10% 20%,
            rgb(210, 212, 219) 20% 30%,
            rgb(196, 201, 207) 30% 40%,
            rgb(197, 203, 208) 40% 50%,
            rgb(192, 198, 203) 50% 60%,
            rgb(185, 191, 197) 60% 70%,
            rgb(177, 186, 191) 70% 80%,
            rgb(166, 175, 182) 80% 90%,
            rgb(171, 177, 183) 90% 100%
          ),
          linear-gradient(
            90deg,
            rgb(238, 240, 236) 10%,
            rgb(214, 220, 222) 10% 20%,
            rgb(210, 213, 221) 20% 30%,
            rgb(201, 206, 212) 30% 40%,
            rgb(189, 197, 203) 40% 50%,
            rgb(187, 195, 201) 50% 60%,
            rgb(181, 189, 196) 60% 70%,
            rgb(183, 189, 195) 70% 80%,
            rgb(185, 190, 196) 80% 90%,
            rgb(168, 176, 182) 90% 100%
          );
        background-position: 0 0, 0 16.666666666666664%, 0 33.33333333333333%,
          0 50%, 0 66.66666666666666%, 0 83.33333333333334%, 0 100%;
        background-size: 100% 14.285714285714286%;
        background-repeat: no-repeat;
      `}
    />
    <Image
      src="/images/version-2-01.jpg"
      alt="D.I.Y. as Privilege print 2nd Version front"
      width={imageConfig.width}
      height={imageConfig.height}
      layout={imageConfig.layout}
    />
  </div>
)

const Version2SecondImage = () => (
  <div
    css={css`
      position: relative;
      overflow: hidden;
      border: 1px solid;
    `}
  >
    <div
      aria-hidden="true"
      css={css`
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        width: '100%';
        height: '100%';
        object-fit: 'cover';
        object-position: 'center';
        filter: blur(24px);
        transform: scale(1.2);
        background-image: linear-gradient(
            90deg,
            rgb(239, 239, 232) 10%,
            rgb(223, 227, 224) 10% 20%,
            rgb(197, 202, 206) 20% 30%,
            rgb(206, 207, 210) 30% 40%,
            rgb(206, 208, 210) 40% 50%,
            rgb(202, 204, 206) 50% 60%,
            rgb(199, 200, 201) 60% 70%,
            rgb(186, 188, 191) 70% 80%,
            rgb(190, 194, 191) 80% 90%,
            rgb(209, 208, 200) 90% 100%
          ),
          linear-gradient(
            90deg,
            rgb(239, 239, 233) 10%,
            rgb(219, 223, 223) 10% 20%,
            rgb(198, 202, 207) 20% 30%,
            rgb(203, 206, 208) 30% 40%,
            rgb(199, 203, 205) 40% 50%,
            rgb(195, 198, 200) 50% 60%,
            rgb(191, 195, 197) 60% 70%,
            rgb(185, 188, 190) 70% 80%,
            rgb(189, 192, 191) 80% 90%,
            rgb(213, 213, 204) 90% 100%
          ),
          linear-gradient(
            90deg,
            rgb(237, 238, 234) 10%,
            rgb(212, 217, 219) 10% 20%,
            rgb(192, 197, 202) 20% 30%,
            rgb(200, 204, 207) 30% 40%,
            rgb(198, 203, 205) 40% 50%,
            rgb(195, 199, 201) 50% 60%,
            rgb(188, 193, 196) 60% 70%,
            rgb(183, 187, 189) 70% 80%,
            rgb(194, 195, 197) 80% 90%,
            rgb(215, 214, 207) 90% 100%
          ),
          linear-gradient(
            90deg,
            rgb(196, 210, 210) 10%,
            rgb(173, 191, 196) 10% 20%,
            rgb(207, 210, 213) 20% 30%,
            rgb(206, 211, 214) 30% 40%,
            rgb(205, 209, 212) 40% 50%,
            rgb(201, 205, 207) 50% 60%,
            rgb(197, 202, 204) 60% 70%,
            rgb(196, 199, 201) 70% 80%,
            rgb(197, 197, 200) 80% 90%,
            rgb(213, 212, 207) 90% 100%
          ),
          linear-gradient(
            90deg,
            rgb(185, 200, 204) 10%,
            rgb(170, 186, 194) 10% 20%,
            rgb(199, 203, 208) 20% 30%,
            rgb(193, 202, 206) 30% 40%,
            rgb(196, 201, 205) 40% 50%,
            rgb(188, 194, 198) 50% 60%,
            rgb(190, 196, 200) 60% 70%,
            rgb(189, 192, 196) 70% 80%,
            rgb(185, 187, 192) 80% 90%,
            rgb(181, 186, 187) 90% 100%
          ),
          linear-gradient(
            90deg,
            rgb(234, 233, 232) 10%,
            rgb(228, 227, 228) 10% 20%,
            rgb(191, 199, 203) 20% 30%,
            rgb(214, 218, 219) 30% 40%,
            rgb(217, 219, 218) 40% 50%,
            rgb(223, 223, 220) 50% 60%,
            rgb(218, 219, 216) 60% 70%,
            rgb(221, 220, 217) 70% 80%,
            rgb(207, 209, 206) 80% 90%,
            rgb(175, 182, 181) 90% 100%
          ),
          linear-gradient(
            90deg,
            rgb(243, 243, 237) 10%,
            rgb(246, 246, 239) 10% 20%,
            rgb(250, 249, 242) 20% 30%,
            rgb(254, 251, 243) 30% 40%,
            rgb(251, 249, 240) 40% 50%,
            rgb(250, 247, 237) 50% 60%,
            rgb(247, 244, 234) 60% 70%,
            rgb(240, 238, 228) 70% 80%,
            rgb(232, 231, 222) 80% 90%,
            rgb(224, 225, 217) 90% 100%
          );
        background-position: 0 0, 0 16.666666666666664%, 0 33.33333333333333%,
          0 50%, 0 66.66666666666666%, 0 83.33333333333334%, 0 100%;
        background-size: 100% 14.285714285714286%;
        background-repeat: no-repeat;
      `}
    />
    <Image
      src="/images/version-2-02.jpg"
      alt="D.I.Y. as Privilege print 2nd Version back"
      width={imageConfig.width}
      height={imageConfig.height}
      layout={imageConfig.layout}
    />
  </div>
)

const Version1FirstImage = () => (
  <div
    css={css`
      position: relative;
      overflow: hidden;
      border: 1px solid;
    `}
  >
    <div
      aria-hidden="true"
      css={css`
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        width: '100%';
        height: '100%';
        object-fit: 'cover';
        object-position: 'center';
        filter: blur(24px);
        transform: scale(1.2);
        background-image: linear-gradient(
            90deg,
            rgb(126, 107, 83) 10%,
            rgb(147, 131, 112) 10% 20%,
            rgb(162, 150, 136) 20% 30%,
            rgb(172, 165, 158) 30% 40%,
            rgb(184, 182, 180) 40% 50%,
            rgb(186, 185, 188) 50% 60%,
            rgb(194, 193, 196) 60% 70%,
            rgb(196, 195, 198) 70% 80%,
            rgb(198, 199, 201) 80% 90%,
            rgb(181, 162, 135) 90% 100%
          ),
          linear-gradient(
            90deg,
            rgb(160, 161, 165) 10%,
            rgb(166, 170, 177) 10% 20%,
            rgb(169, 172, 179) 20% 30%,
            rgb(173, 174, 180) 30% 40%,
            rgb(184, 186, 188) 40% 50%,
            rgb(178, 180, 182) 50% 60%,
            rgb(186, 186, 188) 60% 70%,
            rgb(192, 193, 194) 70% 80%,
            rgb(197, 200, 203) 80% 90%,
            rgb(178, 169, 155) 90% 100%
          ),
          linear-gradient(
            90deg,
            rgb(148, 146, 146) 10%,
            rgb(159, 159, 164) 10% 20%,
            rgb(161, 160, 164) 20% 30%,
            rgb(170, 171, 174) 30% 40%,
            rgb(179, 181, 183) 40% 50%,
            rgb(180, 181, 184) 50% 60%,
            rgb(182, 183, 184) 60% 70%,
            rgb(189, 190, 191) 70% 80%,
            rgb(192, 194, 195) 80% 90%,
            rgb(183, 180, 177) 90% 100%
          ),
          linear-gradient(
            90deg,
            rgb(141, 138, 135) 10%,
            rgb(162, 163, 167) 10% 20%,
            rgb(161, 161, 164) 20% 30%,
            rgb(167, 168, 171) 30% 40%,
            rgb(175, 177, 179) 40% 50%,
            rgb(179, 181, 183) 50% 60%,
            rgb(176, 176, 179) 60% 70%,
            rgb(176, 176, 179) 70% 80%,
            rgb(177, 176, 179) 80% 90%,
            rgb(178, 179, 181) 90% 100%
          ),
          linear-gradient(
            90deg,
            rgb(134, 127, 120) 10%,
            rgb(157, 159, 163) 10% 20%,
            rgb(152, 151, 155) 20% 30%,
            rgb(160, 159, 163) 30% 40%,
            rgb(168, 168, 171) 40% 50%,
            rgb(175, 177, 178) 50% 60%,
            rgb(163, 162, 167) 60% 70%,
            rgb(163, 162, 167) 70% 80%,
            rgb(165, 164, 169) 80% 90%,
            rgb(167, 167, 170) 90% 100%
          ),
          linear-gradient(
            90deg,
            rgb(126, 116, 104) 10%,
            rgb(154, 156, 162) 10% 20%,
            rgb(145, 144, 148) 20% 30%,
            rgb(155, 155, 159) 30% 40%,
            rgb(161, 161, 164) 40% 50%,
            rgb(171, 173, 173) 50% 60%,
            rgb(165, 167, 171) 60% 70%,
            rgb(166, 167, 173) 70% 80%,
            rgb(167, 168, 172) 80% 90%,
            rgb(157, 156, 159) 90% 100%
          ),
          linear-gradient(
            90deg,
            rgb(115, 104, 91) 10%,
            rgb(154, 156, 162) 10% 20%,
            rgb(149, 149, 151) 20% 30%,
            rgb(153, 153, 156) 30% 40%,
            rgb(161, 161, 163) 40% 50%,
            rgb(163, 163, 163) 50% 60%,
            rgb(152, 144, 138) 60% 70%,
            rgb(142, 127, 112) 70% 80%,
            rgb(130, 110, 86) 80% 90%,
            rgb(109, 84, 55) 90% 100%
          );
        background-position: 0 0, 0 16.666666666666664%, 0 33.33333333333333%,
          0 50%, 0 66.66666666666666%, 0 83.33333333333334%, 0 100%;
        background-size: 100% 14.285714285714286%;
        background-repeat: no-repeat;
      `}
    />
    <Image
      src="/images/version-1-01.jpg"
      alt="D.I.Y. as Privilege print 1st Version front"
      width={imageConfig.width}
      height={imageConfig.height}
      layout={imageConfig.layout}
    />
  </div>
)

const Version1SecondImage = () => (
  <div
    css={css`
      position: relative;
      overflow: hidden;
      border: 1px solid;
    `}
  >
    <div
      aria-hidden="true"
      css={css`
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        width: '100%';
        height: '100%';
        object-fit: 'cover';
        object-position: 'center';
        filter: blur(24px);
        transform: scale(1.2);
        background-image: linear-gradient(
            90deg,
            rgb(132, 111, 86) 10%,
            rgb(149, 133, 114) 10% 20%,
            rgb(163, 152, 140) 20% 30%,
            rgb(174, 169, 164) 30% 40%,
            rgb(181, 181, 181) 40% 50%,
            rgb(184, 185, 186) 50% 60%,
            rgb(187, 187, 189) 60% 70%,
            rgb(193, 193, 195) 70% 80%,
            rgb(192, 193, 194) 80% 90%,
            rgb(177, 177, 180) 90% 100%
          ),
          linear-gradient(
            90deg,
            rgb(164, 167, 171) 10%,
            rgb(173, 176, 181) 10% 20%,
            rgb(173, 175, 181) 20% 30%,
            rgb(176, 177, 182) 30% 40%,
            rgb(178, 179, 183) 40% 50%,
            rgb(175, 175, 180) 50% 60%,
            rgb(175, 174, 180) 60% 70%,
            rgb(182, 181, 185) 70% 80%,
            rgb(193, 195, 195) 80% 90%,
            rgb(186, 188, 188) 90% 100%
          ),
          linear-gradient(
            90deg,
            rgb(167, 169, 171) 10%,
            rgb(167, 167, 170) 10% 20%,
            rgb(158, 156, 162) 20% 30%,
            rgb(162, 160, 166) 30% 40%,
            rgb(166, 166, 172) 40% 50%,
            rgb(168, 168, 173) 50% 60%,
            rgb(174, 173, 178) 60% 70%,
            rgb(181, 180, 183) 70% 80%,
            rgb(183, 183, 185) 80% 90%,
            rgb(187, 187, 188) 90% 100%
          ),
          linear-gradient(
            90deg,
            rgb(168, 168, 170) 10%,
            rgb(166, 167, 169) 10% 20%,
            rgb(159, 159, 163) 20% 30%,
            rgb(162, 161, 165) 30% 40%,
            rgb(162, 161, 167) 40% 50%,
            rgb(167, 166, 170) 50% 60%,
            rgb(170, 169, 174) 60% 70%,
            rgb(173, 170, 176) 70% 80%,
            rgb(175, 173, 178) 80% 90%,
            rgb(184, 184, 186) 90% 100%
          ),
          linear-gradient(
            90deg,
            rgb(164, 164, 168) 10%,
            rgb(169, 170, 171) 10% 20%,
            rgb(158, 158, 162) 20% 30%,
            rgb(158, 157, 163) 30% 40%,
            rgb(160, 159, 164) 40% 50%,
            rgb(162, 160, 166) 50% 60%,
            rgb(167, 166, 171) 60% 70%,
            rgb(178, 178, 180) 70% 80%,
            rgb(181, 181, 183) 80% 90%,
            rgb(177, 176, 178) 90% 100%
          ),
          linear-gradient(
            90deg,
            rgb(144, 144, 147) 10%,
            rgb(171, 172, 174) 10% 20%,
            rgb(159, 159, 162) 20% 30%,
            rgb(156, 156, 161) 30% 40%,
            rgb(166, 166, 169) 40% 50%,
            rgb(169, 170, 172) 50% 60%,
            rgb(172, 172, 175) 60% 70%,
            rgb(170, 171, 174) 70% 80%,
            rgb(169, 169, 173) 80% 90%,
            rgb(167, 167, 170) 90% 100%
          ),
          linear-gradient(
            90deg,
            rgb(120, 119, 119) 10%,
            rgb(165, 166, 169) 10% 20%,
            rgb(160, 161, 163) 20% 30%,
            rgb(158, 157, 161) 30% 40%,
            rgb(160, 160, 163) 40% 50%,
            rgb(160, 160, 164) 50% 60%,
            rgb(159, 157, 163) 60% 70%,
            rgb(167, 166, 169) 70% 80%,
            rgb(165, 164, 167) 80% 90%,
            rgb(157, 157, 160) 90% 100%
          );
        background-position: 0 0, 0 16.666666666666664%, 0 33.33333333333333%,
          0 50%, 0 66.66666666666666%, 0 83.33333333333334%, 0 100%;
        background-size: 100% 14.285714285714286%;
        background-repeat: no-repeat;
      `}
    />
    <Image
      src="/images/version-1-02.jpg"
      alt="D.I.Y. as Privilege print 1st Version back"
      width={imageConfig.width}
      height={imageConfig.height}
      layout={imageConfig.layout}
    />
  </div>
)

export {
  Version2FirstImage,
  Version2SecondImage,
  Version1FirstImage,
  Version1SecondImage,
}
