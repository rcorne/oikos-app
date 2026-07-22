import { Fragment, useState } from 'react';
import { View, type LayoutChangeEvent } from 'react-native';
import Svg, { Circle, Line, Polygon, Polyline, Text as SvgText } from 'react-native-svg';

import { Text } from '@/components/ui/Text';
import type { ChartColor, ChartSpec } from '@/content/types';
import { useTheme } from '@/theme/ThemeProvider';

const PAD = { top: 18, right: 34, bottom: 34, left: 40 };
const ASPECT = 0.72; // height = width * ASPECT

/**
 * Renders a declarative economic diagram (ChartSpec) — supply/demand curves,
 * shaded surplus/deadweight regions, equilibrium markers with axis guides.
 */
export function ExerciseChart({ spec }: { spec: ChartSpec }) {
  const theme = useTheme();
  const [width, setWidth] = useState(0);

  const colorFor = (c: ChartColor | undefined): string => {
    switch (c) {
      case 'accent':
        return theme.colors.accent;
      case 'success':
        return theme.colors.success;
      case 'danger':
        return theme.colors.danger;
      case 'muted':
        return theme.colors.textMuted;
      case 'brand':
      default:
        return theme.colors.brand;
    }
  };

  const onLayout = (e: LayoutChangeEvent) => setWidth(e.nativeEvent.layout.width);

  const height = width * ASPECT;
  const plotW = width - PAD.left - PAD.right;
  const plotH = height - PAD.top - PAD.bottom;

  const sx = (x: number) => PAD.left + (x / spec.xMax) * plotW;
  const sy = (y: number) => PAD.top + plotH - (y / spec.yMax) * plotH;

  const centroid = (pts: { x: number; y: number }[]) => {
    const n = pts.length || 1;
    return {
      x: pts.reduce((s, p) => s + p.x, 0) / n,
      y: pts.reduce((s, p) => s + p.y, 0) / n,
    };
  };

  return (
    <View
      onLayout={onLayout}
      style={{
        backgroundColor: theme.colors.surface,
        borderWidth: 1,
        borderColor: theme.colors.border,
        borderRadius: theme.radius.lg,
        padding: theme.spacing.sm,
      }}>
      {width > 0 && (
        <Svg width={width - theme.spacing.sm * 2} height={height}>
          {/* shaded regions first, under everything */}
          {spec.regions?.map((region, i) => {
            const c = centroid(region.points);
            return (
              <Fragment key={`r${i}`}>
                <Polygon
                  points={region.points.map((p) => `${sx(p.x)},${sy(p.y)}`).join(' ')}
                  fill={colorFor(region.color)}
                  fillOpacity={0.22}
                  stroke={colorFor(region.color)}
                  strokeOpacity={0.5}
                  strokeWidth={1}
                />
                {region.label && (
                  <SvgText
                    x={sx(c.x)}
                    y={sy(c.y) + 4}
                    fontSize={12}
                    fontFamily={theme.font.bodySemi}
                    fontWeight="700"
                    fill={colorFor(region.color)}
                    textAnchor="middle">
                    {region.label}
                  </SvgText>
                )}
              </Fragment>
            );
          })}

          {/* axes */}
          <Line x1={PAD.left} y1={PAD.top} x2={PAD.left} y2={PAD.top + plotH} stroke={theme.colors.textMuted} strokeWidth={1.5} />
          <Line
            x1={PAD.left}
            y1={PAD.top + plotH}
            x2={PAD.left + plotW}
            y2={PAD.top + plotH}
            stroke={theme.colors.textMuted}
            strokeWidth={1.5}
          />

          {/* marker guides under lines */}
          {spec.markers?.map(
            (m, i) =>
              m.guides && (
                <Fragment key={`g${i}`}>
                  <Line
                    x1={PAD.left}
                    y1={sy(m.y)}
                    x2={sx(m.x)}
                    y2={sy(m.y)}
                    stroke={theme.colors.textMuted}
                    strokeWidth={1}
                    strokeDasharray="4,4"
                  />
                  <Line
                    x1={sx(m.x)}
                    y1={sy(m.y)}
                    x2={sx(m.x)}
                    y2={PAD.top + plotH}
                    stroke={theme.colors.textMuted}
                    strokeWidth={1}
                    strokeDasharray="4,4"
                  />
                  <SvgText x={PAD.left - 6} y={sy(m.y) + 4} fontSize={11} fontFamily={theme.font.bodyMedium} fill={theme.colors.textSecondary} textAnchor="end">
                    {String(Math.round(m.y * 100) / 100)}
                  </SvgText>
                  <SvgText x={sx(m.x)} y={PAD.top + plotH + 14} fontSize={11} fontFamily={theme.font.bodyMedium} fill={theme.colors.textSecondary} textAnchor="middle">
                    {String(Math.round(m.x * 100) / 100)}
                  </SvgText>
                </Fragment>
              ),
          )}

          {/* curves */}
          {spec.lines.map((line, i) => {
            const last = line.points[line.points.length - 1];
            return (
              <Fragment key={`l${i}`}>
                <Polyline
                  points={line.points.map((p) => `${sx(p.x)},${sy(p.y)}`).join(' ')}
                  fill="none"
                  stroke={colorFor(line.color)}
                  strokeWidth={2.5}
                  strokeDasharray={line.dashed ? '6,5' : undefined}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                {line.label && last && (
                  <SvgText
                    x={Math.min(sx(last.x) + 6, PAD.left + plotW + 28)}
                    y={sy(last.y) + 4}
                    fontSize={13}
                    fontFamily={theme.font.bodySemi}
                    fontWeight="700"
                    fill={colorFor(line.color)}>
                    {line.label}
                  </SvgText>
                )}
              </Fragment>
            );
          })}

          {/* markers on top */}
          {spec.markers?.map((m, i) => (
            <Fragment key={`m${i}`}>
              <Circle cx={sx(m.x)} cy={sy(m.y)} r={4.5} fill={theme.colors.textPrimary} />
              {m.label && (
                <SvgText x={sx(m.x) + 8} y={sy(m.y) - 6} fontSize={12} fontFamily={theme.font.bodySemi} fontWeight="700" fill={theme.colors.textPrimary}>
                  {m.label}
                </SvgText>
              )}
            </Fragment>
          ))}

          {/* axis labels */}
          <SvgText
            x={PAD.left + plotW / 2}
            y={height - 6}
            fontSize={12}
            fontFamily={theme.font.bodyMedium}
            fill={theme.colors.textSecondary}
            textAnchor="middle">
            {spec.xLabel}
          </SvgText>
          <SvgText
            x={12}
            y={PAD.top + plotH / 2}
            fontSize={12}
            fontFamily={theme.font.bodyMedium}
            fill={theme.colors.textSecondary}
            textAnchor="middle"
            transform={`rotate(-90, 12, ${PAD.top + plotH / 2})`}>
            {spec.yLabel}
          </SvgText>
        </Svg>
      )}
      {spec.caption && (
        <Text variant="caption" color="muted" center style={{ marginTop: theme.spacing.xs }}>
          {spec.caption}
        </Text>
      )}
    </View>
  );
}
