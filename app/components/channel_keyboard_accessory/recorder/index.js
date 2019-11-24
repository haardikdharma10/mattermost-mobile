// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.

import {connect} from 'react-redux';

import {getTheme} from 'mattermost-redux/selectors/entities/preferences';

import {createVoiceMessage} from 'app/actions/views/voice';

import Recorder from './recorder';

function mapStateToProps(state) {
    return {
        theme: getTheme(state),
    };
};

const mapDispatchToProps = {
    createVoiceMessage,
};

export default connect(null, mapDispatchToProps)(Recorder);
