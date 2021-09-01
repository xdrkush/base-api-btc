// Import module
const
    express = require('express'),
    router = express.Router();

// Controllers
const KappController = require('./controller');

/*
 *     Router
 * ************** */

// Test
router.route('/test')
    .get((req, res) => {
        res.json({ msg: "backend works" })
    })

// getBlockCount
router.route('/getblockcount')
    .get(KappController.getBlockCount)

/* ************** *
 *  / Router
 */

module.exports = router 