'use client';

import React, { useEffect, useState } from 'react';
import { Cloud, fetchSimpleIcons, ICloud, renderSimpleIcon } from 'react-icon-cloud';

interface IconCloudProps {
    slugs: string[];
}

export function IconCloud({ slugs }: IconCloudProps) {
    const [data, setData] = useState<any>(null);

    useEffect(() => {
        fetchSimpleIcons({ slugs }).then((result) => {
            setData(result.simpleIcons);
        });
    }, [slugs]);

    const renderedIcons = React.useMemo(() => {
        if (!data) return null;

        return slugs.map((slug) => {
            const icon = data[slug];
            if (!icon) return null;
            return renderSimpleIcon({
                icon,
                size: 42,
                aProps: {
                    onClick: (e: any) => e.preventDefault(),
                },
            });
        });
    }, [data, slugs]);

    const cloudProps: Omit<ICloud, 'children'> = {
        containerProps: {
            style: {
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                width: '100%',
                paddingTop: 40,
            },
        },
        options: {
            reverse: true,
            depth: 1,
            wheelZoom: false,
            imageScale: 2,
            activeCursor: 'default',
            tooltip: 'native',
            initial: [0.1, -0.1],
            clickToFront: 500,
            tooltipDelay: 0,
            outlineColour: '#0000',
            maxSpeed: 0.04,
            minSpeed: 0.02,
        },
    };

    return (
        <div className="w-full h-full flex items-center justify-center">
            {renderedIcons && (
                <Cloud {...cloudProps}>
                    {renderedIcons}
                </Cloud>
            )}
        </div>
    );
}
