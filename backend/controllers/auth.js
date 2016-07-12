var constants = require('../config/constants');
var utils = require('../config/utils');

// module authentification
var jwt = require('jsonwebtoken');
var jwtMid = require('express-jwt');
var bcrypt = require('bcryptjs');
var salt = bcrypt.genSaltSync(10); // salage

exports.login = function(req, res) {
		if(req.body.pseudo != "root" || req.body.password != "root") {
		  res.status(401);
		  res.json({ status: constants.JSON_STATUS_ERROR,
		    title: 'Erreur connexion',
		    message: 'This user don\'t exist !'});
		} else {
			//delete result.password;

			var user = {pseudo: req.body.pseudo};
			var token = jwt.sign(user, `-----BEGIN RSA PRIVATE KEY-----
MIIEowIBAAKCAQEAvzGvDUlOXKvjpiKTvEboWpcoXnZ3KqmHV/M+OlRT+dXRNH0b
NOIvZIkJBskh9emkF1O5SajMXKpjYdpzGWu2yqLVKPewWuSpV8+iznzLaNZNgLYk
m+U7HNZk87dtk6WjijXwVO2y117L4Om0b+WLV3PXIhb5IQeC7D8jJ8193ZUkrRZk
6b6zaX9RV/ZlwiEfzAiNyGRZqcYZo5PFX0B+1tj+Oc+nbKm5HbZyKpKWUw1IzbLh
rz1Hey9G0eVTS3/osEQ2pBWfYZCoASXUVTLON65uEq8QeQDdXMNSbrkcsDeeRdQ0
MfUnFjMVPjDpUdwahjtcpmqLI/Y2UVIltyiS8QIDAQABAoIBAGItbBthejjCF0r3
VG+I5cWm+xbOtFCW7yXthRXEub5/2kaeu3rDbtysNZNjcunpCNblqi613AL1h8T2
vMXf9uRFCzpXPhreckriF1L66CS0buXaIiBfbKRZP0ua9Eyt8LWHDxs9V+maBw0+
VOZks9G7bUxXCaS5S7Ruk2nb7nb6PLnI4zlAmwyHZsq3zCkfRfsVoHmZ5/FQZob4
BgumhlSCiRCfFL8F6j314672+j8oOf4q2G15CxBszJRtUKqzOS2Nw564vhzIdgxQ
VSo70wOTBJCFFciui8zAR4Tg2RMSOjCD+MKlhXz+1oP0gJZg21kqn7BR35km/qIk
e8uH3jECgYEA3958Q9jHlq1TlCRTEt7imgf0//udhhxKkeRCk/YbTt5zmW5rnAaE
feU+HwDJpBpo9lc5xcnVu1igomYd5PMMMDOvH6PxOJy9GTDQrj4IRQ4gAx47Bh7/
1PJ7PZC/zFpuDLgARdViiyethaNxsTGMC7dRb55JC5q3/w/tVLzB8bUCgYEA2qKi
4oMvuLtUpbfElx+eOdwtsfBzaTRXLWkrtoV2Q3GvEjvn0ZHGQVxEjdKBFqCoNUtb
iS0yO63lg8UUN0NEadD1z+izvghtBhQtTpnwYriLt1siyYigCB+zkxzKQ7sYgzWG
JZ1Qa020y/2lY6HAOdF+Jnz8bf56dSsND9e5Ec0CgYEAyd0dojQcLOMXxTJH8nEm
VYwtQJHLRf3Gw+zWmALINwLhrA1kXSmHWNpYfK5CJIZn9RFMF+xanHdbSXTZKfR7
Hg/MrrQutESpQsjAsw1eeZ42AXnF8UwMliEcPbSDLiqwpylXnaC/HglmL2XlA8lQ
pdPkS8inxx35IbZj5A/cti0CgYAfrru96VbMBVGB5jx1zd4m8lIo2/hNgYk0im4M
OBDoOxwsn0O7qc06AX3ps1yDg+p8NpxgJ42E+nEtBC0myPesAdztMQKDAkOSQvBB
2KruE2IjwvAqlkLiin2CTwS8hetKcEItRzu1IQCXIv2Jj5IEjugh+bC2286xFfkB
l7g47QKBgAu6kxLrsLRHVu7m/LEoNeT4zt5bZ/uM87FTmmDyewIaFxkwhVTxKi3k
ROciz7TUAzlcBO/1H4asnOo75A1nnlQT94E2ndvI9/5TbVr8iHIv1O0W4eT326WC
TDykH0+K5qpq89AkNAYMmN11BS3nM07dgN1V0kLJDKiErMEAjSh6
-----END RSA PRIVATE KEY-----
`, {'expiresIn': 3600, algorithm: 'RS256'	});
			res.status(200);
			res.json({ status: constants.JSON_STATUS_SUCCESS,
				title: 'Connexion',
				message: 'You are connected !',
				data: req.body.pseudo,
				token: token
			});
		} 
}; // end login()

exports.logout = function(req, res) {
		res.status(200);
		res.json({ status: constants.JSON_STATUS_SUCCESS,
      	title: 'Connexion',
      	message: 'Vous êtes déconnecté !'});
}; // end logout()

