// @flow

import React, { Component } from 'react';

import { AbstractButton, type AbstractButtonProps } from '../../base/toolbox';

import ReactionsDialog from './ReactionsDialog';

type Props = AbstractButtonProps & {
    tooltipPosition: *
};

/**
 * The {@code ToolbarButton} configuration which describes how
 * {@link ReactionsToolbarButton} is to be rendered (by default).
 *
 * @type {object}
 */
const DEFAULT_BUTTON_CONFIGURATION = {
    buttonName: 'reactions',
    classNames: [ 'button', 'icon-star-full' ],
    enabled: true,
    id: 'toolbar_button_reactions',
    tooltipKey: 'reactionsButtonTip'
};

/**
 * Implements the Web {@code ToolbarButton} which shows the dialog with the list
 * of supported reactions (i.e. reaction buttons).
 */
export default class ReactionsToolbarButton extends AbstractButton<Props, *> {
    accessibilityLabel = 'toolbar.accessibilityLabel.reactions';
    icon = IconModerator;
    label = 'toolbar.raiseYourHand';
    toggledLabel = 'toolbar.lowerYourHand';
}
