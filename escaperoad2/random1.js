var unityFramework = (() => {
  var _0x5a933c = typeof document !== "undefined" && document.currentScript ? document.currentScript.src : undefined;
  if (typeof __filename !== "undefined") {
    _0x5a933c = _0x5a933c || __filename;
  }
  return function (_0x44b9c9) {
    _0x44b9c9 = _0x44b9c9 || {};
    var _0x339df7 = typeof _0x44b9c9 != "undefined" ? _0x44b9c9 : {};
    var _0x337d5b;
    var _0x3b02e5;
    _0x339df7.ready = new Promise(function (_0x48455c, _0x5051fd) {
      _0x337d5b = _0x48455c;
      _0x3b02e5 = _0x5051fd;
    });
    function _0x567fc0(_0x55d18c, _0x2bd5f7) {
      _0xcabc97("The JavaScript function 'Pointer_stringify(ptrToSomeCString)' is obsoleted and will be removed in a future Unity version. Please call 'UTF8ToString(ptrToSomeCString)' instead.");
      return _0x2b7aa3(_0x55d18c, _0x2bd5f7);
    }
    _0x339df7.Pointer_stringify = _0x567fc0;
    var _0xcdc127 = "(^|\\n)(\\s+at\\s+|)jsStackTrace(\\s+\\(|@)([^\\n]+):\\d+:\\d+(\\)|)(\\n|$)";
    var _0x44dcab = _0x50302e().match(new RegExp(_0xcdc127));
    if (_0x44dcab) {
      _0x339df7.stackTraceRegExp = new RegExp(_0xcdc127.replace("([^\\n]+)", _0x44dcab[4].replace(/[\\^${}[\]().*+?|]/g, "\\$&")).replace("jsStackTrace", "[^\\n]+"));
    }
    function _0x6cb855(_0x10da9f) {
      if (_0xa8d6ac) {
        return;
      }
      _0xa8d6ac = true;
      _0x17cebf = 1;
      if (typeof ENVIRONMENT_IS_PTHREAD !== "undefined" && ENVIRONMENT_IS_PTHREAD) {
        console.error("Pthread aborting at " + new Error().stack);
      }
      if (_0x10da9f !== undefined) {
        _0x51fb9e(_0x10da9f);
        _0x2b9f46(_0x10da9f);
        _0x10da9f = JSON.stringify(_0x10da9f);
      } else {
        _0x10da9f = "";
      }
      var _0x492f37 = "abort(" + _0x10da9f + ") at " + _0x5c8d3c();
      if (_0x339df7.abortHandler && _0x339df7.abortHandler(_0x492f37)) {
        return;
      }
      throw _0x492f37;
    }
    _0x339df7.SetFullscreen = function (_0xe97507) {
      if (typeof _0x37d7f3 === "undefined" || !_0x37d7f3) {
        console.log("Runtime not initialized yet.");
      } else if (typeof _0x5467e5 === "undefined") {
        console.log("Player not loaded yet.");
      } else {
        var _0x23dfe9 = _0x5467e5.canPerformEventHandlerRequests;
        _0x5467e5.canPerformEventHandlerRequests = function () {
          return 1;
        };
        _0x339df7.ccall("SetFullscreen", null, ["number"], [_0xe97507]);
        _0x5467e5.canPerformEventHandlerRequests = _0x23dfe9;
      }
    };
    if (!_0x339df7.ENVIRONMENT_IS_PTHREAD) {
      _0x339df7.preRun.push(function () {
        function _0x53620b() {
          _0x4007c8.queuePersist = function (_0x29304e) {
            function _0x17318a() {
              if (_0x29304e.idbPersistState === "again") {
                _0x182484();
              } else {
                _0x29304e.idbPersistState = 0;
              }
            }
            function _0x182484() {
              _0x29304e.idbPersistState = "idb";
              _0x4007c8.syncfs(_0x29304e, false, _0x17318a);
            }
            if (!_0x29304e.idbPersistState) {
              _0x29304e.idbPersistState = setTimeout(_0x182484, 0);
            } else if (_0x29304e.idbPersistState === "idb") {
              _0x29304e.idbPersistState = "again";
            }
          };
          _0x4007c8.mount = function (_0x1f3dc9) {
            var _0x27dc55 = _0x57bdbd.mount(_0x1f3dc9);
            if (typeof _0x1f3dc9 !== "undefined" && _0x1f3dc9.opts && _0x1f3dc9.opts.autoPersist) {
              _0x27dc55.idbPersistState = 0;
              var _0x484ea2 = _0x27dc55.node_ops;
              _0x27dc55.node_ops = Object.assign({}, _0x27dc55.node_ops);
              _0x27dc55.node_ops.mknod = function (_0x40783e, _0x16d799, _0x31d35c, _0x3b7255) {
                var _0x25bec4 = _0x484ea2.mknod(_0x40783e, _0x16d799, _0x31d35c, _0x3b7255);
                _0x25bec4.node_ops = _0x27dc55.node_ops;
                _0x25bec4.idbfs_mount = _0x27dc55.mount;
                _0x25bec4.memfs_stream_ops = _0x25bec4.stream_ops;
                _0x25bec4.stream_ops = Object.assign({}, _0x25bec4.stream_ops);
                _0x25bec4.stream_ops.write = function (_0x36e6df, _0x133f7c, _0x308ea4, _0x33e1ed, _0x42a426, _0x2fe716) {
                  _0x36e6df.node.isModified = true;
                  return _0x25bec4.memfs_stream_ops.write(_0x36e6df, _0x133f7c, _0x308ea4, _0x33e1ed, _0x42a426, _0x2fe716);
                };
                _0x25bec4.stream_ops.close = function (_0x56e043) {
                  var _0x3630c7 = _0x56e043.node;
                  if (_0x3630c7.isModified) {
                    _0x4007c8.queuePersist(_0x3630c7.idbfs_mount);
                    _0x3630c7.isModified = false;
                  }
                  if (_0x3630c7.memfs_stream_ops.close) {
                    return _0x3630c7.memfs_stream_ops.close(_0x56e043);
                  }
                };
                return _0x25bec4;
              };
              _0x27dc55.node_ops.rmdir = function (_0x10e8c4) {
                _0x4007c8.queuePersist(_0x27dc55.mount);
                return _0x484ea2.rmdir(_0x10e8c4);
              };
              _0x27dc55.node_ops.unlink = function (_0x1915e9) {
                _0x4007c8.queuePersist(_0x27dc55.mount);
                return _0x484ea2.unlink(_0x1915e9);
              };
              _0x27dc55.node_ops.mkdir = function (_0x13c529, _0x5bdd2a) {
                _0x4007c8.queuePersist(_0x27dc55.mount);
                return _0x484ea2.mkdir(_0x13c529, _0x5bdd2a);
              };
              _0x27dc55.node_ops.symlink = function (_0x2cd51c, _0x1a8e6e, _0x15a3ca) {
                _0x4007c8.queuePersist(_0x27dc55.mount);
                return _0x484ea2.symlink(_0x2cd51c, _0x1a8e6e, _0x15a3ca);
              };
              _0x27dc55.node_ops.rename = function (_0x1e5b28, _0x2fb047, _0x44e92d) {
                _0x4007c8.queuePersist(_0x27dc55.mount);
                return _0x484ea2.rename(_0x1e5b28, _0x2fb047, _0x44e92d);
              };
            }
            return _0x27dc55;
          };
        }
        _0x53620b();
        var _0x288b68 = _0x339df7.unityFileSystemInit || function () {
          _0x1c26fd.mkdir("/idbfs");
          _0x339df7.__unityIdbfsMount = _0x1c26fd.mount(_0x4007c8, {
            autoPersist: !!_0x339df7.autoSyncPersistentDataPath
          }, "/idbfs");
          _0x339df7.addRunDependency("JS_FileSystem_Mount");
          _0x1c26fd.syncfs(true, function (_0x236d55) {
            if (_0x236d55) {
              console.log("IndexedDB is not available. Data will not persist in cache and PlayerPrefs will not be saved.");
            }
            _0x339df7.removeRunDependency("JS_FileSystem_Mount");
          });
        };
        _0x288b68();
      });
    }
    var _0x29ca1e = [];
    var _0x1b3d8f = false;
    var _0x2ef21c;
    var _0x3948a6 = null;
    function _0xace0e9(_0x4ca0d1) {
      var _0x4d539b = Object.keys(_0x29ca1e);
      for (var _0x4638cd = 0; _0x4638cd < _0x4d539b.length; ++_0x4638cd) {
        var _0x22dd07 = _0x29ca1e[_0x4d539b[_0x4638cd]];
        if (_0x22dd07.deviceId && _0x22dd07.deviceId == _0x4ca0d1.deviceId) {
          return _0x22dd07;
        }
      }
      for (var _0x4638cd = 0; _0x4638cd < _0x4d539b.length; ++_0x4638cd) {
        var _0x22dd07 = _0x29ca1e[_0x4d539b[_0x4638cd]];
        if (_0x22dd07 == _0x4ca0d1) {
          return _0x22dd07;
        }
      }
      for (var _0x4638cd = 0; _0x4638cd < _0x4d539b.length; ++_0x4638cd) {
        var _0x22dd07 = _0x29ca1e[_0x4d539b[_0x4638cd]];
        if (_0x22dd07.label && _0x22dd07.label == _0x4ca0d1.label) {
          return _0x22dd07;
        }
      }
      for (var _0x4638cd = 0; _0x4638cd < _0x4d539b.length; ++_0x4638cd) {
        var _0x22dd07 = _0x29ca1e[_0x4d539b[_0x4638cd]];
        if (_0x22dd07.groupId && _0x22dd07.kind && _0x22dd07.groupId == _0x4ca0d1.groupId && _0x22dd07.kind == _0x4ca0d1.kind) {
          return _0x22dd07;
        }
      }
    }
    function _0x2eef48() {
      for (var _0x3791e8 = 0;; ++_0x3791e8) {
        if (!_0x29ca1e[_0x3791e8]) {
          return _0x3791e8;
        }
      }
    }
    function _0x4a1995(_0xde02a1) {
      _0x2ef21c();
      _0x29ca1e = [];
      var _0x5084d9 = {};
      var _0x5ad7c4 = [];
      _0xde02a1.forEach(function (_0x4fdc4f) {
        if (_0x4fdc4f.kind === "videoinput") {
          var _0x4bbb8b = _0xace0e9(_0x4fdc4f);
          if (_0x4bbb8b) {
            _0x5084d9[_0x4bbb8b.id] = _0x4bbb8b;
          } else {
            _0x5ad7c4.push(_0x4fdc4f);
          }
        }
      });
      _0x29ca1e = _0x5084d9;
      _0x5ad7c4.forEach(function (_0x2b2def) {
        if (!_0x2b2def.id) {
          _0x2b2def.id = _0x2eef48();
          _0x2b2def.name = _0x2b2def.label || "Video input #" + (_0x2b2def.id + 1);
          _0x2b2def.isFrontFacing = _0x2b2def.name.toLowerCase().includes("front") || !_0x2b2def.name.toLowerCase().includes("front") && !_0x2b2def.name.toLowerCase().includes("back");
          _0x29ca1e[_0x2b2def.id] = _0x2b2def;
        }
      });
    }
    function _0x3ffa96() {
      if (!_0x29ca1e) {
        return;
      }
      navigator.mediaDevices.enumerateDevices().then(function (_0x5cdf80) {
        _0x4a1995(_0x5cdf80);
        _0x1b3d8f = true;
      }).catch(function (_0x435ec3) {
        console.warn("Unable to enumerate media devices: " + _0x435ec3 + "\nWebcams will not be available.");
        _0x7da97d();
      });
      if (/Firefox/.test(navigator.userAgent)) {
        setTimeout(_0x3ffa96, 60000);
        _0xcabc97("Applying workaround to Firefox bug https://bugzilla.mozilla.org/show_bug.cgi?id=1397977");
      }
    }
    function _0x7da97d() {
      if (navigator.mediaDevices && navigator.mediaDevices.removeEventListener) {
        navigator.mediaDevices.removeEventListener("devicechange", _0x3ffa96);
      }
      _0x29ca1e = null;
    }
    _0x339df7.disableAccessToMediaDevices = _0x7da97d;
    if (!navigator.mediaDevices) {
      console.warn("navigator.mediaDevices not supported by this browser. Webcam access will not be available." + (location.protocol == "https:" ? "" : " Try hosting the page over HTTPS, because some browsers disable webcam access when insecure HTTP is being used."));
      _0x7da97d();
    } else if (typeof ENVIRONMENT_IS_PTHREAD === "undefined" || !ENVIRONMENT_IS_PTHREAD) {
      setTimeout(function () {
        try {
          _0x102273("enumerateMediaDevices");
          _0x2ef21c = function () {
            if (_0x3948a6 !== null) {
              clearTimeout(_0x3948a6);
            }
            _0x4695c0("enumerateMediaDevices");
            if (navigator.mediaDevices) {
              console.log("navigator.mediaDevices support available");
            }
            _0x2ef21c = function () {};
          };
          _0x3ffa96();
          _0x3948a6 = setTimeout(_0x2ef21c, 1000);
          navigator.mediaDevices.addEventListener("devicechange", _0x3ffa96);
        } catch (_0x41a256) {
          console.warn("Unable to enumerate media devices: " + _0x41a256);
          _0x7da97d();
        }
      }, 0);
    }
    function _0x14238e(_0x24e5ce, _0x4b01c2, _0x596124) {
      var _0x5be0e5 = _0x4a04ee(_0x4b01c2);
      var _0x2fc92e = _0x4a04ee(_0x24e5ce);
      var _0x1c0f94 = 0;
      try {
        if (_0x596124 === undefined) {
          _0x4e107c(_0x2fc92e, _0x5be0e5);
        } else if (typeof _0x596124 === "string") {
          _0x1c0f94 = _0x4a04ee(_0x596124);
          _0x433c64(_0x2fc92e, _0x5be0e5, _0x1c0f94);
        } else if (typeof _0x596124 === "number") {
          _0x4dc2d0(_0x2fc92e, _0x5be0e5, _0x596124);
        } else {
          throw "" + _0x596124 + " is does not have a type which is supported by SendMessage.";
        }
      } finally {
        _0x6cc71d(_0x1c0f94);
        _0x6cc71d(_0x2fc92e);
        _0x6cc71d(_0x5be0e5);
      }
    }
    _0x339df7.SendMessage = _0x14238e;
    var _0x4c98f7 = Object.assign({}, _0x339df7);
    var _0x1b4353 = [];
    var _0x1ed323 = "./this.program";
    var _0x9f0544 = (_0x24f210, _0x311b6a) => {
      throw _0x311b6a;
    };
    var _0x1c0797 = typeof window == "object";
    var _0x3963d9 = typeof importScripts == "function";
    var _0x47ed75 = typeof process == "object" && typeof process.versions == "object" && typeof process.versions.node == "string";
    var _0x15f8d3 = "";
    function _0x22ff6f(_0x19e9cb) {
      if (_0x339df7.locateFile) {
        return _0x339df7.locateFile(_0x19e9cb, _0x15f8d3);
      }
      return _0x15f8d3 + _0x19e9cb;
    }
    var _0x4c8e4d;
    var _0x298cf5;
    var _0x9fbbe5;
    var _0x1a0749;
    function _0xf4b2b2(_0xbdf2a3) {
      if (_0xbdf2a3 instanceof _0x4b68df) {
        return;
      }
      let _0x3c1673 = _0xbdf2a3;
      _0x2b9f46("exiting due to exception: " + _0x3c1673);
    }
    var _0x477521;
    var _0x2c505d;
    var _0x1882f5;
    if (_0x47ed75) {
      if (_0x3963d9) {
        _0x15f8d3 = require("path").dirname(_0x15f8d3) + "/";
      } else {
        _0x15f8d3 = __dirname + "/";
      }
      _0x1882f5 = () => {
        if (!_0x2c505d) {
          _0x477521 = require("fs");
          _0x2c505d = require("path");
        }
      };
      _0x4c8e4d = function _0x28b08d(_0x42fc8b, _0x3d35ce) {
        _0x1882f5();
        _0x42fc8b = _0x2c505d.normalize(_0x42fc8b);
        return _0x477521.readFileSync(_0x42fc8b, _0x3d35ce ? undefined : "utf8");
      };
      _0x9fbbe5 = _0x33edee => {
        var _0x4173c1 = _0x4c8e4d(_0x33edee, true);
        if (!_0x4173c1.buffer) {
          _0x4173c1 = new Uint8Array(_0x4173c1);
        }
        return _0x4173c1;
      };
      _0x298cf5 = (_0x3515ce, _0x5a6e5e, _0x38aca4) => {
        _0x1882f5();
        _0x3515ce = _0x2c505d.normalize(_0x3515ce);
        _0x477521.readFile(_0x3515ce, function (_0x327547, _0x2996d0) {
          if (_0x327547) {
            _0x38aca4(_0x327547);
          } else {
            _0x5a6e5e(_0x2996d0.buffer);
          }
        });
      };
      if (process.argv.length > 1) {
        _0x1ed323 = process.argv[1].replace(/\\/g, "/");
      }
      _0x1b4353 = process.argv.slice(2);
      process.on("uncaughtException", function (_0x5b4959) {
        if (!(_0x5b4959 instanceof _0x4b68df)) {
          throw _0x5b4959;
        }
      });
      process.on("unhandledRejection", function (_0x197e70) {
        throw _0x197e70;
      });
      _0x9f0544 = (_0xa913b2, _0x1dd601) => {
        if (_0x4e7584()) {
          process.exitCode = _0xa913b2;
          throw _0x1dd601;
        }
        _0xf4b2b2(_0x1dd601);
        process.exit(_0xa913b2);
      };
      _0x339df7.inspect = function () {
        return "[Emscripten Module object]";
      };
    } else if (_0x1c0797 || _0x3963d9) {
      if (_0x3963d9) {
        _0x15f8d3 = self.location.href;
      } else if (typeof document != "undefined" && document.currentScript) {
        _0x15f8d3 = document.currentScript.src;
      }
      if (_0x5a933c) {
        _0x15f8d3 = _0x5a933c;
      }
      if (_0x15f8d3.indexOf("blob:") !== 0) {
        _0x15f8d3 = _0x15f8d3.substr(0, _0x15f8d3.replace(/[?#].*/, "").lastIndexOf("/") + 1);
      } else {
        _0x15f8d3 = "";
      }
      {
        _0x4c8e4d = _0x3d4a2c => {
          var _0x460595 = new XMLHttpRequest();
          _0x460595.open("GET", _0x3d4a2c, false);
          _0x460595.send(null);
          return _0x460595.responseText;
        };
        if (_0x3963d9) {
          _0x9fbbe5 = _0x247f71 => {
            var _0x298dd1 = new XMLHttpRequest();
            _0x298dd1.open("GET", _0x247f71, false);
            _0x298dd1.responseType = "arraybuffer";
            _0x298dd1.send(null);
            return new Uint8Array(_0x298dd1.response);
          };
        }
        _0x298cf5 = (_0x2fb5b1, _0xbccdb6, _0x1eb203) => {
          var _0x10493d = new XMLHttpRequest();
          _0x10493d.open("GET", _0x2fb5b1, true);
          _0x10493d.responseType = "arraybuffer";
          _0x10493d.onload = () => {
            if (_0x10493d.status == 200 || _0x10493d.status == 0 && _0x10493d.response) {
              _0xbccdb6(_0x10493d.response);
              return;
            }
            _0x1eb203();
          };
          _0x10493d.onerror = _0x1eb203;
          _0x10493d.send(null);
        };
      }
      _0x1a0749 = _0x443024 => document.title = _0x443024;
    } else {}
    var _0x51fb9e = _0x339df7.print || console.log.bind(console);
    var _0x2b9f46 = _0x339df7.printErr || console.warn.bind(console);
    Object.assign(_0x339df7, _0x4c98f7);
    _0x4c98f7 = null;
    if (_0x339df7.arguments) {
      _0x1b4353 = _0x339df7.arguments;
    }
    if (_0x339df7.thisProgram) {
      _0x1ed323 = _0x339df7.thisProgram;
    }
    if (_0x339df7.quit) {
      _0x9f0544 = _0x339df7.quit;
    }
    var _0x19bc33 = 4;
    function _0xcabc97(_0x169b97) {
      if (!_0xcabc97.shown) {
        _0xcabc97.shown = {};
      }
      if (!_0xcabc97.shown[_0x169b97]) {
        _0xcabc97.shown[_0x169b97] = 1;
        _0x2b9f46(_0x169b97);
      }
    }
    function _0x1c79c8(_0x1d6385, _0x50fc9b) {
      if (typeof WebAssembly.Function == "function") {
        var _0xa668d = {
          i: "i32",
          j: "i64",
          f: "f32",
          d: "f64"
        };
        var _0x586d15 = {
          parameters: [],
          results: _0x50fc9b[0] == "v" ? [] : [_0xa668d[_0x50fc9b[0]]]
        };
        for (var _0x2552d8 = 1; _0x2552d8 < _0x50fc9b.length; ++_0x2552d8) {
          _0x586d15.parameters.push(_0xa668d[_0x50fc9b[_0x2552d8]]);
        }
        return new WebAssembly.Function(_0x586d15, _0x1d6385);
      }
      var _0x27c1de = [1, 0, 1, 96];
      var _0x4953de = _0x50fc9b.slice(0, 1);
      var _0x1e6c7e = _0x50fc9b.slice(1);
      var _0x469d67 = {
        i: 127,
        j: 126,
        f: 125,
        d: 124
      };
      _0x27c1de.push(_0x1e6c7e.length);
      for (var _0x2552d8 = 0; _0x2552d8 < _0x1e6c7e.length; ++_0x2552d8) {
        _0x27c1de.push(_0x469d67[_0x1e6c7e[_0x2552d8]]);
      }
      if (_0x4953de == "v") {
        _0x27c1de.push(0);
      } else {
        _0x27c1de = _0x27c1de.concat([1, _0x469d67[_0x4953de]]);
      }
      _0x27c1de[1] = _0x27c1de.length - 2;
      var _0x1126b3 = new Uint8Array([0, 97, 115, 109, 1, 0, 0, 0].concat(_0x27c1de, [2, 7, 1, 1, 101, 1, 102, 0, 0, 7, 5, 1, 1, 102, 0, 0]));
      var _0x2ab286 = new WebAssembly.Module(_0x1126b3);
      var _0x1bce1b = new WebAssembly.Instance(_0x2ab286, {
        e: {
          f: _0x1d6385
        }
      });
      var _0x64b40a = _0x1bce1b.exports.f;
      return _0x64b40a;
    }
    var _0x2ea590 = [];
    var _0x50d5a1;
    function _0x2619f6() {
      if (_0x2ea590.length) {
        return _0x2ea590.pop();
      }
      try {
        _0x440a6c.grow(1);
      } catch (_0x4c9c16) {
        if (!(_0x4c9c16 instanceof RangeError)) {
          throw _0x4c9c16;
        }
        throw "Unable to grow wasm table. Set ALLOW_TABLE_GROWTH.";
      }
      return _0x440a6c.length - 1;
    }
    function _0x128ca6(_0x1ab674, _0x1d3fdd) {
      for (var _0x16ce8a = _0x1ab674; _0x16ce8a < _0x1ab674 + _0x1d3fdd; _0x16ce8a++) {
        var _0x512e37 = _0x2a1a55(_0x16ce8a);
        if (_0x512e37) {
          _0x50d5a1.set(_0x512e37, _0x16ce8a);
        }
      }
    }
    var _0x4323f2 = 0;
    var _0x2a1bf9 = _0x9357c6 => {
      _0x4323f2 = _0x9357c6;
    };
    var _0xfe669 = () => _0x4323f2;
    var _0x5b9726;
    if (_0x339df7.wasmBinary) {
      _0x5b9726 = _0x339df7.wasmBinary;
    }
    var _0x6d1c6f = _0x339df7.noExitRuntime || true;
    if (typeof WebAssembly != "object") {
      _0x6cb855("no native wasm support detected");
    }
    var _0x598810;
    var _0xa8d6ac = false;
    var _0x17cebf;
    function _0x4c7bb6(_0x29834f, _0x3731a9) {
      if (!_0x29834f) {
        _0x6cb855(_0x3731a9);
      }
    }
    function _0xb99f17(_0x5d19a3) {
      var _0x4b975b = _0x339df7["_" + _0x5d19a3];
      return _0x4b975b;
    }
    function _0x4fd39d(_0x1fffcb, _0x284ac6, _0x354072, _0x600631, _0x57ca6d) {
      var _0xed0ee1 = {
        string: function (_0x1d19cd) {
          var _0x2deadc = 0;
          if (_0x1d19cd !== null && _0x1d19cd !== undefined && _0x1d19cd !== 0) {
            var _0x5c23e4 = (_0x1d19cd.length << 2) + 1;
            _0x2deadc = _0x560693(_0x5c23e4);
            _0xb1d3f9(_0x1d19cd, _0x2deadc, _0x5c23e4);
          }
          return _0x2deadc;
        },
        array: function (_0x2759cb) {
          var _0x387cf8 = _0x560693(_0x2759cb.length);
          _0x44ada4(_0x2759cb, _0x387cf8);
          return _0x387cf8;
        }
      };
      function _0x4dac45(_0x3da335) {
        if (_0x284ac6 === "string") {
          return _0x2b7aa3(_0x3da335);
        }
        if (_0x284ac6 === "boolean") {
          return Boolean(_0x3da335);
        }
        return _0x3da335;
      }
      var _0x506e38 = _0xb99f17(_0x1fffcb);
      var _0x432088 = [];
      var _0x126dc1 = 0;
      if (_0x600631) {
        for (var _0x3beab2 = 0; _0x3beab2 < _0x600631.length; _0x3beab2++) {
          var _0x47cca8 = _0xed0ee1[_0x354072[_0x3beab2]];
          if (_0x47cca8) {
            if (_0x126dc1 === 0) {
              _0x126dc1 = _0x42a2ea();
            }
            _0x432088[_0x3beab2] = _0x47cca8(_0x600631[_0x3beab2]);
          } else {
            _0x432088[_0x3beab2] = _0x600631[_0x3beab2];
          }
        }
      }
      var _0x289088 = _0x506e38.apply(null, _0x432088);
      function _0x4fe637(_0x6325c0) {
        if (_0x126dc1 !== 0) {
          _0x4c02af(_0x126dc1);
        }
        return _0x4dac45(_0x6325c0);
      }
      _0x289088 = _0x4fe637(_0x289088);
      return _0x289088;
    }
    function _0x181b98(_0x44921a, _0x1aa05b, _0xa5e6a, _0x356a46) {
      _0xa5e6a = _0xa5e6a || [];
      var _0x14e7a0 = _0xa5e6a.every(function (_0x59fd2b) {
        return _0x59fd2b === "number";
      });
      var _0x234b4f = _0x1aa05b !== "string";
      if (_0x234b4f && _0x14e7a0 && !_0x356a46) {
        return _0xb99f17(_0x44921a);
      }
      return function () {
        return _0x4fd39d(_0x44921a, _0x1aa05b, _0xa5e6a, arguments, _0x356a46);
      };
    }
    var _0x3ee581 = 1;
    var _0x421283 = typeof TextDecoder != "undefined" ? new TextDecoder("utf8") : undefined;
    function _0x1c811f(_0x47d0ce, _0x3dbc97, _0x1856ff) {
      var _0x271d59 = _0x3dbc97 + _0x1856ff;
      var _0x5916b0 = _0x3dbc97;
      while (_0x47d0ce[_0x5916b0] && !(_0x5916b0 >= _0x271d59)) {
        ++_0x5916b0;
      }
      if (_0x5916b0 - _0x3dbc97 > 16 && _0x47d0ce.buffer && _0x421283) {
        return _0x421283.decode(_0x47d0ce.subarray(_0x3dbc97, _0x5916b0));
      } else {
        var _0x42accb = "";
        while (_0x3dbc97 < _0x5916b0) {
          var _0x52f7f3 = _0x47d0ce[_0x3dbc97++];
          if (!(_0x52f7f3 & 128)) {
            _0x42accb += String.fromCharCode(_0x52f7f3);
            continue;
          }
          var _0xed9077 = _0x47d0ce[_0x3dbc97++] & 63;
          if ((_0x52f7f3 & 224) == 192) {
            _0x42accb += String.fromCharCode((_0x52f7f3 & 31) << 6 | _0xed9077);
            continue;
          }
          var _0x3be594 = _0x47d0ce[_0x3dbc97++] & 63;
          if ((_0x52f7f3 & 240) == 224) {
            _0x52f7f3 = (_0x52f7f3 & 15) << 12 | _0xed9077 << 6 | _0x3be594;
          } else {
            _0x52f7f3 = (_0x52f7f3 & 7) << 18 | _0xed9077 << 12 | _0x3be594 << 6 | _0x47d0ce[_0x3dbc97++] & 63;
          }
          if (_0x52f7f3 < 65536) {
            _0x42accb += String.fromCharCode(_0x52f7f3);
          } else {
            var _0x9c2e1a = _0x52f7f3 - 65536;
            _0x42accb += String.fromCharCode(_0x9c2e1a >> 10 | 55296, _0x9c2e1a & 1023 | 56320);
          }
        }
      }
      return _0x42accb;
    }
    function _0x2b7aa3(_0x2dd39d, _0x5dcf67) {
      if (_0x2dd39d) {
        return _0x1c811f(_0xb4481c, _0x2dd39d, _0x5dcf67);
      } else {
        return "";
      }
    }
    function _0x1dd967(_0xdbe488, _0x38076d, _0x259aec, _0xfb15ef) {
      if (!(_0xfb15ef > 0)) {
        return 0;
      }
      var _0x5e0b3d = _0x259aec;
      var _0x5dc2cd = _0x259aec + _0xfb15ef - 1;
      for (var _0x559d69 = 0; _0x559d69 < _0xdbe488.length; ++_0x559d69) {
        var _0x327467 = _0xdbe488.charCodeAt(_0x559d69);
        if (_0x327467 >= 55296 && _0x327467 <= 57343) {
          var _0x368da0 = _0xdbe488.charCodeAt(++_0x559d69);
          _0x327467 = 65536 + ((_0x327467 & 1023) << 10) | _0x368da0 & 1023;
        }
        if (_0x327467 <= 127) {
          if (_0x259aec >= _0x5dc2cd) {
            break;
          }
          _0x38076d[_0x259aec++] = _0x327467;
        } else if (_0x327467 <= 2047) {
          if (_0x259aec + 1 >= _0x5dc2cd) {
            break;
          }
          _0x38076d[_0x259aec++] = _0x327467 >> 6 | 192;
          _0x38076d[_0x259aec++] = _0x327467 & 63 | 128;
        } else if (_0x327467 <= 65535) {
          if (_0x259aec + 2 >= _0x5dc2cd) {
            break;
          }
          _0x38076d[_0x259aec++] = _0x327467 >> 12 | 224;
          _0x38076d[_0x259aec++] = _0x327467 >> 6 & 63 | 128;
          _0x38076d[_0x259aec++] = _0x327467 & 63 | 128;
        } else {
          if (_0x259aec + 3 >= _0x5dc2cd) {
            break;
          }
          _0x38076d[_0x259aec++] = _0x327467 >> 18 | 240;
          _0x38076d[_0x259aec++] = _0x327467 >> 12 & 63 | 128;
          _0x38076d[_0x259aec++] = _0x327467 >> 6 & 63 | 128;
          _0x38076d[_0x259aec++] = _0x327467 & 63 | 128;
        }
      }
      _0x38076d[_0x259aec] = 0;
      return _0x259aec - _0x5e0b3d;
    }
    function _0xb1d3f9(_0x277c55, _0x39fcc5, _0x577efa) {
      return _0x1dd967(_0x277c55, _0xb4481c, _0x39fcc5, _0x577efa);
    }
    function _0x12cdfc(_0xb00e77) {
      var _0x1af2c3 = 0;
      for (var _0x66a69f = 0; _0x66a69f < _0xb00e77.length; ++_0x66a69f) {
        var _0x2af143 = _0xb00e77.charCodeAt(_0x66a69f);
        if (_0x2af143 >= 55296 && _0x2af143 <= 57343) {
          _0x2af143 = 65536 + ((_0x2af143 & 1023) << 10) | _0xb00e77.charCodeAt(++_0x66a69f) & 1023;
        }
        if (_0x2af143 <= 127) {
          ++_0x1af2c3;
        } else if (_0x2af143 <= 2047) {
          _0x1af2c3 += 2;
        } else if (_0x2af143 <= 65535) {
          _0x1af2c3 += 3;
        } else {
          _0x1af2c3 += 4;
        }
      }
      return _0x1af2c3;
    }
    var _0x401e4c = typeof TextDecoder != "undefined" ? new TextDecoder("utf-16le") : undefined;
    function _0x1dd3e1(_0x6169dd) {
      var _0x2f3833 = _0x12cdfc(_0x6169dd) + 1;
      var _0x2500cd = _0x5d55ea(_0x2f3833);
      if (_0x2500cd) {
        _0x1dd967(_0x6169dd, _0x2845ef, _0x2500cd, _0x2f3833);
      }
      return _0x2500cd;
    }
    function _0x16f0d6(_0x5f3935) {
      var _0x233737 = _0x12cdfc(_0x5f3935) + 1;
      var _0x4ae0d9 = _0x560693(_0x233737);
      _0x1dd967(_0x5f3935, _0x2845ef, _0x4ae0d9, _0x233737);
      return _0x4ae0d9;
    }
    function _0x44ada4(_0x741f6e, _0x21df7f) {
      _0x2845ef.set(_0x741f6e, _0x21df7f);
    }
    function _0x989835(_0x4937a5, _0x4c2ef6, _0xfc55b6) {
      for (var _0x55118e = 0; _0x55118e < _0x4937a5.length; ++_0x55118e) {
        _0x2845ef[_0x4c2ef6++ >> 0] = _0x4937a5.charCodeAt(_0x55118e);
      }
      if (!_0xfc55b6) {
        _0x2845ef[_0x4c2ef6 >> 0] = 0;
      }
    }
    var _0x1ae08d;
    var _0x2845ef;
    var _0xb4481c;
    var _0x3c10c6;
    var _0x4181af;
    var _0x47a7a3;
    var _0x195007;
    var _0x50a76e;
    var _0x113710;
    function _0x3f3708(_0x50c0ce) {
      _0x1ae08d = _0x50c0ce;
      _0x339df7.HEAP8 = _0x2845ef = new Int8Array(_0x50c0ce);
      _0x339df7.HEAP16 = _0x3c10c6 = new Int16Array(_0x50c0ce);
      _0x339df7.HEAP32 = _0x47a7a3 = new Int32Array(_0x50c0ce);
      _0x339df7.HEAPU8 = _0xb4481c = new Uint8Array(_0x50c0ce);
      _0x339df7.HEAPU16 = _0x4181af = new Uint16Array(_0x50c0ce);
      _0x339df7.HEAPU32 = _0x195007 = new Uint32Array(_0x50c0ce);
      _0x339df7.HEAPF32 = _0x50a76e = new Float32Array(_0x50c0ce);
      _0x339df7.HEAPF64 = _0x113710 = new Float64Array(_0x50c0ce);
    }
    var _0xfbf63c = _0x339df7.INITIAL_MEMORY || 33554432;
    var _0x440a6c;
    var _0x3f7723 = [];
    var _0x3f7cea = [];
    var _0x270ba3 = [];
    var _0x38fd0d = [];
    var _0x13ff35 = [];
    var _0x37d7f3 = false;
    function _0x4e7584() {
      return _0x6d1c6f;
    }
    function _0x21a14c() {
      if (_0x339df7.preRun) {
        if (typeof _0x339df7.preRun == "function") {
          _0x339df7.preRun = [_0x339df7.preRun];
        }
        while (_0x339df7.preRun.length) {
          _0x4a98ea(_0x339df7.preRun.shift());
        }
      }
      _0x63dbbb(_0x3f7723);
    }
    function _0x21bef7() {
      _0x37d7f3 = true;
      if (!_0x339df7.noFSInit && !_0x1c26fd.init.initialized) {
        _0x1c26fd.init();
      }
      _0x1c26fd.ignorePermissions = false;
      _0x3dbec0.init();
      _0x252c88.root = _0x1c26fd.mount(_0x252c88, {}, null);
      _0x425290.root = _0x1c26fd.mount(_0x425290, {}, null);
      _0x63dbbb(_0x3f7cea);
    }
    function _0x3aded9() {
      _0x63dbbb(_0x270ba3);
    }
    function _0x1282c1() {
      if (_0x339df7.postRun) {
        if (typeof _0x339df7.postRun == "function") {
          _0x339df7.postRun = [_0x339df7.postRun];
        }
        while (_0x339df7.postRun.length) {
          _0x58c5dc(_0x339df7.postRun.shift());
        }
      }
      _0x63dbbb(_0x13ff35);
    }
    function _0x4a98ea(_0x56a3fc) {
      _0x3f7723.unshift(_0x56a3fc);
    }
    function _0x2ff562(_0x1ac725) {
      _0x3f7cea.unshift(_0x1ac725);
    }
    function _0x58c5dc(_0x5056c2) {
      _0x13ff35.unshift(_0x5056c2);
    }
    var _0x43a56f = 0;
    var _0x5413a9 = null;
    var _0x2c64b5 = null;
    function _0xe21494(_0x4bb5a1) {
      return _0x4bb5a1;
    }
    function _0x102273(_0x2ea122) {
      _0x43a56f++;
      if (_0x339df7.monitorRunDependencies) {
        _0x339df7.monitorRunDependencies(_0x43a56f);
      }
    }
    function _0x4695c0(_0x298c87) {
      _0x43a56f--;
      if (_0x339df7.monitorRunDependencies) {
        _0x339df7.monitorRunDependencies(_0x43a56f);
      }
      if (_0x43a56f == 0) {
        if (_0x5413a9 !== null) {
          clearInterval(_0x5413a9);
          _0x5413a9 = null;
        }
        if (_0x2c64b5) {
          var _0x251165 = _0x2c64b5;
          _0x2c64b5 = null;
          _0x251165();
        }
      }
    }
    _0x339df7.preloadedImages = {};
    _0x339df7.preloadedAudios = {};
    function _0x6cb855(_0x56c5c4) {
      {
        if (_0x339df7.onAbort) {
          _0x339df7.onAbort(_0x56c5c4);
        }
      }
      _0x56c5c4 = "Aborted(" + _0x56c5c4 + ")";
      _0x2b9f46(_0x56c5c4);
      _0xa8d6ac = true;
      _0x17cebf = 1;
      _0x56c5c4 += ". Build with -s ASSERTIONS=1 for more info.";
      var _0x44a4f2 = new WebAssembly.RuntimeError(_0x56c5c4);
      _0x3b02e5(_0x44a4f2);
      throw _0x44a4f2;
    }
    var _0x417e76 = "data:application/octet-stream;base64,";
    function _0x103e99(_0x1bfa52) {
      return _0x1bfa52.startsWith(_0x417e76);
    }
    function _0x5e0cdc(_0x530b69) {
      return _0x530b69.startsWith("file://");
    }
    var _0x1f252b;
    _0x1f252b = "build.wasm";
    if (!_0x103e99(_0x1f252b)) {
      _0x1f252b = _0x22ff6f(_0x1f252b);
    }
    function _0x11072b(_0x4a863e) {
      try {
        if (_0x4a863e == _0x1f252b && _0x5b9726) {
          return new Uint8Array(_0x5b9726);
        }
        if (_0x9fbbe5) {
          return _0x9fbbe5(_0x4a863e);
        } else {
          throw "both async and sync fetching of the wasm failed";
        }
      } catch (_0x44eee5) {
        _0x6cb855(_0x44eee5);
      }
    }
    function _0xbeffee() {
      if (!_0x5b9726 && (_0x1c0797 || _0x3963d9)) {
        if (typeof fetch == "function" && !_0x5e0cdc(_0x1f252b)) {
          return fetch(_0x1f252b, {
            credentials: "same-origin"
          }).then(function (_0x164fc6) {
            if (!_0x164fc6.ok) {
              throw "failed to load wasm binary file at '" + _0x1f252b + "'";
            }
            return _0x164fc6.arrayBuffer();
          }).catch(function () {
            return _0x11072b(_0x1f252b);
          });
        } else if (_0x298cf5) {
          return new Promise(function (_0x152fb8, _0x3a2269) {
            _0x298cf5(_0x1f252b, function (_0x551572) {
              _0x152fb8(new Uint8Array(_0x551572));
            }, _0x3a2269);
          });
        }
      }
      return Promise.resolve().then(function () {
        return _0x11072b(_0x1f252b);
      });
    }
    function _0x233325() {
      var _0x212481 = {
        env: _0x22dabc,
        wasi_snapshot_preview1: _0x22dabc
      };
      function _0x55fea2(_0xd65e0e, _0x3b28e1) {
        var _0x1e6755 = _0xd65e0e.exports;
        _0x339df7.asm = _0x1e6755;
        _0x598810 = _0x339df7.asm.memory;
        _0x3f3708(_0x598810.buffer);
        _0x440a6c = _0x339df7.asm.__indirect_function_table;
        _0x2ff562(_0x339df7.asm.__wasm_call_ctors);
        _0x4695c0("wasm-instantiate");
      }
      _0x102273("wasm-instantiate");
      function _0x68403d(_0xc2128e) {
        _0x55fea2(_0xc2128e.instance);
      }
      function _0x3f33a4(_0x333c06) {
        return _0xbeffee().then(function (_0x546f4a) {
          return WebAssembly.instantiate(_0x546f4a, _0x212481);
        }).then(function (_0x936c0) {
          return _0x936c0;
        }).then(_0x333c06, function (_0x3fb3aa) {
          _0x2b9f46("failed to asynchronously prepare wasm: " + _0x3fb3aa);
          _0x6cb855(_0x3fb3aa);
        });
      }
      function _0x185b8d() {
        if (!_0x5b9726 && typeof WebAssembly.instantiateStreaming == "function" && !_0x103e99(_0x1f252b) && !_0x5e0cdc(_0x1f252b) && typeof fetch == "function") {
          return fetch(_0x1f252b, {
            credentials: "same-origin"
          }).then(function (_0x2b34e3) {
            var _0x588c43 = WebAssembly.instantiateStreaming(_0x2b34e3, _0x212481);
            return _0x588c43.then(_0x68403d, function (_0x4bc860) {
              _0x2b9f46("wasm streaming compile failed: " + _0x4bc860);
              _0x2b9f46("falling back to ArrayBuffer instantiation");
              return _0x3f33a4(_0x68403d);
            });
          });
        } else {
          return _0x3f33a4(_0x68403d);
        }
      }
      if (_0x339df7.instantiateWasm) {
        try {
          var _0x586add = _0x339df7.instantiateWasm(_0x212481, _0x55fea2);
          return _0x586add;
        } catch (_0x19e3f5) {
          _0x2b9f46("Module.instantiateWasm callback failed with error: " + _0x19e3f5);
          return false;
        }
      }
      _0x185b8d().catch(_0x3b02e5);
      return {};
    }
    var _0x563ecc;
    var _0x1b09b3;
    var _0x392651 = {
      5192696: function () {
        return _0x339df7.webglContextAttributes.premultipliedAlpha;
      },
      5192757: function () {
        return _0x339df7.webglContextAttributes.preserveDrawingBuffer;
      },
      5192821: function () {
        return _0x339df7.webglContextAttributes.powerPreference;
      }
    };
    function _0x63dbbb(_0xf39ffb) {
      while (_0xf39ffb.length > 0) {
        var _0x3538cc = _0xf39ffb.shift();
        if (typeof _0x3538cc == "function") {
          _0x3538cc(_0x339df7);
          continue;
        }
        var _0x366d74 = _0x3538cc.func;
        if (typeof _0x366d74 == "number") {
          if (_0x3538cc.arg === undefined) {
            (function () {
              _0x4ef107.call(null, _0x366d74);
            })();
          } else {
            (function (_0x2402fb) {
              _0x4f6e0f.apply(null, [_0x366d74, _0x2402fb]);
            })(_0x3538cc.arg);
          }
        } else {
          _0x366d74(_0x3538cc.arg === undefined ? null : _0x3538cc.arg);
        }
      }
    }
    function _0x5cf5e4(_0x17d35d) {
      var _0x22f768 = _0x42a2ea();
      var _0x20144b = _0x17d35d();
      _0x4c02af(_0x22f768);
      return _0x20144b;
    }
    function _0x5e5e18(_0x390621) {
      return _0x390621;
    }
    function _0xd05180(_0x116dde) {
      var _0x14805e = /\b_Z[\w\d_]+/g;
      return _0x116dde.replace(_0x14805e, function (_0x9fd5fa) {
        var _0x12e90f = _0x5e5e18(_0x9fd5fa);
        if (_0x9fd5fa === _0x12e90f) {
          return _0x9fd5fa;
        } else {
          return _0x12e90f + " [" + _0x9fd5fa + "]";
        }
      });
    }
    function _0x3a0f84(_0xca3ca6, _0x162902, _0x465efe) {
      var _0x19d567 = _0x339df7["dynCall_" + _0xca3ca6];
      if (_0x465efe && _0x465efe.length) {
        return _0x19d567.apply(null, [_0x162902].concat(_0x465efe));
      } else {
        return _0x19d567.call(null, _0x162902);
      }
    }
    var _0x1b07e6 = [];
    function _0x2a1a55(_0x55d22c) {
      var _0x5829d0 = _0x1b07e6[_0x55d22c];
      if (!_0x5829d0) {
        if (_0x55d22c >= _0x1b07e6.length) {
          _0x1b07e6.length = _0x55d22c + 1;
        }
        _0x1b07e6[_0x55d22c] = _0x5829d0 = _0x440a6c.get(_0x55d22c);
      }
      return _0x5829d0;
    }
    function _0x58324c(_0x316e83, _0x50a577, _0x30efe8) {
      return _0x3a0f84(_0x316e83, _0x50a577, _0x30efe8);
    }
    function _0xa92303(_0x151aeb) {
      if (_0x151aeb instanceof _0x4b68df || _0x151aeb == "unwind") {
        return _0x17cebf;
      }
      _0x9f0544(1, _0x151aeb);
    }
    function _0x50302e() {
      var _0x690dc8 = new Error();
      if (!_0x690dc8.stack) {
        try {
          throw new Error();
        } catch (_0x52a7a7) {
          _0x690dc8 = _0x52a7a7;
        }
        if (!_0x690dc8.stack) {
          return "(no stack trace available)";
        }
      }
      return _0x690dc8.stack.toString();
    }
    function _0x27197c(_0x587d7d, _0x468ea9) {
      _0x440a6c.set(_0x587d7d, _0x468ea9);
      _0x1b07e6[_0x587d7d] = _0x468ea9;
    }
    function _0x5c8d3c() {
      var _0x4efea9 = _0x50302e();
      if (_0x339df7.extraStackTrace) {
        _0x4efea9 += "\n" + _0x339df7.extraStackTrace();
      }
      return _0xd05180(_0x4efea9);
    }
    function _0x5c8d4f(_0x336f4d, _0xeb7f03, _0x13db68, _0x583152, _0x2356ab) {

    }
    function _0x4fdd1d(_0xdda0a7, _0x40223e, _0x1c8264, _0x307cb3, _0xb384b6, _0x22d09f, _0x320a99) {

    }
    function _0x20532c(_0x5c309b, _0x4cc9fd, _0x448da1, _0xa9763e, _0x4cb929) {

    }
    function _0x1989ba(_0x15a527, _0xa84de4, _0x5ccb48, _0x3111a1, _0x134c22) {

    }
    function _0x4f30cf(_0x134c98, _0x5dbc40, _0x25e2da, _0x58ab18, _0x1aac0a, _0x2dbbaa) {

    }
    function _0x17b8de(_0x3540c2, _0x851d0, _0x1b0442, _0x5c667d) {

    }
    function _0x381ca9(_0x21ccf8, _0x57fdd6, _0x388a6a, _0xac5510) {
  
    }
    function _0x361824() {
      try {
        window[preroll.config.loaderObjectName].log("WGSDK: Getting WeeGoo InGame Ad");
        window[preroll.config.loaderObjectName].refetchAd();
      } catch (_0x3c381d) {
        console.log("No WeeGooAFG implementation found!");
      }
    }
    function _0x5a0bd6(_0x3b15c4) {
      _0x3b15c4 = _0x567fc0(_0x3b15c4);
      window.GD_OPTIONS = {
        debug: false,
        gameId: _0x3b15c4,
        onEvent: function (_0x5b0f0d) {
          switch (_0x5b0f0d.name) {
            case "SDK_GAME_START":
              _0x14238e("GameDistribution", "ResumeGameCallback");
              break;
            case "SDK_GAME_PAUSE":
              _0x14238e("GameDistribution", "PauseGameCallback");
              break;
            case "SDK_REWARDED_WATCH_COMPLETE":
              _0x14238e("GameDistribution", "RewardedCompleteCallback");
              break;
            case "SDK_ERROR":
              break;
          }
        }
      };
      (function (_0x57ce93, _0x446365, _0x490680) {})(document, "script", "gamedistribution-jssdk");
    }
    function _0xfb5196() {
      if (typeof gdsdk !== "undefined" && typeof gdsdk.preloadAd !== "undefined") {
        gdsdk.preloadAd(gdsdk.AdType.Rewarded).then(function (_0x2c7f7f) {
          _0x14238e("GameDistribution", "PreloadRewardedVideoCallback", 1);
        }).catch(function (_0x51e900) {
          _0x14238e("GameDistribution", "PreloadRewardedVideoCallback", 0);
        });
      }
    }
    function _0x2ff12d(_0x4630b8) {
      _0x4630b8 = _0x567fc0(_0x4630b8);
      if (typeof gdsdk !== "undefined" && typeof gdsdk.sendEvent !== "undefined" && typeof _0x4630b8 !== "undefined") {
        gdsdk.sendEvent(_0x4630b8).then(function (_0x1ae12b) {
          console.log("Game event post message sent Succesfully...");
        }).catch(function (_0x1682a3) {
          console.log(_0x1682a3.message);
        });
      }
    }
    function _0x4622b7(_0x263dfc) {
      if (typeof gdsdk !== "undefined" && typeof gdsdk.showAd !== "undefined") {
        _0x263dfc = _0x567fc0(_0x263dfc) || gdsdk.AdType.Interstitial;
        console.log("gd show ads: " + _0x263dfc);
        gdsdk.showAd(_0x263dfc).then(function (_0x584e90) {
          if (_0x263dfc === gdsdk.AdType.Rewarded) {
            _0x14238e("GameDistribution", "RewardedVideoSuccessCallback");
          }
        }).catch(function (_0x19056c) {
          if (_0x263dfc === gdsdk.AdType.Rewarded) {
            _0x14238e("GameDistribution", "RewardedVideoFailureCallback");
          }
        });
      }
    }
    function _0xcf4e76(_0x52e2d3) {
      try {
        window[preroll.config.loaderObjectName].log("WGSDK: Sending game event");
        window[preroll.config.loaderObjectName].GameEvent(_0x52e2d3);
      } catch (_0x1d363c) {
        console.log("No WeeGooAFG implementation found!");
      }
    }
    function _0xaf554f() {
      var _0x25335f = firebaseConfig.projectId;
      var _0x259805 = _0x12cdfc(_0x25335f) + 1;
      var _0x1c3dce = _0x5d55ea(_0x259805);
      _0xb1d3f9(_0x25335f, _0x1c3dce, _0x259805);
      return _0x1c3dce;
    }
    function _0x354311(_0xbeba07, _0x3c52cb, _0x184b83, _0x3e6471, _0x539685) {

    }
    function _0x36eac5(_0x3c2aac, _0x24c48b, _0x10ecc7, _0x376028) {

    }
    function _0x47ed2d(_0x215582, _0x3220eb) {
      if (performance.memory) {
        _0x113710[_0x215582 >> 3] = performance.memory.totalJSHeapSize;
        _0x113710[_0x3220eb >> 3] = performance.memory.usedJSHeapSize;
      } else {
        _0x113710[_0x215582 >> 3] = NaN;
        _0x113710[_0x3220eb >> 3] = NaN;
      }
    }
    function _0x3f8fb1(_0xd48520, _0x56067e, _0x490ceb, _0x3d56cf) {

    }
    function _0x3d2955(_0x303fb0, _0x4995c3, _0x50c288, _0x4ea698, _0x274f92, _0xea4fe8, _0x17d4d8) {

    }
    var _0x225d02 = null;
    var _0x41f303 = 0;
    function _0x5b0c2d() {
      return _0x225d02 && _0x225d02.activated || _0x41f303 != 0;
    }
    var _0x64636f = 1;
    var _0x673ed2 = {
      x: 0,
      y: 0,
      z: 0
    };
    function _0x485f22() {
      _0x673ed2 = {
        x: _0x225d02.x * _0x64636f,
        y: _0x225d02.y * _0x64636f,
        z: _0x225d02.z * _0x64636f
      };
      if (_0x41f303 != 0) {
        _0xf4e719(_0x41f303, _0x673ed2.x, _0x673ed2.y, _0x673ed2.z);
      }
    }
    var _0x3e8dc3 = 0;
    var _0x435383 = 0;
    var _0xb71eaf = 0;
    var _0x2faecc = 0;
    var _0x45070e = 0;
    function _0xfb9b4f(_0x265dd6, _0x5cb44b) {
      var _0x21cd78 = {
        x: _0x265dd6.x - _0x5cb44b.x,
        y: _0x265dd6.y - _0x5cb44b.y,
        z: _0x265dd6.z - _0x5cb44b.z
      };
      var _0x373d6c = _0x21cd78.x * _0x21cd78.x + _0x21cd78.y * _0x21cd78.y + _0x21cd78.z * _0x21cd78.z;
      var _0x4566eb = {
        x: _0x265dd6.x + _0x5cb44b.x,
        y: _0x265dd6.y + _0x5cb44b.y,
        z: _0x265dd6.z + _0x5cb44b.z
      };
      var _0xa269bf = _0x4566eb.x * _0x4566eb.x + _0x4566eb.y * _0x4566eb.y + _0x4566eb.z * _0x4566eb.z;
      if (_0x373d6c <= _0xa269bf) {
        return _0x21cd78;
      } else {
        return _0x4566eb;
      }
    }
    function _0x334b43(_0x4791c1) {
      var _0x43bb1f = {
        x: _0x4791c1.accelerationIncludingGravity.x * _0x64636f,
        y: _0x4791c1.accelerationIncludingGravity.y * _0x64636f,
        z: _0x4791c1.accelerationIncludingGravity.z * _0x64636f
      };
      if (_0x41f303 != 0) {
        _0xf4e719(_0x41f303, _0x43bb1f.x, _0x43bb1f.y, _0x43bb1f.z);
      }
      var _0x8dac0f = {
        x: _0x4791c1.acceleration.x * _0x64636f,
        y: _0x4791c1.acceleration.y * _0x64636f,
        z: _0x4791c1.acceleration.z * _0x64636f
      };
      if (_0xb71eaf != 0) {
        _0xf4e719(_0xb71eaf, _0x8dac0f.x, _0x8dac0f.y, _0x8dac0f.z);
      }
      if (_0x2faecc != 0) {
        var _0x559aee = _0xfb9b4f(_0x43bb1f, _0x8dac0f);
        _0xf4e719(_0x2faecc, _0x559aee.x, _0x559aee.y, _0x559aee.z);
      }
      if (_0x45070e != 0) {
        var _0x82cb95 = Math.PI / 180;
        _0xf4e719(_0x45070e, _0x4791c1.rotationRate.alpha * _0x82cb95, _0x4791c1.rotationRate.beta * _0x82cb95, _0x4791c1.rotationRate.gamma * _0x82cb95);
      }
    }
    var _0x40fe32 = 0;
    function _0x188dc2(_0x566bf0) {
      if (_0x566bf0 & 1) {
        if (typeof DeviceOrientationEvent.requestPermission === "function") {
          DeviceOrientationEvent.requestPermission().then(function (_0x28e3c7) {
            if (_0x28e3c7 === "granted") {
              _0x40fe32 &= ~1;
            } else {
              _0xcabc97("DeviceOrientationEvent permission not granted");
            }
          }).catch(function (_0x27d0ae) {
            _0xcabc97(_0x27d0ae);
            _0x40fe32 |= 1;
          });
        }
      }
      if (_0x566bf0 & 2) {
        if (typeof DeviceMotionEvent.requestPermission === "function") {
          DeviceMotionEvent.requestPermission().then(function (_0x32f987) {
            if (_0x32f987 === "granted") {
              _0x40fe32 &= ~2;
            } else {
              _0xcabc97("DeviceMotionEvent permission not granted");
            }
          }).catch(function (_0x473bbb) {
            _0xcabc97(_0x473bbb);
            _0x40fe32 |= 2;
          });
        }
      }
    }
    function _0x2bba77() {
      if (_0x41f303 == 0 && _0xb71eaf == 0 && _0x2faecc == 0 && _0x45070e == 0) {
        _0x188dc2(2);
        window.addEventListener("devicemotion", _0x334b43);
      }
    }
    function _0x4a8dc1() {
      var _0x24ed08 = 9.80665;
      _0x64636f = /(iPhone|iPad|Macintosh)/i.test(navigator.userAgent) ? 1 / _0x24ed08 : -1 / _0x24ed08;
    }
    function _0x2462b(_0x596039, _0x4481c1) {
      _0x4a8dc1();
      if (typeof Accelerometer === "undefined") {
        _0x2bba77();
        if (_0x596039 != 0) {
          _0x41f303 = _0x596039;
        }
        return;
      }
      if (_0x596039 != 0) {
        _0x41f303 = _0x596039;
      }
      function _0x206a0d(_0x5b7fdc) {
        _0x225d02 = new Accelerometer({
          frequency: _0x5b7fdc,
          referenceFrame: "device"
        });
        _0x225d02.addEventListener("reading", _0x485f22);
        _0x225d02.addEventListener("error", function (_0x5ba992) {
          _0xcabc97(_0x5ba992.error ? _0x5ba992.error : _0x5ba992);
        });
        _0x225d02.start();
        _0x435383 = _0x5b7fdc;
      }
      if (_0x225d02) {
        if (_0x435383 != _0x4481c1) {
          _0x225d02.stop();
          _0x225d02.removeEventListener("reading", _0x485f22);
          _0x206a0d(_0x4481c1);
        }
      } else if (_0x3e8dc3 != 0) {
        _0x3e8dc3 = _0x4481c1;
      } else {
        _0x3e8dc3 = _0x4481c1;
        navigator.permissions.query({
          name: "accelerometer"
        }).then(function (_0x336088) {
          if (_0x336088.state === "granted") {
            _0x206a0d(_0x3e8dc3);
          } else {
            _0xcabc97("No permission to use Accelerometer.");
          }
          _0x3e8dc3 = 0;
        });
      }
    }
    function _0x5cc7c4() {
      if (_0x41f303 == 0 && _0xb71eaf == 0 && _0x2faecc == 0 && _0x45070e == 0) {
        window.removeEventListener("devicemotion", _0x28e045);
      }
    }
    function _0x3e3964() {
      if (_0x225d02) {
        if (typeof GravitySensor !== "undefined" || _0x2faecc == 0) {
          _0x225d02.stop();
          _0x225d02.removeEventListener("reading", _0x485f22);
          _0x225d02 = null;
        }
        _0x41f303 = 0;
        _0x435383 = 0;
      } else if (_0x41f303 != 0) {
        _0x41f303 = 0;
        _0x5cc7c4();
      }
    }
    var _0x23b2e8 = 0;
    function _0x339ddf(_0x56e571) {
      if (!_0x23b2e8) {
        try {
          (function () {
            _0x4ef107.call(null, _0x56e571);
          })();
        } catch (_0x38161c) {
          _0x23b2e8 = 1;
          console.error("Uncaught exception from main loop:");
          console.error(_0x38161c);
          console.error("Halting program.");
          if (_0x339df7.errorHandler) {
            _0x339df7.errorHandler(_0x38161c);
          }
          throw _0x38161c;
        }
      }
    }
    function _0x2bfb69(_0x472856, _0x3155c7) {
      var _0x4fd45f = "";
      for (var _0x4e708d = 0; _0x4e708d < _0x3155c7; _0x4e708d++) {
        _0x4fd45f += String.fromCharCode(_0xb4481c[_0x472856 + _0x4e708d]);
      }
      _0x339df7.canvas.style.cursor = "url(data:image/cur;base64," + btoa(_0x4fd45f) + "),default";
    }
    function _0x2cf9ff(_0xc1e85a) {
      _0x339df7.canvas.style.cursor = _0xc1e85a ? "default" : "none";
    }
    function _0x6d76f4(_0x76fd73) {
      if (typeof window.CSS !== "undefined" && typeof window.CSS.escape !== "undefined") {
        return window.CSS.escape(_0x76fd73);
      }
      return _0x76fd73.replace(/(#|\.|\+|\[|\]|\(|\)|\{|\})/g, "\\$1");
    }
    function _0x5a390b() {
      var _0x3f0832 = _0x339df7.canvas ? _0x339df7.canvas.id : "unity-canvas";
      return "#" + _0x6d76f4(_0x3f0832);
    }
    function _0x329c68(_0x5c8b7b, _0x26807e, _0x27535a, _0x159210) {
      var _0x37cd62 = document.querySelector(_0x5a390b());
      var _0x54bdde = _0x37cd62 && _0x37cd62.getBoundingClientRect();
      _0x195007[_0x27535a >> 2] = _0x5c8b7b - (_0x54bdde ? _0x54bdde.left : 0);
      _0x195007[_0x159210 >> 2] = _0x26807e - (_0x54bdde ? _0x54bdde.top : 0);
    }
    function _0x4a04ee(_0x16fbb4) {
      var _0x9b5075 = _0x12cdfc(_0x16fbb4) + 1;
      var _0x299880 = _0x5d55ea(_0x9b5075);
      _0xb1d3f9(_0x16fbb4, _0x299880, _0x9b5075);
      return _0x299880;
    }
    function _0x2b4546() {
      var _0xa949f2 = _0x5a390b();
      if (_0x2b4546.selector != _0xa949f2) {
        _0x6cc71d(_0x2b4546.ptr);
        _0x2b4546.ptr = _0x4a04ee(_0xa949f2);
        _0x2b4546.selector = _0xa949f2;
      }
      return _0x2b4546.ptr;
    }
    function _0x358d9b(_0x4caad4) {
      var _0x5d9839 = _0x2b7aa3(_0x4caad4);
      try {
        eval(_0x5d9839);
      } catch (_0x43cc5a) {
        console.error(_0x43cc5a);
      }
    }
    function _0x10c9dc(_0x48d454) {
      var _0x2fc890 = _0x2b7aa3(_0x48d454);
      window.open(_0x2fc890, "_blank", "");
    }
    function _0x2c113e() {}
    function _0x82da53() {
      _0x4007c8.queuePersist(_0x339df7.__unityIdbfsMount.mount);
      if (!window.warnedAboutManualFilesystemSyncGettingDeprecated) {
        window.warnedAboutManualFilesystemSyncGettingDeprecated = true;
        if (!_0x339df7.autoSyncPersistentDataPath) {
          console.warn("Manual synchronization of Unity Application.persistentDataPath via JS_FileSystem_Sync() is deprecated and will be later removed in a future Unity version. The persistent data directory will be automatically synchronized instead on file modification. Pass config.autoSyncPersistentDataPath = true; to configuration in createUnityInstance() to opt in to the new behavior.");
        }
      }
    }
    var _0x2e734d = null;
    function _0x801116() {
      if (typeof GravitySensor !== "undefined") {
        return _0x2e734d && _0x2e734d.activated;
      } else {
        return _0x2faecc != 0;
      }
    }
    function _0x179d7e() {
      if (_0x2faecc != 0) {
        _0xf4e719(_0x2faecc, _0x2e734d.x * _0x64636f, _0x2e734d.y * _0x64636f, _0x2e734d.z * _0x64636f);
      }
    }
    var _0x33f7d6 = 0;
    var _0x183de4 = null;
    function _0x5b2b31() {
      var _0x4d7f24 = {
        x: _0x183de4.x * _0x64636f,
        y: _0x183de4.y * _0x64636f,
        z: _0x183de4.z * _0x64636f
      };
      if (_0xb71eaf != 0) {
        _0xf4e719(_0xb71eaf, _0x4d7f24.x, _0x4d7f24.y, _0x4d7f24.z);
      }
      if (_0x2faecc != 0 && typeof GravitySensor === "undefined") {
        var _0x3bbd8d = _0xfb9b4f(_0x673ed2, _0x4d7f24);
        _0xf4e719(_0x2faecc, _0x3bbd8d.x, _0x3bbd8d.y, _0x3bbd8d.z);
      }
    }
    var _0x432c48 = 0;
    var _0x27066c = 0;
    function _0x123c6f(_0x241332, _0x2aec63) {
      _0x4a8dc1();
      if (typeof LinearAccelerationSensor === "undefined") {
        _0x2bba77();
        if (_0x241332 != 0) {
          _0xb71eaf = _0x241332;
        }
        return;
      }
      if (_0x241332 != 0) {
        _0xb71eaf = _0x241332;
      }
      function _0x3dff7e(_0x146528) {
        _0x183de4 = new LinearAccelerationSensor({
          frequency: _0x146528,
          referenceFrame: "device"
        });
        _0x183de4.addEventListener("reading", _0x5b2b31);
        _0x183de4.addEventListener("error", function (_0x2fc8c0) {
          _0xcabc97(_0x2fc8c0.error ? _0x2fc8c0.error : _0x2fc8c0);
        });
        _0x183de4.start();
        _0x27066c = _0x146528;
      }
      if (_0x183de4) {
        if (_0x27066c != _0x2aec63) {
          _0x183de4.stop();
          _0x183de4.removeEventListener("reading", _0x5b2b31);
          _0x3dff7e(_0x2aec63);
        }
      } else if (_0x432c48 != 0) {
        _0x432c48 = _0x2aec63;
      } else {
        _0x432c48 = _0x2aec63;
        navigator.permissions.query({
          name: "accelerometer"
        }).then(function (_0x18eaef) {
          if (_0x18eaef.state === "granted") {
            _0x3dff7e(_0x432c48);
          } else {
            _0xcabc97("No permission to use LinearAccelerationSensor.");
          }
          _0x432c48 = 0;
        });
      }
    }
    function _0x5664d3(_0x155e42, _0x4a5a73) {
      if (typeof GravitySensor === "undefined") {
        _0x2462b(0, Math.max(_0x4a5a73, _0x435383));
        _0x123c6f(0, Math.max(_0x4a5a73, _0x27066c));
        _0x2faecc = _0x155e42;
        return;
      }
      _0x4a8dc1();
      _0x2faecc = _0x155e42;
      function _0x5def73(_0x316668) {
        _0x2e734d = new GravitySensor({
          frequency: _0x316668,
          referenceFrame: "device"
        });
        _0x2e734d.addEventListener("reading", _0x179d7e);
        _0x2e734d.addEventListener("error", function (_0xab44ad) {
          _0xcabc97(_0xab44ad.error ? _0xab44ad.error : _0xab44ad);
        });
        _0x2e734d.start();
      }
      if (_0x2e734d) {
        _0x2e734d.stop();
        _0x2e734d.removeEventListener("reading", _0x179d7e);
        _0x5def73(_0x4a5a73);
      } else if (_0x33f7d6 != 0) {
        _0x33f7d6 = _0x4a5a73;
      } else {
        _0x33f7d6 = _0x4a5a73;
        navigator.permissions.query({
          name: "accelerometer"
        }).then(function (_0x4859e8) {
          if (_0x4859e8.state === "granted") {
            _0x5def73(_0x33f7d6);
          } else {
            _0xcabc97("No permission to use GravitySensor.");
          }
          _0x33f7d6 = 0;
        });
      }
    }
    function _0x3cdf31() {
      if (_0x183de4) {
        if (typeof GravitySensor !== "undefined" || _0x2faecc == 0) {
          _0x183de4.stop();
          _0x183de4.removeEventListener("reading", _0x5b2b31);
          _0x183de4 = null;
        }
        _0xb71eaf = 0;
        _0x27066c = 0;
      } else if (_0xb71eaf != 0) {
        _0xb71eaf = 0;
        _0x5cc7c4();
      }
    }
    function _0x4c5433() {
      _0x2faecc = 0;
      if (typeof GravitySensor === "undefined") {
        if (_0x41f303 == 0) {
          _0x3e3964();
        }
        if (_0xb71eaf == 0) {
          _0x3cdf31();
        }
        return;
      }
      if (_0x2e734d) {
        _0x2e734d.stop();
        _0x2e734d.removeEventListener("reading", _0x179d7e);
        _0x2e734d = null;
      }
    }
    function _0x2a91c3(_0x25679b) {
      try {
        (function () {
          _0x4ef107.call(null, _0x25679b);
        })();
      } catch (_0x5ab0f8) {
        console.warn(_0x5ab0f8);
      }
    }
    var _0x54468b = null;
    function _0x113dad() {
      return _0x54468b && _0x54468b.activated || _0x45070e != 0;
    }
    function _0x57eeb5() {
      if (_0x45070e != 0) {
        _0xf4e719(_0x45070e, _0x54468b.x, _0x54468b.y, _0x54468b.z);
      }
    }
    var _0x3473ba = 0;
    function _0x1ca593(_0x3f074a, _0x2e6629) {
      if (typeof Gyroscope === "undefined") {
        _0x2bba77();
        _0x45070e = _0x3f074a;
        return;
      }
      _0x45070e = _0x3f074a;
      function _0x473739(_0x168a85) {
        _0x54468b = new Gyroscope({
          frequency: _0x168a85,
          referenceFrame: "device"
        });
        _0x54468b.addEventListener("reading", _0x57eeb5);
        _0x54468b.addEventListener("error", function (_0x2d4611) {
          _0xcabc97(_0x2d4611.error ? _0x2d4611.error : _0x2d4611);
        });
        _0x54468b.start();
      }
      if (_0x54468b) {
        _0x54468b.stop();
        _0x54468b.removeEventListener("reading", _0x57eeb5);
        _0x473739(_0x2e6629);
      } else if (_0x3473ba != 0) {
        _0x3473ba = _0x2e6629;
      } else {
        _0x3473ba = _0x2e6629;
        navigator.permissions.query({
          name: "gyroscope"
        }).then(function (_0x4a8ded) {
          if (_0x4a8ded.state === "granted") {
            _0x473739(_0x3473ba);
          } else {
            _0xcabc97("No permission to use Gyroscope.");
          }
          _0x3473ba = 0;
        });
      }
    }
    function _0xbb2591() {
      if (_0x54468b) {
        _0x54468b.stop();
        _0x54468b.removeEventListener("reading", _0x57eeb5);
        _0x54468b = null;
        _0x45070e = 0;
      } else if (_0x45070e != 0) {
        _0x45070e = 0;
        _0x5cc7c4();
      }
    }
    function _0x5396de() {
      const _0x2a2d9f = function (_0xfe764d) {
        if (_0xfe764d.target.localName !== "canvas") {
          _0x38e312();
        }
      };
      document.addEventListener("contextmenu", _0x2a2d9f);
      _0x339df7.deinitializers.push(function () {
        document.removeEventListener("contextmenu", _0x2a2d9f);
      });
    }
    function _0x174aff() {
      return _0x183de4 && _0x183de4.activated || _0xb71eaf != 0;
    }
    function _0x151225(_0x516cef, _0x10cd43) {
      var _0x547a45 = _0x2b7aa3(_0x516cef);
      if (typeof dump == "function") {
        dump(_0x547a45);
      }
      switch (_0x10cd43) {
        case 0:
        case 1:
        case 4:
          console.error(_0x547a45);
          return;
        case 2:
          console.warn(_0x547a45);
          return;
        case 3:
        case 5:
          console.log(_0x547a45);
          return;
        default:
          console.error("Unknown console message type!");
          console.error(_0x547a45);
      }
    }
    function _0x4c069e(_0x4e327c, _0x1b749c) {
      var _0x26c738 = _0x5c8d3c();
      if (_0x4e327c) {
        _0xb1d3f9(_0x26c738, _0x4e327c, _0x1b749c);
      }
      return _0x12cdfc(_0x26c738);
    }
    var _0xf50bf8 = null;
    var _0x6c5a0b = null;
    var _0x208534 = null;
    var _0x3cdefb = false;
    function _0xc20b5b() {
      return _0x3cdefb;
    }
    function _0x385414() {
      var _0x154d83 = 0;
      var _0x18619e = 1;
      if (!_0x208534) {
        return _0x18619e;
      }
      return _0x154d83;
    }
    function _0x399d8d(_0x3a9a3b, _0x3bd5aa) {
      var _0x121e44 = _0x208534 && _0x208534.input ? _0x208534.input.value : _0x6c5a0b ? _0x6c5a0b : "";
      if (_0x3a9a3b) {
        _0xb1d3f9(_0x121e44, _0x3a9a3b, _0x3bd5aa);
      }
      return _0x12cdfc(_0x121e44);
    }
    function _0xb80345(_0x1a6ac1, _0x17c139) {
      if (!_0x208534) {
        _0x47a7a3[_0x1a6ac1 >> 2] = 0;
        _0x47a7a3[_0x17c139 >> 2] = 0;
        return;
      }
      _0x47a7a3[_0x1a6ac1 >> 2] = _0x208534.input.selectionStart;
      _0x47a7a3[_0x17c139 >> 2] = _0x208534.input.selectionEnd - _0x208534.input.selectionStart;
    }
    function _0x41949e(_0x45033d) {
      if (_0xf50bf8) {
        return;
      }
      _0x3cdefb = true;
      function _0x347364() {
        if (_0x208534 && _0x208534.input) {
          _0x6c5a0b = _0x208534.input.value;
          _0x208534.input = null;
          if (_0x208534.parentNode && _0x208534.parentNode) {
            _0x208534.parentNode.removeChild(_0x208534);
          }
        }
        _0x208534 = null;
        _0xf50bf8 = null;
        setTimeout(function () {
          _0x3cdefb = false;
        }, 100);
      }
      if (_0x45033d) {
        var _0x5f11df = 200;
        _0xf50bf8 = setTimeout(_0x347364, _0x5f11df);
      } else {
        _0x347364();
      }
    }
    function _0x308315(_0x42f9b0) {
      if (!_0x208534) {
        return;
      }
      _0x208534.input.maxLength = _0x42f9b0;
    }
    function _0x727f1e(_0x397e3a) {
      if (!_0x208534) {
        return;
      }
      _0x397e3a = _0x2b7aa3(_0x397e3a);
      _0x208534.input.value = _0x397e3a;
    }
    function _0xb7a221(_0xc94690, _0x326de2) {
      if (!_0x208534) {
        return;
      }
      if (_0x208534.input.type === "number") {
        _0x208534.input.type = "text";
        _0x208534.input.setSelectionRange(_0xc94690, _0xc94690 + _0x326de2);
        _0x208534.input.type = "number";
      } else {
        _0x208534.input.setSelectionRange(_0xc94690, _0xc94690 + _0x326de2);
      }
    }
    function _0x29a149(_0x491209, _0x14cec9, _0x4c8b00, _0x3377b3, _0x9cc110, _0x2579f2, _0x14e056, _0x342cb4) {
      if (_0xf50bf8) {
        clearTimeout(_0xf50bf8);
        _0xf50bf8 = null;
      }
      _0x491209 = _0x2b7aa3(_0x491209);
      _0x6c5a0b = _0x491209;
      _0x14e056 = _0x2b7aa3(_0x14e056);
      var _0x5d9563 = document.body;
      var _0x48a63d = !!_0x208534;
      var _0x2ca6da;
      var _0x13561b = 2;
      var _0x156eaa = 3;
      var _0x301a20 = 4;
      var _0x2af628 = 5;
      var _0x3c5d22 = 7;
      if (!_0x9cc110) {
        switch (_0x14cec9) {
          case _0x3c5d22:
            _0x2ca6da = "email";
            break;
          case _0x156eaa:
            _0x2ca6da = "url";
            break;
          case _0x13561b:
          case _0x301a20:
          case _0x2af628:
            _0x2ca6da = "number";
            break;
          default:
            _0x2ca6da = "text";
            break;
        }
      } else {
        _0x2ca6da = "password";
      }
      if (_0x48a63d) {
        if (_0x208534.multiline != _0x3377b3) {
          _0x41949e(false);
          return;
        }
      }
      var _0x3a2bbd = _0x208534 || document.createElement("div");
      if (!_0x48a63d) {
        _0x3a2bbd.style = "width:100%; position:fixed; bottom:0px; margin:0px; padding:0px; left:0px; border: 1px solid #000; border-radius: 5px; background-color:#fff; font-size:14pt;";
        _0x5d9563.appendChild(_0x3a2bbd);
        _0x208534 = _0x3a2bbd;
      }
      var _0x36c243 = _0x48a63d ? _0x208534.input : document.createElement(_0x3377b3 ? "textarea" : "input");
      _0x208534.multiline = _0x3377b3;
      _0x208534.secure = _0x9cc110;
      _0x208534.keyboardType = _0x14cec9;
      _0x208534.inputType = _0x2ca6da;
      _0x36c243.type = _0x2ca6da;
      _0x36c243.style = "width:calc(100% - 85px); " + (_0x3377b3 ? "height:100px;" : "") + "vertical-align:top; border-radius: 5px; outline:none; cursor:default; resize:none; border:0px; padding:10px 0px 10px 10px;";
      _0x36c243.spellcheck = _0x4c8b00 ? true : false;
      _0x36c243.maxLength = _0x342cb4 > 0 ? _0x342cb4 : 524288;
      _0x36c243.value = _0x491209;
      _0x36c243.placeholder = _0x14e056;
      if (!_0x48a63d) {
        _0x3a2bbd.appendChild(_0x36c243);
        _0x3a2bbd.input = _0x36c243;
      }
      if (!_0x48a63d) {
        var _0x4c7526 = document.createElement("button");
        _0x4c7526.innerText = "OK";
        _0x4c7526.style = "border:0; position:absolute; left:calc(100% - 75px); top:0px; width:75px; height:100%; margin:0; padding:0; border-radius: 5px; background-color:#fff";
        _0x4c7526.addEventListener("touchend", function () {
          _0x41949e(true);
        });
        _0x3a2bbd.appendChild(_0x4c7526);
        _0x3a2bbd.okButton = _0x4c7526;
        _0x36c243.addEventListener("keyup", function (_0x39441e) {
          if (_0x36c243.parentNode.multiline) {
            return;
          }
          if (_0x39441e.code == "Enter" || _0x39441e.which == 13 || _0x39441e.keyCode == 13) {
            _0x41949e(true);
          }
        });
        _0x36c243.addEventListener("blur", function (_0x413b25) {
          _0x41949e(true);
          _0x413b25.stopPropagation();
          _0x413b25.preventDefault();
        });
        _0x36c243.select();
        _0x36c243.focus();
      } else {
        _0x36c243.select();
      }
    }
    var _0x5c2d20 = null;
    var _0x5f2232 = 0;
    function _0x257997() {
      return _0x5c2d20 && _0x5c2d20.activated || _0x5f2232 != 0;
    }
    function _0x1e3355() {
      if (_0x5f2232 != 0) {
        _0x455190(_0x5f2232, _0x5c2d20.quaternion[0], _0x5c2d20.quaternion[1], _0x5c2d20.quaternion[2], _0x5c2d20.quaternion[3]);
      }
    }
    var _0x358dcf = 0;
    function _0x28e045(_0x4a35fc) {
      if (_0x5f2232) {
        var _0x4f925d = Math.PI / 180;
        var _0x974e45 = _0x4a35fc.beta * _0x4f925d;
        var _0x43c045 = _0x4a35fc.gamma * _0x4f925d;
        var _0x4f933e = _0x4a35fc.alpha * _0x4f925d;
        var _0x1b8919 = Math.cos(_0x974e45 / 2);
        var _0x406cdb = Math.sin(_0x974e45 / 2);
        var _0x85ad45 = Math.cos(_0x43c045 / 2);
        var _0x180415 = Math.sin(_0x43c045 / 2);
        var _0x463941 = Math.cos(_0x4f933e / 2);
        var _0x39cb17 = Math.sin(_0x4f933e / 2);
        var _0x113125 = _0x406cdb * _0x85ad45 * _0x463941 - _0x1b8919 * _0x180415 * _0x39cb17;
        var _0x1338a9 = _0x1b8919 * _0x180415 * _0x463941 + _0x406cdb * _0x85ad45 * _0x39cb17;
        var _0x45dc0d = _0x1b8919 * _0x85ad45 * _0x39cb17 + _0x406cdb * _0x180415 * _0x463941;
        var _0x42a31f = _0x1b8919 * _0x85ad45 * _0x463941 - _0x406cdb * _0x180415 * _0x39cb17;
        _0x455190(_0x5f2232, _0x113125, _0x1338a9, _0x45dc0d, _0x42a31f);
      }
    }
    function _0x5c7257(_0x277839, _0x1c00b6) {
      if (typeof RelativeOrientationSensor === "undefined") {
        if (_0x5f2232 == 0) {
          _0x5f2232 = _0x277839;
          _0x188dc2(1);
          window.addEventListener("deviceorientation", _0x28e045);
        }
        return;
      }
      _0x5f2232 = _0x277839;
      function _0x5aa517(_0x26865b) {
        _0x5c2d20 = new RelativeOrientationSensor({
          frequency: _0x26865b,
          referenceFrame: "device"
        });
        _0x5c2d20.addEventListener("reading", _0x1e3355);
        _0x5c2d20.addEventListener("error", function (_0x538524) {
          _0xcabc97(_0x538524.error ? _0x538524.error : _0x538524);
        });
        _0x5c2d20.start();
      }
      if (_0x5c2d20) {
        _0x5c2d20.stop();
        _0x5c2d20.removeEventListener("reading", _0x1e3355);
        _0x5aa517(_0x1c00b6);
      } else if (_0x358dcf != 0) {
        _0x358dcf = _0x1c00b6;
      } else {
        _0x358dcf = _0x1c00b6;
        Promise.all([navigator.permissions.query({
          name: "accelerometer"
        }), navigator.permissions.query({
          name: "gyroscope"
        })]).then(function (_0x4e3924) {
          if (_0x4e3924.every(function (_0x48a460) {
            return _0x48a460.state === "granted";
          })) {
            _0x5aa517(_0x358dcf);
          } else {
            _0xcabc97("No permissions to use RelativeOrientationSensor.");
          }
          _0x358dcf = 0;
        });
      }
    }
    function _0xfd8730() {
      if (_0x5c2d20) {
        _0x5c2d20.stop();
        _0x5c2d20.removeEventListener("reading", _0x1e3355);
        _0x5c2d20 = null;
      } else if (_0x5f2232 != 0) {
        window.removeEventListener("deviceorientation", _0x28e045);
      }
      _0x5f2232 = 0;
    }
    function _0x3fc19b() {
      if (_0x40fe32 == 0) {
        return;
      }
      _0x188dc2(_0x40fe32);
    }
    function _0x6b6b44() {
      _0x339df7.QuitCleanup();
    }
    var _0x5348ac = 0;
    function _0x4df2be() {
      if (_0x5348ac) {
        _0x4a04ed(_0x5348ac, window.innerWidth, window.innerHeight, screen.orientation ? screen.orientation.angle : window.orientation);
      }
    }
    function _0x2142f6() {
      _0x5348ac = 0;
      window.removeEventListener("resize", _0x4df2be);
      if (screen.orientation) {
        screen.orientation.removeEventListener("change", _0x4df2be);
      }
    }
    function _0x27f5fe(_0x27c314) {
      if (!_0x5348ac) {
        if (screen.orientation) {
          screen.orientation.addEventListener("change", _0x4df2be);
        }
        window.addEventListener("resize", _0x4df2be);
        _0x5348ac = _0x27c314;
        setTimeout(_0x4df2be, 0);
      }
    }
    var _0x4a4f80 = -1;
    var _0x1056af = -1;
    var _0x2d6a21 = -1;
    function _0x154c38(_0x10731d) {
      if (!screen.orientation || !screen.orientation.lock) {
        return;
      }
      function _0x4fb8b0() {
        _0x1056af = _0x4a4f80;
        var _0x372afc = ["any", 0, "landscape", "portrait", "portrait-primary", "portrait-secondary", "landscape-primary", "landscape-secondary"];
        var _0xa801fd = _0x372afc[_0x1056af];
        screen.orientation.lock(_0xa801fd).then(function () {
          if (_0x4a4f80 != _0x1056af) {
            _0x2d6a21 = setTimeout(_0x4fb8b0, 0);
          } else {
            _0x2d6a21 = -1;
          }
        }).catch(function (_0x22dbfa) {
          _0xcabc97(_0x22dbfa);
          _0x2d6a21 = -1;
        });
      }
      _0x4a4f80 = _0x10731d;
      if (_0x2d6a21 == -1 && _0x10731d != _0x1056af) {
        _0x2d6a21 = setTimeout(_0x4fb8b0, 0);
      }
    }
    var _0x3b8662 = {
      audioInstanceIdCounter: 0,
      audioInstances: {},
      audioContext: null,
      audioWebEnabled: 0,
      audioCache: [],
      pendingAudioSources: {},
      FAKEMOD_SAMPLERATE: 44100
    };
    function _0x29a8bf(_0x504b1a) {
      _0x504b1a.estimatePlaybackPosition = function () {
        var _0x2420ec = (_0x3b8662.audioContext.currentTime - _0x504b1a.playbackStartTime) * _0x504b1a.playbackRate.value;
        if (_0x504b1a.loop && _0x2420ec >= _0x504b1a.loopStart) {
          _0x2420ec = (_0x2420ec - _0x504b1a.loopStart) % (_0x504b1a.loopEnd - _0x504b1a.loopStart) + _0x504b1a.loopStart;
        }
        return _0x2420ec;
      };
      _0x504b1a.setPitch = function (_0x5c86dc) {
        var _0x2c4601 = _0x504b1a.estimatePlaybackPosition();
        if (_0x2c4601 >= 0) {
          _0x504b1a.playbackStartTime = _0x3b8662.audioContext.currentTime - _0x2c4601 / _0x5c86dc;
        }
        if (_0x504b1a.playbackRate.value !== _0x5c86dc) {
          _0x504b1a.playbackRate.value = _0x5c86dc;
        }
      };
    }
    function _0x1dee99(_0x41f338, _0x2b622c) {
      var _0x594179 = {
        buffer: _0x41f338,
        error: _0x2b622c
      };
      _0x594179.release = function () {};
      _0x594179.getLength = function () {
        if (!this.buffer) {
          console.log("Trying to get length of sound which is not loaded.");
          return 0;
        }
        return this.buffer.length;
      };
      _0x594179.getData = function (_0x420653, _0x2ee127) {
        if (!this.buffer) {
          console.log("Trying to get data of sound which is not loaded.");
          return 0;
        }
        var _0x53f25e = _0x420653 >> 2;
        var _0xe7c63c = _0x50a76e.subarray(_0x53f25e, _0x53f25e + (_0x2ee127 >> 2));
        var _0x4253d9 = Math.floor((_0x2ee127 >> 2) / this.buffer.numberOfChannels);
        var _0x30b647 = Math.min(this.buffer.length, _0x4253d9);
        for (var _0x119b31 = 0; _0x119b31 < this.buffer.numberOfChannels; _0x119b31++) {
          var _0x56aab6 = this.buffer.getChannelData(_0x119b31).subarray(0, _0x30b647);
          _0xe7c63c.set(_0x56aab6, _0x119b31 * _0x30b647);
        }
        return _0x30b647 * this.buffer.numberOfChannels * 4;
      };
      _0x594179.getNumberOfChannels = function () {
        if (!this.buffer) {
          console.log("Trying to get metadata of sound which is not loaded.");
          return 0;
        }
        return this.buffer.numberOfChannels;
      };
      _0x594179.getFrequency = function () {
        if (!this.buffer) {
          console.log("Trying to get metadata of sound which is not loaded.");
          return 0;
        }
        return this.buffer.sampleRate;
      };
      _0x594179.createSourceNode = function () {
        if (!this.buffer) {
          console.log("Trying to play sound which is not loaded.");
        }
        var _0x51ab61 = _0x3b8662.audioContext.createBufferSource();
        _0x51ab61.buffer = this.buffer;
        _0x29a8bf(_0x51ab61);
        return _0x51ab61;
      };
      return _0x594179;
    }
    function _0x2f4ac5(_0x541e78, _0x963b15) {
      var _0x39e966 = {
        callback: _0x541e78,
        userData: _0x963b15,
        source: null,
        gain: _0x3b8662.audioContext.createGain(),
        panner: _0x3b8662.audioContext.createPanner(),
        spatialBlendDryGain: _0x3b8662.audioContext.createGain(),
        spatialBlendWetGain: _0x3b8662.audioContext.createGain(),
        spatialBlendLevel: 0,
        loop: false,
        loopStart: 0,
        loopEnd: 0,
        pitch: 1
      };
      _0x39e966.panner.rolloffFactor = 0;
      _0x39e966.release = function () {
        this.disconnectSource();
        this.gain.disconnect();
        this.panner.disconnect();
      };
      _0x39e966.playSoundClip = function (_0x608e07, _0xc887d7, _0x292c65) {
        try {
          var _0x5d6a1f = this;
          this.source = _0x608e07.createSourceNode();
          this.configurePanningNodes();
          this.setSpatialBlendLevel(this.spatialBlendLevel);
          this.source.onended = function () {
            _0x5d6a1f.source.isStopped = true;
            _0x5d6a1f.disconnectSource();
            if (_0x5d6a1f.callback) {
              _0x58324c("vi", _0x5d6a1f.callback, [_0x5d6a1f.userData]);
            }
          };
          this.source.loop = this.loop;
          this.source.loopStart = this.loopStart;
          this.source.loopEnd = this.loopEnd;
          this.source.start(_0xc887d7, _0x292c65);
          this.source.playbackStartTime = _0xc887d7 - _0x292c65 / this.source.playbackRate.value;
          this.source.setPitch(this.pitch);
        } catch (_0x34617c) {
          console.error("Channel.playSoundClip error. Exception: " + _0x34617c);
        }
      };
      _0x39e966.stop = function (_0x7ebe9f) {
        if (!this.source) {
          return;
        }
        try {
          _0x39e966.source.stop(_0x3b8662.audioContext.currentTime + _0x7ebe9f);
        } catch (_0x5147e1) {}
        if (_0x7ebe9f == 0) {
          this.disconnectSource();
        }
      };
      _0x39e966.isPaused = function () {
        if (!this.source) {
          return true;
        }
        if (this.source.isPausedMockNode) {
          return true;
        }
        if (this.source.mediaElement) {
          return this.source.mediaElement.paused || this.source.pauseRequested;
        }
        return false;
      };
      _0x39e966.pause = function () {
        if (!this.source || this.source.isPausedMockNode) {
          return;
        }
        if (this.source.mediaElement) {
          this.source._pauseMediaElement();
          return;
        }
        var _0x5cfaa3 = {
          isPausedMockNode: true,
          buffer: this.source.buffer,
          loop: this.source.loop,
          loopStart: this.source.loopStart,
          loopEnd: this.source.loopEnd,
          playbackRate: this.source.playbackRate.value,
          scheduledStopTime: undefined,
          playbackPausedAtPosition: this.source.estimatePlaybackPosition(),
          setPitch: function (_0x5d1bde) {
            this.playbackRate = _0x5d1bde;
          },
          stop: function (_0x197803) {
            this.scheduledStopTime = _0x197803;
          }
        };
        this.stop(0);
        this.disconnectSource();
        this.source = _0x5cfaa3;
      };
      _0x39e966.resume = function () {
        if (this.source && this.source.mediaElement) {
          this.source.start(undefined, this.source.currentTime);
          return;
        }
        if (!this.source || !this.source.isPausedMockNode) {
          return;
        }
        var _0x2ec18f = this.source;
        var _0x23ff72 = _0x1dee99(_0x2ec18f.buffer, false);
        this.playSoundClip(_0x23ff72, _0x3b8662.audioContext.currentTime, Math.max(0, _0x2ec18f.playbackPausedAtPosition));
        this.source.loop = _0x2ec18f.loop;
        this.source.loopStart = _0x2ec18f.loopStart;
        this.source.loopEnd = _0x2ec18f.loopEnd;
        this.source.setPitch(_0x2ec18f.playbackRate);
        if (typeof _0x2ec18f.scheduledStopTime !== "undefined") {
          var _0x283659 = Math.max(_0x2ec18f.scheduledStopTime - _0x3b8662.audioContext.currentTime, 0);
          this.stop(_0x283659);
        }
      };
      _0x39e966.setLoop = function (_0x273844) {
        this.loop = _0x273844;
        if (!this.source || this.source.loop == _0x273844) {
          return;
        }
        this.source.loop = _0x273844;
      };
      _0x39e966.setLoopPoints = function (_0x3cff88, _0x5cd5c2) {
        this.loopStart = _0x3cff88;
        this.loopEnd = _0x5cd5c2;
        if (!this.source) {
          return;
        }
        if (this.source.loopStart !== _0x3cff88) {
          this.source.loopStart = _0x3cff88;
        }
        if (this.source.loopEnd !== _0x5cd5c2) {
          this.source.loopEnd = _0x5cd5c2;
        }
      };
      _0x39e966.set3D = function (_0x410492) {
        if (this.spatialBlendLevel != _0x410492) {
          this.setSpatialBlendLevel(_0x410492);
        }
      };
      _0x39e966.setPitch = function (_0x218a2b) {
        this.pitch = _0x218a2b;
        if (!this.source) {
          return;
        }
        this.source.setPitch(_0x218a2b);
      };
      _0x39e966.setVolume = function (_0x182cb7) {
        if (this.gain.gain.value == _0x182cb7) {
          return;
        }
        this.gain.gain.value = _0x182cb7;
      };
      _0x39e966.setPosition = function (_0x521556, _0x297121, _0x4ec1a0) {
        var _0x217453 = this.panner;
        if (_0x217453.positionX) {
          if (_0x217453.positionX.value !== _0x521556) {
            _0x217453.positionX.value = _0x521556;
          }
          if (_0x217453.positionY.value !== _0x297121) {
            _0x217453.positionY.value = _0x297121;
          }
          if (_0x217453.positionZ.value !== _0x4ec1a0) {
            _0x217453.positionZ.value = _0x4ec1a0;
          }
        } else if (_0x217453._x !== _0x521556 || _0x217453._y !== _0x297121 || _0x217453._z !== _0x4ec1a0) {
          _0x217453.setPosition(_0x521556, _0x297121, _0x4ec1a0);
          _0x217453._x = _0x521556;
          _0x217453._y = _0x297121;
          _0x217453._z = _0x4ec1a0;
        }
      };
      _0x39e966.disconnectSource = function () {
        if (!this.source || this.source.isPausedMockNode) {
          return;
        }
        if (this.source.mediaElement) {
          this.source._pauseMediaElement();
        }
        this.source.onended = null;
        this.source.disconnect();
        delete this.source;
      };
      _0x39e966.setSpatialBlendLevel = function (_0x24e358) {
        var _0x498dd3 = this.source && !this.source.isPausedMockNode;
        var _0x2986da = this.spatialBlendLevel > 0 && _0x24e358 == 0 || this.spatialBlendLevel == 0 && _0x24e358 > 0;
        var _0x3a4b70 = _0x498dd3 && _0x2986da;
        this.spatialBlendWetGain.gain.value = _0x24e358;
        this.spatialBlendDryGain.gain.value = 1 - _0x24e358;
        this.spatialBlendLevel = _0x24e358;
        if (_0x3a4b70) {
          this.configurePanningNodes();
        }
      };
      _0x39e966.configurePanningNodes = function () {
        if (!this.source) {
          return;
        }
        this.source.disconnect();
        this.spatialBlendDryGain.disconnect();
        this.spatialBlendWetGain.disconnect();
        this.panner.disconnect();
        this.gain.disconnect();
        if (this.spatialBlendLevel > 0) {
          this.source.connect(this.spatialBlendDryGain);
          this.spatialBlendDryGain.connect(this.gain);
          this.source.connect(this.spatialBlendWetGain);
          this.spatialBlendWetGain.connect(this.panner);
          this.panner.connect(this.gain);
        } else {
          this.source.connect(this.gain);
        }
        this.gain.connect(_0x3b8662.audioContext.destination);
      };
      _0x39e966.isStopped = function () {
        if (!this.source) {
          return true;
        }
        if (this.source.mediaElement) {
          return this.source.isStopped;
        }
        return false;
      };
      return _0x39e966;
    }
    function _0x55bfb3(_0xf96c4d, _0x4a1c1b) {
      if (_0x3b8662.audioWebEnabled == 0) {
        return;
      }
      _0x3b8662.audioInstances[++_0x3b8662.audioInstanceIdCounter] = _0x2f4ac5(_0xf96c4d, _0x4a1c1b);
      return _0x3b8662.audioInstanceIdCounter;
    }
    function _0xdde45a(_0x36c5b1) {
      if (_0x3b8662.audioWebEnabled == 0) {
        return _0x3b8662.FAKEMOD_SAMPLERATE;
      }
      var _0x40b67a = _0x3b8662.audioInstances[_0x36c5b1];
      if (!_0x40b67a) {
        return _0x3b8662.FAKEMOD_SAMPLERATE;
      }
      var _0x370584 = _0x40b67a.buffer ? _0x40b67a.buffer : _0x40b67a.source ? _0x40b67a.source.buffer : 0;
      if (!_0x370584) {
        return _0x3b8662.FAKEMOD_SAMPLERATE;
      }
      return _0x370584.sampleRate;
    }
    function _0x3ec6ea() {
      if (_0x3b8662.audioWebEnabled == 0) {
        return _0x3b8662.FAKEMOD_SAMPLERATE;
      }
      return _0x3b8662.audioContext.sampleRate;
    }
    function _0x43685d(_0xe7b0e1) {
      if (_0x3b8662.audioWebEnabled == 0) {
        return 0;
      }
      var _0x24c5f7 = _0x3b8662.audioInstances[_0xe7b0e1];
      if (!_0x24c5f7) {
        return 0;
      }
      return _0x24c5f7.getLength();
    }
    function _0x2ff599(_0x1cc181) {
      if (_0x3b8662.audioWebEnabled == 0) {
        return 2;
      }
      var _0x1256f9 = _0x3b8662.audioInstances[_0x1cc181];
      if (_0x1256f9.error) {
        return 2;
      }
      if (_0x1256f9.buffer || _0x1256f9.url) {
        return 0;
      }
      return 1;
    }
    function _0x447676(_0x55ac48) {
      var _0x116c90 = _0x3b8662.pendingAudioSources[_0x55ac48];
      _0x116c90.sourceNode._startPlayback(_0x116c90.offset);
      delete _0x3b8662.pendingAudioSources[_0x55ac48];
    }
    function _0x3f0c08() {
      Object.keys(_0x3b8662.pendingAudioSources).forEach(function (_0x48f869) {
        _0x447676(_0x48f869);
      });
    }
    function _0x3d5773() {
      try {
        window.AudioContext = window.AudioContext || window.webkitAudioContext;
        _0x3b8662.audioContext = new AudioContext();
        function _0x4a9616() {
          if (_0x3b8662.audioContext.state === "suspended") {
            _0x3b8662.audioContext.resume().catch(function (_0x534327) {
              console.warn("Could not resume audio context. Exception: " + _0x534327);
            });
          } else {
            _0x339df7.clearInterval(_0x37b5d5);
          }
        }
        var _0x37b5d5 = _0x339df7.setInterval(_0x4a9616, 400);
        _0x3b8662.audioWebEnabled = 1;
        function _0x3cfd33() {
          try {
            if (_0x3b8662.audioContext.state !== "running" && _0x3b8662.audioContext.state !== "closed") {
              _0x3b8662.audioContext.resume().catch(function (_0x4a686e) {
                console.warn("Could not resume audio context. Exception: " + _0x4a686e);
              });
            }
            _0x3f0c08();
            var _0x4dd823 = 20;
            while (_0x3b8662.audioCache.length < _0x4dd823) {
              var _0x2bbffb = new Audio();
              _0x2bbffb.autoplay = false;
              _0x3b8662.audioCache.push(_0x2bbffb);
            }
          } catch (_0x4ed075) {}
        }
        window.addEventListener("mousedown", _0x3cfd33);
        window.addEventListener("touchstart", _0x3cfd33);
        _0x339df7.deinitializers.push(function () {
          window.removeEventListener("mousedown", _0x3cfd33);
          window.removeEventListener("touchstart", _0x3cfd33);
        });
      } catch (_0x589d18) {
        alert("Web Audio API is not supported in this browser");
      }
    }
    function _0x39cc14(_0x52f0bf) {
      if (_0x3b8662.audioWebEnabled == 0) {
        return true;
      }
      var _0x238cbe = _0x3b8662.audioInstances[_0x52f0bf];
      if (!_0x238cbe) {
        return true;
      }
      return _0x238cbe.isStopped();
    }
    function _0x170796(_0x56d698) {
      var _0x393467 = _0x1dee99(null, false);
      _0x3b8662.audioContext.decodeAudioData(_0x56d698, function (_0x4b2f7f) {
        _0x393467.buffer = _0x4b2f7f;
      }, function (_0x26568e) {
        _0x393467.error = true;
        console.log("Decode error: " + _0x26568e);
      });
      return _0x393467;
    }
    function _0x55897a(_0x4110ed, _0x331586) {
      _0x3b8662.pendingAudioSources[_0x4110ed.mediaElement.src] = {
        sourceNode: _0x4110ed,
        offset: _0x331586
      };
    }
    function _0x257d74(_0x165689) {
      switch (_0x165689) {
        case 13:
          return "audio/mpeg";
        case 20:
          return "audio/wav";
        default:
          return "audio/mp4";
      }
    }
    function _0x35d621(_0x21ce3e, _0x491847) {
      var _0x179de4 = _0x257d74(_0x491847);
      var _0x8e6d2b = new Blob([_0x21ce3e], {
        type: _0x179de4
      });
      var _0x35de96 = {
        url: URL.createObjectURL(_0x8e6d2b),
        error: false,
        mediaElement: new Audio()
      };
      _0x35de96.mediaElement.preload = "metadata";
      _0x35de96.mediaElement.src = _0x35de96.url;
      _0x35de96.release = function () {
        if (!this.mediaElement) {
          return;
        }
        this.mediaElement.src = "";
        URL.revokeObjectURL(this.url);
        delete this.mediaElement;
        delete this.url;
      };
      _0x35de96.getLength = function () {
        return this.mediaElement.duration * 44100;
      };
      _0x35de96.getData = function (_0xfd5b9a, _0x20ec5a) {
        console.warn("getData() is not supported for compressed sound.");
        return 0;
      };
      _0x35de96.getNumberOfChannels = function () {
        console.warn("getNumberOfChannels() is not supported for compressed sound.");
        return 0;
      };
      _0x35de96.getFrequency = function () {
        console.warn("getFrequency() is not supported for compressed sound.");
        return 0;
      };
      _0x35de96.createSourceNode = function () {
        var _0x2c2958 = this;
        var _0x1c7665 = _0x3b8662.audioCache.length ? _0x3b8662.audioCache.pop() : new Audio();
        _0x1c7665.preload = "metadata";
        _0x1c7665.src = this.url;
        var _0x422974 = _0x3b8662.audioContext.createMediaElementSource(_0x1c7665);
        Object.defineProperty(_0x422974, "loop", {
          get: function () {
            return _0x422974.mediaElement.loop;
          },
          set: function (_0x386726) {
            if (_0x422974.mediaElement.loop !== _0x386726) {
              _0x422974.mediaElement.loop = _0x386726;
            }
          }
        });
        _0x422974.playbackRate = {};
        Object.defineProperty(_0x422974.playbackRate, "value", {
          get: function () {
            return _0x422974.mediaElement.playbackRate;
          },
          set: function (_0x196b70) {
            if (_0x422974.mediaElement.playbackRate !== _0x196b70) {
              _0x422974.mediaElement.playbackRate = _0x196b70;
            }
          }
        });
        Object.defineProperty(_0x422974, "currentTime", {
          get: function () {
            return _0x422974.mediaElement.currentTime;
          },
          set: function (_0x5745a8) {
            if (_0x422974.mediaElement.currentTime !== _0x5745a8) {
              _0x422974.mediaElement.currentTime = _0x5745a8;
            }
          }
        });
        Object.defineProperty(_0x422974, "mute", {
          get: function () {
            return _0x422974.mediaElement.mute;
          },
          set: function (_0xaba867) {
            if (_0x422974.mediaElement.mute !== _0xaba867) {
              _0x422974.mediaElement.mute = _0xaba867;
            }
          }
        });
        Object.defineProperty(_0x422974, "onended", {
          get: function () {
            return _0x422974.mediaElement.onended;
          },
          set: function (_0x860f58) {
            _0x422974.mediaElement.onended = _0x860f58;
          }
        });
        _0x422974.playPromise = null;
        _0x422974.playTimeout = null;
        _0x422974.pauseRequested = false;
        _0x422974.isStopped = false;
        _0x422974._pauseMediaElement = function () {
          if (_0x422974.playPromise || _0x422974.playTimeout) {
            _0x422974.pauseRequested = true;
          } else {
            _0x422974.mediaElement.pause();
          }
        };
        _0x422974._startPlayback = function (_0x44cf2e) {
          if (_0x422974.playPromise || _0x422974.playTimeout) {
            _0x422974.mediaElement.currentTime = _0x44cf2e;
            _0x422974.pauseRequested = false;
            return;
          }
          _0x422974.mediaElement.currentTime = _0x44cf2e;
          _0x422974.playPromise = _0x422974.mediaElement.play();
          if (_0x422974.playPromise) {
            _0x422974.playPromise.then(function () {
              if (_0x422974.pauseRequested) {
                _0x422974.mediaElement.pause();
                _0x422974.pauseRequested = false;
              }
              _0x422974.playPromise = null;
            }).catch(function (_0x576547) {
              _0x422974.playPromise = null;
              if (_0x576547.name !== "NotAllowedError") {
                throw _0x576547;
              }
              _0x55897a(_0x422974, _0x44cf2e);
            });
          }
        };
        _0x422974.start = function (_0xa41eef, _0x2529a3) {
          if (typeof _0xa41eef === "undefined") {
            _0xa41eef = _0x3b8662.audioContext.currentTime;
          }
          if (typeof _0x2529a3 === "undefined") {
            _0x2529a3 = 0;
          }
          var _0x34f875 = 4;
          var _0x23b3ed = (_0xa41eef - _0x3b8662.audioContext.currentTime) * 1000;
          if (_0x23b3ed > _0x34f875) {
            _0x422974.playTimeout = setTimeout(function () {
              _0x422974.playTimeout = null;
              _0x422974._startPlayback(_0x2529a3);
            }, _0x23b3ed);
          } else {
            _0x422974._startPlayback(_0x2529a3);
          }
        };
        _0x422974.stop = function (_0x4158b7) {
          if (typeof _0x4158b7 === "undefined") {
            _0x4158b7 = _0x3b8662.audioContext.currentTime;
          }
          var _0xa0db39 = 4;
          var _0x5be233 = (_0x4158b7 - _0x3b8662.audioContext.currentTime) * 1000;
          if (_0x5be233 > _0xa0db39) {
            setTimeout(function () {
              _0x422974._pauseMediaElement();
              _0x422974.isStopped = true;
            }, _0x5be233);
          } else {
            _0x422974._pauseMediaElement();
            _0x422974.isStopped = true;
          }
        };
        _0x29a8bf(_0x422974);
        return _0x422974;
      };
      return _0x35de96;
    }
    function _0x425b22(_0x389f12, _0x3c33df, _0x46059c, _0x5dd38b) {
      if (_0x3b8662.audioWebEnabled == 0) {
        return 0;
      }
      var _0x4b4a27 = _0xb4481c.buffer.slice(_0x389f12, _0x389f12 + _0x3c33df);
      if (_0x3c33df < 131072) {
        _0x46059c = 1;
      }
      var _0x4bc31f;
      if (_0x46059c) {
        _0x4bc31f = _0x170796(_0x4b4a27);
      } else {
        _0x4bc31f = _0x35d621(_0x4b4a27, _0x5dd38b);
      }
      _0x3b8662.audioInstances[++_0x3b8662.audioInstanceIdCounter] = _0x4bc31f;
      return _0x3b8662.audioInstanceIdCounter;
    }
    function _0x493171(_0x2031b8, _0x69bf7e, _0x310eb1, _0x24f5d2) {
      var _0x16337b = _0x3b8662.audioContext.createBuffer(_0x2031b8, _0x69bf7e, _0x310eb1);
      for (var _0x5f5a3c = 0; _0x5f5a3c < _0x2031b8; _0x5f5a3c++) {
        var _0x52a077 = (_0x24f5d2 >> 2) + _0x69bf7e * _0x5f5a3c;
        var _0x197d12 = _0x16337b.copyToChannel || function (_0x153c0f, _0x1568a2, _0x4ab60f) {
          var _0x3ba06e = _0x153c0f.subarray(0, Math.min(_0x153c0f.length, this.length - (_0x4ab60f | 0)));
          this.getChannelData(_0x1568a2 | 0).set(_0x3ba06e, _0x4ab60f | 0);
        };
        _0x197d12.apply(_0x16337b, [_0x50a76e.subarray(_0x52a077, _0x52a077 + _0x69bf7e), _0x5f5a3c, 0]);
      }
      return _0x1dee99(_0x16337b, false);
    }
    function _0x451c77(_0x51e7c7, _0x30efd8, _0x1e0b77, _0x38c40d) {
      if (_0x3b8662.audioWebEnabled == 0) {
        return 0;
      }
      var _0x2d848a = _0x493171(_0x51e7c7, _0x30efd8, _0x1e0b77, _0x38c40d);
      _0x3b8662.audioInstances[++_0x3b8662.audioInstanceIdCounter] = _0x2d848a;
      return _0x3b8662.audioInstanceIdCounter;
    }
    function _0x5054e3(_0x2c0473, _0x182e02, _0x421c7c, _0x5e8046) {
      if (_0x3b8662.audioWebEnabled == 0) {
        return;
      }
      _0x1b22ea(_0x182e02, 0);
      var _0xc2f0aa = _0x3b8662.audioInstances[_0x2c0473];
      var _0x366ec1 = _0x3b8662.audioInstances[_0x182e02];
      if (!_0xc2f0aa) {
        console.log("Trying to play sound which is not loaded.");
        return;
      }
      try {
        _0x366ec1.playSoundClip(_0xc2f0aa, _0x3b8662.audioContext.currentTime + _0x5e8046, _0x421c7c);
      } catch (_0xf1af98) {
        console.error("playSoundClip error. Exception: " + e);
      }
    }
    function _0x22da95(_0x4fed58) {
      var _0x1aaa17 = _0x3b8662.audioInstances[_0x4fed58];
      if (_0x1aaa17) {
        _0x1aaa17.release();
      }
      delete _0x3b8662.audioInstances[_0x4fed58];
    }
    function _0x1dcfc2() {
      if (_0x3b8662.audioWebEnabled == 0) {
        return;
      }
      if (_0x3b8662.audioContext.state === "suspended") {
        _0x3b8662.audioContext.resume().catch(function (_0x51235e) {
          console.warn("Could not resume audio context. Exception: " + _0x51235e);
        });
      }
    }
    function _0x555b4a(_0x5f5a9f, _0xd4ca6b) {
      var _0x3c0965 = _0x3b8662.audioInstances[_0x5f5a9f];
      _0x3c0965.set3D(_0xd4ca6b);
    }
    function _0x2c2eee(_0x1dbbda, _0x56c510, _0x3e01a9, _0x2a0559, _0x226b91, _0x5b27fe) {
      if (_0x3b8662.audioWebEnabled == 0) {
        return;
      }
      _0x1dbbda = -_0x1dbbda;
      _0x56c510 = -_0x56c510;
      _0x3e01a9 = -_0x3e01a9;
      var _0x1f8e7e = _0x3b8662.audioContext.listener;
      if (_0x1f8e7e.forwardX) {
        if (_0x1f8e7e.forwardX.value !== _0x1dbbda) {
          _0x1f8e7e.forwardX.value = _0x1dbbda;
        }
        if (_0x1f8e7e.forwardY.value !== _0x56c510) {
          _0x1f8e7e.forwardY.value = _0x56c510;
        }
        if (_0x1f8e7e.forwardZ.value !== _0x3e01a9) {
          _0x1f8e7e.forwardZ.value = _0x3e01a9;
        }
        if (_0x1f8e7e.upX.value !== _0x2a0559) {
          _0x1f8e7e.upX.value = _0x2a0559;
        }
        if (_0x1f8e7e.upY.value !== _0x226b91) {
          _0x1f8e7e.upY.value = _0x226b91;
        }
        if (_0x1f8e7e.upZ.value !== _0x5b27fe) {
          _0x1f8e7e.upZ.value = _0x5b27fe;
        }
      } else if (_0x1f8e7e._forwardX !== _0x1dbbda || _0x1f8e7e._forwardY !== _0x56c510 || _0x1f8e7e._forwardZ !== _0x3e01a9 || _0x1f8e7e._upX !== _0x2a0559 || _0x1f8e7e._upY !== _0x226b91 || _0x1f8e7e._upZ !== _0x5b27fe) {
        _0x1f8e7e.setOrientation(_0x1dbbda, _0x56c510, _0x3e01a9, _0x2a0559, _0x226b91, _0x5b27fe);
        _0x1f8e7e._forwardX = _0x1dbbda;
        _0x1f8e7e._forwardY = _0x56c510;
        _0x1f8e7e._forwardZ = _0x3e01a9;
        _0x1f8e7e._upX = _0x2a0559;
        _0x1f8e7e._upY = _0x226b91;
        _0x1f8e7e._upZ = _0x5b27fe;
      }
    }
    function _0x1afd09(_0x1d504b, _0x47972c, _0x18ee92) {
      if (_0x3b8662.audioWebEnabled == 0) {
        return;
      }
      var _0x5ce183 = _0x3b8662.audioContext.listener;
      if (_0x5ce183.positionX) {
        if (_0x5ce183.positionX.value !== _0x1d504b) {
          _0x5ce183.positionX.value = _0x1d504b;
        }
        if (_0x5ce183.positionY.value !== _0x47972c) {
          _0x5ce183.positionY.value = _0x47972c;
        }
        if (_0x5ce183.positionZ.value !== _0x18ee92) {
          _0x5ce183.positionZ.value = _0x18ee92;
        }
      } else if (_0x5ce183._positionX !== _0x1d504b || _0x5ce183._positionY !== _0x47972c || _0x5ce183._positionZ !== _0x18ee92) {
        _0x5ce183.setPosition(_0x1d504b, _0x47972c, _0x18ee92);
        _0x5ce183._positionX = _0x1d504b;
        _0x5ce183._positionY = _0x47972c;
        _0x5ce183._positionZ = _0x18ee92;
      }
    }
    function _0x172e42(_0x154016, _0x475590) {
      if (_0x3b8662.audioWebEnabled == 0) {
        return;
      }
      var _0x178b00 = _0x3b8662.audioInstances[_0x154016];
      _0x178b00.setLoop(_0x475590);
    }
    function _0x414d7e(_0x405aa3, _0x1a043f, _0x1393a9) {
      if (_0x3b8662.audioWebEnabled == 0) {
        return;
      }
      var _0x58fbc0 = _0x3b8662.audioInstances[_0x405aa3];
      _0x58fbc0.setLoopPoints(_0x1a043f, _0x1393a9);
    }
    function _0x52839c(_0x32741c, _0x3baeb8) {
      if (_0x3b8662.audioWebEnabled == 0) {
        return;
      }
      var _0x58af60 = _0x3b8662.audioInstances[_0x32741c];
      if (_0x3baeb8 != _0x58af60.isPaused()) {
        if (_0x3baeb8) {
          _0x58af60.pause();
        } else {
          _0x58af60.resume();
        }
      }
    }
    function _0x44afa4(_0x2d730e, _0x2b9225) {
      if (_0x3b8662.audioWebEnabled == 0) {
        return;
      }
      try {
        var _0x12eb59 = _0x3b8662.audioInstances[_0x2d730e];
        _0x12eb59.setPitch(_0x2b9225);
      } catch (_0x553204) {
        console.error("JS_Sound_SetPitch(channel=" + _0x2d730e + ", pitch=" + _0x2b9225 + ") threw an exception: " + _0x553204);
      }
    }
    function _0x148a80(_0x477ffd, _0x54c4c5, _0x577bb4, _0x3846bf) {
      if (_0x3b8662.audioWebEnabled == 0) {
        return;
      }
      var _0x4be2c1 = _0x3b8662.audioInstances[_0x477ffd];
      _0x4be2c1.setPosition(_0x54c4c5, _0x577bb4, _0x3846bf);
    }
    function _0x590428(_0x5163aa, _0xcf2d7f) {
      if (_0x3b8662.audioWebEnabled == 0) {
        return;
      }
      try {
        var _0x5c109e = _0x3b8662.audioInstances[_0x5163aa];
        _0x5c109e.setVolume(_0xcf2d7f);
      } catch (_0x671d10) {
        console.error("JS_Sound_SetVolume(channel=" + _0x5163aa + ", volume=" + _0xcf2d7f + ") threw an exception: " + _0x671d10);
      }
    }
    function _0x1b22ea(_0x25c7da, _0x7c09c1) {
      if (_0x3b8662.audioWebEnabled == 0) {
        return;
      }
      var _0x5e4e2a = _0x3b8662.audioInstances[_0x25c7da];
      _0x5e4e2a.stop(_0x7c09c1);
    }
    function _0x1e2443(_0x61d471, _0x3fdab8) {
      var _0x220865 = _0x339df7.SystemInfo.browser;
      if (_0x61d471) {
        _0xb1d3f9(_0x220865, _0x61d471, _0x3fdab8);
      }
      return _0x12cdfc(_0x220865);
    }
    function _0xcfe8bd(_0x2e1e0c, _0x1542a4) {
      var _0x3b9174 = _0x339df7.SystemInfo.browserVersion;
      if (_0x2e1e0c) {
        _0xb1d3f9(_0x3b9174, _0x2e1e0c, _0x1542a4);
      }
      return _0x12cdfc(_0x3b9174);
    }
    function _0x3708cc(_0x4d5e9c, _0x571fa0, _0x2542ee) {
      var _0x5528f1 = _0x2b7aa3(_0x4d5e9c);
      var _0x5b93df = _0x5528f1 == "#canvas" ? _0x339df7.canvas : document.querySelector(_0x5528f1);
      var _0x28fd8f = 0;
      var _0x385ea3 = 0;
      if (_0x5b93df) {
        var _0x5df8ef = _0x5b93df.getBoundingClientRect();
        _0x28fd8f = _0x5df8ef.width;
        _0x385ea3 = _0x5df8ef.height;
      }
      _0x113710[_0x571fa0 >> 3] = _0x28fd8f;
      _0x113710[_0x2542ee >> 3] = _0x385ea3;
    }
    function _0x5248df(_0x1e94c7, _0x48d023) {
      if (_0x1e94c7) {
        _0xb1d3f9(document.URL, _0x1e94c7, _0x48d023);
      }
      return _0x12cdfc(document.URL);
    }
    function _0x429b98(_0x368397, _0xd468f1) {
      var _0x2932f1 = _0x339df7.SystemInfo.gpu;
      if (_0x368397) {
        _0xb1d3f9(_0x2932f1, _0x368397, _0xd468f1);
      }
      return _0x12cdfc(_0x2932f1);
    }
    function _0x4a9417(_0x21be12, _0x5ea68a) {
      var _0x5a80b6 = _0x339df7.SystemInfo.language;
      if (_0x21be12) {
        _0xb1d3f9(_0x5a80b6, _0x21be12, _0x5ea68a);
      }
      return _0x12cdfc(_0x5a80b6);
    }
    function _0x4e89e1() {
      return _0x339df7.matchWebGLToCanvasSize || _0x339df7.matchWebGLToCanvasSize === undefined;
    }
    function _0xb7459e() {
      return _0xb4481c.length / 1048576;
    }
    function _0x395e6e(_0x428e84, _0x3ef79e) {
      var _0x42f253 = _0x339df7.SystemInfo.os + " " + _0x339df7.SystemInfo.osVersion;
      if (_0x428e84) {
        _0xb1d3f9(_0x42f253, _0x428e84, _0x3ef79e);
      }
      return _0x12cdfc(_0x42f253);
    }
    function _0x49151f() {
      if (_0x339df7.matchWebGLToCanvasSize == false) {
        return 1;
      } else {
        return _0x339df7.devicePixelRatio || window.devicePixelRatio || 1;
      }
    }
    function _0x3fbd6c(_0x121762, _0x60b69c) {
      _0x113710[_0x121762 >> 3] = _0x339df7.SystemInfo.width;
      _0x113710[_0x60b69c >> 3] = _0x339df7.SystemInfo.height;
    }
    function _0x4fa16d(_0x57ba35, _0x588943) {
      if (_0x57ba35) {
        _0xb1d3f9(_0x339df7.streamingAssetsUrl, _0x57ba35, _0x588943);
      }
      return _0x12cdfc(_0x339df7.streamingAssetsUrl);
    }
    function _0x37ef73() {
      var _0x32fac3 = _0xc70178.getExtension("WEBGL_compressed_texture_astc");
      if (_0x32fac3 && _0x32fac3.getSupportedProfiles) {
        return _0x32fac3.getSupportedProfiles().includes("hdr");
      }
      return false;
    }
    function _0x37fdb0() {
      return _0x339df7.SystemInfo.hasCursorLock;
    }
    function _0x157e71() {
      return _0x339df7.SystemInfo.hasFullscreen;
    }
    function _0x5ae605() {
      return _0x339df7.SystemInfo.hasWebGL;
    }
    function _0x5bd9b0() {
      return !!_0x339df7.shouldQuit;
    }
    var _0x39a33c = {
      requests: {},
      responses: {},
      abortControllers: {},
      timer: {},
      nextRequestId: 1
    };
    function _0x393813(_0x3a4295) {
      var _0x2ea4c3 = _0x39a33c.abortControllers[_0x3a4295];
      if (!_0x2ea4c3 || _0x2ea4c3.signal.aborted) {
        return;
      }
      _0x2ea4c3.abort();
    }
    function _0x512ad6(_0x1f5560, _0x438702) {
      var _0xbb7dde = _0x2b7aa3(_0x1f5560);
      var _0x1db270 = _0x2b7aa3(_0x438702);
      var _0x43d6d0 = new AbortController();
      var _0x37c12d = {
        url: _0xbb7dde,
        init: {
          method: _0x1db270,
          signal: _0x43d6d0.signal,
          headers: {},
          enableStreamingDownload: false
        },
        tempBuffer: null,
        tempBufferSize: 0
      };
      _0x39a33c.abortControllers[_0x39a33c.nextRequestId] = _0x43d6d0;
      _0x39a33c.requests[_0x39a33c.nextRequestId] = _0x37c12d;
      return _0x39a33c.nextRequestId++;
    }
    function _0x1eac74(_0x21c1f7) {
      var _0x3b174e = _0x39a33c.responses[_0x21c1f7];
      if (!_0x3b174e) {
        return "";
      }
      if (_0x3b174e.headerString) {
        return _0x3b174e.headerString;
      }
      var _0x318dee = "";
      var _0x4e9a0a = _0x3b174e.headers.entries();
      for (var _0x204419 = _0x4e9a0a.next(); !_0x204419.done; _0x204419 = _0x4e9a0a.next()) {
        _0x318dee += _0x204419.value[0] + ": " + _0x204419.value[1] + "\r\n";
      }
      _0x3b174e.headerString = _0x318dee;
      return _0x318dee;
    }
    function _0x5f2208(_0x52daf2, _0x43784d, _0x49e3c4, _0x1c7c06, _0x4e5068) {
      var _0x177ca1 = _0x39a33c.responses[_0x52daf2];
      if (!_0x177ca1) {
        _0xb1d3f9("", _0x43784d, _0x49e3c4);
        _0xb1d3f9("", _0x1c7c06, _0x4e5068);
        return;
      }
      if (_0x43784d) {
        var _0x5b1a9f = _0x1eac74(_0x52daf2);
        _0xb1d3f9(_0x5b1a9f, _0x43784d, _0x49e3c4);
      }
      if (_0x1c7c06) {
        _0xb1d3f9(_0x177ca1.url, _0x1c7c06, _0x4e5068);
      }
    }
    function _0x2c9854(_0x4a204a, _0x543a0b) {
      var _0x39de95 = _0x39a33c.responses[_0x4a204a];
      if (!_0x39de95) {
        _0x195007[_0x543a0b >> 2] = 0;
        _0x195007[(_0x543a0b >> 2) + 1] = 0;
        return;
      }
      var _0x2afe21 = _0x1eac74(_0x4a204a);
      _0x195007[_0x543a0b >> 2] = _0x12cdfc(_0x2afe21);
      _0x195007[(_0x543a0b >> 2) + 1] = _0x12cdfc(_0x39de95.url);
    }
    function _0x4e1703(_0x4c44d2) {
      if (_0x39a33c.timer[_0x4c44d2]) {
        clearTimeout(_0x39a33c.timer[_0x4c44d2]);
      }
      delete _0x39a33c.requests[_0x4c44d2];
      delete _0x39a33c.responses[_0x4c44d2];
      delete _0x39a33c.abortControllers[_0x4c44d2];
      delete _0x39a33c.timer[_0x4c44d2];
    }
    function _0x2127e3(_0x1de126, _0x48fc97, _0x4cc413, _0x2a571b, _0x514ff8, _0x3f1145) {
      var _0x58d8ee = _0x39a33c.requests[_0x1de126];
      var _0x50eb63 = _0x39a33c.abortControllers[_0x1de126];
      function _0xefdb0b(_0x303eaf) {
        if (!_0x58d8ee.tempBuffer) {
          const _0x458fb3 = Math.max(_0x303eaf, 1024);
          _0x58d8ee.tempBuffer = _0x5d55ea(_0x458fb3);
          _0x58d8ee.tempBufferSize = _0x458fb3;
        }
        if (_0x58d8ee.tempBufferSize < _0x303eaf) {
          _0x6cc71d(_0x58d8ee.tempBuffer);
          _0x58d8ee.tempBuffer = _0x5d55ea(_0x303eaf);
          _0x58d8ee.tempBufferSize = _0x303eaf;
        }
        return _0x58d8ee.tempBuffer;
      }
      function _0x1c0992() {
        if (_0x39a33c.timer[_0x1de126]) {
          clearTimeout(_0x39a33c.timer[_0x1de126]);
          delete _0x39a33c.timer[_0x1de126];
        }
      }
      function _0x21d992(_0x40f1ef, _0x451baf) {
        _0x1c0992();
        if (!_0x514ff8) {
          return;
        }
        var _0x92a6f3 = 0;
        if (_0x58d8ee.init.enableStreamingDownload) {
          _0x58324c("viiiiii", _0x514ff8, [_0x2a571b, _0x40f1ef.status, 0, _0x451baf.length, 0, _0x92a6f3]);
        } else if (_0x451baf.length != 0) {
          var _0xaa2a5 = _0x5d55ea(_0x451baf.length);
          _0xb4481c.set(_0x451baf, _0xaa2a5);
          _0x58324c("viiiiii", _0x514ff8, [_0x2a571b, _0x40f1ef.status, _0xaa2a5, _0x451baf.length, 0, _0x92a6f3]);
        } else {
          _0x58324c("viiiiii", _0x514ff8, [_0x2a571b, _0x40f1ef.status, 0, 0, 0, _0x92a6f3]);
        }
        if (_0x58d8ee.tempBuffer) {
          _0x6cc71d(_0x58d8ee.tempBuffer);
        }
      }
      function _0x42fdfd(_0x3658b0, _0x185704) {
        _0x1c0992();
        if (!_0x514ff8) {
          return;
        }
        var _0x432466 = _0x12cdfc(_0x3658b0) + 1;
        var _0x15d34a = _0x5d55ea(_0x432466);
        _0xb1d3f9(_0x3658b0, _0x15d34a, _0x432466);
        _0x58324c("viiiiii", _0x514ff8, [_0x2a571b, 500, 0, 0, _0x15d34a, _0x185704]);
        _0x6cc71d(_0x15d34a);
        if (_0x58d8ee.tempBuffer) {
          _0x6cc71d(_0x58d8ee.tempBuffer);
        }
      }
      function _0xdef10b(_0x5e668d) {
        if (!_0x3f1145 || !_0x5e668d.lengthComputable) {
          return;
        }
        var _0x522966 = _0x5e668d.response;
        _0x39a33c.responses[_0x1de126] = _0x522966;
        if (_0x5e668d.chunk) {
          var _0x25aa2a = _0xefdb0b(_0x5e668d.chunk.length);
          _0xb4481c.set(_0x5e668d.chunk, _0x25aa2a);
          _0x58324c("viiiiii", _0x3f1145, [_0x2a571b, _0x522966.status, _0x5e668d.loaded, _0x5e668d.total, _0x25aa2a, _0x5e668d.chunk.length]);
        } else {
          _0x58324c("viiiiii", _0x3f1145, [_0x2a571b, _0x522966.status, _0x5e668d.loaded, _0x5e668d.total, 0, 0]);
        }
      }
      try {
        if (_0x4cc413 > 0) {
          var _0x969ed = _0xb4481c.subarray(_0x48fc97, _0x48fc97 + _0x4cc413);
          _0x58d8ee.init.body = new Blob([_0x969ed]);
        }
        if (_0x58d8ee.timeout) {
          _0x39a33c.timer[_0x1de126] = setTimeout(function () {
            _0x58d8ee.isTimedOut = true;
            _0x50eb63.abort();
          }, _0x58d8ee.timeout);
        }
        var _0x1354ba = _0x339df7.fetchWithProgress;
        _0x58d8ee.init.onProgress = _0xdef10b;
        if (_0x339df7.companyName && _0x339df7.productName && _0x339df7.cachedFetch) {
          _0x1354ba = _0x339df7.cachedFetch;
          _0x58d8ee.init.companyName = _0x339df7.companyName;
          _0x58d8ee.init.productName = _0x339df7.productName;
          _0x58d8ee.init.productVersion = _0x339df7.productVersion;
          _0x58d8ee.init.control = _0x339df7.cacheControl(_0x58d8ee.url);
        }
        _0x1354ba(_0x58d8ee.url, _0x58d8ee.init).then(function (_0x3da86a) {
          _0x39a33c.responses[_0x1de126] = _0x3da86a;
          _0x21d992(_0x3da86a, _0x3da86a.parsedBody);
        }).catch(function (_0x16958a) {
          var _0x57c465 = 2;
          var _0x5c78d1 = 17;
          var _0x4dce00 = 14;
          if (_0x58d8ee.isTimedOut) {
            _0x42fdfd("Connection timed out.", _0x4dce00);
          } else if (_0x50eb63.signal.aborted) {
            _0x42fdfd("Aborted.", _0x5c78d1);
          } else {
            _0x42fdfd(_0x16958a.message, _0x57c465);
          }
        });
      } catch (_0x41313d) {
        var _0x3a40c9 = 2;
        _0x42fdfd(_0x41313d.message, _0x3a40c9);
      }
    }
    function _0x46acb3(_0x184bcf, _0x2b0ee7) {
      var _0x28554c = _0x39a33c.requests[_0x184bcf];
      if (!_0x28554c) {
        return;
      }
      _0x28554c.init.redirect = _0x2b0ee7 === 0 ? "error" : "follow";
    }
    function _0x57ea46(_0x246a8a, _0x1ea5df, _0x401912) {
      var _0x429d5f = _0x39a33c.requests[_0x246a8a];
      if (!_0x429d5f) {
        return;
      }
      var _0x2a303f = _0x2b7aa3(_0x1ea5df);
      var _0x101215 = _0x2b7aa3(_0x401912);
      _0x429d5f.init.headers[_0x2a303f] = _0x101215;
    }
    function _0x22b1f9(_0x49118e, _0x40f755) {
      var _0xdbdacd = _0x39a33c.requests[_0x49118e];
      if (!_0xdbdacd) {
        return;
      }
      _0xdbdacd.timeout = _0x40f755;
    }
    function _0x31ee56(_0x3289f7, _0x275632, _0x473ffa, _0x1a7275) {
      var _0xe6f681 = _0x2b7aa3(_0x3289f7);
      var _0x15ea13 = _0x2b7aa3(_0x275632);
      var _0x3b06cb = _0x2b7aa3(_0x473ffa);
      var _0x807205 = _0x2b7aa3(_0x1a7275);

    }
    function _0x338d0a(_0x2907f8, _0x539a82, _0x528c08, _0x244aee) {

    }
    function _0x4d3cf3(_0x2879be, _0x5bbfd7, _0x15bcdb, _0x14e7d0) {

    }
    function _0x4e59d9(_0x85f70e, _0x45a48c, _0x6a99d, _0x1b0848, _0x1ac385) {

    }
    function _0x1e8f40(_0x294c3c, _0x4a4048, _0x5c5a5e, _0x368401, _0x353ff9, _0x4823f5) {

    }
    function _0x16d156(_0x19b124, _0x292cfe, _0x3892a1, _0x4c89a8) {

    }
    function _0x584a45(_0x908087) {

    }
    function _0xebef93(_0x5b33f4, _0x199d8d) {

    }
    function _0x4b3bca(_0xbccd6c, _0x391c9f, _0xa27358, _0x131ade, _0x3fecb1) {

    }
    function _0x3e48cd(_0x44763e, _0x500056, _0x181b14) {

    }
    function _0x2ee9f6(_0x29726e) {

    }
    function _0x54e572(_0x2d372f, _0x1d8823) {
      var _0x307fae;
      if (_0x1d8823 === true) {
        _0x307fae = _0x2d372f;
      } else {
        _0x307fae = _0x567fc0(_0x2d372f);
      }
      setTimeout(function () {
        _0x2ee9f6(_0x307fae);
      }, 250);
    }
    function _0x53936f(_0x5acf9f, _0xdd1a8, _0x309049, _0x32829a, _0x46f810) {

    }
    function _0x4f7b26(_0x524f62, _0x33fce5, _0x3dda28, _0x38db95, _0x177305) {

    }
    function _0x2d5672(_0x178f0e) {
      _0x178f0e = _0x567fc0(_0x178f0e);
      window.open(_0x178f0e);
    }
    function _0x15389d(_0x3e8244, _0xb65358) {
      return false;
    }
    function _0x587e59() {
      try {
        window[preroll.config.loaderObjectName].log("WGSDK: Refetching reward ad.");
        window[preroll.config.loaderObjectName].rewarded.initSlot.call(window[preroll.config.loaderObjectName]);
      } catch (_0x1bb600) {
        console.log("No WeeGooAFG implementation found!");
      }
    }
    function _0x20879a() {
      try {
        window[preroll.config.loaderObjectName].log("WGSDK: Game controls registered.");
        window[window.preroll.config.loaderObjectName].registerGameControls(_0x339df7);
      } catch (_0x21287c) {
        console.log("WGSDK: Can not register game controls.");
        setTimeout(function () {
          _0x20879a();
        }, 250);
      }
    }
    function _0x2ca3d1() {
      try {
        window[preroll.config.loaderObjectName].log("WGSDK: Reward callbacks registered.");
        window[window.preroll.config.loaderObjectName].registerRewardCallbacks({
          onReady: "OnReadyMethod",
          onSuccess: "OnSuccessMethod",
          onFail: "OnFailMethod"
        });
      } catch (_0x401edd) {
        console.log("WGSDK: Can not register reward ad callbacks.");
        _0x2f1b4e();
      }
    }
    function _0x2f1b4e() {
      setTimeout(function () {
        _0x2ca3d1();
      }, 250);
    }
    function _0x292db1(_0x329828, _0x2c8350, _0x4944c2, _0x1b0be9, _0x30b49c, _0x507977, _0x20c983) {

    }
    function _0x2d6c8d(_0x42271e, _0x4bfa49) {
      gmEvent(_0x2b7aa3(_0x42271e), _0x2b7aa3(_0x4bfa49));
    }
    function _0x265774(_0x5d9ee5, _0x5ef02f, _0x35fd84, _0x16e6cc, _0x3d69dd, _0x5e9076, _0x50b15c) {}
    function _0x1bdf93() {
      let _0x324cec = window.location.hostname;
      _0x14238e("GmSoft", "SetUnityHostName", _0x324cec);
      _0x14238e("GmSoft", "SetParam", JSON.stringify(window.GMSOFT_OPTIONS));
    }
    function _0x4aba8c() {
      if (window.GMSOFT_OPTIONS.enableAds == true) {
        if (window.GMSOFT_OPTIONS.sdkType == "wgplayer") {
          console.log("Setup rewarded ads called");
          window[window.preroll.config.loaderObjectName].registerRewardCallbacks({
            onReady: function (_0x97573b) {
              _0x14238e("GmSoft", "PreloadRewardedVideoCallback", 1);
              this._showRewardAdFn = showAdFn;
              console.log("The rewarded ad is ready. ");
            },
            onSuccess: function (_0x16f762) {
              this._showRewardAdFn = null;
              _0x14238e("GmSoft", "RewardedVideoSuccessCallback");
              console.log("The rewarded ad has been succesfully displayed, you can now grand the reward to user.");
            },
            onFail: function (_0x46bea9) {
              this._showRewardAdFn = null;
              _0x14238e("GmSoft", "RewardedVideoFailureCallback");
              console.log("The user did not go thrught");
            }
          });
        } else if (window.GMSOFT_OPTIONS.sdkType == "h5") {
          if (afg.ready) {
            _0x14238e("GmSoft", "PreloadRewardedVideoCallback", 1);
            afg.adBreak({
              type: "reward",
              name: "reward ads",
              beforeReward: function (_0xdba4f3) {
                this._showRewardAdFn = _0xdba4f3;
                console.log("before reward");
              }.bind(this),
              adViewed: function () {
                this._showRewardAdFn = null;
                _0x14238e("GmSoft", "RewardedVideoSuccessCallback");
                console.log("ad viewed");
              }.bind(this),
              adDismissed: function () {
                this._showRewardAdFn = null;
                _0x14238e("GmSoft", "RewardedVideoFailureCallback");
                console.log("ad failure");
              }.bind(this),
              adBreakDone: function (_0x5440fc) {
                console.log("ad break done");
                console.log("reward break done");
                _0x14238e("GmSoft", "ResumeGameCallback");
              }.bind(this)
            });
          } else {
            console.log("no reward ads");
            _0x14238e("GmSoft", "PreloadRewardedVideoCallback", 0);
            _0x14238e("GmSoft", "ResumeGameCallback");
          }
        }
      } else {
        _0x14238e("GmSoft", "ResumeGameCallback");
      }
    }
    function _0x41a938(_0x37123c) {
      _0x37123c = _0x2b7aa3(_0x37123c);
      if (typeof gdsdk !== "undefined" && typeof gdsdk.sendEvent !== "undefined" && typeof _0x37123c !== "undefined") {
        gdsdk.sendEvent(_0x37123c).then(function (_0x1678ad) {
          console.log("Game event post message sent Succesfully...");
        }).catch(function (_0x4365f0) {
          console.log(_0x4365f0.message);
        });
      }
    }
    function _0x3fd438(_0x2ec93c) {
      if (window.GMSOFT_OPTIONS.enableAds == true) {
        _0x2ec93c = _0x2b7aa3(_0x2ec93c);
        var _0xa2caa1 = ["preroll", "start", "pause", "next", "midroll", "browse", "reward", "preload-reward"];
        if (_0xa2caa1.indexOf(_0x2ec93c) > -1 == false) {
          _0x2ec93c = "start";
        }
        console.log("adType ===> :" + _0x2ec93c);
        console.log("GMSOFT_OPTIONS.sdkType ===> :" + GMSOFT_OPTIONS.sdkType);
        if (_0x2ec93c == "start" || _0x2ec93c == "preroll" || _0x2ec93c == "next" || _0x2ec93c == "midroll") {
          if (window.GMSOFT_OPTIONS.sdkType == "wgplayer") {
            if (_0x2ec93c == "start" || _0x2ec93c == "preroll") {
              window[preroll.config.loaderObjectName].fetchAd(function (_0x41b7b0) {
                _0x14238e("GmSoft", "ResumeGameCallback");
                console.log("Afg preroll has been displayed and is now finished, we cand now load the game");
              });
            } else if (_0x2ec93c == "midroll" || _0x2ec93c == "next") {
              window[preroll.config.loaderObjectName].refetchAd(function (_0x1fae17) {
                _0x14238e("GmSoft", "ResumeGameCallback");
                console.log("Afg preroll has been displayed and is now finished, we cand now load the game");
              });
            }
          } else if (window.GMSOFT_OPTIONS.sdkType == "h5") {
            if (afg.ready) {
              afg.adBreak({
                type: _0x2ec93c,
                name: _0x2ec93c,
                beforeAd: function () {
                  afg.onBeforeAd();
                  console.log("before ad");
                  _0x14238e("GmSoft", "PauseGameCallback");
                }.bind(this),
                adBreakDone: function () {
                  console.log("Preroll done viewed");
                  _0x14238e("GmSoft", "ResumeGameCallback");
                }.bind(this)
              });
            } else {
              console.log("no " + _0x2ec93c + " ads");
              _0x14238e("GmSoft", "ResumeGameCallback");
            }
          }
        } else if (_0x2ec93c == "reward") {
          if (window.GMSOFT_OPTIONS.sdkType == "wgplayer") {
            if (this._showRewardAdFn) {
              _0x14238e("GmSoft", "PauseGameCallback");
              window[window.preroll.config.loaderObjectName].showRewardAd();
            }
          } else if (window.GMSOFT_OPTIONS.sdkType == "h5") {
            if (this._showRewardAdFn) {
              _0x14238e("GmSoft", "PauseGameCallback");
              this._showRewardAdFn();
            }
          }
        }
      } else {
        _0x14238e("GmSoft", "ResumeGameCallback");
      }
    }
    function _0x1183f9(_0x2c9ffe, _0x259b66, _0x2ede72, _0x3560c0, _0x4e22ba, _0x7d1d3) {

    }
    function _0x3b594b(_0x9360c5) {
      var _0x14e228 = JSON.parse(_0x2b7aa3(_0x9360c5));
      firebase.analytics().setUserProperties(_0x14e228);
    }
    function _0x37850f() {
      window[preroll.config.loaderObjectName].showRewardAd();
    }
    function _0x684a29(_0x29409b, _0x1fb676, _0x10980d) {

    }
    function _0xf4c365(_0x19d728, _0x570b5a, _0x15f196, _0xd66059, _0x5d5af6) {

    }
    function _0x119fd3(_0x2ee6f3, _0x277093, _0x4aa177) {

    }
    function _0x4f91da(_0x2ad47d, _0x2ca653, _0x204ac3) {

    }
    function _0x425685(_0xb198e0, _0x3efd60, _0x515b17, _0x541412) {

    }
    function _0x3c854c(_0x2a7675, _0x126590, _0x2641dd, _0x533bbc) {

    }
    function _0x2ce281(_0x4e0b3b, _0x447dec, _0x39e77c, _0x5d863d) {

    }
    function _0x3612d5(_0x4e20b6, _0xe241fa, _0x2b9802, _0x27bebb) {

    }
    function _0x59c72f(_0x75167, _0xe0ddee, _0x4272c5, _0x193732, _0x5bb778) {

    }
    function _0x397f1b(_0x2f49b3, _0x6713fe, _0x4657ca, _0x581582) {

    }
    function _0x1a2e94(_0x33322c, _0x59e445, _0x24e711, _0x84620e) {

    }
    function _0x4d89fa(_0x47c637, _0x33330b, _0x13309d, _0x3d968d, _0x3b6190, _0x8975bf) {

    }
    function _0x104c30(_0x5e7251, _0x55ee50, _0xe5552d, _0x4c103d, _0x299b10) {

    }
    function _0x17156b(_0x5995bb, _0x557c27, _0x5d16a7, _0x5910a4, _0x15258a) {

    }
    var _0x39cad3 = {
      requestInstances: {},
      nextRequestId: 1,
      loglevel: 2,
      SendTextToCSharpSide: function (_0x1fe42e, _0x18efb1, _0x292deb) {
        const _0x399f4b = new TextEncoder();
        const _0x556e83 = _0x399f4b.encode(_0x292deb);
        const _0x386b45 = function (_0x23ece2, _0x2d1500) {
          return _0x5bffba.apply(null, [_0x39cad3.onallocbuffer, _0x23ece2, _0x2d1500]);
        }(_0x1fe42e, _0x556e83.length);
        _0xb4481c.set(_0x556e83, _0x386b45);
        (function (_0x59788f, _0x41d17d, _0x1f166c) {
          _0x4a04ed.apply(null, [_0x18efb1, _0x59788f, _0x41d17d, _0x1f166c]);
        })(_0x1fe42e, _0x386b45, _0x556e83.length);
      },
      GetResponseHeaders: function (_0x2baf88, _0x5c58db) {
        if (_0x39cad3.loglevel <= 1) {
          console.log("GetResponseHeaders(" + _0x2baf88 + ")");
        }
        var _0x217e03 = "";
        if (document && document.cookie) {
          var _0xae7332 = document.cookie.split(";");
          for (var _0x431718 = 0; _0x431718 < _0xae7332.length; ++_0x431718) {
            const _0x158fbc = _0xae7332[_0x431718].trim();
            if (_0x158fbc.length > 0) {
              _0x217e03 += "Set-Cookie:" + _0x158fbc + "\n";
            }
          }
        }
        const _0x2b3989 = _0x39cad3.requestInstances[_0x2baf88].getAllResponseHeaders().trim().split(/[\r\n]+/);
        _0x2b3989.forEach(_0x3b1835 => {
          const _0x16d86e = _0x3b1835.split(": ");
          const _0x68af12 = _0x16d86e.shift();
          const _0x47d44f = _0x16d86e.join(": ");
          if (_0x68af12 !== "content-length") {
            _0x217e03 += _0x68af12 + ":" + _0x47d44f + "\n";
          }
        });
        _0x39cad3.SendTextToCSharpSide(_0x2baf88, _0x5c58db, _0x217e03);
      }
    };
    function _0x11b0f2(_0x37f6dc) {
      if (_0x39cad3.loglevel <= 1) {
        console.log("XHR_Abort(" + _0x37f6dc + ")");
      }
      _0x39cad3.requestInstances[_0x37f6dc].abort();
    }
    function _0xe1b001(_0x204204, _0x1b6523, _0xd24545, _0x53a208, _0x4efa5d) {
      var _0x4ed5f7 = new URL(_0x2b7aa3(_0x1b6523));
      var _0xc1e3e7 = _0x2b7aa3(_0x204204);
      if (_0x39cad3.loglevel <= 1) {
        console.log("XHR_Create (" + _0x39cad3.nextRequestId + ", " + _0xc1e3e7 + ", " + _0x4ed5f7.toString() + ", " + _0x4efa5d + ")");
      }
      var _0x49f07e = new XMLHttpRequest();
      if (_0xd24545 && _0x53a208) {
        var _0x39a5af = _0x2b7aa3(_0xd24545);
        var _0x45fb79 = _0x2b7aa3(_0x53a208);
        _0x49f07e.withCredentials = true;
        _0x49f07e.open(_0xc1e3e7, _0x4ed5f7.toString(), true, _0x39a5af, _0x45fb79);
      } else {
        _0x49f07e.withCredentials = _0x4efa5d;
        _0x49f07e.open(_0xc1e3e7, _0x4ed5f7.toString(), true);
      }
      _0x49f07e.responseType = "arraybuffer";
      _0x39cad3.requestInstances[_0x39cad3.nextRequestId] = _0x49f07e;
      return _0x39cad3.nextRequestId++;
    }
    function _0x549e6a(_0x2601ae) {
      if (_0x39cad3.loglevel <= 1) {
        console.log("XHR_Release(" + _0x2601ae + ")");
      }
      delete _0x39cad3.requestInstances[_0x2601ae];
    }
    function _0x3a3b7a(_0x49bfc1, _0x181777, _0x34a05b) {
      if (_0x39cad3.loglevel <= 1) {
        console.log("XHR_Send(" + _0x49bfc1 + ", " + _0x181777 + ", " + _0x34a05b + ")");
      }
      var _0xb0546e = _0x39cad3.requestInstances[_0x49bfc1];
      try {
        if (_0x34a05b > 0) {
          _0xb0546e.send(_0xb4481c.subarray(_0x181777, _0x181777 + _0x34a05b));
        } else {
          _0xb0546e.send();
        }
      } catch (_0x49cad3) {
        if (_0x39cad3.loglevel <= 4) {
          console.error("XHR_Send(" + _0x49bfc1 + "): " + _0x49cad3.name + " : " + _0x49cad3.message);
        }
      }
    }
    function _0x14638c(_0x38d79b) {
      _0x39cad3.loglevel = _0x38d79b;
    }
    function _0x44c736(_0x1ddb42, _0x26df07, _0x5f257c) {
      if (_0x39cad3.loglevel <= 1) {
        console.log("XHR_SetProgressHandler(" + _0x1ddb42 + ")");
      }
      var _0xd07b99 = _0x39cad3.requestInstances[_0x1ddb42];
      if (_0xd07b99) {
        if (_0x26df07) {
          _0xd07b99.onprogress = function _0x314721(_0x5d5e21) {
            if (_0x39cad3.loglevel <= 1) {
              console.log("XHR_SetProgressHandler download(" + _0x1ddb42 + ", " + _0x5d5e21.loaded + ", " + _0x5d5e21.total + ")");
            }
            if (_0x5d5e21.lengthComputable) {
              (function (_0x46dcbd, _0xc07d01, _0x5a153d) {
                _0x4a04ed.apply(null, [_0x26df07, _0x46dcbd, _0xc07d01, _0x5a153d]);
              })(_0x1ddb42, _0x5d5e21.loaded, _0x5d5e21.total);
            }
          };
        }
        if (_0x5f257c) {
          _0xd07b99.upload.addEventListener("progress", function _0xc0c1d8(_0x499c92) {
            if (_0x39cad3.loglevel <= 1) {
              console.log("XHR_SetProgressHandler upload(" + _0x1ddb42 + ", " + _0x499c92.loaded + ", " + _0x499c92.total + ")");
            }
            if (_0x499c92.lengthComputable) {
              (function (_0x445325, _0x24aba3, _0x6fee5a) {
                _0x4a04ed.apply(null, [_0x5f257c, _0x445325, _0x24aba3, _0x6fee5a]);
              })(_0x1ddb42, _0x499c92.loaded, _0x499c92.total);
            }
          }, true);
        }
      }
    }
    function _0x4075df(_0x3d7374, _0x4a4500, _0x473ea2) {
      var _0x511200 = _0x2b7aa3(_0x4a4500);
      var _0x2f3667 = _0x2b7aa3(_0x473ea2);
      if (_0x39cad3.loglevel <= 1) {
        console.log("XHR_SetRequestHeader(" + _0x511200 + ", " + _0x2f3667 + ")");
      }
      if (_0x511200 != "Cookie") {
        _0x39cad3.requestInstances[_0x3d7374].setRequestHeader(_0x511200, _0x2f3667);
      } else {
        var _0x464161 = _0x2f3667.split(";");
        for (var _0x1fa791 = 0; _0x1fa791 < _0x464161.length; _0x1fa791++) {
          document.cookie = _0x464161[_0x1fa791];
        }
      }
    }
    function _0x505433(_0x59748e, _0x521e5e, _0x2b842d, _0x216d6d, _0x404197, _0x42a879, _0x4c1575) {
      if (_0x39cad3.loglevel <= 1) {
        console.log("XHR_SetResponseHandler(" + _0x59748e + ")");
      }
      _0x39cad3.onallocbuffer = _0x4c1575;
      var _0x293ea6 = _0x39cad3.requestInstances[_0x59748e];
      _0x293ea6.onreadystatechange = _0x4c74c9 => {
        if (_0x39cad3.loglevel <= 1) {
          console.log(_0x59748e + " onreadystatechange(" + _0x293ea6.readyState + ")");
        }
        switch (_0x293ea6.readyState) {
          case XMLHttpRequest.UNSENT:
            break;
          case XMLHttpRequest.OPENED:
            break;
          case XMLHttpRequest.HEADERS_RECEIVED:
            {
              _0x39cad3.SendTextToCSharpSide(_0x59748e, _0x42a879, "HTTP/1.1 " + _0x293ea6.status + " " + _0x293ea6.statusText + "\n");
              _0x39cad3.GetResponseHeaders(_0x59748e, _0x42a879);
              break;
            }
          case XMLHttpRequest.LOADING:
            break;
          case XMLHttpRequest.DONE:
            break;
        }
      };
      _0x293ea6.onloadstart = _0x1d86a4 => {
        if (_0x39cad3.loglevel <= 1) {
          console.log(_0x59748e + " onloadstart: " + _0x1d86a4);
        }
      };
      _0x293ea6.onload = function _0x1b6801(_0x38c8b6) {
        if (_0x39cad3.loglevel <= 1) {
          console.log(_0x59748e + " onload(" + _0x293ea6.status + ", " + _0x293ea6.statusText + ")");
        }
        if (_0x521e5e) {
          var _0x237868 = 0;
          var _0xe44bcf = 0;
          if (_0x293ea6.response) {
            var _0xc0be54 = _0x293ea6.response;
            _0x237868 = _0xc0be54.byteLength;
            _0x39cad3.SendTextToCSharpSide(_0x59748e, _0x42a879, "content-length:" + _0x237868 + "\n\n");
            _0xe44bcf = function (_0x553179, _0x4d83fd) {
              return _0x5bffba.apply(null, [_0x4c1575, _0x553179, _0x4d83fd]);
            }(_0x59748e, _0x237868);
            var _0x1809fc = new Uint8Array(_0xc0be54);
            var _0x4bb733 = _0xb4481c.subarray(_0xe44bcf, _0xe44bcf + _0x237868);
            _0x4bb733.set(_0x1809fc);
          } else {
            _0x39cad3.SendTextToCSharpSide(_0x59748e, _0x42a879, "content-length:0\n\n");
          }
          (function (_0x54083b, _0x46615d, _0x57937f) {
            _0x4a04ed.apply(null, [_0x521e5e, _0x54083b, _0x46615d, _0x57937f]);
          })(_0x59748e, _0xe44bcf, _0x237868);
        }
      };
      if (_0x2b842d) {
        _0x293ea6.onerror = function _0x2b43b7(_0xbe7050) {
          function _0x2c62e0(_0x4a3562) {
            var _0x4da1ef = _0x12cdfc(_0x4a3562) + 1;
            var _0x3b1b49 = _0x5d55ea(_0x4da1ef);
            _0x1dd967(_0x4a3562, _0xb4481c, _0x3b1b49, _0x4da1ef);
            (function (_0x1a02f8, _0x34aca6) {
              _0x4cc732.apply(null, [_0x2b842d, _0x1a02f8, _0x34aca6]);
            })(_0x59748e, _0x3b1b49);
            _0x6cc71d(_0x3b1b49);
          }
          if (_0xbe7050.error) {
            _0x2c62e0(_0xbe7050.error);
          } else {
            _0x2c62e0("Unknown Error! Maybe a CORS porblem?");
          }
        };
      }
      if (_0x216d6d) {
        _0x293ea6.ontimeout = function _0x2fe888(_0x234b6e) {
          (function (_0x5dcecb) {
            _0x4f6e0f.apply(null, [_0x216d6d, _0x5dcecb]);
          })(_0x59748e);
        };
      }
      if (_0x404197) {
        _0x293ea6.onabort = function _0x2fda4e(_0x47e1cb) {
          (function (_0x3918bb) {
            _0x4f6e0f.apply(null, [_0x404197, _0x3918bb]);
          })(_0x59748e);
        };
      }
    }
    function _0x544fc8(_0x2d9718, _0x111318) {
      if (_0x39cad3.loglevel <= 1) {
        console.log("XHR_SetTimeout(" + _0x2d9718 + ", " + _0x111318 + ")");
      }
      _0x39cad3.requestInstances[_0x2d9718].timeout = _0x111318;
    }
    function _0x13e924(_0x582b7e) {
      return _0x5d55ea(_0x582b7e + 16) + 16;
    }
    function _0x46e615(_0xc37375) {
      this.excPtr = _0xc37375;
      this.ptr = _0xc37375 - 16;
      this.set_type = function (_0x16f7b3) {
        _0x47a7a3[this.ptr + 4 >> 2] = _0x16f7b3;
      };
      this.get_type = function () {
        return _0x47a7a3[this.ptr + 4 >> 2];
      };
      this.set_destructor = function (_0x3131a2) {
        _0x47a7a3[this.ptr + 8 >> 2] = _0x3131a2;
      };
      this.get_destructor = function () {
        return _0x47a7a3[this.ptr + 8 >> 2];
      };
      this.set_refcount = function (_0x264bc0) {
        _0x47a7a3[this.ptr >> 2] = _0x264bc0;
      };
      this.set_caught = function (_0x1f7083) {
        _0x1f7083 = _0x1f7083 ? 1 : 0;
        _0x2845ef[this.ptr + 12 >> 0] = _0x1f7083;
      };
      this.get_caught = function () {
        return _0x2845ef[this.ptr + 12 >> 0] != 0;
      };
      this.set_rethrown = function (_0x57ff37) {
        _0x57ff37 = _0x57ff37 ? 1 : 0;
        _0x2845ef[this.ptr + 13 >> 0] = _0x57ff37;
      };
      this.get_rethrown = function () {
        return _0x2845ef[this.ptr + 13 >> 0] != 0;
      };
      this.init = function (_0x3659eb, _0xa198a0) {
        this.set_type(_0x3659eb);
        this.set_destructor(_0xa198a0);
        this.set_refcount(0);
        this.set_caught(false);
        this.set_rethrown(false);
      };
      this.add_ref = function () {
        var _0x44e23c = _0x47a7a3[this.ptr >> 2];
        _0x47a7a3[this.ptr >> 2] = _0x44e23c + 1;
      };
      this.release_ref = function () {
        var _0x4feddd = _0x47a7a3[this.ptr >> 2];
        _0x47a7a3[this.ptr >> 2] = _0x4feddd - 1;
        return _0x4feddd === 1;
      };
    }
    function _0x2180ad(_0x353554) {
      this.free = function () {
        _0x6cc71d(this.ptr);
        this.ptr = 0;
      };
      this.set_base_ptr = function (_0x5dd19d) {
        _0x47a7a3[this.ptr >> 2] = _0x5dd19d;
      };
      this.get_base_ptr = function () {
        return _0x47a7a3[this.ptr >> 2];
      };
      this.set_adjusted_ptr = function (_0xa089c3) {
        _0x47a7a3[this.ptr + 4 >> 2] = _0xa089c3;
      };
      this.get_adjusted_ptr_addr = function () {
        return this.ptr + 4;
      };
      this.get_adjusted_ptr = function () {
        return _0x47a7a3[this.ptr + 4 >> 2];
      };
      this.get_exception_ptr = function () {
        var _0x31417b = _0x314808(this.get_exception_info().get_type());
        if (_0x31417b) {
          return _0x47a7a3[this.get_base_ptr() >> 2];
        }
        var _0xdfa64d = this.get_adjusted_ptr();
        if (_0xdfa64d !== 0) {
          return _0xdfa64d;
        }
        return this.get_base_ptr();
      };
      this.get_exception_info = function () {
        return new _0x46e615(this.get_base_ptr());
      };
      if (_0x353554 === undefined) {
        this.ptr = _0x5d55ea(8);
        this.set_adjusted_ptr(0);
      } else {
        this.ptr = _0x353554;
      }
    }
    var _0x2d06b3 = [];
    function _0x1a42f8(_0x583ac4) {
      _0x583ac4.add_ref();
    }
    var _0x57dc90 = 0;
    function _0x4fab7c(_0x57bc59) {
      var _0x47f839 = new _0x2180ad(_0x57bc59);
      var _0x491271 = _0x47f839.get_exception_info();
      if (!_0x491271.get_caught()) {
        _0x491271.set_caught(true);
        _0x57dc90--;
      }
      _0x491271.set_rethrown(false);
      _0x2d06b3.push(_0x47f839);
      _0x1a42f8(_0x491271);
      return _0x47f839.get_exception_ptr();
    }
    var _0x49a9c4 = 0;
    function _0x480b47(_0x21d8cd) {
      return _0x6cc71d(new _0x46e615(_0x21d8cd).ptr);
    }
    function _0x2ae536(_0x311011) {
      if (_0x311011.release_ref() && !_0x311011.get_rethrown()) {
        var _0x3a99c7 = _0x311011.get_destructor();
        if (_0x3a99c7) {
          (function (_0x27eb2c) {
            return _0x54a0c7.apply(null, [_0x3a99c7, _0x27eb2c]);
          })(_0x311011.excPtr);
        }
        _0x480b47(_0x311011.excPtr);
      }
    }
    function _0x381ab0() {
      _0x558a37(0);
      var _0x40cb94 = _0x2d06b3.pop();
      _0x2ae536(_0x40cb94.get_exception_info());
      _0x40cb94.free();
      _0x49a9c4 = 0;
    }
    function _0x50d17b(_0x4dc0f2) {
      var _0x133926 = new _0x2180ad(_0x4dc0f2);
      var _0x1cb01c = _0x133926.get_base_ptr();
      if (!_0x49a9c4) {
        _0x49a9c4 = _0x1cb01c;
      }
      _0x133926.free();
      throw _0x1cb01c;
    }
    function _0x4a924e() {
      var _0x4ae50d = _0x49a9c4;
      if (!_0x4ae50d) {
        _0x2a1bf9(0);
        return 0;
      }
      var _0x65f9c7 = new _0x46e615(_0x4ae50d);
      var _0x2fd5d2 = _0x65f9c7.get_type();
      var _0xa0b8b = new _0x2180ad();
      _0xa0b8b.set_base_ptr(_0x4ae50d);
      _0xa0b8b.set_adjusted_ptr(_0x4ae50d);
      if (!_0x2fd5d2) {
        _0x2a1bf9(0);
        return _0xa0b8b.ptr | 0;
      }
      var _0x46ffeb = Array.prototype.slice.call(arguments);
      for (var _0x50043c = 0; _0x50043c < _0x46ffeb.length; _0x50043c++) {
        var _0x5352ed = _0x46ffeb[_0x50043c];
        if (_0x5352ed === 0 || _0x5352ed === _0x2fd5d2) {
          break;
        }
        if (_0x40e2b9(_0x5352ed, _0x2fd5d2, _0xa0b8b.get_adjusted_ptr_addr())) {
          _0x2a1bf9(_0x5352ed);
          return _0xa0b8b.ptr | 0;
        }
      }
      _0x2a1bf9(_0x2fd5d2);
      return _0xa0b8b.ptr | 0;
    }
    function _0x2ddce0() {
      var _0x480487 = _0x49a9c4;
      if (!_0x480487) {
        _0x2a1bf9(0);
        return 0;
      }
      var _0x17d60f = new _0x46e615(_0x480487);
      var _0x42cae2 = _0x17d60f.get_type();
      var _0x1e9f15 = new _0x2180ad();
      _0x1e9f15.set_base_ptr(_0x480487);
      _0x1e9f15.set_adjusted_ptr(_0x480487);
      if (!_0x42cae2) {
        _0x2a1bf9(0);
        return _0x1e9f15.ptr | 0;
      }
      var _0x55703d = Array.prototype.slice.call(arguments);
      for (var _0x5d9beb = 0; _0x5d9beb < _0x55703d.length; _0x5d9beb++) {
        var _0x30b62c = _0x55703d[_0x5d9beb];
        if (_0x30b62c === 0 || _0x30b62c === _0x42cae2) {
          break;
        }
        if (_0x40e2b9(_0x30b62c, _0x42cae2, _0x1e9f15.get_adjusted_ptr_addr())) {
          _0x2a1bf9(_0x30b62c);
          return _0x1e9f15.ptr | 0;
        }
      }
      _0x2a1bf9(_0x42cae2);
      return _0x1e9f15.ptr | 0;
    }
    function _0x5474bb() {
      var _0x346529 = _0x49a9c4;
      if (!_0x346529) {
        _0x2a1bf9(0);
        return 0;
      }
      var _0x21df8c = new _0x46e615(_0x346529);
      var _0x47ba32 = _0x21df8c.get_type();
      var _0x43c7cf = new _0x2180ad();
      _0x43c7cf.set_base_ptr(_0x346529);
      _0x43c7cf.set_adjusted_ptr(_0x346529);
      if (!_0x47ba32) {
        _0x2a1bf9(0);
        return _0x43c7cf.ptr | 0;
      }
      var _0x5c1e4b = Array.prototype.slice.call(arguments);
      for (var _0x401272 = 0; _0x401272 < _0x5c1e4b.length; _0x401272++) {
        var _0x20a86f = _0x5c1e4b[_0x401272];
        if (_0x20a86f === 0 || _0x20a86f === _0x47ba32) {
          break;
        }
        if (_0x40e2b9(_0x20a86f, _0x47ba32, _0x43c7cf.get_adjusted_ptr_addr())) {
          _0x2a1bf9(_0x20a86f);
          return _0x43c7cf.ptr | 0;
        }
      }
      _0x2a1bf9(_0x47ba32);
      return _0x43c7cf.ptr | 0;
    }
    function _0x1a17ac() {
      var _0x3705eb = _0x2d06b3.pop();
      if (!_0x3705eb) {
        _0x6cb855("no exception to throw");
      }
      var _0xb1cb5 = _0x3705eb.get_exception_info();
      var _0x5a6a6c = _0x3705eb.get_base_ptr();
      if (!_0xb1cb5.get_rethrown()) {
        _0x2d06b3.push(_0x3705eb);
        _0xb1cb5.set_rethrown(true);
        _0xb1cb5.set_caught(false);
        _0x57dc90++;
      } else {
        _0x3705eb.free();
      }
      _0x49a9c4 = _0x5a6a6c;
      throw _0x5a6a6c;
    }
    function _0x500771(_0x3f7af6, _0x1a9224, _0x5dadae) {
      var _0x2515ae = new _0x46e615(_0x3f7af6);
      _0x2515ae.init(_0x1a9224, _0x5dadae);
      _0x49a9c4 = _0x3f7af6;
      _0x57dc90++;
      throw _0x3f7af6;
    }
    var _0x39fc49 = {
      splitPath: function (_0x2c2ef7) {
        var _0x114644 = /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/;
        return _0x114644.exec(_0x2c2ef7).slice(1);
      },
      normalizeArray: function (_0x51e4a3, _0x3e37a4) {
        var _0x4281b9 = 0;
        for (var _0x52995c = _0x51e4a3.length - 1; _0x52995c >= 0; _0x52995c--) {
          var _0x340d48 = _0x51e4a3[_0x52995c];
          if (_0x340d48 === ".") {
            _0x51e4a3.splice(_0x52995c, 1);
          } else if (_0x340d48 === "..") {
            _0x51e4a3.splice(_0x52995c, 1);
            _0x4281b9++;
          } else if (_0x4281b9) {
            _0x51e4a3.splice(_0x52995c, 1);
            _0x4281b9--;
          }
        }
        if (_0x3e37a4) {
          for (; _0x4281b9; _0x4281b9--) {
            _0x51e4a3.unshift("..");
          }
        }
        return _0x51e4a3;
      },
      normalize: function (_0xa78550) {
        var _0x5d1327 = _0xa78550.charAt(0) === "/";
        var _0x3e5a9d = _0xa78550.substr(-1) === "/";
        _0xa78550 = _0x39fc49.normalizeArray(_0xa78550.split("/").filter(function (_0x63aa08) {
          return !!_0x63aa08;
        }), !_0x5d1327).join("/");
        if (!_0xa78550 && !_0x5d1327) {
          _0xa78550 = ".";
        }
        if (_0xa78550 && _0x3e5a9d) {
          _0xa78550 += "/";
        }
        return (_0x5d1327 ? "/" : "") + _0xa78550;
      },
      dirname: function (_0x21c849) {
        var _0x1d5f35 = _0x39fc49.splitPath(_0x21c849);
        var _0x44b876 = _0x1d5f35[0];
        var _0x2159aa = _0x1d5f35[1];
        if (!_0x44b876 && !_0x2159aa) {
          return ".";
        }
        _0x2159aa &&= _0x2159aa.substr(0, _0x2159aa.length - 1);
        return _0x44b876 + _0x2159aa;
      },
      basename: function (_0x1ab3b5) {
        if (_0x1ab3b5 === "/") {
          return "/";
        }
        _0x1ab3b5 = _0x39fc49.normalize(_0x1ab3b5);
        _0x1ab3b5 = _0x1ab3b5.replace(/\/$/, "");
        var _0x4d391b = _0x1ab3b5.lastIndexOf("/");
        if (_0x4d391b === -1) {
          return _0x1ab3b5;
        }
        return _0x1ab3b5.substr(_0x4d391b + 1);
      },
      extname: function (_0x5ed8bc) {
        return _0x39fc49.splitPath(_0x5ed8bc)[3];
      },
      join: function () {
        var _0x4eb55b = Array.prototype.slice.call(arguments, 0);
        return _0x39fc49.normalize(_0x4eb55b.join("/"));
      },
      join2: function (_0x1be188, _0x21f183) {
        return _0x39fc49.normalize(_0x1be188 + "/" + _0x21f183);
      }
    };
    function _0x15822a() {
      if (typeof crypto == "object" && typeof crypto.getRandomValues == "function") {
        var _0x577ac8 = new Uint8Array(1);
        return function () {
          crypto.getRandomValues(_0x577ac8);
          return _0x577ac8[0];
        };
      } else if (_0x47ed75) {
        try {
          var _0x84a37e = require("crypto");
          return function () {
            return _0x84a37e.randomBytes(1)[0];
          };
        } catch (_0x5a9a1f) {}
      }
      return function () {
        _0x6cb855("randomDevice");
      };
    }
    var _0x10785f = {
      resolve: function () {
        var _0x1296e9 = "";
        var _0xc40bb0 = false;
        for (var _0x401275 = arguments.length - 1; _0x401275 >= -1 && !_0xc40bb0; _0x401275--) {
          var _0x251edf = _0x401275 >= 0 ? arguments[_0x401275] : _0x1c26fd.cwd();
          if (typeof _0x251edf != "string") {
            throw new TypeError("Arguments to path.resolve must be strings");
          } else if (!_0x251edf) {
            return "";
          }
          _0x1296e9 = _0x251edf + "/" + _0x1296e9;
          _0xc40bb0 = _0x251edf.charAt(0) === "/";
        }
        _0x1296e9 = _0x39fc49.normalizeArray(_0x1296e9.split("/").filter(function (_0x43a881) {
          return !!_0x43a881;
        }), !_0xc40bb0).join("/");
        return (_0xc40bb0 ? "/" : "") + _0x1296e9 || ".";
      },
      relative: function (_0x56c59a, _0x14a160) {
        _0x56c59a = _0x10785f.resolve(_0x56c59a).substr(1);
        _0x14a160 = _0x10785f.resolve(_0x14a160).substr(1);
        function _0x2549ce(_0x4594c3) {
          var _0x403bd1 = 0;
          for (; _0x403bd1 < _0x4594c3.length; _0x403bd1++) {
            if (_0x4594c3[_0x403bd1] !== "") {
              break;
            }
          }
          var _0x1f1548 = _0x4594c3.length - 1;
          for (; _0x1f1548 >= 0; _0x1f1548--) {
            if (_0x4594c3[_0x1f1548] !== "") {
              break;
            }
          }
          if (_0x403bd1 > _0x1f1548) {
            return [];
          }
          return _0x4594c3.slice(_0x403bd1, _0x1f1548 - _0x403bd1 + 1);
        }
        var _0xaa9912 = _0x2549ce(_0x56c59a.split("/"));
        var _0x5491fe = _0x2549ce(_0x14a160.split("/"));
        var _0x54d09d = Math.min(_0xaa9912.length, _0x5491fe.length);
        var _0x17f4fd = _0x54d09d;
        for (var _0x25a54f = 0; _0x25a54f < _0x54d09d; _0x25a54f++) {
          if (_0xaa9912[_0x25a54f] !== _0x5491fe[_0x25a54f]) {
            _0x17f4fd = _0x25a54f;
            break;
          }
        }
        var _0x2a7098 = [];
        for (var _0x25a54f = _0x17f4fd; _0x25a54f < _0xaa9912.length; _0x25a54f++) {
          _0x2a7098.push("..");
        }
        _0x2a7098 = _0x2a7098.concat(_0x5491fe.slice(_0x17f4fd));
        return _0x2a7098.join("/");
      }
    };
    var _0x3dbec0 = {
      ttys: [],
      init: function () {},
      shutdown: function () {},
      register: function (_0x3e2330, _0x27d7d6) {
        _0x3dbec0.ttys[_0x3e2330] = {
          input: [],
          output: [],
          ops: _0x27d7d6
        };
        _0x1c26fd.registerDevice(_0x3e2330, _0x3dbec0.stream_ops);
      },
      stream_ops: {
        open: function (_0x30bcbf) {
          var _0x4df2d4 = _0x3dbec0.ttys[_0x30bcbf.node.rdev];
          if (!_0x4df2d4) {
            throw new _0x1c26fd.ErrnoError(43);
          }
          _0x30bcbf.tty = _0x4df2d4;
          _0x30bcbf.seekable = false;
        },
        close: function (_0x5310b2) {
          _0x5310b2.tty.ops.flush(_0x5310b2.tty);
        },
        flush: function (_0x2c2c14) {
          _0x2c2c14.tty.ops.flush(_0x2c2c14.tty);
        },
        read: function (_0x3b83df, _0xf811c8, _0x10fa84, _0x5d7376, _0x5e4e88) {
          if (!_0x3b83df.tty || !_0x3b83df.tty.ops.get_char) {
            throw new _0x1c26fd.ErrnoError(60);
          }
          var _0x10ccc5 = 0;
          for (var _0x4cb3b5 = 0; _0x4cb3b5 < _0x5d7376; _0x4cb3b5++) {
            var _0x2da799;
            try {
              _0x2da799 = _0x3b83df.tty.ops.get_char(_0x3b83df.tty);
            } catch (_0x2d8e49) {
              throw new _0x1c26fd.ErrnoError(29);
            }
            if (_0x2da799 === undefined && _0x10ccc5 === 0) {
              throw new _0x1c26fd.ErrnoError(6);
            }
            if (_0x2da799 === null || _0x2da799 === undefined) {
              break;
            }
            _0x10ccc5++;
            _0xf811c8[_0x10fa84 + _0x4cb3b5] = _0x2da799;
          }
          if (_0x10ccc5) {
            _0x3b83df.node.timestamp = Date.now();
          }
          return _0x10ccc5;
        },
        write: function (_0x470b89, _0x104fa1, _0x2358ed, _0x232198, _0x2e64b3) {
          if (!_0x470b89.tty || !_0x470b89.tty.ops.put_char) {
            throw new _0x1c26fd.ErrnoError(60);
          }
          try {
            for (var _0x2e16cd = 0; _0x2e16cd < _0x232198; _0x2e16cd++) {
              _0x470b89.tty.ops.put_char(_0x470b89.tty, _0x104fa1[_0x2358ed + _0x2e16cd]);
            }
          } catch (_0xd9276d) {
            throw new _0x1c26fd.ErrnoError(29);
          }
          if (_0x232198) {
            _0x470b89.node.timestamp = Date.now();
          }
          return _0x2e16cd;
        }
      },
      default_tty_ops: {
        get_char: function (_0x5cff87) {
          if (!_0x5cff87.input.length) {
            var _0x281c38 = null;
            if (_0x47ed75) {
              var _0x1ed3f9 = 256;
              var _0xf874b4 = Buffer.alloc(_0x1ed3f9);
              var _0x5a08a8 = 0;
              try {
                _0x5a08a8 = _0x477521.readSync(process.stdin.fd, _0xf874b4, 0, _0x1ed3f9, -1);
              } catch (_0x5ef5be) {
                if (_0x5ef5be.toString().includes("EOF")) {
                  _0x5a08a8 = 0;
                } else {
                  throw _0x5ef5be;
                }
              }
              if (_0x5a08a8 > 0) {
                _0x281c38 = _0xf874b4.slice(0, _0x5a08a8).toString("utf-8");
              } else {
                _0x281c38 = null;
              }
            } else if (typeof window != "undefined" && typeof window.prompt == "function") {
              _0x281c38 = window.prompt("Input: ");
              if (_0x281c38 !== null) {
                _0x281c38 += "\n";
              }
            } else if (typeof readline == "function") {
              _0x281c38 = readline();
              if (_0x281c38 !== null) {
                _0x281c38 += "\n";
              }
            }
            if (!_0x281c38) {
              return null;
            }
            _0x5cff87.input = _0x2fe8e2(_0x281c38, true);
          }
          return _0x5cff87.input.shift();
        },
        put_char: function (_0x34a94b, _0xa985d7) {
          if (_0xa985d7 === null || _0xa985d7 === 10) {
            _0x51fb9e(_0x1c811f(_0x34a94b.output, 0));
            _0x34a94b.output = [];
          } else if (_0xa985d7 != 0) {
            _0x34a94b.output.push(_0xa985d7);
          }
        },
        flush: function (_0x47b276) {
          if (_0x47b276.output && _0x47b276.output.length > 0) {
            _0x51fb9e(_0x1c811f(_0x47b276.output, 0));
            _0x47b276.output = [];
          }
        }
      },
      default_tty1_ops: {
        put_char: function (_0x19dd31, _0x4c11ff) {
          if (_0x4c11ff === null || _0x4c11ff === 10) {
            _0x2b9f46(_0x1c811f(_0x19dd31.output, 0));
            _0x19dd31.output = [];
          } else if (_0x4c11ff != 0) {
            _0x19dd31.output.push(_0x4c11ff);
          }
        },
        flush: function (_0x2cf3f3) {
          if (_0x2cf3f3.output && _0x2cf3f3.output.length > 0) {
            _0x2b9f46(_0x1c811f(_0x2cf3f3.output, 0));
            _0x2cf3f3.output = [];
          }
        }
      }
    };
    function _0x8bd8f(_0x354a22, _0x587bdc) {
      _0xb4481c.fill(0, _0x354a22, _0x354a22 + _0x587bdc);
    }
    function _0x5a36e3(_0x17a3fc, _0x302939) {
      return Math.ceil(_0x17a3fc / _0x302939) * _0x302939;
    }
    function _0x55dc0b(_0x36ad3e) {
      _0x36ad3e = _0x5a36e3(_0x36ad3e, 65536);
      var _0x49f6a1 = _0x53347d(65536, _0x36ad3e);
      if (!_0x49f6a1) {
        return 0;
      }
      _0x8bd8f(_0x49f6a1, _0x36ad3e);
      return _0x49f6a1;
    }
    var _0x57bdbd = {
      ops_table: null,
      mount: function (_0x46da1a) {
        return _0x57bdbd.createNode(null, "/", 16895, 0);
      },
      createNode: function (_0x473d5a, _0x5c97b1, _0x16ec27, _0x14ce85) {
        if (_0x1c26fd.isBlkdev(_0x16ec27) || _0x1c26fd.isFIFO(_0x16ec27)) {
          throw new _0x1c26fd.ErrnoError(63);
        }
        if (!_0x57bdbd.ops_table) {
          _0x57bdbd.ops_table = {
            dir: {
              node: {
                getattr: _0x57bdbd.node_ops.getattr,
                setattr: _0x57bdbd.node_ops.setattr,
                lookup: _0x57bdbd.node_ops.lookup,
                mknod: _0x57bdbd.node_ops.mknod,
                rename: _0x57bdbd.node_ops.rename,
                unlink: _0x57bdbd.node_ops.unlink,
                rmdir: _0x57bdbd.node_ops.rmdir,
                readdir: _0x57bdbd.node_ops.readdir,
                symlink: _0x57bdbd.node_ops.symlink
              },
              stream: {
                llseek: _0x57bdbd.stream_ops.llseek
              }
            },
            file: {
              node: {
                getattr: _0x57bdbd.node_ops.getattr,
                setattr: _0x57bdbd.node_ops.setattr
              },
              stream: {
                llseek: _0x57bdbd.stream_ops.llseek,
                read: _0x57bdbd.stream_ops.read,
                write: _0x57bdbd.stream_ops.write,
                allocate: _0x57bdbd.stream_ops.allocate,
                mmap: _0x57bdbd.stream_ops.mmap,
                msync: _0x57bdbd.stream_ops.msync
              }
            },
            link: {
              node: {
                getattr: _0x57bdbd.node_ops.getattr,
                setattr: _0x57bdbd.node_ops.setattr,
                readlink: _0x57bdbd.node_ops.readlink
              },
              stream: {}
            },
            chrdev: {
              node: {
                getattr: _0x57bdbd.node_ops.getattr,
                setattr: _0x57bdbd.node_ops.setattr
              },
              stream: _0x1c26fd.chrdev_stream_ops
            }
          };
        }
        var _0x284508 = _0x1c26fd.createNode(_0x473d5a, _0x5c97b1, _0x16ec27, _0x14ce85);
        if (_0x1c26fd.isDir(_0x284508.mode)) {
          _0x284508.node_ops = _0x57bdbd.ops_table.dir.node;
          _0x284508.stream_ops = _0x57bdbd.ops_table.dir.stream;
          _0x284508.contents = {};
        } else if (_0x1c26fd.isFile(_0x284508.mode)) {
          _0x284508.node_ops = _0x57bdbd.ops_table.file.node;
          _0x284508.stream_ops = _0x57bdbd.ops_table.file.stream;
          _0x284508.usedBytes = 0;
          _0x284508.contents = null;
        } else if (_0x1c26fd.isLink(_0x284508.mode)) {
          _0x284508.node_ops = _0x57bdbd.ops_table.link.node;
          _0x284508.stream_ops = _0x57bdbd.ops_table.link.stream;
        } else if (_0x1c26fd.isChrdev(_0x284508.mode)) {
          _0x284508.node_ops = _0x57bdbd.ops_table.chrdev.node;
          _0x284508.stream_ops = _0x57bdbd.ops_table.chrdev.stream;
        }
        _0x284508.timestamp = Date.now();
        if (_0x473d5a) {
          _0x473d5a.contents[_0x5c97b1] = _0x284508;
          _0x473d5a.timestamp = _0x284508.timestamp;
        }
        return _0x284508;
      },
      getFileDataAsTypedArray: function (_0x5aa7b1) {
        if (!_0x5aa7b1.contents) {
          return new Uint8Array(0);
        }
        if (_0x5aa7b1.contents.subarray) {
          return _0x5aa7b1.contents.subarray(0, _0x5aa7b1.usedBytes);
        }
        return new Uint8Array(_0x5aa7b1.contents);
      },
      expandFileStorage: function (_0x29b35e, _0x22eb97) {
        var _0x2e18b2 = _0x29b35e.contents ? _0x29b35e.contents.length : 0;
        if (_0x2e18b2 >= _0x22eb97) {
          return;
        }
        var _0x5163a3 = 1048576;
        _0x22eb97 = Math.max(_0x22eb97, _0x2e18b2 * (_0x2e18b2 < _0x5163a3 ? 2 : 1.125) >>> 0);
        if (_0x2e18b2 != 0) {
          _0x22eb97 = Math.max(_0x22eb97, 256);
        }
        var _0x5b68d3 = _0x29b35e.contents;
        _0x29b35e.contents = new Uint8Array(_0x22eb97);
        if (_0x29b35e.usedBytes > 0) {
          _0x29b35e.contents.set(_0x5b68d3.subarray(0, _0x29b35e.usedBytes), 0);
        }
      },
      resizeFileStorage: function (_0x498031, _0x128aed) {
        if (_0x498031.usedBytes == _0x128aed) {
          return;
        }
        if (_0x128aed == 0) {
          _0x498031.contents = null;
          _0x498031.usedBytes = 0;
        } else {
          var _0xdea003 = _0x498031.contents;
          _0x498031.contents = new Uint8Array(_0x128aed);
          if (_0xdea003) {
            _0x498031.contents.set(_0xdea003.subarray(0, Math.min(_0x128aed, _0x498031.usedBytes)));
          }
          _0x498031.usedBytes = _0x128aed;
        }
      },
      node_ops: {
        getattr: function (_0x8e32cb) {
          var _0x2d1662 = {};
          _0x2d1662.dev = _0x1c26fd.isChrdev(_0x8e32cb.mode) ? _0x8e32cb.id : 1;
          _0x2d1662.ino = _0x8e32cb.id;
          _0x2d1662.mode = _0x8e32cb.mode;
          _0x2d1662.nlink = 1;
          _0x2d1662.uid = 0;
          _0x2d1662.gid = 0;
          _0x2d1662.rdev = _0x8e32cb.rdev;
          if (_0x1c26fd.isDir(_0x8e32cb.mode)) {
            _0x2d1662.size = 4096;
          } else if (_0x1c26fd.isFile(_0x8e32cb.mode)) {
            _0x2d1662.size = _0x8e32cb.usedBytes;
          } else if (_0x1c26fd.isLink(_0x8e32cb.mode)) {
            _0x2d1662.size = _0x8e32cb.link.length;
          } else {
            _0x2d1662.size = 0;
          }
          _0x2d1662.atime = new Date(_0x8e32cb.timestamp);
          _0x2d1662.mtime = new Date(_0x8e32cb.timestamp);
          _0x2d1662.ctime = new Date(_0x8e32cb.timestamp);
          _0x2d1662.blksize = 4096;
          _0x2d1662.blocks = Math.ceil(_0x2d1662.size / _0x2d1662.blksize);
          return _0x2d1662;
        },
        setattr: function (_0x25cd0a, _0x236838) {
          if (_0x236838.mode !== undefined) {
            _0x25cd0a.mode = _0x236838.mode;
          }
          if (_0x236838.timestamp !== undefined) {
            _0x25cd0a.timestamp = _0x236838.timestamp;
          }
          if (_0x236838.size !== undefined) {
            _0x57bdbd.resizeFileStorage(_0x25cd0a, _0x236838.size);
          }
        },
        lookup: function (_0x7e1f21, _0x207959) {
          throw _0x1c26fd.genericErrors[44];
        },
        mknod: function (_0xac63f3, _0x505862, _0x1c3eb1, _0x230c32) {
          return _0x57bdbd.createNode(_0xac63f3, _0x505862, _0x1c3eb1, _0x230c32);
        },
        rename: function (_0x3c2071, _0x4fb20e, _0x13fb15) {
          if (_0x1c26fd.isDir(_0x3c2071.mode)) {
            var _0xfff254;
            try {
              _0xfff254 = _0x1c26fd.lookupNode(_0x4fb20e, _0x13fb15);
            } catch (_0x21c798) {}
            if (_0xfff254) {
              for (var _0x24511e in _0xfff254.contents) {
                throw new _0x1c26fd.ErrnoError(55);
              }
            }
          }
          delete _0x3c2071.parent.contents[_0x3c2071.name];
          _0x3c2071.parent.timestamp = Date.now();
          _0x3c2071.name = _0x13fb15;
          _0x4fb20e.contents[_0x13fb15] = _0x3c2071;
          _0x4fb20e.timestamp = _0x3c2071.parent.timestamp;
          _0x3c2071.parent = _0x4fb20e;
        },
        unlink: function (_0x2f7d36, _0x194a6a) {
          delete _0x2f7d36.contents[_0x194a6a];
          _0x2f7d36.timestamp = Date.now();
        },
        rmdir: function (_0x5a9ca3, _0xa8e05a) {
          var _0x38073b = _0x1c26fd.lookupNode(_0x5a9ca3, _0xa8e05a);
          for (var _0x30ec9e in _0x38073b.contents) {
            throw new _0x1c26fd.ErrnoError(55);
          }
          delete _0x5a9ca3.contents[_0xa8e05a];
          _0x5a9ca3.timestamp = Date.now();
        },
        readdir: function (_0x4648ff) {
          var _0x558754 = [".", ".."];
          for (var _0x487132 in _0x4648ff.contents) {
            if (!_0x4648ff.contents.hasOwnProperty(_0x487132)) {
              continue;
            }
            _0x558754.push(_0x487132);
          }
          return _0x558754;
        },
        symlink: function (_0x25177c, _0x2101b4, _0x528d24) {
          var _0x419a7c = _0x57bdbd.createNode(_0x25177c, _0x2101b4, 41471, 0);
          _0x419a7c.link = _0x528d24;
          return _0x419a7c;
        },
        readlink: function (_0x5ed488) {
          if (!_0x1c26fd.isLink(_0x5ed488.mode)) {
            throw new _0x1c26fd.ErrnoError(28);
          }
          return _0x5ed488.link;
        }
      },
      stream_ops: {
        read: function (_0x2eded8, _0x6c3ca2, _0x591cae, _0xe6a417, _0x2d4624) {
          var _0x1d9056 = _0x2eded8.node.contents;
          if (_0x2d4624 >= _0x2eded8.node.usedBytes) {
            return 0;
          }
          var _0x16c7e9 = Math.min(_0x2eded8.node.usedBytes - _0x2d4624, _0xe6a417);
          if (_0x16c7e9 > 8 && _0x1d9056.subarray) {
            _0x6c3ca2.set(_0x1d9056.subarray(_0x2d4624, _0x2d4624 + _0x16c7e9), _0x591cae);
          } else {
            for (var _0x3ca66f = 0; _0x3ca66f < _0x16c7e9; _0x3ca66f++) {
              _0x6c3ca2[_0x591cae + _0x3ca66f] = _0x1d9056[_0x2d4624 + _0x3ca66f];
            }
          }
          return _0x16c7e9;
        },
        write: function (_0x31a593, _0x85e73, _0x33f1a2, _0x3609ef, _0x3c4e7e, _0x386627) {
          if (_0x85e73.buffer === _0x2845ef.buffer) {
            _0x386627 = false;
          }
          if (!_0x3609ef) {
            return 0;
          }
          var _0x3dc0df = _0x31a593.node;
          _0x3dc0df.timestamp = Date.now();
          if (_0x85e73.subarray && (!_0x3dc0df.contents || _0x3dc0df.contents.subarray)) {
            if (_0x386627) {
              _0x3dc0df.contents = _0x85e73.subarray(_0x33f1a2, _0x33f1a2 + _0x3609ef);
              _0x3dc0df.usedBytes = _0x3609ef;
              return _0x3609ef;
            } else if (_0x3dc0df.usedBytes === 0 && _0x3c4e7e === 0) {
              _0x3dc0df.contents = _0x85e73.slice(_0x33f1a2, _0x33f1a2 + _0x3609ef);
              _0x3dc0df.usedBytes = _0x3609ef;
              return _0x3609ef;
            } else if (_0x3c4e7e + _0x3609ef <= _0x3dc0df.usedBytes) {
              _0x3dc0df.contents.set(_0x85e73.subarray(_0x33f1a2, _0x33f1a2 + _0x3609ef), _0x3c4e7e);
              return _0x3609ef;
            }
          }
          _0x57bdbd.expandFileStorage(_0x3dc0df, _0x3c4e7e + _0x3609ef);
          if (_0x3dc0df.contents.subarray && _0x85e73.subarray) {
            _0x3dc0df.contents.set(_0x85e73.subarray(_0x33f1a2, _0x33f1a2 + _0x3609ef), _0x3c4e7e);
          } else {
            for (var _0x2a82ad = 0; _0x2a82ad < _0x3609ef; _0x2a82ad++) {
              _0x3dc0df.contents[_0x3c4e7e + _0x2a82ad] = _0x85e73[_0x33f1a2 + _0x2a82ad];
            }
          }
          _0x3dc0df.usedBytes = Math.max(_0x3dc0df.usedBytes, _0x3c4e7e + _0x3609ef);
          return _0x3609ef;
        },
        llseek: function (_0x20f96b, _0x194469, _0x4983f8) {
          var _0xe58f74 = _0x194469;
          if (_0x4983f8 === 1) {
            _0xe58f74 += _0x20f96b.position;
          } else if (_0x4983f8 === 2) {
            if (_0x1c26fd.isFile(_0x20f96b.node.mode)) {
              _0xe58f74 += _0x20f96b.node.usedBytes;
            }
          }
          if (_0xe58f74 < 0) {
            throw new _0x1c26fd.ErrnoError(28);
          }
          return _0xe58f74;
        },
        allocate: function (_0x2e5051, _0x2c93fb, _0x4c382f) {
          _0x57bdbd.expandFileStorage(_0x2e5051.node, _0x2c93fb + _0x4c382f);
          _0x2e5051.node.usedBytes = Math.max(_0x2e5051.node.usedBytes, _0x2c93fb + _0x4c382f);
        },
        mmap: function (_0x3e4c54, _0x4b4e7f, _0x28ad23, _0x46aabb, _0x53cf12, _0x1b521d) {
          if (_0x4b4e7f !== 0) {
            throw new _0x1c26fd.ErrnoError(28);
          }
          if (!_0x1c26fd.isFile(_0x3e4c54.node.mode)) {
            throw new _0x1c26fd.ErrnoError(43);
          }
          var _0x567691;
          var _0x402e9a;
          var _0x47c8d7 = _0x3e4c54.node.contents;
          if (!(_0x1b521d & 2) && _0x47c8d7.buffer === _0x1ae08d) {
            _0x402e9a = false;
            _0x567691 = _0x47c8d7.byteOffset;
          } else {
            if (_0x46aabb > 0 || _0x46aabb + _0x28ad23 < _0x47c8d7.length) {
              if (_0x47c8d7.subarray) {
                _0x47c8d7 = _0x47c8d7.subarray(_0x46aabb, _0x46aabb + _0x28ad23);
              } else {
                _0x47c8d7 = Array.prototype.slice.call(_0x47c8d7, _0x46aabb, _0x46aabb + _0x28ad23);
              }
            }
            _0x402e9a = true;
            _0x567691 = _0x55dc0b(_0x28ad23);
            if (!_0x567691) {
              throw new _0x1c26fd.ErrnoError(48);
            }
            _0x2845ef.set(_0x47c8d7, _0x567691);
          }
          return {
            ptr: _0x567691,
            allocated: _0x402e9a
          };
        },
        msync: function (_0x213bce, _0x54f922, _0x4de6fa, _0x168814, _0x4be318) {
          if (!_0x1c26fd.isFile(_0x213bce.node.mode)) {
            throw new _0x1c26fd.ErrnoError(43);
          }
          if (_0x4be318 & 2) {
            return 0;
          }
          var _0x370c37 = _0x57bdbd.stream_ops.write(_0x213bce, _0x54f922, 0, _0x168814, _0x4de6fa, false);
          return 0;
        }
      }
    };
    function _0x2c9aa3(_0x5b8200, _0x4b7aca, _0x4d2f8f, _0x48c71d) {
      var _0x568dee = !_0x48c71d ? _0xe21494("al " + _0x5b8200) : "";
      _0x298cf5(_0x5b8200, function (_0x2ba4a0) {
        _0x4c7bb6(_0x2ba4a0, "Loading data file \"" + _0x5b8200 + "\" failed (no arrayBuffer).");
        _0x4b7aca(new Uint8Array(_0x2ba4a0));
        if (_0x568dee) {
          _0x4695c0(_0x568dee);
        }
      }, function (_0x5e2068) {
        if (_0x4d2f8f) {
          _0x4d2f8f();
        } else {
          throw "Loading data file \"" + _0x5b8200 + "\" failed.";
        }
      });
      if (_0x568dee) {
        _0x102273(_0x568dee);
      }
    }
    var _0x4007c8 = {
      dbs: {},
      indexedDB: () => {
        if (typeof indexedDB != "undefined") {
          return indexedDB;
        }
        var _0x3958bf = null;
        if (typeof window == "object") {
          _0x3958bf = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB;
        }
        _0x4c7bb6(_0x3958bf, "IDBFS used, but indexedDB not supported");
        return _0x3958bf;
      },
      DB_VERSION: 21,
      DB_STORE_NAME: "FILE_DATA",
      mount: function (_0x43dc6c) {
        return _0x57bdbd.mount.apply(null, arguments);
      },
      syncfs: (_0x2f511d, _0x58e601, _0x40631e) => {
        _0x4007c8.getLocalSet(_0x2f511d, (_0x198582, _0x380f52) => {
          if (_0x198582) {
            return _0x40631e(_0x198582);
          }
          _0x4007c8.getRemoteSet(_0x2f511d, (_0x561d78, _0x32ece1) => {
            if (_0x561d78) {
              return _0x40631e(_0x561d78);
            }
            var _0x43c756 = _0x58e601 ? _0x32ece1 : _0x380f52;
            var _0x66a7f9 = _0x58e601 ? _0x380f52 : _0x32ece1;
            _0x4007c8.reconcile(_0x43c756, _0x66a7f9, _0x40631e);
          });
        });
      },
      getDB: (_0x4b8356, _0x2bd71c) => {
        var _0x59529a = _0x4007c8.dbs[_0x4b8356];
        if (_0x59529a) {
          return _0x2bd71c(null, _0x59529a);
        }
        var _0x2bb761;
        try {
          _0x2bb761 = _0x4007c8.indexedDB().open(_0x4b8356, _0x4007c8.DB_VERSION);
        } catch (_0x1e282b) {
          return _0x2bd71c(_0x1e282b);
        }
        if (!_0x2bb761) {
          return _0x2bd71c("Unable to connect to IndexedDB");
        }
        _0x2bb761.onupgradeneeded = _0x3db81c => {
          var _0x1a81e7 = _0x3db81c.target.result;
          var _0x524ac9 = _0x3db81c.target.transaction;
          var _0x1c4767;
          if (_0x1a81e7.objectStoreNames.contains(_0x4007c8.DB_STORE_NAME)) {
            _0x1c4767 = _0x524ac9.objectStore(_0x4007c8.DB_STORE_NAME);
          } else {
            _0x1c4767 = _0x1a81e7.createObjectStore(_0x4007c8.DB_STORE_NAME);
          }
          if (!_0x1c4767.indexNames.contains("timestamp")) {
            _0x1c4767.createIndex("timestamp", "timestamp", {
              unique: false
            });
          }
        };
        _0x2bb761.onsuccess = () => {
          _0x59529a = _0x2bb761.result;
          _0x4007c8.dbs[_0x4b8356] = _0x59529a;
          _0x2bd71c(null, _0x59529a);
        };
        _0x2bb761.onerror = _0x33a51e => {
          _0x2bd71c(this.error);
          _0x33a51e.preventDefault();
        };
      },
      getLocalSet: (_0x2685e2, _0x476c60) => {
        var _0x2162b1 = {};
        function _0xb16814(_0x24532e) {
          return _0x24532e !== "." && _0x24532e !== "..";
        }
        function _0x26cfca(_0x59eb50) {
          return _0x24f869 => {
            return _0x39fc49.join2(_0x59eb50, _0x24f869);
          };
        }
        var _0x3b96ed = _0x1c26fd.readdir(_0x2685e2.mountpoint).filter(_0xb16814).map(_0x26cfca(_0x2685e2.mountpoint));
        while (_0x3b96ed.length) {
          var _0x4f2dcc = _0x3b96ed.pop();
          var _0x171b0b;
          try {
            _0x171b0b = _0x1c26fd.stat(_0x4f2dcc);
          } catch (_0x4a02e0) {
            return _0x476c60(_0x4a02e0);
          }
          if (_0x1c26fd.isDir(_0x171b0b.mode)) {
            _0x3b96ed.push.apply(_0x3b96ed, _0x1c26fd.readdir(_0x4f2dcc).filter(_0xb16814).map(_0x26cfca(_0x4f2dcc)));
          }
          _0x2162b1[_0x4f2dcc] = {
            timestamp: _0x171b0b.mtime
          };
        }
        return _0x476c60(null, {
          type: "local",
          entries: _0x2162b1
        });
      },
      getRemoteSet: (_0x6fc135, _0x417e80) => {
        var _0x2e36ee = {};
        _0x4007c8.getDB(_0x6fc135.mountpoint, (_0x304353, _0x3cf935) => {
          if (_0x304353) {
            return _0x417e80(_0x304353);
          }
          try {
            var _0x515e31 = _0x3cf935.transaction([_0x4007c8.DB_STORE_NAME], "readonly");
            _0x515e31.onerror = _0x43004b => {
              _0x417e80(this.error);
              _0x43004b.preventDefault();
            };
            var _0x237228 = _0x515e31.objectStore(_0x4007c8.DB_STORE_NAME);
            var _0x2f62b2 = _0x237228.index("timestamp");
            _0x2f62b2.openKeyCursor().onsuccess = _0x568f34 => {
              var _0x5869a1 = _0x568f34.target.result;
              if (!_0x5869a1) {
                return _0x417e80(null, {
                  type: "remote",
                  db: _0x3cf935,
                  entries: _0x2e36ee
                });
              }
              _0x2e36ee[_0x5869a1.primaryKey] = {
                timestamp: _0x5869a1.key
              };
              _0x5869a1.continue();
            };
          } catch (_0x1ed4b6) {
            return _0x417e80(_0x1ed4b6);
          }
        });
      },
      loadLocalEntry: (_0x11febe, _0x48519c) => {
        var _0x2e74db;
        var _0x423d33;
        try {
          var _0x3ed5b2 = _0x1c26fd.lookupPath(_0x11febe);
          _0x423d33 = _0x3ed5b2.node;
          _0x2e74db = _0x1c26fd.stat(_0x11febe);
        } catch (_0x45615c) {
          return _0x48519c(_0x45615c);
        }
        if (_0x1c26fd.isDir(_0x2e74db.mode)) {
          return _0x48519c(null, {
            timestamp: _0x2e74db.mtime,
            mode: _0x2e74db.mode
          });
        } else if (_0x1c26fd.isFile(_0x2e74db.mode)) {
          _0x423d33.contents = _0x57bdbd.getFileDataAsTypedArray(_0x423d33);
          return _0x48519c(null, {
            timestamp: _0x2e74db.mtime,
            mode: _0x2e74db.mode,
            contents: _0x423d33.contents
          });
        } else {
          return _0x48519c(new Error("node type not supported"));
        }
      },
      storeLocalEntry: (_0x4fe990, _0x36a98d, _0x3b9245) => {
        try {
          if (_0x1c26fd.isDir(_0x36a98d.mode)) {
            _0x1c26fd.mkdirTree(_0x4fe990, _0x36a98d.mode);
          } else if (_0x1c26fd.isFile(_0x36a98d.mode)) {
            _0x1c26fd.writeFile(_0x4fe990, _0x36a98d.contents, {
              canOwn: true
            });
          } else {
            return _0x3b9245(new Error("node type not supported"));
          }
          _0x1c26fd.chmod(_0x4fe990, _0x36a98d.mode);
          _0x1c26fd.utime(_0x4fe990, _0x36a98d.timestamp, _0x36a98d.timestamp);
        } catch (_0x45e95a) {
          return _0x3b9245(_0x45e95a);
        }
        _0x3b9245(null);
      },
      removeLocalEntry: (_0x5ab3d0, _0x3a9d11) => {
        try {
          var _0x28b871 = _0x1c26fd.lookupPath(_0x5ab3d0);
          var _0xff9484 = _0x1c26fd.stat(_0x5ab3d0);
          if (_0x1c26fd.isDir(_0xff9484.mode)) {
            _0x1c26fd.rmdir(_0x5ab3d0);
          } else if (_0x1c26fd.isFile(_0xff9484.mode)) {
            _0x1c26fd.unlink(_0x5ab3d0);
          }
        } catch (_0x2d1e69) {
          return _0x3a9d11(_0x2d1e69);
        }
        _0x3a9d11(null);
      },
      loadRemoteEntry: (_0x55851f, _0x5b9c74, _0x49fc4b) => {
        var _0x1e0727 = _0x55851f.get(_0x5b9c74);
        _0x1e0727.onsuccess = _0x535339 => {
          _0x49fc4b(null, _0x535339.target.result);
        };
        _0x1e0727.onerror = _0x550973 => {
          _0x49fc4b(this.error);
          _0x550973.preventDefault();
        };
      },
      storeRemoteEntry: (_0x2e0432, _0x1301ae, _0x3e2154, _0x2d378f) => {
        try {
          var _0x215536 = _0x2e0432.put(_0x3e2154, _0x1301ae);
        } catch (_0x3f4ea5) {
          _0x2d378f(_0x3f4ea5);
          return;
        }
        _0x215536.onsuccess = () => {
          _0x2d378f(null);
        };
        _0x215536.onerror = _0x1196d9 => {
          _0x2d378f(this.error);
          _0x1196d9.preventDefault();
        };
      },
      removeRemoteEntry: (_0x1d8d46, _0x5571cd, _0x122c6f) => {
        var _0x1e94d1 = _0x1d8d46.delete(_0x5571cd);
        _0x1e94d1.onsuccess = () => {
          _0x122c6f(null);
        };
        _0x1e94d1.onerror = _0x56632e => {
          _0x122c6f(this.error);
          _0x56632e.preventDefault();
        };
      },
      reconcile: (_0x397be3, _0x481429, _0x2323e6) => {
        var _0x5d16af = 0;
        var _0x35b421 = [];
        Object.keys(_0x397be3.entries).forEach(function (_0xa72774) {
          var _0x20863e = _0x397be3.entries[_0xa72774];
          var _0x40e378 = _0x481429.entries[_0xa72774];
          if (!_0x40e378 || _0x20863e.timestamp.getTime() != _0x40e378.timestamp.getTime()) {
            _0x35b421.push(_0xa72774);
            _0x5d16af++;
          }
        });
        var _0x4a2a28 = [];
        Object.keys(_0x481429.entries).forEach(function (_0x3239c1) {
          if (!_0x397be3.entries[_0x3239c1]) {
            _0x4a2a28.push(_0x3239c1);
            _0x5d16af++;
          }
        });
        if (!_0x5d16af) {
          return _0x2323e6(null);
        }
        var _0x5ad455 = false;
        var _0x3c2bc9 = _0x397be3.type === "remote" ? _0x397be3.db : _0x481429.db;
        var _0xcbef1f = _0x3c2bc9.transaction([_0x4007c8.DB_STORE_NAME], "readwrite");
        var _0x52bc5f = _0xcbef1f.objectStore(_0x4007c8.DB_STORE_NAME);
        function _0x5c2afd(_0xdd62ae) {
          if (_0xdd62ae && !_0x5ad455) {
            _0x5ad455 = true;
            return _0x2323e6(_0xdd62ae);
          }
        }
        _0xcbef1f.onerror = _0x1ac63f => {
          _0x5c2afd(this.error);
          _0x1ac63f.preventDefault();
        };
        _0xcbef1f.oncomplete = _0xc6c7ea => {
          if (!_0x5ad455) {
            _0x2323e6(null);
          }
        };
        _0x35b421.sort().forEach(_0x14b1f7 => {
          if (_0x481429.type === "local") {
            _0x4007c8.loadRemoteEntry(_0x52bc5f, _0x14b1f7, (_0x2aad85, _0x32116c) => {
              if (_0x2aad85) {
                return _0x5c2afd(_0x2aad85);
              }
              _0x4007c8.storeLocalEntry(_0x14b1f7, _0x32116c, _0x5c2afd);
            });
          } else {
            _0x4007c8.loadLocalEntry(_0x14b1f7, (_0x88710b, _0x3b3f79) => {
              if (_0x88710b) {
                return _0x5c2afd(_0x88710b);
              }
              _0x4007c8.storeRemoteEntry(_0x52bc5f, _0x14b1f7, _0x3b3f79, _0x5c2afd);
            });
          }
        });
        _0x4a2a28.sort().reverse().forEach(_0x33b4cb => {
          if (_0x481429.type === "local") {
            _0x4007c8.removeLocalEntry(_0x33b4cb, _0x5c2afd);
          } else {
            _0x4007c8.removeRemoteEntry(_0x52bc5f, _0x33b4cb, _0x5c2afd);
          }
        });
      }
    };
    var _0x1c26fd = {
      root: null,
      mounts: [],
      devices: {},
      streams: [],
      nextInode: 1,
      nameTable: null,
      currentPath: "/",
      initialized: false,
      ignorePermissions: true,
      ErrnoError: null,
      genericErrors: {},
      filesystems: null,
      syncFSRequests: 0,
      lookupPath: (_0xfcff25, _0x38177a = {}) => {
        _0xfcff25 = _0x10785f.resolve(_0x1c26fd.cwd(), _0xfcff25);
        if (!_0xfcff25) {
          return {
            path: "",
            node: null
          };
        }
        var _0x4836a0 = {
          follow_mount: true,
          recurse_count: 0
        };
        _0x38177a = Object.assign(_0x4836a0, _0x38177a);
        if (_0x38177a.recurse_count > 8) {
          throw new _0x1c26fd.ErrnoError(32);
        }
        var _0x359c0f = _0x39fc49.normalizeArray(_0xfcff25.split("/").filter(_0x129f9d => !!_0x129f9d), false);
        var _0x462e9c = _0x1c26fd.root;
        var _0x8a2364 = "/";
        for (var _0x4acde2 = 0; _0x4acde2 < _0x359c0f.length; _0x4acde2++) {
          var _0x1bdc57 = _0x4acde2 === _0x359c0f.length - 1;
          if (_0x1bdc57 && _0x38177a.parent) {
            break;
          }
          _0x462e9c = _0x1c26fd.lookupNode(_0x462e9c, _0x359c0f[_0x4acde2]);
          _0x8a2364 = _0x39fc49.join2(_0x8a2364, _0x359c0f[_0x4acde2]);
          if (_0x1c26fd.isMountpoint(_0x462e9c)) {
            if (!_0x1bdc57 || _0x1bdc57 && _0x38177a.follow_mount) {
              _0x462e9c = _0x462e9c.mounted.root;
            }
          }
          if (!_0x1bdc57 || _0x38177a.follow) {
            var _0x121fa3 = 0;
            while (_0x1c26fd.isLink(_0x462e9c.mode)) {
              var _0x417f9d = _0x1c26fd.readlink(_0x8a2364);
              _0x8a2364 = _0x10785f.resolve(_0x39fc49.dirname(_0x8a2364), _0x417f9d);
              var _0x44212d = _0x1c26fd.lookupPath(_0x8a2364, {
                recurse_count: _0x38177a.recurse_count + 1
              });
              _0x462e9c = _0x44212d.node;
              if (_0x121fa3++ > 40) {
                throw new _0x1c26fd.ErrnoError(32);
              }
            }
          }
        }
        return {
          path: _0x8a2364,
          node: _0x462e9c
        };
      },
      getPath: _0x416e9e => {
        var _0xb33c16;
        while (true) {
          if (_0x1c26fd.isRoot(_0x416e9e)) {
            var _0x22f9a3 = _0x416e9e.mount.mountpoint;
            if (!_0xb33c16) {
              return _0x22f9a3;
            }
            if (_0x22f9a3[_0x22f9a3.length - 1] !== "/") {
              return _0x22f9a3 + "/" + _0xb33c16;
            } else {
              return _0x22f9a3 + _0xb33c16;
            }
          }
          _0xb33c16 = _0xb33c16 ? _0x416e9e.name + "/" + _0xb33c16 : _0x416e9e.name;
          _0x416e9e = _0x416e9e.parent;
        }
      },
      hashName: (_0x3e8af8, _0x28f158) => {
        var _0x11c65e = 0;
        for (var _0x2f63df = 0; _0x2f63df < _0x28f158.length; _0x2f63df++) {
          _0x11c65e = (_0x11c65e << 5) - _0x11c65e + _0x28f158.charCodeAt(_0x2f63df) | 0;
        }
        return (_0x3e8af8 + _0x11c65e >>> 0) % _0x1c26fd.nameTable.length;
      },
      hashAddNode: _0x41e14c => {
        var _0x57b765 = _0x1c26fd.hashName(_0x41e14c.parent.id, _0x41e14c.name);
        _0x41e14c.name_next = _0x1c26fd.nameTable[_0x57b765];
        _0x1c26fd.nameTable[_0x57b765] = _0x41e14c;
      },
      hashRemoveNode: _0x2b223e => {
        var _0xda5e7 = _0x1c26fd.hashName(_0x2b223e.parent.id, _0x2b223e.name);
        if (_0x1c26fd.nameTable[_0xda5e7] === _0x2b223e) {
          _0x1c26fd.nameTable[_0xda5e7] = _0x2b223e.name_next;
        } else {
          var _0x4b891b = _0x1c26fd.nameTable[_0xda5e7];
          while (_0x4b891b) {
            if (_0x4b891b.name_next === _0x2b223e) {
              _0x4b891b.name_next = _0x2b223e.name_next;
              break;
            }
            _0x4b891b = _0x4b891b.name_next;
          }
        }
      },
      lookupNode: (_0x4b0b6b, _0x32b679) => {
        var _0x16786a = _0x1c26fd.mayLookup(_0x4b0b6b);
        if (_0x16786a) {
          throw new _0x1c26fd.ErrnoError(_0x16786a, _0x4b0b6b);
        }
        var _0x398f13 = _0x1c26fd.hashName(_0x4b0b6b.id, _0x32b679);
        for (var _0x2925f5 = _0x1c26fd.nameTable[_0x398f13]; _0x2925f5; _0x2925f5 = _0x2925f5.name_next) {
          var _0x21b7bb = _0x2925f5.name;
          if (_0x2925f5.parent.id === _0x4b0b6b.id && _0x21b7bb === _0x32b679) {
            return _0x2925f5;
          }
        }
        return _0x1c26fd.lookup(_0x4b0b6b, _0x32b679);
      },
      createNode: (_0x4d245f, _0x46a33b, _0x7bcb13, _0x17c87f) => {
        var _0x506ee1 = new _0x1c26fd.FSNode(_0x4d245f, _0x46a33b, _0x7bcb13, _0x17c87f);
        _0x1c26fd.hashAddNode(_0x506ee1);
        return _0x506ee1;
      },
      destroyNode: _0x56dbf3 => {
        _0x1c26fd.hashRemoveNode(_0x56dbf3);
      },
      isRoot: _0x3becc8 => {
        return _0x3becc8 === _0x3becc8.parent;
      },
      isMountpoint: _0x5792d2 => {
        return !!_0x5792d2.mounted;
      },
      isFile: _0x50401d => {
        return (_0x50401d & 61440) === 32768;
      },
      isDir: _0x44f4bf => {
        return (_0x44f4bf & 61440) === 16384;
      },
      isLink: _0x84c52c => {
        return (_0x84c52c & 61440) === 40960;
      },
      isChrdev: _0x1a799f => {
        return (_0x1a799f & 61440) === 8192;
      },
      isBlkdev: _0x11afd2 => {
        return (_0x11afd2 & 61440) === 24576;
      },
      isFIFO: _0x59c0b9 => {
        return (_0x59c0b9 & 61440) === 4096;
      },
      isSocket: _0x148fbd => {
        return (_0x148fbd & 49152) === 49152;
      },
      flagModes: {
        r: 0,
        "r+": 2,
        w: 577,
        "w+": 578,
        a: 1089,
        "a+": 1090
      },
      modeStringToFlags: _0x5182b5 => {
        var _0x3d51ef = _0x1c26fd.flagModes[_0x5182b5];
        if (typeof _0x3d51ef == "undefined") {
          throw new Error("Unknown file open mode: " + _0x5182b5);
        }
        return _0x3d51ef;
      },
      flagsToPermissionString: _0x2d7335 => {
        var _0x3f3d46 = ["r", "w", "rw"][_0x2d7335 & 3];
        if (_0x2d7335 & 512) {
          _0x3f3d46 += "w";
        }
        return _0x3f3d46;
      },
      nodePermissions: (_0x52c81e, _0x57755a) => {
        if (_0x1c26fd.ignorePermissions) {
          return 0;
        }
        if (_0x57755a.includes("r") && !(_0x52c81e.mode & 292)) {
          return 2;
        } else if (_0x57755a.includes("w") && !(_0x52c81e.mode & 146)) {
          return 2;
        } else if (_0x57755a.includes("x") && !(_0x52c81e.mode & 73)) {
          return 2;
        }
        return 0;
      },
      mayLookup: _0x44e8d7 => {
        var _0x38591d = _0x1c26fd.nodePermissions(_0x44e8d7, "x");
        if (_0x38591d) {
          return _0x38591d;
        }
        if (!_0x44e8d7.node_ops.lookup) {
          return 2;
        }
        return 0;
      },
      mayCreate: (_0x548908, _0x324458) => {
        try {
          var _0x3ed088 = _0x1c26fd.lookupNode(_0x548908, _0x324458);
          return 20;
        } catch (_0x3b3472) {}
        return _0x1c26fd.nodePermissions(_0x548908, "wx");
      },
      mayDelete: (_0x517e44, _0x4717ae, _0x424f63) => {
        var _0x14ee60;
        try {
          _0x14ee60 = _0x1c26fd.lookupNode(_0x517e44, _0x4717ae);
        } catch (_0x944b1b) {
          return _0x944b1b.errno;
        }
        var _0x3792a1 = _0x1c26fd.nodePermissions(_0x517e44, "wx");
        if (_0x3792a1) {
          return _0x3792a1;
        }
        if (_0x424f63) {
          if (!_0x1c26fd.isDir(_0x14ee60.mode)) {
            return 54;
          }
          if (_0x1c26fd.isRoot(_0x14ee60) || _0x1c26fd.getPath(_0x14ee60) === _0x1c26fd.cwd()) {
            return 10;
          }
        } else if (_0x1c26fd.isDir(_0x14ee60.mode)) {
          return 31;
        }
        return 0;
      },
      mayOpen: (_0x41cbeb, _0x9ef1e4) => {
        if (!_0x41cbeb) {
          return 44;
        }
        if (_0x1c26fd.isLink(_0x41cbeb.mode)) {
          return 32;
        } else if (_0x1c26fd.isDir(_0x41cbeb.mode)) {
          if (_0x1c26fd.flagsToPermissionString(_0x9ef1e4) !== "r" || _0x9ef1e4 & 512) {
            return 31;
          }
        }
        return _0x1c26fd.nodePermissions(_0x41cbeb, _0x1c26fd.flagsToPermissionString(_0x9ef1e4));
      },
      MAX_OPEN_FDS: 4096,
      nextfd: (_0x4ac68d = 0, _0x319b8f = _0x1c26fd.MAX_OPEN_FDS) => {
        for (var _0x4807fe = _0x4ac68d; _0x4807fe <= _0x319b8f; _0x4807fe++) {
          if (!_0x1c26fd.streams[_0x4807fe]) {
            return _0x4807fe;
          }
        }
        throw new _0x1c26fd.ErrnoError(33);
      },
      getStream: _0x278aae => _0x1c26fd.streams[_0x278aae],
      createStream: (_0x45bedb, _0x1f18e4, _0x6c666a) => {
        if (!_0x1c26fd.FSStream) {
          _0x1c26fd.FSStream = function () {};
          _0x1c26fd.FSStream.prototype = {
            object: {
              get: function () {
                return this.node;
              },
              set: function (_0xd89367) {
                this.node = _0xd89367;
              }
            },
            isRead: {
              get: function () {
                return (this.flags & 2097155) !== 1;
              }
            },
            isWrite: {
              get: function () {
                return (this.flags & 2097155) !== 0;
              }
            },
            isAppend: {
              get: function () {
                return this.flags & 1024;
              }
            }
          };
        }
        _0x45bedb = Object.assign(new _0x1c26fd.FSStream(), _0x45bedb);
        var _0x205845 = _0x1c26fd.nextfd(_0x1f18e4, _0x6c666a);
        _0x45bedb.fd = _0x205845;
        _0x1c26fd.streams[_0x205845] = _0x45bedb;
        return _0x45bedb;
      },
      closeStream: _0x15ed1c => {
        _0x1c26fd.streams[_0x15ed1c] = null;
      },
      chrdev_stream_ops: {
        open: _0x468bbd => {
          var _0x16155c = _0x1c26fd.getDevice(_0x468bbd.node.rdev);
          _0x468bbd.stream_ops = _0x16155c.stream_ops;
          if (_0x468bbd.stream_ops.open) {
            _0x468bbd.stream_ops.open(_0x468bbd);
          }
        },
        llseek: () => {
          throw new _0x1c26fd.ErrnoError(70);
        }
      },
      major: _0x5ece58 => _0x5ece58 >> 8,
      minor: _0x2772d8 => _0x2772d8 & 255,
      makedev: (_0x137355, _0x4b290c) => _0x137355 << 8 | _0x4b290c,
      registerDevice: (_0x5113f6, _0x537b6d) => {
        _0x1c26fd.devices[_0x5113f6] = {
          stream_ops: _0x537b6d
        };
      },
      getDevice: _0x473807 => _0x1c26fd.devices[_0x473807],
      getMounts: _0x143a53 => {
        var _0x31b528 = [];
        var _0x3e3351 = [_0x143a53];
        while (_0x3e3351.length) {
          var _0x488c56 = _0x3e3351.pop();
          _0x31b528.push(_0x488c56);
          _0x3e3351.push.apply(_0x3e3351, _0x488c56.mounts);
        }
        return _0x31b528;
      },
      syncfs: (_0x52dac8, _0x3cab17) => {
        if (typeof _0x52dac8 == "function") {
          _0x3cab17 = _0x52dac8;
          _0x52dac8 = false;
        }
        _0x1c26fd.syncFSRequests++;
        if (_0x1c26fd.syncFSRequests > 1) {
          _0x2b9f46("warning: " + _0x1c26fd.syncFSRequests + " FS.syncfs operations in flight at once, probably just doing extra work");
        }
        var _0x4fe7df = _0x1c26fd.getMounts(_0x1c26fd.root.mount);
        var _0x5ce71d = 0;
        function _0x5eb85c(_0xcd4ed2) {
          _0x1c26fd.syncFSRequests--;
          return _0x3cab17(_0xcd4ed2);
        }
        function _0x590c9d(_0x468dce) {
          if (_0x468dce) {
            if (!_0x590c9d.errored) {
              _0x590c9d.errored = true;
              return _0x5eb85c(_0x468dce);
            }
            return;
          }
          if (++_0x5ce71d >= _0x4fe7df.length) {
            _0x5eb85c(null);
          }
        }
        _0x4fe7df.forEach(_0x4699e9 => {
          if (!_0x4699e9.type.syncfs) {
            return _0x590c9d(null);
          }
          _0x4699e9.type.syncfs(_0x4699e9, _0x52dac8, _0x590c9d);
        });
      },
      mount: (_0x433a01, _0x1e3c88, _0x10fbe5) => {
        var _0x4effd9 = _0x10fbe5 === "/";
        var _0x5aed = !_0x10fbe5;
        var _0x31a0fd;
        if (_0x4effd9 && _0x1c26fd.root) {
          throw new _0x1c26fd.ErrnoError(10);
        } else if (!_0x4effd9 && !_0x5aed) {
          var _0x5b785d = _0x1c26fd.lookupPath(_0x10fbe5, {
            follow_mount: false
          });
          _0x10fbe5 = _0x5b785d.path;
          _0x31a0fd = _0x5b785d.node;
          if (_0x1c26fd.isMountpoint(_0x31a0fd)) {
            throw new _0x1c26fd.ErrnoError(10);
          }
          if (!_0x1c26fd.isDir(_0x31a0fd.mode)) {
            throw new _0x1c26fd.ErrnoError(54);
          }
        }
        var _0x497e1a = {
          type: _0x433a01,
          opts: _0x1e3c88,
          mountpoint: _0x10fbe5,
          mounts: []
        };
        var _0x34e84c = _0x433a01.mount(_0x497e1a);
        _0x34e84c.mount = _0x497e1a;
        _0x497e1a.root = _0x34e84c;
        if (_0x4effd9) {
          _0x1c26fd.root = _0x34e84c;
        } else if (_0x31a0fd) {
          _0x31a0fd.mounted = _0x497e1a;
          if (_0x31a0fd.mount) {
            _0x31a0fd.mount.mounts.push(_0x497e1a);
          }
        }
        return _0x34e84c;
      },
      unmount: _0x373f42 => {
        var _0x50def1 = _0x1c26fd.lookupPath(_0x373f42, {
          follow_mount: false
        });
        if (!_0x1c26fd.isMountpoint(_0x50def1.node)) {
          throw new _0x1c26fd.ErrnoError(28);
        }
        var _0x8259a = _0x50def1.node;
        var _0x30a151 = _0x8259a.mounted;
        var _0x5c76fe = _0x1c26fd.getMounts(_0x30a151);
        Object.keys(_0x1c26fd.nameTable).forEach(_0x4ab412 => {
          var _0x2255e5 = _0x1c26fd.nameTable[_0x4ab412];
          while (_0x2255e5) {
            var _0x342bd8 = _0x2255e5.name_next;
            if (_0x5c76fe.includes(_0x2255e5.mount)) {
              _0x1c26fd.destroyNode(_0x2255e5);
            }
            _0x2255e5 = _0x342bd8;
          }
        });
        _0x8259a.mounted = null;
        var _0x3a56de = _0x8259a.mount.mounts.indexOf(_0x30a151);
        _0x8259a.mount.mounts.splice(_0x3a56de, 1);
      },
      lookup: (_0x15b9a8, _0x4669d4) => {
        return _0x15b9a8.node_ops.lookup(_0x15b9a8, _0x4669d4);
      },
      mknod: (_0x1461f5, _0x27885c, _0x3c9f3d) => {
        var _0x4fbb87 = _0x1c26fd.lookupPath(_0x1461f5, {
          parent: true
        });
        var _0x468991 = _0x4fbb87.node;
        var _0x2e4bf4 = _0x39fc49.basename(_0x1461f5);
        if (!_0x2e4bf4 || _0x2e4bf4 === "." || _0x2e4bf4 === "..") {
          throw new _0x1c26fd.ErrnoError(28);
        }
        var _0x14b160 = _0x1c26fd.mayCreate(_0x468991, _0x2e4bf4);
        if (_0x14b160) {
          throw new _0x1c26fd.ErrnoError(_0x14b160);
        }
        if (!_0x468991.node_ops.mknod) {
          throw new _0x1c26fd.ErrnoError(63);
        }
        return _0x468991.node_ops.mknod(_0x468991, _0x2e4bf4, _0x27885c, _0x3c9f3d);
      },
      create: (_0x226198, _0x2dbe9e) => {
        _0x2dbe9e = _0x2dbe9e !== undefined ? _0x2dbe9e : 438;
        _0x2dbe9e &= 4095;
        _0x2dbe9e |= 32768;
        return _0x1c26fd.mknod(_0x226198, _0x2dbe9e, 0);
      },
      mkdir: (_0x183998, _0x1f4294) => {
        _0x1f4294 = _0x1f4294 !== undefined ? _0x1f4294 : 511;
        _0x1f4294 &= 1023;
        _0x1f4294 |= 16384;
        return _0x1c26fd.mknod(_0x183998, _0x1f4294, 0);
      },
      mkdirTree: (_0x5695ba, _0xa9274d) => {
        var _0x345cab = _0x5695ba.split("/");
        var _0x346a19 = "";
        for (var _0x369519 = 0; _0x369519 < _0x345cab.length; ++_0x369519) {
          if (!_0x345cab[_0x369519]) {
            continue;
          }
          _0x346a19 += "/" + _0x345cab[_0x369519];
          try {
            _0x1c26fd.mkdir(_0x346a19, _0xa9274d);
          } catch (_0x219c4d) {
            if (_0x219c4d.errno != 20) {
              throw _0x219c4d;
            }
          }
        }
      },
      mkdev: (_0x4ce811, _0x2e4225, _0x39ddf9) => {
        if (typeof _0x39ddf9 == "undefined") {
          _0x39ddf9 = _0x2e4225;
          _0x2e4225 = 438;
        }
        _0x2e4225 |= 8192;
        return _0x1c26fd.mknod(_0x4ce811, _0x2e4225, _0x39ddf9);
      },
      symlink: (_0x1f379e, _0x6c7641) => {
        if (!_0x10785f.resolve(_0x1f379e)) {
          throw new _0x1c26fd.ErrnoError(44);
        }
        var _0x586dcf = _0x1c26fd.lookupPath(_0x6c7641, {
          parent: true
        });
        var _0x3d9265 = _0x586dcf.node;
        if (!_0x3d9265) {
          throw new _0x1c26fd.ErrnoError(44);
        }
        var _0x4b8ccd = _0x39fc49.basename(_0x6c7641);
        var _0x194330 = _0x1c26fd.mayCreate(_0x3d9265, _0x4b8ccd);
        if (_0x194330) {
          throw new _0x1c26fd.ErrnoError(_0x194330);
        }
        if (!_0x3d9265.node_ops.symlink) {
          throw new _0x1c26fd.ErrnoError(63);
        }
        return _0x3d9265.node_ops.symlink(_0x3d9265, _0x4b8ccd, _0x1f379e);
      },
      rename: (_0x2619a6, _0x3e6561) => {
        var _0x5152b4 = _0x39fc49.dirname(_0x2619a6);
        var _0x3f05cf = _0x39fc49.dirname(_0x3e6561);
        var _0x13c50a = _0x39fc49.basename(_0x2619a6);
        var _0x3a1f4c = _0x39fc49.basename(_0x3e6561);
        var _0x2a5b97;
        var _0x97ee21;
        var _0x4d71b2;
        _0x2a5b97 = _0x1c26fd.lookupPath(_0x2619a6, {
          parent: true
        });
        _0x97ee21 = _0x2a5b97.node;
        _0x2a5b97 = _0x1c26fd.lookupPath(_0x3e6561, {
          parent: true
        });
        _0x4d71b2 = _0x2a5b97.node;
        if (!_0x97ee21 || !_0x4d71b2) {
          throw new _0x1c26fd.ErrnoError(44);
        }
        if (_0x97ee21.mount !== _0x4d71b2.mount) {
          throw new _0x1c26fd.ErrnoError(75);
        }
        var _0x2648ad = _0x1c26fd.lookupNode(_0x97ee21, _0x13c50a);
        var _0x1075ed = _0x10785f.relative(_0x2619a6, _0x3f05cf);
        if (_0x1075ed.charAt(0) !== ".") {
          throw new _0x1c26fd.ErrnoError(28);
        }
        _0x1075ed = _0x10785f.relative(_0x3e6561, _0x5152b4);
        if (_0x1075ed.charAt(0) !== ".") {
          throw new _0x1c26fd.ErrnoError(55);
        }
        var _0x300d02;
        try {
          _0x300d02 = _0x1c26fd.lookupNode(_0x4d71b2, _0x3a1f4c);
        } catch (_0x27d325) {}
        if (_0x2648ad === _0x300d02) {
          return;
        }
        var _0x18724c = _0x1c26fd.isDir(_0x2648ad.mode);
        var _0x3e2bb5 = _0x1c26fd.mayDelete(_0x97ee21, _0x13c50a, _0x18724c);
        if (_0x3e2bb5) {
          throw new _0x1c26fd.ErrnoError(_0x3e2bb5);
        }
        _0x3e2bb5 = _0x300d02 ? _0x1c26fd.mayDelete(_0x4d71b2, _0x3a1f4c, _0x18724c) : _0x1c26fd.mayCreate(_0x4d71b2, _0x3a1f4c);
        if (_0x3e2bb5) {
          throw new _0x1c26fd.ErrnoError(_0x3e2bb5);
        }
        if (!_0x97ee21.node_ops.rename) {
          throw new _0x1c26fd.ErrnoError(63);
        }
        if (_0x1c26fd.isMountpoint(_0x2648ad) || _0x300d02 && _0x1c26fd.isMountpoint(_0x300d02)) {
          throw new _0x1c26fd.ErrnoError(10);
        }
        if (_0x4d71b2 !== _0x97ee21) {
          _0x3e2bb5 = _0x1c26fd.nodePermissions(_0x97ee21, "w");
          if (_0x3e2bb5) {
            throw new _0x1c26fd.ErrnoError(_0x3e2bb5);
          }
        }
        _0x1c26fd.hashRemoveNode(_0x2648ad);
        try {
          _0x97ee21.node_ops.rename(_0x2648ad, _0x4d71b2, _0x3a1f4c);
        } catch (_0x348245) {
          throw _0x348245;
        } finally {
          _0x1c26fd.hashAddNode(_0x2648ad);
        }
      },
      rmdir: _0xb357bf => {
        var _0x3f569e = _0x1c26fd.lookupPath(_0xb357bf, {
          parent: true
        });
        var _0x18949a = _0x3f569e.node;
        var _0x4febce = _0x39fc49.basename(_0xb357bf);
        var _0x4ca7c1 = _0x1c26fd.lookupNode(_0x18949a, _0x4febce);
        var _0x24fb00 = _0x1c26fd.mayDelete(_0x18949a, _0x4febce, true);
        if (_0x24fb00) {
          throw new _0x1c26fd.ErrnoError(_0x24fb00);
        }
        if (!_0x18949a.node_ops.rmdir) {
          throw new _0x1c26fd.ErrnoError(63);
        }
        if (_0x1c26fd.isMountpoint(_0x4ca7c1)) {
          throw new _0x1c26fd.ErrnoError(10);
        }
        _0x18949a.node_ops.rmdir(_0x18949a, _0x4febce);
        _0x1c26fd.destroyNode(_0x4ca7c1);
      },
      readdir: _0x2e136f => {
        var _0x7104a4 = _0x1c26fd.lookupPath(_0x2e136f, {
          follow: true
        });
        var _0x513c58 = _0x7104a4.node;
        if (!_0x513c58.node_ops.readdir) {
          throw new _0x1c26fd.ErrnoError(54);
        }
        return _0x513c58.node_ops.readdir(_0x513c58);
      },
      unlink: _0x47c0fd => {
        var _0x50b469 = _0x1c26fd.lookupPath(_0x47c0fd, {
          parent: true
        });
        var _0x1b74c3 = _0x50b469.node;
        if (!_0x1b74c3) {
          throw new _0x1c26fd.ErrnoError(44);
        }
        var _0x5a89f9 = _0x39fc49.basename(_0x47c0fd);
        var _0x1fb7ba = _0x1c26fd.lookupNode(_0x1b74c3, _0x5a89f9);
        var _0x32c71a = _0x1c26fd.mayDelete(_0x1b74c3, _0x5a89f9, false);
        if (_0x32c71a) {
          throw new _0x1c26fd.ErrnoError(_0x32c71a);
        }
        if (!_0x1b74c3.node_ops.unlink) {
          throw new _0x1c26fd.ErrnoError(63);
        }
        if (_0x1c26fd.isMountpoint(_0x1fb7ba)) {
          throw new _0x1c26fd.ErrnoError(10);
        }
        _0x1b74c3.node_ops.unlink(_0x1b74c3, _0x5a89f9);
        _0x1c26fd.destroyNode(_0x1fb7ba);
      },
      readlink: _0x50672a => {
        var _0x54b1d6 = _0x1c26fd.lookupPath(_0x50672a);
        var _0x5865fe = _0x54b1d6.node;
        if (!_0x5865fe) {
          throw new _0x1c26fd.ErrnoError(44);
        }
        if (!_0x5865fe.node_ops.readlink) {
          throw new _0x1c26fd.ErrnoError(28);
        }
        return _0x10785f.resolve(_0x1c26fd.getPath(_0x5865fe.parent), _0x5865fe.node_ops.readlink(_0x5865fe));
      },
      stat: (_0x15646d, _0x18b401) => {
        var _0x32d806 = _0x1c26fd.lookupPath(_0x15646d, {
          follow: !_0x18b401
        });
        var _0x3de7ad = _0x32d806.node;
        if (!_0x3de7ad) {
          throw new _0x1c26fd.ErrnoError(44);
        }
        if (!_0x3de7ad.node_ops.getattr) {
          throw new _0x1c26fd.ErrnoError(63);
        }
        return _0x3de7ad.node_ops.getattr(_0x3de7ad);
      },
      lstat: _0x38359d => {
        return _0x1c26fd.stat(_0x38359d, true);
      },
      chmod: (_0x33cb13, _0x35916d, _0x4a8101) => {
        var _0x4acbdf;
        if (typeof _0x33cb13 == "string") {
          var _0x1b5697 = _0x1c26fd.lookupPath(_0x33cb13, {
            follow: !_0x4a8101
          });
          _0x4acbdf = _0x1b5697.node;
        } else {
          _0x4acbdf = _0x33cb13;
        }
        if (!_0x4acbdf.node_ops.setattr) {
          throw new _0x1c26fd.ErrnoError(63);
        }
        _0x4acbdf.node_ops.setattr(_0x4acbdf, {
          mode: _0x35916d & 4095 | _0x4acbdf.mode & ~4095,
          timestamp: Date.now()
        });
      },
      lchmod: (_0x5a9cfc, _0x55ab0c) => {
        _0x1c26fd.chmod(_0x5a9cfc, _0x55ab0c, true);
      },
      fchmod: (_0xd0af5f, _0x4a8005) => {
        var _0xb79394 = _0x1c26fd.getStream(_0xd0af5f);
        if (!_0xb79394) {
          throw new _0x1c26fd.ErrnoError(8);
        }
        _0x1c26fd.chmod(_0xb79394.node, _0x4a8005);
      },
      chown: (_0x3271d7, _0x2022fd, _0x2b3b7e, _0x18d9ce) => {
        var _0x3304e8;
        if (typeof _0x3271d7 == "string") {
          var _0x2f3cba = _0x1c26fd.lookupPath(_0x3271d7, {
            follow: !_0x18d9ce
          });
          _0x3304e8 = _0x2f3cba.node;
        } else {
          _0x3304e8 = _0x3271d7;
        }
        if (!_0x3304e8.node_ops.setattr) {
          throw new _0x1c26fd.ErrnoError(63);
        }
        _0x3304e8.node_ops.setattr(_0x3304e8, {
          timestamp: Date.now()
        });
      },
      lchown: (_0x36a56e, _0x1513eb, _0x1532eb) => {
        _0x1c26fd.chown(_0x36a56e, _0x1513eb, _0x1532eb, true);
      },
      fchown: (_0x203a1f, _0x4bd0b6, _0x3074b9) => {
        var _0x173bae = _0x1c26fd.getStream(_0x203a1f);
        if (!_0x173bae) {
          throw new _0x1c26fd.ErrnoError(8);
        }
        _0x1c26fd.chown(_0x173bae.node, _0x4bd0b6, _0x3074b9);
      },
      truncate: (_0x1c3e88, _0x732531) => {
        if (_0x732531 < 0) {
          throw new _0x1c26fd.ErrnoError(28);
        }
        var _0x4f2592;
        if (typeof _0x1c3e88 == "string") {
          var _0x3d534c = _0x1c26fd.lookupPath(_0x1c3e88, {
            follow: true
          });
          _0x4f2592 = _0x3d534c.node;
        } else {
          _0x4f2592 = _0x1c3e88;
        }
        if (!_0x4f2592.node_ops.setattr) {
          throw new _0x1c26fd.ErrnoError(63);
        }
        if (_0x1c26fd.isDir(_0x4f2592.mode)) {
          throw new _0x1c26fd.ErrnoError(31);
        }
        if (!_0x1c26fd.isFile(_0x4f2592.mode)) {
          throw new _0x1c26fd.ErrnoError(28);
        }
        var _0x1519dc = _0x1c26fd.nodePermissions(_0x4f2592, "w");
        if (_0x1519dc) {
          throw new _0x1c26fd.ErrnoError(_0x1519dc);
        }
        _0x4f2592.node_ops.setattr(_0x4f2592, {
          size: _0x732531,
          timestamp: Date.now()
        });
      },
      ftruncate: (_0x5de2d0, _0x453980) => {
        var _0x500a1b = _0x1c26fd.getStream(_0x5de2d0);
        if (!_0x500a1b) {
          throw new _0x1c26fd.ErrnoError(8);
        }
        if ((_0x500a1b.flags & 2097155) === 0) {
          throw new _0x1c26fd.ErrnoError(28);
        }
        _0x1c26fd.truncate(_0x500a1b.node, _0x453980);
      },
      utime: (_0x48d961, _0x58bb24, _0x45efed) => {
        var _0x392bb3 = _0x1c26fd.lookupPath(_0x48d961, {
          follow: true
        });
        var _0x5bbd05 = _0x392bb3.node;
        _0x5bbd05.node_ops.setattr(_0x5bbd05, {
          timestamp: Math.max(_0x58bb24, _0x45efed)
        });
      },
      open: (_0x3553a5, _0x227e7e, _0x19c4ec, _0x1847e6, _0x1e6193) => {
        if (_0x3553a5 === "") {
          throw new _0x1c26fd.ErrnoError(44);
        }
        _0x227e7e = typeof _0x227e7e == "string" ? _0x1c26fd.modeStringToFlags(_0x227e7e) : _0x227e7e;
        _0x19c4ec = typeof _0x19c4ec == "undefined" ? 438 : _0x19c4ec;
        if (_0x227e7e & 64) {
          _0x19c4ec = _0x19c4ec & 4095 | 32768;
        } else {
          _0x19c4ec = 0;
        }
        var _0x425ed8;
        if (typeof _0x3553a5 == "object") {
          _0x425ed8 = _0x3553a5;
        } else {
          _0x3553a5 = _0x39fc49.normalize(_0x3553a5);
          try {
            var _0x13401b = _0x1c26fd.lookupPath(_0x3553a5, {
              follow: !(_0x227e7e & 131072)
            });
            _0x425ed8 = _0x13401b.node;
          } catch (_0x4b17f9) {}
        }
        var _0x4581dc = false;
        if (_0x227e7e & 64) {
          if (_0x425ed8) {
            if (_0x227e7e & 128) {
              throw new _0x1c26fd.ErrnoError(20);
            }
          } else {
            _0x425ed8 = _0x1c26fd.mknod(_0x3553a5, _0x19c4ec, 0);
            _0x4581dc = true;
          }
        }
        if (!_0x425ed8) {
          throw new _0x1c26fd.ErrnoError(44);
        }
        if (_0x1c26fd.isChrdev(_0x425ed8.mode)) {
          _0x227e7e &= ~512;
        }
        if (_0x227e7e & 65536 && !_0x1c26fd.isDir(_0x425ed8.mode)) {
          throw new _0x1c26fd.ErrnoError(54);
        }
        if (!_0x4581dc) {
          var _0x14a80b = _0x1c26fd.mayOpen(_0x425ed8, _0x227e7e);
          if (_0x14a80b) {
            throw new _0x1c26fd.ErrnoError(_0x14a80b);
          }
        }
        if (_0x227e7e & 512) {
          _0x1c26fd.truncate(_0x425ed8, 0);
        }
        _0x227e7e &= ~131712;
        var _0x4927d0 = _0x1c26fd.createStream({
          node: _0x425ed8,
          path: _0x1c26fd.getPath(_0x425ed8),
          flags: _0x227e7e,
          seekable: true,
          position: 0,
          stream_ops: _0x425ed8.stream_ops,
          ungotten: [],
          error: false
        }, _0x1847e6, _0x1e6193);
        if (_0x4927d0.stream_ops.open) {
          _0x4927d0.stream_ops.open(_0x4927d0);
        }
        if (_0x339df7.logReadFiles && !(_0x227e7e & 1)) {
          if (!_0x1c26fd.readFiles) {
            _0x1c26fd.readFiles = {};
          }
          if (!(_0x3553a5 in _0x1c26fd.readFiles)) {
            _0x1c26fd.readFiles[_0x3553a5] = 1;
          }
        }
        return _0x4927d0;
      },
      close: _0x433c23 => {
        if (_0x1c26fd.isClosed(_0x433c23)) {
          throw new _0x1c26fd.ErrnoError(8);
        }
        if (_0x433c23.getdents) {
          _0x433c23.getdents = null;
        }
        try {
          if (_0x433c23.stream_ops.close) {
            _0x433c23.stream_ops.close(_0x433c23);
          }
        } catch (_0x2fc189) {
          throw _0x2fc189;
        } finally {
          _0x1c26fd.closeStream(_0x433c23.fd);
        }
        _0x433c23.fd = null;
      },
      isClosed: _0x305527 => {
        return _0x305527.fd === null;
      },
      llseek: (_0x5380a1, _0x33d8f7, _0x5da55e) => {
        if (_0x1c26fd.isClosed(_0x5380a1)) {
          throw new _0x1c26fd.ErrnoError(8);
        }
        if (!_0x5380a1.seekable || !_0x5380a1.stream_ops.llseek) {
          throw new _0x1c26fd.ErrnoError(70);
        }
        if (_0x5da55e != 0 && _0x5da55e != 1 && _0x5da55e != 2) {
          throw new _0x1c26fd.ErrnoError(28);
        }
        _0x5380a1.position = _0x5380a1.stream_ops.llseek(_0x5380a1, _0x33d8f7, _0x5da55e);
        _0x5380a1.ungotten = [];
        return _0x5380a1.position;
      },
      read: (_0x3634a0, _0x253c62, _0x345dbe, _0xc26163, _0x6f7ad0) => {
        if (_0xc26163 < 0 || _0x6f7ad0 < 0) {
          throw new _0x1c26fd.ErrnoError(28);
        }
        if (_0x1c26fd.isClosed(_0x3634a0)) {
          throw new _0x1c26fd.ErrnoError(8);
        }
        if ((_0x3634a0.flags & 2097155) === 1) {
          throw new _0x1c26fd.ErrnoError(8);
        }
        if (_0x1c26fd.isDir(_0x3634a0.node.mode)) {
          throw new _0x1c26fd.ErrnoError(31);
        }
        if (!_0x3634a0.stream_ops.read) {
          throw new _0x1c26fd.ErrnoError(28);
        }
        var _0x58c095 = typeof _0x6f7ad0 != "undefined";
        if (!_0x58c095) {
          _0x6f7ad0 = _0x3634a0.position;
        } else if (!_0x3634a0.seekable) {
          throw new _0x1c26fd.ErrnoError(70);
        }
        var _0x54190a = _0x3634a0.stream_ops.read(_0x3634a0, _0x253c62, _0x345dbe, _0xc26163, _0x6f7ad0);
        if (!_0x58c095) {
          _0x3634a0.position += _0x54190a;
        }
        return _0x54190a;
      },
      write: (_0x2dfb2c, _0x1cb861, _0x4b5359, _0xec06dd, _0x59c828, _0x5c4e04) => {
        if (_0xec06dd < 0 || _0x59c828 < 0) {
          throw new _0x1c26fd.ErrnoError(28);
        }
        if (_0x1c26fd.isClosed(_0x2dfb2c)) {
          throw new _0x1c26fd.ErrnoError(8);
        }
        if ((_0x2dfb2c.flags & 2097155) === 0) {
          throw new _0x1c26fd.ErrnoError(8);
        }
        if (_0x1c26fd.isDir(_0x2dfb2c.node.mode)) {
          throw new _0x1c26fd.ErrnoError(31);
        }
        if (!_0x2dfb2c.stream_ops.write) {
          throw new _0x1c26fd.ErrnoError(28);
        }
        if (_0x2dfb2c.seekable && _0x2dfb2c.flags & 1024) {
          _0x1c26fd.llseek(_0x2dfb2c, 0, 2);
        }
        var _0x3be69b = typeof _0x59c828 != "undefined";
        if (!_0x3be69b) {
          _0x59c828 = _0x2dfb2c.position;
        } else if (!_0x2dfb2c.seekable) {
          throw new _0x1c26fd.ErrnoError(70);
        }
        var _0xefca0f = _0x2dfb2c.stream_ops.write(_0x2dfb2c, _0x1cb861, _0x4b5359, _0xec06dd, _0x59c828, _0x5c4e04);
        if (!_0x3be69b) {
          _0x2dfb2c.position += _0xefca0f;
        }
        return _0xefca0f;
      },
      allocate: (_0x5437d6, _0x33930c, _0x36af78) => {
        if (_0x1c26fd.isClosed(_0x5437d6)) {
          throw new _0x1c26fd.ErrnoError(8);
        }
        if (_0x33930c < 0 || _0x36af78 <= 0) {
          throw new _0x1c26fd.ErrnoError(28);
        }
        if ((_0x5437d6.flags & 2097155) === 0) {
          throw new _0x1c26fd.ErrnoError(8);
        }
        if (!_0x1c26fd.isFile(_0x5437d6.node.mode) && !_0x1c26fd.isDir(_0x5437d6.node.mode)) {
          throw new _0x1c26fd.ErrnoError(43);
        }
        if (!_0x5437d6.stream_ops.allocate) {
          throw new _0x1c26fd.ErrnoError(138);
        }
        _0x5437d6.stream_ops.allocate(_0x5437d6, _0x33930c, _0x36af78);
      },
      mmap: (_0x248bec, _0x3b6ff1, _0x31c999, _0x59aa78, _0xb01f47, _0x2a0c87) => {
        if ((_0xb01f47 & 2) !== 0 && (_0x2a0c87 & 2) === 0 && (_0x248bec.flags & 2097155) !== 2) {
          throw new _0x1c26fd.ErrnoError(2);
        }
        if ((_0x248bec.flags & 2097155) === 1) {
          throw new _0x1c26fd.ErrnoError(2);
        }
        if (!_0x248bec.stream_ops.mmap) {
          throw new _0x1c26fd.ErrnoError(43);
        }
        return _0x248bec.stream_ops.mmap(_0x248bec, _0x3b6ff1, _0x31c999, _0x59aa78, _0xb01f47, _0x2a0c87);
      },
      msync: (_0x7ca6f5, _0x3f2c73, _0x18a22c, _0x5bcfa8, _0x1ce3c) => {
        if (!_0x7ca6f5 || !_0x7ca6f5.stream_ops.msync) {
          return 0;
        }
        return _0x7ca6f5.stream_ops.msync(_0x7ca6f5, _0x3f2c73, _0x18a22c, _0x5bcfa8, _0x1ce3c);
      },
      munmap: _0x27c43a => 0,
      ioctl: (_0x3b4400, _0x49a58f, _0x36322f) => {
        if (!_0x3b4400.stream_ops.ioctl) {
          throw new _0x1c26fd.ErrnoError(59);
        }
        return _0x3b4400.stream_ops.ioctl(_0x3b4400, _0x49a58f, _0x36322f);
      },
      readFile: (_0x26808f, _0x5323ed = {}) => {
        _0x5323ed.flags = _0x5323ed.flags || 0;
        _0x5323ed.encoding = _0x5323ed.encoding || "binary";
        if (_0x5323ed.encoding !== "utf8" && _0x5323ed.encoding !== "binary") {
          throw new Error("Invalid encoding type \"" + _0x5323ed.encoding + "\"");
        }
        var _0x370628;
        var _0x5dca8d = _0x1c26fd.open(_0x26808f, _0x5323ed.flags);
        var _0x3c141a = _0x1c26fd.stat(_0x26808f);
        var _0x431edc = _0x3c141a.size;
        var _0x4c67ce = new Uint8Array(_0x431edc);
        _0x1c26fd.read(_0x5dca8d, _0x4c67ce, 0, _0x431edc, 0);
        if (_0x5323ed.encoding === "utf8") {
          _0x370628 = _0x1c811f(_0x4c67ce, 0);
        } else if (_0x5323ed.encoding === "binary") {
          _0x370628 = _0x4c67ce;
        }
        _0x1c26fd.close(_0x5dca8d);
        return _0x370628;
      },
      writeFile: (_0x234b4c, _0xa6ca71, _0x4f2574 = {}) => {
        _0x4f2574.flags = _0x4f2574.flags || 577;
        var _0x56c234 = _0x1c26fd.open(_0x234b4c, _0x4f2574.flags, _0x4f2574.mode);
        if (typeof _0xa6ca71 == "string") {
          var _0x249b88 = new Uint8Array(_0x12cdfc(_0xa6ca71) + 1);
          var _0x4cfb01 = _0x1dd967(_0xa6ca71, _0x249b88, 0, _0x249b88.length);
          _0x1c26fd.write(_0x56c234, _0x249b88, 0, _0x4cfb01, undefined, _0x4f2574.canOwn);
        } else if (ArrayBuffer.isView(_0xa6ca71)) {
          _0x1c26fd.write(_0x56c234, _0xa6ca71, 0, _0xa6ca71.byteLength, undefined, _0x4f2574.canOwn);
        } else {
          throw new Error("Unsupported data type");
        }
        _0x1c26fd.close(_0x56c234);
      },
      cwd: () => _0x1c26fd.currentPath,
      chdir: _0x34d28d => {
        var _0x4b52b3 = _0x1c26fd.lookupPath(_0x34d28d, {
          follow: true
        });
        if (_0x4b52b3.node === null) {
          throw new _0x1c26fd.ErrnoError(44);
        }
        if (!_0x1c26fd.isDir(_0x4b52b3.node.mode)) {
          throw new _0x1c26fd.ErrnoError(54);
        }
        var _0xd856b5 = _0x1c26fd.nodePermissions(_0x4b52b3.node, "x");
        if (_0xd856b5) {
          throw new _0x1c26fd.ErrnoError(_0xd856b5);
        }
        _0x1c26fd.currentPath = _0x4b52b3.path;
      },
      createDefaultDirectories: () => {
        _0x1c26fd.mkdir("/tmp");
        _0x1c26fd.mkdir("/home");
        _0x1c26fd.mkdir("/home/web_user");
      },
      createDefaultDevices: () => {
        _0x1c26fd.mkdir("/dev");
        _0x1c26fd.registerDevice(_0x1c26fd.makedev(1, 3), {
          read: () => 0,
          write: (_0x1b5c28, _0x42e6f0, _0x204708, _0x4d52fd, _0x19356f) => _0x4d52fd
        });
        _0x1c26fd.mkdev("/dev/null", _0x1c26fd.makedev(1, 3));
        _0x3dbec0.register(_0x1c26fd.makedev(5, 0), _0x3dbec0.default_tty_ops);
        _0x3dbec0.register(_0x1c26fd.makedev(6, 0), _0x3dbec0.default_tty1_ops);
        _0x1c26fd.mkdev("/dev/tty", _0x1c26fd.makedev(5, 0));
        _0x1c26fd.mkdev("/dev/tty1", _0x1c26fd.makedev(6, 0));
        var _0x3e43a6 = _0x15822a();
        _0x1c26fd.createDevice("/dev", "random", _0x3e43a6);
        _0x1c26fd.createDevice("/dev", "urandom", _0x3e43a6);
        _0x1c26fd.mkdir("/dev/shm");
        _0x1c26fd.mkdir("/dev/shm/tmp");
      },
      createSpecialDirectories: () => {
        _0x1c26fd.mkdir("/proc");
        var _0x49a0bd = _0x1c26fd.mkdir("/proc/self");
        _0x1c26fd.mkdir("/proc/self/fd");
        _0x1c26fd.mount({
          mount: () => {
            var _0x496b0e = _0x1c26fd.createNode(_0x49a0bd, "fd", 16895, 73);
            _0x496b0e.node_ops = {
              lookup: (_0x24f92b, _0x202454) => {
                var _0x21be30 = +_0x202454;
                var _0x4bc142 = _0x1c26fd.getStream(_0x21be30);
                if (!_0x4bc142) {
                  throw new _0x1c26fd.ErrnoError(8);
                }
                var _0x5871c3 = {
                  parent: null,
                  mount: {
                    mountpoint: "fake"
                  },
                  node_ops: {
                    readlink: () => _0x4bc142.path
                  }
                };
                _0x5871c3.parent = _0x5871c3;
                return _0x5871c3;
              }
            };
            return _0x496b0e;
          }
        }, {}, "/proc/self/fd");
      },
      createStandardStreams: () => {
        if (_0x339df7.stdin) {
          _0x1c26fd.createDevice("/dev", "stdin", _0x339df7.stdin);
        } else {
          _0x1c26fd.symlink("/dev/tty", "/dev/stdin");
        }
        if (_0x339df7.stdout) {
          _0x1c26fd.createDevice("/dev", "stdout", null, _0x339df7.stdout);
        } else {
          _0x1c26fd.symlink("/dev/tty", "/dev/stdout");
        }
        if (_0x339df7.stderr) {
          _0x1c26fd.createDevice("/dev", "stderr", null, _0x339df7.stderr);
        } else {
          _0x1c26fd.symlink("/dev/tty1", "/dev/stderr");
        }
        var _0xf9e4c9 = _0x1c26fd.open("/dev/stdin", 0);
        var _0x1ac268 = _0x1c26fd.open("/dev/stdout", 1);
        var _0xa6f428 = _0x1c26fd.open("/dev/stderr", 1);
      },
      ensureErrnoError: () => {
        if (_0x1c26fd.ErrnoError) {
          return;
        }
        _0x1c26fd.ErrnoError = function _0x5de78d(_0x3a8fde, _0x5c923d) {
          this.node = _0x5c923d;
          this.setErrno = function (_0x2c11eb) {
            this.errno = _0x2c11eb;
          };
          this.setErrno(_0x3a8fde);
          this.message = "FS error";
        };
        _0x1c26fd.ErrnoError.prototype = new Error();
        _0x1c26fd.ErrnoError.prototype.constructor = _0x1c26fd.ErrnoError;
        [44].forEach(_0x8c733d => {
          _0x1c26fd.genericErrors[_0x8c733d] = new _0x1c26fd.ErrnoError(_0x8c733d);
          _0x1c26fd.genericErrors[_0x8c733d].stack = "<generic error, no stack>";
        });
      },
      staticInit: () => {
        _0x1c26fd.ensureErrnoError();
        _0x1c26fd.nameTable = new Array(4096);
        _0x1c26fd.mount(_0x57bdbd, {}, "/");
        _0x1c26fd.createDefaultDirectories();
        _0x1c26fd.createDefaultDevices();
        _0x1c26fd.createSpecialDirectories();
        _0x1c26fd.filesystems = {
          MEMFS: _0x57bdbd,
          IDBFS: _0x4007c8
        };
      },
      init: (_0x4fdc20, _0x7ff868, _0x41aa1b) => {
        _0x1c26fd.init.initialized = true;
        _0x1c26fd.ensureErrnoError();
        _0x339df7.stdin = _0x4fdc20 || _0x339df7.stdin;
        _0x339df7.stdout = _0x7ff868 || _0x339df7.stdout;
        _0x339df7.stderr = _0x41aa1b || _0x339df7.stderr;
        _0x1c26fd.createStandardStreams();
      },
      quit: () => {
        _0x1c26fd.init.initialized = false;
        for (var _0x414119 = 0; _0x414119 < _0x1c26fd.streams.length; _0x414119++) {
          var _0x287dcb = _0x1c26fd.streams[_0x414119];
          if (!_0x287dcb) {
            continue;
          }
          _0x1c26fd.close(_0x287dcb);
        }
      },
      getMode: (_0x523c2f, _0x1843de) => {
        var _0x16445c = 0;
        if (_0x523c2f) {
          _0x16445c |= 365;
        }
        if (_0x1843de) {
          _0x16445c |= 146;
        }
        return _0x16445c;
      },
      findObject: (_0x6c779c, _0x52d55f) => {
        var _0x33ac50 = _0x1c26fd.analyzePath(_0x6c779c, _0x52d55f);
        if (_0x33ac50.exists) {
          return _0x33ac50.object;
        } else {
          return null;
        }
      },
      analyzePath: (_0x4969bf, _0x4720fe) => {
        try {
          var _0x568dcb = _0x1c26fd.lookupPath(_0x4969bf, {
            follow: !_0x4720fe
          });
          _0x4969bf = _0x568dcb.path;
        } catch (_0x33e548) {}
        var _0x4d68e7 = {
          isRoot: false,
          exists: false,
          error: 0,
          name: null,
          path: null,
          object: null,
          parentExists: false,
          parentPath: null,
          parentObject: null
        };
        try {
          var _0x568dcb = _0x1c26fd.lookupPath(_0x4969bf, {
            parent: true
          });
          _0x4d68e7.parentExists = true;
          _0x4d68e7.parentPath = _0x568dcb.path;
          _0x4d68e7.parentObject = _0x568dcb.node;
          _0x4d68e7.name = _0x39fc49.basename(_0x4969bf);
          _0x568dcb = _0x1c26fd.lookupPath(_0x4969bf, {
            follow: !_0x4720fe
          });
          _0x4d68e7.exists = true;
          _0x4d68e7.path = _0x568dcb.path;
          _0x4d68e7.object = _0x568dcb.node;
          _0x4d68e7.name = _0x568dcb.node.name;
          _0x4d68e7.isRoot = _0x568dcb.path === "/";
        } catch (_0x51c158) {
          _0x4d68e7.error = _0x51c158.errno;
        }
        return _0x4d68e7;
      },
      createPath: (_0xa2b7f9, _0xfc122d, _0x104a4e, _0x4495be) => {
        _0xa2b7f9 = typeof _0xa2b7f9 == "string" ? _0xa2b7f9 : _0x1c26fd.getPath(_0xa2b7f9);
        var _0x7c8412 = _0xfc122d.split("/").reverse();
        while (_0x7c8412.length) {
          var _0x258b71 = _0x7c8412.pop();
          if (!_0x258b71) {
            continue;
          }
          var _0xcea95d = _0x39fc49.join2(_0xa2b7f9, _0x258b71);
          try {
            _0x1c26fd.mkdir(_0xcea95d);
          } catch (_0x21a621) {}
          _0xa2b7f9 = _0xcea95d;
        }
        return _0xcea95d;
      },
      createFile: (_0x44a754, _0x12a681, _0x233cb3, _0x63c863, _0x3510d9) => {
        var _0x14e77e = _0x39fc49.join2(typeof _0x44a754 == "string" ? _0x44a754 : _0x1c26fd.getPath(_0x44a754), _0x12a681);
        var _0x2948bf = _0x1c26fd.getMode(_0x63c863, _0x3510d9);
        return _0x1c26fd.create(_0x14e77e, _0x2948bf);
      },
      createDataFile: (_0x4a96bc, _0x597bfd, _0xe6e1e6, _0x32b9fa, _0x55e5ca, _0x5c583e) => {
        var _0x32677f = _0x597bfd;
        if (_0x4a96bc) {
          _0x4a96bc = typeof _0x4a96bc == "string" ? _0x4a96bc : _0x1c26fd.getPath(_0x4a96bc);
          _0x32677f = _0x597bfd ? _0x39fc49.join2(_0x4a96bc, _0x597bfd) : _0x4a96bc;
        }
        var _0x5a4680 = _0x1c26fd.getMode(_0x32b9fa, _0x55e5ca);
        var _0x2b7abb = _0x1c26fd.create(_0x32677f, _0x5a4680);
        if (_0xe6e1e6) {
          if (typeof _0xe6e1e6 == "string") {
            var _0x8f8d89 = new Array(_0xe6e1e6.length);
            for (var _0x23cb1c = 0, _0xf52def = _0xe6e1e6.length; _0x23cb1c < _0xf52def; ++_0x23cb1c) {
              _0x8f8d89[_0x23cb1c] = _0xe6e1e6.charCodeAt(_0x23cb1c);
            }
            _0xe6e1e6 = _0x8f8d89;
          }
          _0x1c26fd.chmod(_0x2b7abb, _0x5a4680 | 146);
          var _0x30af28 = _0x1c26fd.open(_0x2b7abb, 577);
          _0x1c26fd.write(_0x30af28, _0xe6e1e6, 0, _0xe6e1e6.length, 0, _0x5c583e);
          _0x1c26fd.close(_0x30af28);
          _0x1c26fd.chmod(_0x2b7abb, _0x5a4680);
        }
        return _0x2b7abb;
      },
      createDevice: (_0x2a6461, _0x1475e9, _0x45ff2c, _0x5a6f83) => {
        var _0x4f2c8e = _0x39fc49.join2(typeof _0x2a6461 == "string" ? _0x2a6461 : _0x1c26fd.getPath(_0x2a6461), _0x1475e9);
        var _0xe2d633 = _0x1c26fd.getMode(!!_0x45ff2c, !!_0x5a6f83);
        if (!_0x1c26fd.createDevice.major) {
          _0x1c26fd.createDevice.major = 64;
        }
        var _0x3d6819 = _0x1c26fd.makedev(_0x1c26fd.createDevice.major++, 0);
        _0x1c26fd.registerDevice(_0x3d6819, {
          open: _0x32738b => {
            _0x32738b.seekable = false;
          },
          close: _0x258e5c => {
            if (_0x5a6f83 && _0x5a6f83.buffer && _0x5a6f83.buffer.length) {
              _0x5a6f83(10);
            }
          },
          read: (_0x5e5974, _0x594a10, _0x19c020, _0xab9747, _0x263f47) => {
            var _0x30a199 = 0;
            for (var _0x56642c = 0; _0x56642c < _0xab9747; _0x56642c++) {
              var _0x4d241a;
              try {
                _0x4d241a = _0x45ff2c();
              } catch (_0x2f283a) {
                throw new _0x1c26fd.ErrnoError(29);
              }
              if (_0x4d241a === undefined && _0x30a199 === 0) {
                throw new _0x1c26fd.ErrnoError(6);
              }
              if (_0x4d241a === null || _0x4d241a === undefined) {
                break;
              }
              _0x30a199++;
              _0x594a10[_0x19c020 + _0x56642c] = _0x4d241a;
            }
            if (_0x30a199) {
              _0x5e5974.node.timestamp = Date.now();
            }
            return _0x30a199;
          },
          write: (_0x257178, _0x348ed8, _0x25443c, _0x42b8f0, _0x3de033) => {
            for (var _0x19c5ea = 0; _0x19c5ea < _0x42b8f0; _0x19c5ea++) {
              try {
                _0x5a6f83(_0x348ed8[_0x25443c + _0x19c5ea]);
              } catch (_0x58ab3c) {
                throw new _0x1c26fd.ErrnoError(29);
              }
            }
            if (_0x42b8f0) {
              _0x257178.node.timestamp = Date.now();
            }
            return _0x19c5ea;
          }
        });
        return _0x1c26fd.mkdev(_0x4f2c8e, _0xe2d633, _0x3d6819);
      },
      forceLoadFile: _0x2bac9c => {
        if (_0x2bac9c.isDevice || _0x2bac9c.isFolder || _0x2bac9c.link || _0x2bac9c.contents) {
          return true;
        }
        if (typeof XMLHttpRequest != "undefined") {
          throw new Error("Lazy loading should have been performed (contents set) in createLazyFile, but it was not. Lazy loading only works in web workers. Use --embed-file or --preload-file in emcc on the main thread.");
        } else if (_0x4c8e4d) {
          try {
            _0x2bac9c.contents = _0x2fe8e2(_0x4c8e4d(_0x2bac9c.url), true);
            _0x2bac9c.usedBytes = _0x2bac9c.contents.length;
          } catch (_0x3c1713) {
            throw new _0x1c26fd.ErrnoError(29);
          }
        } else {
          throw new Error("Cannot load without read() or XMLHttpRequest.");
        }
      },
      createLazyFile: (_0x144ed9, _0x188b24, _0x3b7dd8, _0x101007, _0x2f89f3) => {
        function _0x2f1f54() {
          this.lengthKnown = false;
          this.chunks = [];
        }
        _0x2f1f54.prototype.get = function _0x438603(_0x4b97bb) {
          if (_0x4b97bb > this.length - 1 || _0x4b97bb < 0) {
            return undefined;
          }
          var _0xcb3e24 = _0x4b97bb % this.chunkSize;
          var _0x224745 = _0x4b97bb / this.chunkSize | 0;
          return this.getter(_0x224745)[_0xcb3e24];
        };
        _0x2f1f54.prototype.setDataGetter = function _0x41b72e(_0x2c1ff0) {
          this.getter = _0x2c1ff0;
        };
        _0x2f1f54.prototype.cacheLength = function _0x491937() {
          var _0x50a822 = new XMLHttpRequest();
          _0x50a822.open("HEAD", _0x3b7dd8, false);
          _0x50a822.send(null);
          if ((!(_0x50a822.status >= 200) || !(_0x50a822.status < 300)) && _0x50a822.status !== 304) {
            throw new Error("Couldn't load " + _0x3b7dd8 + ". Status: " + _0x50a822.status);
          }
          var _0x29eae5 = Number(_0x50a822.getResponseHeader("Content-length"));
          var _0x40e8ca;
          var _0x2d1c6f = (_0x40e8ca = _0x50a822.getResponseHeader("Accept-Ranges")) && _0x40e8ca === "bytes";
          var _0x26f6d2 = (_0x40e8ca = _0x50a822.getResponseHeader("Content-Encoding")) && _0x40e8ca === "gzip";
          var _0x1f1603 = 1048576;
          if (!_0x2d1c6f) {
            _0x1f1603 = _0x29eae5;
          }
          var _0xa1246e = (_0x2401a0, _0x246247) => {
            if (_0x2401a0 > _0x246247) {
              throw new Error("invalid range (" + _0x2401a0 + ", " + _0x246247 + ") or no bytes requested!");
            }
            if (_0x246247 > _0x29eae5 - 1) {
              throw new Error("only " + _0x29eae5 + " bytes available! programmer error!");
            }
            var _0xbfe279 = new XMLHttpRequest();
            _0xbfe279.open("GET", _0x3b7dd8, false);
            if (_0x29eae5 !== _0x1f1603) {
              _0xbfe279.setRequestHeader("Range", "bytes=" + _0x2401a0 + "-" + _0x246247);
            }
            _0xbfe279.responseType = "arraybuffer";
            if (_0xbfe279.overrideMimeType) {
              _0xbfe279.overrideMimeType("text/plain; charset=x-user-defined");
            }
            _0xbfe279.send(null);
            if ((!(_0xbfe279.status >= 200) || !(_0xbfe279.status < 300)) && _0xbfe279.status !== 304) {
              throw new Error("Couldn't load " + _0x3b7dd8 + ". Status: " + _0xbfe279.status);
            }
            if (_0xbfe279.response !== undefined) {
              return new Uint8Array(_0xbfe279.response || []);
            } else {
              return _0x2fe8e2(_0xbfe279.responseText || "", true);
            }
          };
          var _0x32f5f2 = this;
          _0x32f5f2.setDataGetter(_0x68f8cf => {
            var _0x291285 = _0x68f8cf * _0x1f1603;
            var _0x4a9585 = (_0x68f8cf + 1) * _0x1f1603 - 1;
            _0x4a9585 = Math.min(_0x4a9585, _0x29eae5 - 1);
            if (typeof _0x32f5f2.chunks[_0x68f8cf] == "undefined") {
              _0x32f5f2.chunks[_0x68f8cf] = _0xa1246e(_0x291285, _0x4a9585);
            }
            if (typeof _0x32f5f2.chunks[_0x68f8cf] == "undefined") {
              throw new Error("doXHR failed!");
            }
            return _0x32f5f2.chunks[_0x68f8cf];
          });
          if (_0x26f6d2 || !_0x29eae5) {
            _0x1f1603 = _0x29eae5 = 1;
            _0x29eae5 = this.getter(0).length;
            _0x1f1603 = _0x29eae5;
            _0x51fb9e("LazyFiles on gzip forces download of the whole file when length is accessed");
          }
          this._length = _0x29eae5;
          this._chunkSize = _0x1f1603;
          this.lengthKnown = true;
        };
        if (typeof XMLHttpRequest != "undefined") {
          if (!_0x3963d9) {
            throw "Cannot do synchronous binary XHRs outside webworkers in modern browsers. Use --embed-file or --preload-file in emcc";
          }
          var _0x8e234a = new _0x2f1f54();
          Object.defineProperties(_0x8e234a, {
            length: {
              get: function () {
                if (!this.lengthKnown) {
                  this.cacheLength();
                }
                return this._length;
              }
            },
            chunkSize: {
              get: function () {
                if (!this.lengthKnown) {
                  this.cacheLength();
                }
                return this._chunkSize;
              }
            }
          });
          var _0x5cd2da = {
            isDevice: false,
            contents: _0x8e234a
          };
        } else {
          var _0x5cd2da = {
            isDevice: false,
            url: _0x3b7dd8
          };
        }
        var _0x17b7fc = _0x1c26fd.createFile(_0x144ed9, _0x188b24, _0x5cd2da, _0x101007, _0x2f89f3);
        if (_0x5cd2da.contents) {
          _0x17b7fc.contents = _0x5cd2da.contents;
        } else if (_0x5cd2da.url) {
          _0x17b7fc.contents = null;
          _0x17b7fc.url = _0x5cd2da.url;
        }
        Object.defineProperties(_0x17b7fc, {
          usedBytes: {
            get: function () {
              return this.contents.length;
            }
          }
        });
        var _0x4d69b1 = {};
        var _0x2fa513 = Object.keys(_0x17b7fc.stream_ops);
        _0x2fa513.forEach(_0x14aebe => {
          var _0x5dbc94 = _0x17b7fc.stream_ops[_0x14aebe];
          _0x4d69b1[_0x14aebe] = function _0x2d0793() {
            _0x1c26fd.forceLoadFile(_0x17b7fc);
            return _0x5dbc94.apply(null, arguments);
          };
        });
        _0x4d69b1.read = (_0xc92698, _0x573278, _0x396c5c, _0x85133f, _0x108a2d) => {
          _0x1c26fd.forceLoadFile(_0x17b7fc);
          var _0xe2bf61 = _0xc92698.node.contents;
          if (_0x108a2d >= _0xe2bf61.length) {
            return 0;
          }
          var _0xb9e5c2 = Math.min(_0xe2bf61.length - _0x108a2d, _0x85133f);
          if (_0xe2bf61.slice) {
            for (var _0x570372 = 0; _0x570372 < _0xb9e5c2; _0x570372++) {
              _0x573278[_0x396c5c + _0x570372] = _0xe2bf61[_0x108a2d + _0x570372];
            }
          } else {
            for (var _0x570372 = 0; _0x570372 < _0xb9e5c2; _0x570372++) {
              _0x573278[_0x396c5c + _0x570372] = _0xe2bf61.get(_0x108a2d + _0x570372);
            }
          }
          return _0xb9e5c2;
        };
        _0x17b7fc.stream_ops = _0x4d69b1;
        return _0x17b7fc;
      },
      createPreloadedFile: (_0x235d00, _0x1db667, _0x3bb37b, _0x330f62, _0xa3986a, _0x42d056, _0x138bb5, _0x8a2667, _0x20ad87, _0x7a9df6) => {
        var _0x340a1e = _0x1db667 ? _0x10785f.resolve(_0x39fc49.join2(_0x235d00, _0x1db667)) : _0x235d00;
        var _0x1bfb95 = _0xe21494("cp " + _0x340a1e);
        function _0x28abba(_0x441d82) {
          function _0x292160(_0x565fb5) {
            if (_0x7a9df6) {
              _0x7a9df6();
            }
            if (!_0x8a2667) {
              _0x1c26fd.createDataFile(_0x235d00, _0x1db667, _0x565fb5, _0x330f62, _0xa3986a, _0x20ad87);
            }
            if (_0x42d056) {
              _0x42d056();
            }
            _0x4695c0(_0x1bfb95);
          }
          if (_0x20cb1d.handledByPreloadPlugin(_0x441d82, _0x340a1e, _0x292160, () => {
            if (_0x138bb5) {
              _0x138bb5();
            }
            _0x4695c0(_0x1bfb95);
          })) {
            return;
          }
          _0x292160(_0x441d82);
        }
        _0x102273(_0x1bfb95);
        if (typeof _0x3bb37b == "string") {
          _0x2c9aa3(_0x3bb37b, _0x39916d => _0x28abba(_0x39916d), _0x138bb5);
        } else {
          _0x28abba(_0x3bb37b);
        }
      },
      indexedDB: () => {
        return window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB;
      },
      DB_NAME: () => {
        return "EM_FS_" + window.location.pathname;
      },
      DB_VERSION: 20,
      DB_STORE_NAME: "FILE_DATA",
      saveFilesToDB: (_0x449b17, _0x53ee42, _0x17be46) => {
        _0x53ee42 = _0x53ee42 || (() => {});
        _0x17be46 = _0x17be46 || (() => {});
        var _0x56f2c9 = _0x1c26fd.indexedDB();
        try {
          var _0x214d44 = _0x56f2c9.open(_0x1c26fd.DB_NAME(), _0x1c26fd.DB_VERSION);
        } catch (_0x28372b) {
          return _0x17be46(_0x28372b);
        }
        _0x214d44.onupgradeneeded = () => {
          _0x51fb9e("creating db");
          var _0x12b8c3 = _0x214d44.result;
          _0x12b8c3.createObjectStore(_0x1c26fd.DB_STORE_NAME);
        };
        _0x214d44.onsuccess = () => {
          var _0x2dce04 = _0x214d44.result;
          var _0x2a7cab = _0x2dce04.transaction([_0x1c26fd.DB_STORE_NAME], "readwrite");
          var _0x1dc67b = _0x2a7cab.objectStore(_0x1c26fd.DB_STORE_NAME);
          var _0x353d3b = 0;
          var _0x2e6d85 = 0;
          var _0x5d8c3a = _0x449b17.length;
          function _0x1d166d() {
            if (_0x2e6d85 == 0) {
              _0x53ee42();
            } else {
              _0x17be46();
            }
          }
          _0x449b17.forEach(_0x2d43f5 => {
            var _0x452673 = _0x1dc67b.put(_0x1c26fd.analyzePath(_0x2d43f5).object.contents, _0x2d43f5);
            _0x452673.onsuccess = () => {
              _0x353d3b++;
              if (_0x353d3b + _0x2e6d85 == _0x5d8c3a) {
                _0x1d166d();
              }
            };
            _0x452673.onerror = () => {
              _0x2e6d85++;
              if (_0x353d3b + _0x2e6d85 == _0x5d8c3a) {
                _0x1d166d();
              }
            };
          });
          _0x2a7cab.onerror = _0x17be46;
        };
        _0x214d44.onerror = _0x17be46;
      },
      loadFilesFromDB: (_0x4a9be4, _0x1f4d9e, _0x50514f) => {
        _0x1f4d9e = _0x1f4d9e || (() => {});
        _0x50514f = _0x50514f || (() => {});
        var _0x438af3 = _0x1c26fd.indexedDB();
        try {
          var _0x5d7ba9 = _0x438af3.open(_0x1c26fd.DB_NAME(), _0x1c26fd.DB_VERSION);
        } catch (_0x47ada5) {
          return _0x50514f(_0x47ada5);
        }
        _0x5d7ba9.onupgradeneeded = _0x50514f;
        _0x5d7ba9.onsuccess = () => {
          var _0x51aa9d = _0x5d7ba9.result;
          try {
            var _0x1061ce = _0x51aa9d.transaction([_0x1c26fd.DB_STORE_NAME], "readonly");
          } catch (_0x4b934e) {
            _0x50514f(_0x4b934e);
            return;
          }
          var _0x248d1 = _0x1061ce.objectStore(_0x1c26fd.DB_STORE_NAME);
          var _0x1b57fc = 0;
          var _0x2e7efe = 0;
          var _0x209a63 = _0x4a9be4.length;
          function _0x22242f() {
            if (_0x2e7efe == 0) {
              _0x1f4d9e();
            } else {
              _0x50514f();
            }
          }
          _0x4a9be4.forEach(_0x17be91 => {
            var _0xe02ee2 = _0x248d1.get(_0x17be91);
            _0xe02ee2.onsuccess = () => {
              if (_0x1c26fd.analyzePath(_0x17be91).exists) {
                _0x1c26fd.unlink(_0x17be91);
              }
              _0x1c26fd.createDataFile(_0x39fc49.dirname(_0x17be91), _0x39fc49.basename(_0x17be91), _0xe02ee2.result, true, true, true);
              _0x1b57fc++;
              if (_0x1b57fc + _0x2e7efe == _0x209a63) {
                _0x22242f();
              }
            };
            _0xe02ee2.onerror = () => {
              _0x2e7efe++;
              if (_0x1b57fc + _0x2e7efe == _0x209a63) {
                _0x22242f();
              }
            };
          });
          _0x1061ce.onerror = _0x50514f;
        };
        _0x5d7ba9.onerror = _0x50514f;
      }
    };
    var _0x521741 = {
      DEFAULT_POLLMASK: 5,
      calculateAt: function (_0x47b4cb, _0x2b3276, _0x4a92c2) {
        if (_0x2b3276[0] === "/") {
          return _0x2b3276;
        }
        var _0xdc525e;
        if (_0x47b4cb === -100) {
          _0xdc525e = _0x1c26fd.cwd();
        } else {
          var _0x28f54f = _0x1c26fd.getStream(_0x47b4cb);
          if (!_0x28f54f) {
            throw new _0x1c26fd.ErrnoError(8);
          }
          _0xdc525e = _0x28f54f.path;
        }
        if (_0x2b3276.length == 0) {
          if (!_0x4a92c2) {
            throw new _0x1c26fd.ErrnoError(44);
          }
          return _0xdc525e;
        }
        return _0x39fc49.join2(_0xdc525e, _0x2b3276);
      },
      doStat: function (_0x439b87, _0x48147e, _0x4394e7) {
        try {
          var _0x42d8b2 = _0x439b87(_0x48147e);
        } catch (_0x2617d4) {
          if (_0x2617d4 && _0x2617d4.node && _0x39fc49.normalize(_0x48147e) !== _0x39fc49.normalize(_0x1c26fd.getPath(_0x2617d4.node))) {
            return -54;
          }
          throw _0x2617d4;
        }
        _0x47a7a3[_0x4394e7 >> 2] = _0x42d8b2.dev;
        _0x47a7a3[_0x4394e7 + 4 >> 2] = 0;
        _0x47a7a3[_0x4394e7 + 8 >> 2] = _0x42d8b2.ino;
        _0x47a7a3[_0x4394e7 + 12 >> 2] = _0x42d8b2.mode;
        _0x47a7a3[_0x4394e7 + 16 >> 2] = _0x42d8b2.nlink;
        _0x47a7a3[_0x4394e7 + 20 >> 2] = _0x42d8b2.uid;
        _0x47a7a3[_0x4394e7 + 24 >> 2] = _0x42d8b2.gid;
        _0x47a7a3[_0x4394e7 + 28 >> 2] = _0x42d8b2.rdev;
        _0x47a7a3[_0x4394e7 + 32 >> 2] = 0;
        _0x1b09b3 = [_0x42d8b2.size >>> 0, (_0x563ecc = _0x42d8b2.size, +Math.abs(_0x563ecc) >= 1 ? _0x563ecc > 0 ? (Math.min(+Math.floor(_0x563ecc / 4294967296), 4294967295) | 0) >>> 0 : ~~+Math.ceil((_0x563ecc - +(~~_0x563ecc >>> 0)) / 4294967296) >>> 0 : 0)];
        _0x47a7a3[_0x4394e7 + 40 >> 2] = _0x1b09b3[0];
        _0x47a7a3[_0x4394e7 + 44 >> 2] = _0x1b09b3[1];
        _0x47a7a3[_0x4394e7 + 48 >> 2] = 4096;
        _0x47a7a3[_0x4394e7 + 52 >> 2] = _0x42d8b2.blocks;
        _0x47a7a3[_0x4394e7 + 56 >> 2] = _0x42d8b2.atime.getTime() / 1000 | 0;
        _0x47a7a3[_0x4394e7 + 60 >> 2] = 0;
        _0x47a7a3[_0x4394e7 + 64 >> 2] = _0x42d8b2.mtime.getTime() / 1000 | 0;
        _0x47a7a3[_0x4394e7 + 68 >> 2] = 0;
        _0x47a7a3[_0x4394e7 + 72 >> 2] = _0x42d8b2.ctime.getTime() / 1000 | 0;
        _0x47a7a3[_0x4394e7 + 76 >> 2] = 0;
        _0x1b09b3 = [_0x42d8b2.ino >>> 0, (_0x563ecc = _0x42d8b2.ino, +Math.abs(_0x563ecc) >= 1 ? _0x563ecc > 0 ? (Math.min(+Math.floor(_0x563ecc / 4294967296), 4294967295) | 0) >>> 0 : ~~+Math.ceil((_0x563ecc - +(~~_0x563ecc >>> 0)) / 4294967296) >>> 0 : 0)];
        _0x47a7a3[_0x4394e7 + 80 >> 2] = _0x1b09b3[0];
        _0x47a7a3[_0x4394e7 + 84 >> 2] = _0x1b09b3[1];
        return 0;
      },
      doMsync: function (_0x282178, _0x485b94, _0x2579d5, _0x10d0c0, _0x97ed31) {
        var _0x210ce5 = _0xb4481c.slice(_0x282178, _0x282178 + _0x2579d5);
        _0x1c26fd.msync(_0x485b94, _0x210ce5, _0x97ed31, _0x2579d5, _0x10d0c0);
      },
      doMkdir: function (_0x28c76b, _0x252ba1) {
        _0x28c76b = _0x39fc49.normalize(_0x28c76b);
        if (_0x28c76b[_0x28c76b.length - 1] === "/") {
          _0x28c76b = _0x28c76b.substr(0, _0x28c76b.length - 1);
        }
        _0x1c26fd.mkdir(_0x28c76b, _0x252ba1, 0);
        return 0;
      },
      doMknod: function (_0x4482f0, _0x5b3ff7, _0x29ae37) {
        switch (_0x5b3ff7 & 61440) {
          case 32768:
          case 8192:
          case 24576:
          case 4096:
          case 49152:
            break;
          default:
            return -28;
        }
        _0x1c26fd.mknod(_0x4482f0, _0x5b3ff7, _0x29ae37);
        return 0;
      },
      doReadlink: function (_0x522865, _0x51c25d, _0x29df42) {
        if (_0x29df42 <= 0) {
          return -28;
        }
        var _0x425743 = _0x1c26fd.readlink(_0x522865);
        var _0x28e497 = Math.min(_0x29df42, _0x12cdfc(_0x425743));
        var _0x212332 = _0x2845ef[_0x51c25d + _0x28e497];
        _0xb1d3f9(_0x425743, _0x51c25d, _0x29df42 + 1);
        _0x2845ef[_0x51c25d + _0x28e497] = _0x212332;
        return _0x28e497;
      },
      doAccess: function (_0x523d1b, _0xce12e) {
        if (_0xce12e & ~7) {
          return -28;
        }
        var _0x38ef07 = _0x1c26fd.lookupPath(_0x523d1b, {
          follow: true
        });
        var _0x4d6693 = _0x38ef07.node;
        if (!_0x4d6693) {
          return -44;
        }
        var _0x52a03c = "";
        if (_0xce12e & 4) {
          _0x52a03c += "r";
        }
        if (_0xce12e & 2) {
          _0x52a03c += "w";
        }
        if (_0xce12e & 1) {
          _0x52a03c += "x";
        }
        if (_0x52a03c && _0x1c26fd.nodePermissions(_0x4d6693, _0x52a03c)) {
          return -2;
        }
        return 0;
      },
      doReadv: function (_0x522b95, _0x454b44, _0x102759, _0x5493a7) {
        var _0x3951df = 0;
        for (var _0x2db5a1 = 0; _0x2db5a1 < _0x102759; _0x2db5a1++) {
          var _0x5b8497 = _0x47a7a3[_0x454b44 + _0x2db5a1 * 8 >> 2];
          var _0x5ecbca = _0x47a7a3[_0x454b44 + (_0x2db5a1 * 8 + 4) >> 2];
          var _0x2acdfe = _0x1c26fd.read(_0x522b95, _0x2845ef, _0x5b8497, _0x5ecbca, _0x5493a7);
          if (_0x2acdfe < 0) {
            return -1;
          }
          _0x3951df += _0x2acdfe;
          if (_0x2acdfe < _0x5ecbca) {
            break;
          }
        }
        return _0x3951df;
      },
      doWritev: function (_0x58755d, _0x3a570d, _0x5acb22, _0x191a9d) {
        var _0x1674b3 = 0;
        for (var _0x5a8169 = 0; _0x5a8169 < _0x5acb22; _0x5a8169++) {
          var _0xf5315f = _0x47a7a3[_0x3a570d + _0x5a8169 * 8 >> 2];
          var _0x56e6d2 = _0x47a7a3[_0x3a570d + (_0x5a8169 * 8 + 4) >> 2];
          var _0x8e23dc = _0x1c26fd.write(_0x58755d, _0x2845ef, _0xf5315f, _0x56e6d2, _0x191a9d);
          if (_0x8e23dc < 0) {
            return -1;
          }
          _0x1674b3 += _0x8e23dc;
        }
        return _0x1674b3;
      },
      varargs: undefined,
      get: function () {
        _0x521741.varargs += 4;
        var _0x14a1e1 = _0x47a7a3[_0x521741.varargs - 4 >> 2];
        return _0x14a1e1;
      },
      getStr: function (_0x129717) {
        var _0x10ddc9 = _0x2b7aa3(_0x129717);
        return _0x10ddc9;
      },
      getStreamFromFD: function (_0x60a3a7) {
        var _0x47e9d6 = _0x1c26fd.getStream(_0x60a3a7);
        if (!_0x47e9d6) {
          throw new _0x1c26fd.ErrnoError(8);
        }
        return _0x47e9d6;
      },
      get64: function (_0x41c8bf, _0x3bc4f7) {
        return _0x41c8bf;
      }
    };
    function _0x29403c(_0x25e102, _0x29b346, _0x6e98b9, _0x218eb5, _0xf411ef) {
      try {
        var _0x3a32fa = 0;
        var _0x199444 = _0x29b346 ? _0x47a7a3[_0x29b346 >> 2] : 0;
        var _0xf03db9 = _0x29b346 ? _0x47a7a3[_0x29b346 + 4 >> 2] : 0;
        var _0x361884 = _0x6e98b9 ? _0x47a7a3[_0x6e98b9 >> 2] : 0;
        var _0x42178e = _0x6e98b9 ? _0x47a7a3[_0x6e98b9 + 4 >> 2] : 0;
        var _0x33fdee = _0x218eb5 ? _0x47a7a3[_0x218eb5 >> 2] : 0;
        var _0x2236f1 = _0x218eb5 ? _0x47a7a3[_0x218eb5 + 4 >> 2] : 0;
        var _0x34a864 = 0;
        var _0x22b8db = 0;
        var _0x3bda35 = 0;
        var _0x3a8c24 = 0;
        var _0x2b4c29 = 0;
        var _0x3630a1 = 0;
        var _0xa89191 = (_0x29b346 ? _0x47a7a3[_0x29b346 >> 2] : 0) | (_0x6e98b9 ? _0x47a7a3[_0x6e98b9 >> 2] : 0) | (_0x218eb5 ? _0x47a7a3[_0x218eb5 >> 2] : 0);
        var _0x18cf4c = (_0x29b346 ? _0x47a7a3[_0x29b346 + 4 >> 2] : 0) | (_0x6e98b9 ? _0x47a7a3[_0x6e98b9 + 4 >> 2] : 0) | (_0x218eb5 ? _0x47a7a3[_0x218eb5 + 4 >> 2] : 0);
        function _0x564e4c(_0x10029f, _0x575e67, _0x19f95c, _0x4b12eb) {
          if (_0x10029f < 32) {
            return _0x575e67 & _0x4b12eb;
          } else {
            return _0x19f95c & _0x4b12eb;
          }
        }
        for (var _0x3c3d5f = 0; _0x3c3d5f < _0x25e102; _0x3c3d5f++) {
          var _0x2126eb = 1 << _0x3c3d5f % 32;
          if (!_0x564e4c(_0x3c3d5f, _0xa89191, _0x18cf4c, _0x2126eb)) {
            continue;
          }
          var _0x582836 = _0x1c26fd.getStream(_0x3c3d5f);
          if (!_0x582836) {
            throw new _0x1c26fd.ErrnoError(8);
          }
          var _0x4ddd53 = _0x521741.DEFAULT_POLLMASK;
          if (_0x582836.stream_ops.poll) {
            _0x4ddd53 = _0x582836.stream_ops.poll(_0x582836);
          }
          if (_0x4ddd53 & 1 && _0x564e4c(_0x3c3d5f, _0x199444, _0xf03db9, _0x2126eb)) {
            if (_0x3c3d5f < 32) {
              _0x34a864 = _0x34a864 | _0x2126eb;
            } else {
              _0x22b8db = _0x22b8db | _0x2126eb;
            }
            _0x3a32fa++;
          }
          if (_0x4ddd53 & 4 && _0x564e4c(_0x3c3d5f, _0x361884, _0x42178e, _0x2126eb)) {
            if (_0x3c3d5f < 32) {
              _0x3bda35 = _0x3bda35 | _0x2126eb;
            } else {
              _0x3a8c24 = _0x3a8c24 | _0x2126eb;
            }
            _0x3a32fa++;
          }
          if (_0x4ddd53 & 2 && _0x564e4c(_0x3c3d5f, _0x33fdee, _0x2236f1, _0x2126eb)) {
            if (_0x3c3d5f < 32) {
              _0x2b4c29 = _0x2b4c29 | _0x2126eb;
            } else {
              _0x3630a1 = _0x3630a1 | _0x2126eb;
            }
            _0x3a32fa++;
          }
        }
        if (_0x29b346) {
          _0x47a7a3[_0x29b346 >> 2] = _0x34a864;
          _0x47a7a3[_0x29b346 + 4 >> 2] = _0x22b8db;
        }
        if (_0x6e98b9) {
          _0x47a7a3[_0x6e98b9 >> 2] = _0x3bda35;
          _0x47a7a3[_0x6e98b9 + 4 >> 2] = _0x3a8c24;
        }
        if (_0x218eb5) {
          _0x47a7a3[_0x218eb5 >> 2] = _0x2b4c29;
          _0x47a7a3[_0x218eb5 + 4 >> 2] = _0x3630a1;
        }
        return _0x3a32fa;
      } catch (_0x5e540f) {
        if (typeof _0x1c26fd == "undefined" || !(_0x5e540f instanceof _0x1c26fd.ErrnoError)) {
          throw _0x5e540f;
        }
        return -_0x5e540f.errno;
      }
    }
    var _0x252c88 = {
      mount: function (_0x47acec) {
        _0x339df7.websocket = _0x339df7.websocket && typeof _0x339df7.websocket === "object" ? _0x339df7.websocket : {};
        _0x339df7.websocket._callbacks = {};
        _0x339df7.websocket.on = function (_0x9b114f, _0x4b7415) {
          if (typeof _0x4b7415 === "function") {
            this._callbacks[_0x9b114f] = _0x4b7415;
          }
          return this;
        };
        _0x339df7.websocket.emit = function (_0x47dd41, _0x41ae23) {
          if (typeof this._callbacks[_0x47dd41] === "function") {
            this._callbacks[_0x47dd41].call(this, _0x41ae23);
          }
        };
        return _0x1c26fd.createNode(null, "/", 16895, 0);
      },
      createSocket: function (_0x3cba43, _0x3e0875, _0x5dad6f) {
        _0x3e0875 &= ~526336;
        var _0xa0e19d = _0x3e0875 == 1;
        if (_0xa0e19d && _0x5dad6f && _0x5dad6f != 6) {
          throw new _0x1c26fd.ErrnoError(66);
        }
        var _0x480dd7 = {
          family: _0x3cba43,
          type: _0x3e0875,
          protocol: _0x5dad6f,
          server: null,
          error: null,
          peers: {},
          pending: [],
          recv_queue: [],
          sock_ops: _0x252c88.websocket_sock_ops
        };
        var _0x278425 = _0x252c88.nextname();
        var _0x24ad1d = _0x1c26fd.createNode(_0x252c88.root, _0x278425, 49152, 0);
        _0x24ad1d.sock = _0x480dd7;
        var _0xac87b7 = _0x1c26fd.createStream({
          path: _0x278425,
          node: _0x24ad1d,
          flags: 2,
          seekable: false,
          stream_ops: _0x252c88.stream_ops
        });
        _0x480dd7.stream = _0xac87b7;
        return _0x480dd7;
      },
      getSocket: function (_0x466cd3) {
        var _0x47c760 = _0x1c26fd.getStream(_0x466cd3);
        if (!_0x47c760 || !_0x1c26fd.isSocket(_0x47c760.node.mode)) {
          return null;
        }
        return _0x47c760.node.sock;
      },
      stream_ops: {
        poll: function (_0x24e152) {
          var _0x598639 = _0x24e152.node.sock;
          return _0x598639.sock_ops.poll(_0x598639);
        },
        ioctl: function (_0x1e940b, _0x4e6e78, _0x249a07) {
          var _0x57c905 = _0x1e940b.node.sock;
          return _0x57c905.sock_ops.ioctl(_0x57c905, _0x4e6e78, _0x249a07);
        },
        read: function (_0x3daeeb, _0x41f481, _0x35254d, _0x46f112, _0xdcf187) {
          var _0x27382e = _0x3daeeb.node.sock;
          var _0x22b07e = _0x27382e.sock_ops.recvmsg(_0x27382e, _0x46f112);
          if (!_0x22b07e) {
            return 0;
          }
          _0x41f481.set(_0x22b07e.buffer, _0x35254d);
          return _0x22b07e.buffer.length;
        },
        write: function (_0x22b034, _0x79cc5f, _0x3688f6, _0xd3bd5c, _0x3fb402) {
          var _0x337315 = _0x22b034.node.sock;
          return _0x337315.sock_ops.sendmsg(_0x337315, _0x79cc5f, _0x3688f6, _0xd3bd5c);
        },
        close: function (_0x4554e6) {
          var _0x3f70de = _0x4554e6.node.sock;
          _0x3f70de.sock_ops.close(_0x3f70de);
        }
      },
      nextname: function () {
        if (!_0x252c88.nextname.current) {
          _0x252c88.nextname.current = 0;
        }
        return "socket[" + _0x252c88.nextname.current++ + "]";
      },
      websocket_sock_ops: {
        createPeer: function (_0x205f20, _0x4da44f, _0x216630) {
          var _0x2fc1dc;
          if (typeof _0x4da44f == "object") {
            _0x2fc1dc = _0x4da44f;
            _0x4da44f = null;
            _0x216630 = null;
          }
          if (_0x2fc1dc) {
            if (_0x2fc1dc._socket) {
              _0x4da44f = _0x2fc1dc._socket.remoteAddress;
              _0x216630 = _0x2fc1dc._socket.remotePort;
            } else {
              var _0x4ea2fd = /ws[s]?:\/\/([^:]+):(\d+)/.exec(_0x2fc1dc.url);
              if (!_0x4ea2fd) {
                throw new Error("WebSocket URL must be in the format ws(s)://address:port");
              }
              _0x4da44f = _0x4ea2fd[1];
              _0x216630 = parseInt(_0x4ea2fd[2], 10);
            }
          } else {
            try {
              var _0x15a79b = _0x339df7.websocket && typeof _0x339df7.websocket === "object";
              var _0x5e9086 = "ws:#".replace("#", "//");
              if (_0x15a79b) {
                if (typeof _0x339df7.websocket.url === "string") {
                  _0x5e9086 = _0x339df7.websocket.url;
                }
              }
              if (_0x5e9086 === "ws://" || _0x5e9086 === "wss://") {
                var _0x28a7be = _0x4da44f.split("/");
                _0x5e9086 = _0x5e9086 + _0x28a7be[0] + ":" + _0x216630 + "/" + _0x28a7be.slice(1).join("/");
              }
              var _0x3f738b = "binary";
              if (_0x15a79b) {
                if (typeof _0x339df7.websocket.subprotocol === "string") {
                  _0x3f738b = _0x339df7.websocket.subprotocol;
                }
              }
              var _0x2a9dd1 = undefined;
              if (_0x3f738b !== "null") {
                _0x3f738b = _0x3f738b.replace(/^ +| +$/g, "").split(/ *, */);
                _0x2a9dd1 = _0x47ed75 ? {
                  protocol: _0x3f738b.toString()
                } : _0x3f738b;
              }
              if (_0x15a79b && _0x339df7.websocket.subprotocol === null) {
                _0x3f738b = "null";
                _0x2a9dd1 = undefined;
              }
              var _0x67f1ab;
              if (_0x47ed75) {
                _0x67f1ab = require("ws");
              } else {
                _0x67f1ab = WebSocket;
              }
              _0x2fc1dc = new _0x67f1ab(_0x5e9086, _0x2a9dd1);
              _0x2fc1dc.binaryType = "arraybuffer";
            } catch (_0x7f722b) {
              throw new _0x1c26fd.ErrnoError(23);
            }
          }
          var _0x5d36bb = {
            addr: _0x4da44f,
            port: _0x216630,
            socket: _0x2fc1dc,
            dgram_send_queue: []
          };
          _0x252c88.websocket_sock_ops.addPeer(_0x205f20, _0x5d36bb);
          _0x252c88.websocket_sock_ops.handlePeerEvents(_0x205f20, _0x5d36bb);
          if (_0x205f20.type === 2 && typeof _0x205f20.sport != "undefined") {
            _0x5d36bb.dgram_send_queue.push(new Uint8Array([255, 255, 255, 255, "p".charCodeAt(0), "o".charCodeAt(0), "r".charCodeAt(0), "t".charCodeAt(0), (_0x205f20.sport & 65280) >> 8, _0x205f20.sport & 255]));
          }
          return _0x5d36bb;
        },
        getPeer: function (_0xaf364d, _0x34f1b7, _0x169a55) {
          return _0xaf364d.peers[_0x34f1b7 + ":" + _0x169a55];
        },
        addPeer: function (_0x51ee08, _0xbf8937) {
          _0x51ee08.peers[_0xbf8937.addr + ":" + _0xbf8937.port] = _0xbf8937;
        },
        removePeer: function (_0x5dd931, _0x2cd023) {
          delete _0x5dd931.peers[_0x2cd023.addr + ":" + _0x2cd023.port];
        },
        handlePeerEvents: function (_0xa222ee, _0x538329) {
          var _0x19f68d = true;
          function _0x5bde2d() {
            _0x339df7.websocket.emit("open", _0xa222ee.stream.fd);
            try {
              var _0x3fdd4b = _0x538329.dgram_send_queue.shift();
              while (_0x3fdd4b) {
                _0x538329.socket.send(_0x3fdd4b);
                _0x3fdd4b = _0x538329.dgram_send_queue.shift();
              }
            } catch (_0x3f9d12) {
              _0x538329.socket.close();
            }
          }
          function _0xb89751(_0x1bee13) {
            if (typeof _0x1bee13 == "string") {
              var _0x311569 = new TextEncoder();
              _0x1bee13 = _0x311569.encode(_0x1bee13);
            } else {
              _0x4c7bb6(_0x1bee13.byteLength !== undefined);
              if (_0x1bee13.byteLength == 0) {
                return;
              } else {
                _0x1bee13 = new Uint8Array(_0x1bee13);
              }
            }
            var _0x5d9dd4 = _0x19f68d;
            _0x19f68d = false;
            if (_0x5d9dd4 && _0x1bee13.length === 10 && _0x1bee13[0] === 255 && _0x1bee13[1] === 255 && _0x1bee13[2] === 255 && _0x1bee13[3] === 255 && _0x1bee13[4] === "p".charCodeAt(0) && _0x1bee13[5] === "o".charCodeAt(0) && _0x1bee13[6] === "r".charCodeAt(0) && _0x1bee13[7] === "t".charCodeAt(0)) {
              var _0x463c15 = _0x1bee13[8] << 8 | _0x1bee13[9];
              _0x252c88.websocket_sock_ops.removePeer(_0xa222ee, _0x538329);
              _0x538329.port = _0x463c15;
              _0x252c88.websocket_sock_ops.addPeer(_0xa222ee, _0x538329);
              return;
            }
            _0xa222ee.recv_queue.push({
              addr: _0x538329.addr,
              port: _0x538329.port,
              data: _0x1bee13
            });
            _0x339df7.websocket.emit("message", _0xa222ee.stream.fd);
          }
          if (_0x47ed75) {
            _0x538329.socket.on("open", _0x5bde2d);
            _0x538329.socket.on("message", function (_0x100dfa, _0x5eabc0) {
              if (!_0x5eabc0.binary) {
                return;
              }
              _0xb89751(new Uint8Array(_0x100dfa).buffer);
            });
            _0x538329.socket.on("close", function () {
              _0x339df7.websocket.emit("close", _0xa222ee.stream.fd);
            });
            _0x538329.socket.on("error", function (_0x3d9d88) {
              _0xa222ee.error = 14;
              _0x339df7.websocket.emit("error", [_0xa222ee.stream.fd, _0xa222ee.error, "ECONNREFUSED: Connection refused"]);
            });
          } else {
            _0x538329.socket.onopen = _0x5bde2d;
            _0x538329.socket.onclose = function () {
              _0x339df7.websocket.emit("close", _0xa222ee.stream.fd);
            };
            _0x538329.socket.onmessage = function _0x16293(_0x50c603) {
              _0xb89751(_0x50c603.data);
            };
            _0x538329.socket.onerror = function (_0xf59edc) {
              _0xa222ee.error = 14;
              _0x339df7.websocket.emit("error", [_0xa222ee.stream.fd, _0xa222ee.error, "ECONNREFUSED: Connection refused"]);
            };
          }
        },
        poll: function (_0x596c1f) {
          if (_0x596c1f.type === 1 && _0x596c1f.server) {
            if (_0x596c1f.pending.length) {
              return 65;
            } else {
              return 0;
            }
          }
          var _0x5222c9 = 0;
          var _0x549b2a = _0x596c1f.type === 1 ? _0x252c88.websocket_sock_ops.getPeer(_0x596c1f, _0x596c1f.daddr, _0x596c1f.dport) : null;
          if (_0x596c1f.recv_queue.length || !_0x549b2a || _0x549b2a && _0x549b2a.socket.readyState === _0x549b2a.socket.CLOSING || _0x549b2a && _0x549b2a.socket.readyState === _0x549b2a.socket.CLOSED) {
            _0x5222c9 |= 65;
          }
          if (!_0x549b2a || _0x549b2a && _0x549b2a.socket.readyState === _0x549b2a.socket.OPEN) {
            _0x5222c9 |= 4;
          }
          if (_0x549b2a && _0x549b2a.socket.readyState === _0x549b2a.socket.CLOSING || _0x549b2a && _0x549b2a.socket.readyState === _0x549b2a.socket.CLOSED) {
            _0x5222c9 |= 16;
          }
          return _0x5222c9;
        },
        ioctl: function (_0x6c1764, _0x5b514a, _0x449cc3) {
          switch (_0x5b514a) {
            case 21531:
              var _0x202798 = 0;
              if (_0x6c1764.recv_queue.length) {
                _0x202798 = _0x6c1764.recv_queue[0].data.length;
              }
              _0x47a7a3[_0x449cc3 >> 2] = _0x202798;
              return 0;
            default:
              return 28;
          }
        },
        close: function (_0x1e7369) {
          if (_0x1e7369.server) {
            try {
              _0x1e7369.server.close();
            } catch (_0x22daff) {}
            _0x1e7369.server = null;
          }
          var _0x5ef7a2 = Object.keys(_0x1e7369.peers);
          for (var _0x42bc19 = 0; _0x42bc19 < _0x5ef7a2.length; _0x42bc19++) {
            var _0x4f5c42 = _0x1e7369.peers[_0x5ef7a2[_0x42bc19]];
            try {
              _0x4f5c42.socket.close();
            } catch (_0xbae5b8) {}
            _0x252c88.websocket_sock_ops.removePeer(_0x1e7369, _0x4f5c42);
          }
          return 0;
        },
        bind: function (_0x3aaeac, _0x2edfae, _0x37c209) {
          if (typeof _0x3aaeac.saddr != "undefined" || typeof _0x3aaeac.sport != "undefined") {
            throw new _0x1c26fd.ErrnoError(28);
          }
          _0x3aaeac.saddr = _0x2edfae;
          _0x3aaeac.sport = _0x37c209;
          if (_0x3aaeac.type === 2) {
            if (_0x3aaeac.server) {
              _0x3aaeac.server.close();
              _0x3aaeac.server = null;
            }
            try {
              _0x3aaeac.sock_ops.listen(_0x3aaeac, 0);
            } catch (_0x4281fc) {
              if (!(_0x4281fc instanceof _0x1c26fd.ErrnoError)) {
                throw _0x4281fc;
              }
              if (_0x4281fc.errno !== 138) {
                throw _0x4281fc;
              }
            }
          }
        },
        connect: function (_0x4a106a, _0x42768b, _0x5928e5) {
          if (_0x4a106a.server) {
            throw new _0x1c26fd.ErrnoError(138);
          }
          if (typeof _0x4a106a.daddr != "undefined" && typeof _0x4a106a.dport != "undefined") {
            var _0x9d3a1a = _0x252c88.websocket_sock_ops.getPeer(_0x4a106a, _0x4a106a.daddr, _0x4a106a.dport);
            if (_0x9d3a1a) {
              if (_0x9d3a1a.socket.readyState === _0x9d3a1a.socket.CONNECTING) {
                throw new _0x1c26fd.ErrnoError(7);
              } else {
                throw new _0x1c26fd.ErrnoError(30);
              }
            }
          }
          var _0x51e1ba = _0x252c88.websocket_sock_ops.createPeer(_0x4a106a, _0x42768b, _0x5928e5);
          _0x4a106a.daddr = _0x51e1ba.addr;
          _0x4a106a.dport = _0x51e1ba.port;
          throw new _0x1c26fd.ErrnoError(26);
        },
        listen: function (_0x460458, _0x31fb87) {
          if (!_0x47ed75) {
            throw new _0x1c26fd.ErrnoError(138);
          }
          if (_0x460458.server) {
            throw new _0x1c26fd.ErrnoError(28);
          }
          var _0x3e27f3 = require("ws").Server;
          var _0x3c1a8e = _0x460458.saddr;
          _0x460458.server = new _0x3e27f3({
            host: _0x3c1a8e,
            port: _0x460458.sport
          });
          _0x339df7.websocket.emit("listen", _0x460458.stream.fd);
          _0x460458.server.on("connection", function (_0x2ba5ba) {
            if (_0x460458.type === 1) {
              var _0x3393d2 = _0x252c88.createSocket(_0x460458.family, _0x460458.type, _0x460458.protocol);
              var _0x35307b = _0x252c88.websocket_sock_ops.createPeer(_0x3393d2, _0x2ba5ba);
              _0x3393d2.daddr = _0x35307b.addr;
              _0x3393d2.dport = _0x35307b.port;
              _0x460458.pending.push(_0x3393d2);
              _0x339df7.websocket.emit("connection", _0x3393d2.stream.fd);
            } else {
              _0x252c88.websocket_sock_ops.createPeer(_0x460458, _0x2ba5ba);
              _0x339df7.websocket.emit("connection", _0x460458.stream.fd);
            }
          });
          _0x460458.server.on("closed", function () {
            _0x339df7.websocket.emit("close", _0x460458.stream.fd);
            _0x460458.server = null;
          });
          _0x460458.server.on("error", function (_0x2f49b8) {
            _0x460458.error = 23;
            _0x339df7.websocket.emit("error", [_0x460458.stream.fd, _0x460458.error, "EHOSTUNREACH: Host is unreachable"]);
          });
        },
        accept: function (_0x3f48cc) {
          if (!_0x3f48cc.server || !_0x3f48cc.pending.length) {
            throw new _0x1c26fd.ErrnoError(28);
          }
          var _0x29843b = _0x3f48cc.pending.shift();
          _0x29843b.stream.flags = _0x3f48cc.stream.flags;
          return _0x29843b;
        },
        getname: function (_0x9c2c80, _0xe21b65) {
          var _0x1e83aa;
          var _0x4df82;
          if (_0xe21b65) {
            if (_0x9c2c80.daddr === undefined || _0x9c2c80.dport === undefined) {
              throw new _0x1c26fd.ErrnoError(53);
            }
            _0x1e83aa = _0x9c2c80.daddr;
            _0x4df82 = _0x9c2c80.dport;
          } else {
            _0x1e83aa = _0x9c2c80.saddr || 0;
            _0x4df82 = _0x9c2c80.sport || 0;
          }
          return {
            addr: _0x1e83aa,
            port: _0x4df82
          };
        },
        sendmsg: function (_0x18b4de, _0x5e21c9, _0x4fa89c, _0x184d17, _0x4f2bf3, _0x4362dc) {
          if (_0x18b4de.type === 2) {
            if (_0x4f2bf3 === undefined || _0x4362dc === undefined) {
              _0x4f2bf3 = _0x18b4de.daddr;
              _0x4362dc = _0x18b4de.dport;
            }
            if (_0x4f2bf3 === undefined || _0x4362dc === undefined) {
              throw new _0x1c26fd.ErrnoError(17);
            }
          } else {
            _0x4f2bf3 = _0x18b4de.daddr;
            _0x4362dc = _0x18b4de.dport;
          }
          var _0x44a5b1 = _0x252c88.websocket_sock_ops.getPeer(_0x18b4de, _0x4f2bf3, _0x4362dc);
          if (_0x18b4de.type === 1) {
            if (!_0x44a5b1 || _0x44a5b1.socket.readyState === _0x44a5b1.socket.CLOSING || _0x44a5b1.socket.readyState === _0x44a5b1.socket.CLOSED) {
              throw new _0x1c26fd.ErrnoError(53);
            } else if (_0x44a5b1.socket.readyState === _0x44a5b1.socket.CONNECTING) {
              throw new _0x1c26fd.ErrnoError(6);
            }
          }
          if (ArrayBuffer.isView(_0x5e21c9)) {
            _0x4fa89c += _0x5e21c9.byteOffset;
            _0x5e21c9 = _0x5e21c9.buffer;
          }
          var _0x1f54e4;
          _0x1f54e4 = _0x5e21c9.slice(_0x4fa89c, _0x4fa89c + _0x184d17);
          if (_0x18b4de.type === 2) {
            if (!_0x44a5b1 || _0x44a5b1.socket.readyState !== _0x44a5b1.socket.OPEN) {
              if (!_0x44a5b1 || _0x44a5b1.socket.readyState === _0x44a5b1.socket.CLOSING || _0x44a5b1.socket.readyState === _0x44a5b1.socket.CLOSED) {
                _0x44a5b1 = _0x252c88.websocket_sock_ops.createPeer(_0x18b4de, _0x4f2bf3, _0x4362dc);
              }
              _0x44a5b1.dgram_send_queue.push(_0x1f54e4);
              return _0x184d17;
            }
          }
          try {
            _0x44a5b1.socket.send(_0x1f54e4);
            return _0x184d17;
          } catch (_0x73bdf2) {
            throw new _0x1c26fd.ErrnoError(28);
          }
        },
        recvmsg: function (_0x4e84f9, _0x446f42) {
          if (_0x4e84f9.type === 1 && _0x4e84f9.server) {
            throw new _0x1c26fd.ErrnoError(53);
          }
          var _0x121bba = _0x4e84f9.recv_queue.shift();
          if (!_0x121bba) {
            if (_0x4e84f9.type === 1) {
              var _0x5961d3 = _0x252c88.websocket_sock_ops.getPeer(_0x4e84f9, _0x4e84f9.daddr, _0x4e84f9.dport);
              if (!_0x5961d3) {
                throw new _0x1c26fd.ErrnoError(53);
              } else if (_0x5961d3.socket.readyState === _0x5961d3.socket.CLOSING || _0x5961d3.socket.readyState === _0x5961d3.socket.CLOSED) {
                return null;
              } else {
                throw new _0x1c26fd.ErrnoError(6);
              }
            } else {
              throw new _0x1c26fd.ErrnoError(6);
            }
          }
          var _0x325f67 = _0x121bba.data.byteLength || _0x121bba.data.length;
          var _0x396b6e = _0x121bba.data.byteOffset || 0;
          var _0x4b9532 = _0x121bba.data.buffer || _0x121bba.data;
          var _0xc88472 = Math.min(_0x446f42, _0x325f67);
          var _0x555105 = {
            buffer: new Uint8Array(_0x4b9532, _0x396b6e, _0xc88472),
            addr: _0x121bba.addr,
            port: _0x121bba.port
          };
          if (_0x4e84f9.type === 1 && _0xc88472 < _0x325f67) {
            var _0x45d817 = _0x325f67 - _0xc88472;
            _0x121bba.data = new Uint8Array(_0x4b9532, _0x396b6e + _0xc88472, _0x45d817);
            _0x4e84f9.recv_queue.unshift(_0x121bba);
          }
          return _0x555105;
        }
      }
    };
    function _0x54ebd8(_0x4392bb) {
      var _0x1ff3b9 = _0x252c88.getSocket(_0x4392bb);
      if (!_0x1ff3b9) {
        throw new _0x1c26fd.ErrnoError(8);
      }
      return _0x1ff3b9;
    }
    function _0x1c033a(_0x5ce009) {
      _0x47a7a3[_0x3fda2b() >> 2] = _0x5ce009;
      return _0x5ce009;
    }
    function _0x54119c(_0x111fcc) {
      var _0xdf22a4 = _0x111fcc.split(".");
      for (var _0x303e0b = 0; _0x303e0b < 4; _0x303e0b++) {
        var _0xe9a95 = Number(_0xdf22a4[_0x303e0b]);
        if (isNaN(_0xe9a95)) {
          return null;
        }
        _0xdf22a4[_0x303e0b] = _0xe9a95;
      }
      return (_0xdf22a4[0] | _0xdf22a4[1] << 8 | _0xdf22a4[2] << 16 | _0xdf22a4[3] << 24) >>> 0;
    }
    function _0x49c2e7(_0x1b1adb) {
      return parseInt(_0x1b1adb);
    }
    function _0x1390b9(_0x3bdbe6) {
      var _0x23811f;
      var _0x18597f;
      var _0x43f39b;
      var _0x3ab0ac;
      var _0x37cc1f = /^((?=.*::)(?!.*::.+::)(::)?([\dA-F]{1,4}:(:|\b)|){5}|([\dA-F]{1,4}:){6})((([\dA-F]{1,4}((?!\3)::|:\b|$))|(?!\2\3)){2}|(((2[0-4]|1\d|[1-9])?\d|25[0-5])\.?\b){4})$/i;
      var _0x2eac37 = [];
      if (!_0x37cc1f.test(_0x3bdbe6)) {
        return null;
      }
      if (_0x3bdbe6 === "::") {
        return [0, 0, 0, 0, 0, 0, 0, 0];
      }
      if (_0x3bdbe6.startsWith("::")) {
        _0x3bdbe6 = _0x3bdbe6.replace("::", "Z:");
      } else {
        _0x3bdbe6 = _0x3bdbe6.replace("::", ":Z:");
      }
      if (_0x3bdbe6.indexOf(".") > 0) {
        _0x3bdbe6 = _0x3bdbe6.replace(new RegExp("[.]", "g"), ":");
        _0x23811f = _0x3bdbe6.split(":");
        _0x23811f[_0x23811f.length - 4] = _0x49c2e7(_0x23811f[_0x23811f.length - 4]) + _0x49c2e7(_0x23811f[_0x23811f.length - 3]) * 256;
        _0x23811f[_0x23811f.length - 3] = _0x49c2e7(_0x23811f[_0x23811f.length - 2]) + _0x49c2e7(_0x23811f[_0x23811f.length - 1]) * 256;
        _0x23811f = _0x23811f.slice(0, _0x23811f.length - 2);
      } else {
        _0x23811f = _0x3bdbe6.split(":");
      }
      _0x43f39b = 0;
      _0x3ab0ac = 0;
      for (_0x18597f = 0; _0x18597f < _0x23811f.length; _0x18597f++) {
        if (typeof _0x23811f[_0x18597f] == "string") {
          if (_0x23811f[_0x18597f] === "Z") {
            for (_0x3ab0ac = 0; _0x3ab0ac < 8 - _0x23811f.length + 1; _0x3ab0ac++) {
              _0x2eac37[_0x18597f + _0x3ab0ac] = 0;
            }
            _0x43f39b = _0x3ab0ac - 1;
          } else {
            _0x2eac37[_0x18597f + _0x43f39b] = _0x15a67e(parseInt(_0x23811f[_0x18597f], 16));
          }
        } else {
          _0x2eac37[_0x18597f + _0x43f39b] = _0x23811f[_0x18597f];
        }
      }
      return [_0x2eac37[1] << 16 | _0x2eac37[0], _0x2eac37[3] << 16 | _0x2eac37[2], _0x2eac37[5] << 16 | _0x2eac37[4], _0x2eac37[7] << 16 | _0x2eac37[6]];
    }
    function _0x125185(_0x1b4c14, _0x15e76f, _0x3a3600, _0x47dd4b, _0x42c3e9) {
      switch (_0x15e76f) {
        case 2:
          _0x3a3600 = _0x54119c(_0x3a3600);
          _0x8bd8f(_0x1b4c14, 16);
          if (_0x42c3e9) {
            _0x47a7a3[_0x42c3e9 >> 2] = 16;
          }
          _0x3c10c6[_0x1b4c14 >> 1] = _0x15e76f;
          _0x47a7a3[_0x1b4c14 + 4 >> 2] = _0x3a3600;
          _0x3c10c6[_0x1b4c14 + 2 >> 1] = _0x15a67e(_0x47dd4b);
          break;
        case 10:
          _0x3a3600 = _0x1390b9(_0x3a3600);
          _0x8bd8f(_0x1b4c14, 28);
          if (_0x42c3e9) {
            _0x47a7a3[_0x42c3e9 >> 2] = 28;
          }
          _0x47a7a3[_0x1b4c14 >> 2] = _0x15e76f;
          _0x47a7a3[_0x1b4c14 + 8 >> 2] = _0x3a3600[0];
          _0x47a7a3[_0x1b4c14 + 12 >> 2] = _0x3a3600[1];
          _0x47a7a3[_0x1b4c14 + 16 >> 2] = _0x3a3600[2];
          _0x47a7a3[_0x1b4c14 + 20 >> 2] = _0x3a3600[3];
          _0x3c10c6[_0x1b4c14 + 2 >> 1] = _0x15a67e(_0x47dd4b);
          break;
        default:
          return 5;
      }
      return 0;
    }
    var _0x5d0e3f = {
      address_map: {
        id: 1,
        addrs: {},
        names: {}
      },
      lookup_name: function (_0x2dc82c) {
        var _0x4e758b = _0x54119c(_0x2dc82c);
        if (_0x4e758b !== null) {
          return _0x2dc82c;
        }
        _0x4e758b = _0x1390b9(_0x2dc82c);
        if (_0x4e758b !== null) {
          return _0x2dc82c;
        }
        var _0xbc5796;
        if (_0x5d0e3f.address_map.addrs[_0x2dc82c]) {
          _0xbc5796 = _0x5d0e3f.address_map.addrs[_0x2dc82c];
        } else {
          var _0x504fd3 = _0x5d0e3f.address_map.id++;
          _0x4c7bb6(_0x504fd3 < 65535, "exceeded max address mappings of 65535");
          _0xbc5796 = "172.29." + (_0x504fd3 & 255) + "." + (_0x504fd3 & 65280);
          _0x5d0e3f.address_map.names[_0xbc5796] = _0x2dc82c;
          _0x5d0e3f.address_map.addrs[_0x2dc82c] = _0xbc5796;
        }
        return _0xbc5796;
      },
      lookup_addr: function (_0x37bbb3) {
        if (_0x5d0e3f.address_map.names[_0x37bbb3]) {
          return _0x5d0e3f.address_map.names[_0x37bbb3];
        }
        return null;
      }
    };
    function _0xe17bb9(_0x29b6e7, _0x2e4aa2, _0x484317, _0x3ae37a) {
      try {
        var _0x5a2866 = _0x54ebd8(_0x29b6e7);
        var _0x203a4f = _0x5a2866.sock_ops.accept(_0x5a2866);
        if (_0x2e4aa2) {
          var _0x4d8378 = _0x125185(_0x2e4aa2, _0x203a4f.family, _0x5d0e3f.lookup_name(_0x203a4f.daddr), _0x203a4f.dport, _0x484317);
        }
        return _0x203a4f.stream.fd;
      } catch (_0x5273df) {
        if (typeof _0x1c26fd == "undefined" || !(_0x5273df instanceof _0x1c26fd.ErrnoError)) {
          throw _0x5273df;
        }
        return -_0x5273df.errno;
      }
    }
    function _0x4d7650(_0x2d78ba) {
      return (_0x2d78ba & 255) + "." + (_0x2d78ba >> 8 & 255) + "." + (_0x2d78ba >> 16 & 255) + "." + (_0x2d78ba >> 24 & 255);
    }
    function _0x2dd5da(_0xffbb21) {
      var _0x7bcafd = "";
      var _0x4fbfc7 = 0;
      var _0x5d938c = 0;
      var _0x34da2d = 0;
      var _0x372845 = 0;
      var _0x353fb7 = 0;
      var _0x420446 = 0;
      var _0x312707 = [_0xffbb21[0] & 65535, _0xffbb21[0] >> 16, _0xffbb21[1] & 65535, _0xffbb21[1] >> 16, _0xffbb21[2] & 65535, _0xffbb21[2] >> 16, _0xffbb21[3] & 65535, _0xffbb21[3] >> 16];
      var _0x5c2ca5 = true;
      var _0x441de6 = "";
      for (_0x420446 = 0; _0x420446 < 5; _0x420446++) {
        if (_0x312707[_0x420446] !== 0) {
          _0x5c2ca5 = false;
          break;
        }
      }
      if (_0x5c2ca5) {
        _0x441de6 = _0x4d7650(_0x312707[6] | _0x312707[7] << 16);
        if (_0x312707[5] === -1) {
          _0x7bcafd = "::ffff:";
          _0x7bcafd += _0x441de6;
          return _0x7bcafd;
        }
        if (_0x312707[5] === 0) {
          _0x7bcafd = "::";
          if (_0x441de6 === "0.0.0.0") {
            _0x441de6 = "";
          }
          if (_0x441de6 === "0.0.0.1") {
            _0x441de6 = "1";
          }
          _0x7bcafd += _0x441de6;
          return _0x7bcafd;
        }
      }
      for (_0x4fbfc7 = 0; _0x4fbfc7 < 8; _0x4fbfc7++) {
        if (_0x312707[_0x4fbfc7] === 0) {
          if (_0x4fbfc7 - _0x34da2d > 1) {
            _0x353fb7 = 0;
          }
          _0x34da2d = _0x4fbfc7;
          _0x353fb7++;
        }
        if (_0x353fb7 > _0x5d938c) {
          _0x5d938c = _0x353fb7;
          _0x372845 = _0x4fbfc7 - _0x5d938c + 1;
        }
      }
      for (_0x4fbfc7 = 0; _0x4fbfc7 < 8; _0x4fbfc7++) {
        if (_0x5d938c > 1) {
          if (_0x312707[_0x4fbfc7] === 0 && _0x4fbfc7 >= _0x372845 && _0x4fbfc7 < _0x372845 + _0x5d938c) {
            if (_0x4fbfc7 === _0x372845) {
              _0x7bcafd += ":";
              if (_0x372845 === 0) {
                _0x7bcafd += ":";
              }
            }
            continue;
          }
        }
        _0x7bcafd += Number(_0x25ff9b(_0x312707[_0x4fbfc7] & 65535)).toString(16);
        _0x7bcafd += _0x4fbfc7 < 7 ? ":" : "";
      }
      return _0x7bcafd;
    }
    function _0x5b570e(_0x416fde, _0x4af0cc) {
      var _0x31b434 = _0x3c10c6[_0x416fde >> 1];
      var _0x211deb = _0x25ff9b(_0x4181af[_0x416fde + 2 >> 1]);
      var _0x469b6c;
      switch (_0x31b434) {
        case 2:
          if (_0x4af0cc !== 16) {
            return {
              errno: 28
            };
          }
          _0x469b6c = _0x47a7a3[_0x416fde + 4 >> 2];
          _0x469b6c = _0x4d7650(_0x469b6c);
          break;
        case 10:
          if (_0x4af0cc !== 28) {
            return {
              errno: 28
            };
          }
          _0x469b6c = [_0x47a7a3[_0x416fde + 8 >> 2], _0x47a7a3[_0x416fde + 12 >> 2], _0x47a7a3[_0x416fde + 16 >> 2], _0x47a7a3[_0x416fde + 20 >> 2]];
          _0x469b6c = _0x2dd5da(_0x469b6c);
          break;
        default:
          return {
            errno: 5
          };
      }
      return {
        family: _0x31b434,
        addr: _0x469b6c,
        port: _0x211deb
      };
    }
    function _0x57af98(_0x10cb5a, _0x20dc81, _0x4e770b) {
      if (_0x4e770b && _0x10cb5a === 0) {
        return null;
      }
      var _0x548125 = _0x5b570e(_0x10cb5a, _0x20dc81);
      if (_0x548125.errno) {
        throw new _0x1c26fd.ErrnoError(_0x548125.errno);
      }
      _0x548125.addr = _0x5d0e3f.lookup_addr(_0x548125.addr) || _0x548125.addr;
      return _0x548125;
    }
    function _0x146ea4(_0x22cb87, _0x1fa2a8, _0x387847) {
      try {
        var _0x59880b = _0x54ebd8(_0x22cb87);
        var _0x40fbb5 = _0x57af98(_0x1fa2a8, _0x387847);
        _0x59880b.sock_ops.bind(_0x59880b, _0x40fbb5.addr, _0x40fbb5.port);
        return 0;
      } catch (_0x55bec0) {
        if (typeof _0x1c26fd == "undefined" || !(_0x55bec0 instanceof _0x1c26fd.ErrnoError)) {
          throw _0x55bec0;
        }
        return -_0x55bec0.errno;
      }
    }
    function _0x4d097c(_0x17bb16, _0x2759d2) {
      try {
        _0x17bb16 = _0x521741.getStr(_0x17bb16);
        _0x1c26fd.chmod(_0x17bb16, _0x2759d2);
        return 0;
      } catch (_0x375374) {
        if (typeof _0x1c26fd == "undefined" || !(_0x375374 instanceof _0x1c26fd.ErrnoError)) {
          throw _0x375374;
        }
        return -_0x375374.errno;
      }
    }
    function _0x2f3d57(_0x3c9144, _0xc19a86, _0x3c6800) {
      try {
        var _0x1fb5f2 = _0x54ebd8(_0x3c9144);
        var _0x456772 = _0x57af98(_0xc19a86, _0x3c6800);
        _0x1fb5f2.sock_ops.connect(_0x1fb5f2, _0x456772.addr, _0x456772.port);
        return 0;
      } catch (_0xfcd01d) {
        if (typeof _0x1c26fd == "undefined" || !(_0xfcd01d instanceof _0x1c26fd.ErrnoError)) {
          throw _0xfcd01d;
        }
        return -_0xfcd01d.errno;
      }
    }
    function _0x3efd33(_0x1c3f8f, _0x124c62, _0x162a03) {
      try {
        var _0x147c5f = _0x521741.getStreamFromFD(_0x1c3f8f);
        if (_0x147c5f.fd === _0x124c62) {
          return -28;
        }
        var _0x479349 = _0x1c26fd.getStream(_0x124c62);
        if (_0x479349) {
          _0x1c26fd.close(_0x479349);
        }
        return _0x1c26fd.open(_0x147c5f.path, _0x147c5f.flags, 0, _0x124c62, _0x124c62).fd;
      } catch (_0x5aeec4) {
        if (typeof _0x1c26fd == "undefined" || !(_0x5aeec4 instanceof _0x1c26fd.ErrnoError)) {
          throw _0x5aeec4;
        }
        return -_0x5aeec4.errno;
      }
    }
    function _0x2b1e29(_0x5ba6d1, _0x17a73c, _0x5e85e1, _0x2477b5) {
      try {
        _0x17a73c = _0x521741.getStr(_0x17a73c);
        _0x17a73c = _0x521741.calculateAt(_0x5ba6d1, _0x17a73c);
        return _0x521741.doAccess(_0x17a73c, _0x5e85e1);
      } catch (_0xde93a8) {
        if (typeof _0x1c26fd == "undefined" || !(_0xde93a8 instanceof _0x1c26fd.ErrnoError)) {
          throw _0xde93a8;
        }
        return -_0xde93a8.errno;
      }
    }
    function _0x563587(_0x2d9921, _0x137aff, _0x9b24bc) {
      _0x521741.varargs = _0x9b24bc;
      try {
        var _0x210a1c = _0x521741.getStreamFromFD(_0x2d9921);
        switch (_0x137aff) {
          case 0:
            {
              var _0x5c5817 = _0x521741.get();
              if (_0x5c5817 < 0) {
                return -28;
              }
              var _0xae692c;
              _0xae692c = _0x1c26fd.open(_0x210a1c.path, _0x210a1c.flags, 0, _0x5c5817);
              return _0xae692c.fd;
            }
          case 1:
          case 2:
            return 0;
          case 3:
            return _0x210a1c.flags;
          case 4:
            {
              var _0x5c5817 = _0x521741.get();
              _0x210a1c.flags |= _0x5c5817;
              return 0;
            }
          case 5:
            {
              var _0x5c5817 = _0x521741.get();
              var _0x82993a = 0;
              _0x3c10c6[_0x5c5817 + _0x82993a >> 1] = 2;
              return 0;
            }
          case 6:
          case 7:
            return 0;
          case 16:
          case 8:
            return -28;
          case 9:
            _0x1c033a(28);
            return -1;
          default:
            {
              return -28;
            }
        }
      } catch (_0x4441ff) {
        if (typeof _0x1c26fd == "undefined" || !(_0x4441ff instanceof _0x1c26fd.ErrnoError)) {
          throw _0x4441ff;
        }
        return -_0x4441ff.errno;
      }
    }
    function _0x144a8e(_0x5c9803, _0x2f10ef) {
      try {
        var _0xd983ba = _0x521741.getStreamFromFD(_0x5c9803);
        return _0x521741.doStat(_0x1c26fd.stat, _0xd983ba.path, _0x2f10ef);
      } catch (_0xb3825e) {
        if (typeof _0x1c26fd == "undefined" || !(_0xb3825e instanceof _0x1c26fd.ErrnoError)) {
          throw _0xb3825e;
        }
        return -_0xb3825e.errno;
      }
    }
    function _0x7ea9ee(_0x27aaf8, _0x2ad156, _0x1fed5a) {
      try {
        var _0x19ab5f = _0x521741.get64(_0x2ad156, _0x1fed5a);
        _0x1c26fd.ftruncate(_0x27aaf8, _0x19ab5f);
        return 0;
      } catch (_0x49ad23) {
        if (typeof _0x1c26fd == "undefined" || !(_0x49ad23 instanceof _0x1c26fd.ErrnoError)) {
          throw _0x49ad23;
        }
        return -_0x49ad23.errno;
      }
    }
    function _0x4900bb(_0xf56299, _0x254c7b) {
      try {
        if (_0x254c7b === 0) {
          return -28;
        }
        var _0x9822e9 = _0x1c26fd.cwd();
        var _0x3170c8 = _0x12cdfc(_0x9822e9);
        if (_0x254c7b < _0x3170c8 + 1) {
          return -68;
        }
        _0xb1d3f9(_0x9822e9, _0xf56299, _0x254c7b);
        return _0xf56299;
      } catch (_0x4a4496) {
        if (typeof _0x1c26fd == "undefined" || !(_0x4a4496 instanceof _0x1c26fd.ErrnoError)) {
          throw _0x4a4496;
        }
        return -_0x4a4496.errno;
      }
    }
    function _0x4774d2(_0x363604, _0x455483, _0x2dadfa) {
      try {
        var _0xfb6b1e = _0x521741.getStreamFromFD(_0x363604);
        if (!_0xfb6b1e.getdents) {
          _0xfb6b1e.getdents = _0x1c26fd.readdir(_0xfb6b1e.path);
        }
        var _0x337f09 = 280;
        var _0x541de0 = 0;
        var _0x4eb67f = _0x1c26fd.llseek(_0xfb6b1e, 0, 1);
        var _0x39d932 = Math.floor(_0x4eb67f / _0x337f09);
        while (_0x39d932 < _0xfb6b1e.getdents.length && _0x541de0 + _0x337f09 <= _0x2dadfa) {
          var _0x3ea07a;
          var _0x8f900e;
          var _0x573528 = _0xfb6b1e.getdents[_0x39d932];
          if (_0x573528 === ".") {
            _0x3ea07a = _0xfb6b1e.node.id;
            _0x8f900e = 4;
          } else if (_0x573528 === "..") {
            var _0x331e4b = _0x1c26fd.lookupPath(_0xfb6b1e.path, {
              parent: true
            });
            _0x3ea07a = _0x331e4b.node.id;
            _0x8f900e = 4;
          } else {
            var _0x44df94 = _0x1c26fd.lookupNode(_0xfb6b1e.node, _0x573528);
            _0x3ea07a = _0x44df94.id;
            _0x8f900e = _0x1c26fd.isChrdev(_0x44df94.mode) ? 2 : _0x1c26fd.isDir(_0x44df94.mode) ? 4 : _0x1c26fd.isLink(_0x44df94.mode) ? 10 : 8;
          }
          _0x1b09b3 = [_0x3ea07a >>> 0, (_0x563ecc = _0x3ea07a, +Math.abs(_0x563ecc) >= 1 ? _0x563ecc > 0 ? (Math.min(+Math.floor(_0x563ecc / 4294967296), 4294967295) | 0) >>> 0 : ~~+Math.ceil((_0x563ecc - +(~~_0x563ecc >>> 0)) / 4294967296) >>> 0 : 0)];
          _0x47a7a3[_0x455483 + _0x541de0 >> 2] = _0x1b09b3[0];
          _0x47a7a3[_0x455483 + _0x541de0 + 4 >> 2] = _0x1b09b3[1];
          _0x1b09b3 = [(_0x39d932 + 1) * _0x337f09 >>> 0, (_0x563ecc = (_0x39d932 + 1) * _0x337f09, +Math.abs(_0x563ecc) >= 1 ? _0x563ecc > 0 ? (Math.min(+Math.floor(_0x563ecc / 4294967296), 4294967295) | 0) >>> 0 : ~~+Math.ceil((_0x563ecc - +(~~_0x563ecc >>> 0)) / 4294967296) >>> 0 : 0)];
          _0x47a7a3[_0x455483 + _0x541de0 + 8 >> 2] = _0x1b09b3[0];
          _0x47a7a3[_0x455483 + _0x541de0 + 12 >> 2] = _0x1b09b3[1];
          _0x3c10c6[_0x455483 + _0x541de0 + 16 >> 1] = 280;
          _0x2845ef[_0x455483 + _0x541de0 + 18 >> 0] = _0x8f900e;
          _0xb1d3f9(_0x573528, _0x455483 + _0x541de0 + 19, 256);
          _0x541de0 += _0x337f09;
          _0x39d932 += 1;
        }
        _0x1c26fd.llseek(_0xfb6b1e, _0x39d932 * _0x337f09, 0);
        return _0x541de0;
      } catch (_0x41ae97) {
        if (typeof _0x1c26fd == "undefined" || !(_0x41ae97 instanceof _0x1c26fd.ErrnoError)) {
          throw _0x41ae97;
        }
        return -_0x41ae97.errno;
      }
    }
    function _0x305588(_0x2a1388, _0x44ced0, _0x526e4e) {
      try {
        var _0x2e93af = _0x54ebd8(_0x2a1388);
        if (!_0x2e93af.daddr) {
          return -53;
        }
        var _0x4d6114 = _0x125185(_0x44ced0, _0x2e93af.family, _0x5d0e3f.lookup_name(_0x2e93af.daddr), _0x2e93af.dport, _0x526e4e);
        return 0;
      } catch (_0x379e7a) {
        if (typeof _0x1c26fd == "undefined" || !(_0x379e7a instanceof _0x1c26fd.ErrnoError)) {
          throw _0x379e7a;
        }
        return -_0x379e7a.errno;
      }
    }
    function _0x42dd9b(_0x2200f5, _0x8294b, _0x416fc9) {
      try {
        _0x2b9f46("__syscall_getsockname " + _0x2200f5);
        var _0x40b931 = _0x54ebd8(_0x2200f5);
        var _0x3df2a1 = _0x125185(_0x8294b, _0x40b931.family, _0x5d0e3f.lookup_name(_0x40b931.saddr || "0.0.0.0"), _0x40b931.sport, _0x416fc9);
        return 0;
      } catch (_0x18f212) {
        if (typeof _0x1c26fd == "undefined" || !(_0x18f212 instanceof _0x1c26fd.ErrnoError)) {
          throw _0x18f212;
        }
        return -_0x18f212.errno;
      }
    }
    function _0xdf7da7(_0x10c196, _0xede5, _0x18583b, _0x50c188, _0x419918) {
      try {
        var _0x54fe5c = _0x54ebd8(_0x10c196);
        if (_0xede5 === 1) {
          if (_0x18583b === 4) {
            _0x47a7a3[_0x50c188 >> 2] = _0x54fe5c.error;
            _0x47a7a3[_0x419918 >> 2] = 4;
            _0x54fe5c.error = null;
            return 0;
          }
        }
        return -50;
      } catch (_0x2dba59) {
        if (typeof _0x1c26fd == "undefined" || !(_0x2dba59 instanceof _0x1c26fd.ErrnoError)) {
          throw _0x2dba59;
        }
        return -_0x2dba59.errno;
      }
    }
    function _0x12f975(_0x349bbf, _0x5ea25b, _0x45b3db) {
      _0x521741.varargs = _0x45b3db;
      try {
        var _0x5e9db3 = _0x521741.getStreamFromFD(_0x349bbf);
        switch (_0x5ea25b) {
          case 21509:
          case 21505:
            {
              if (!_0x5e9db3.tty) {
                return -59;
              }
              return 0;
            }
          case 21510:
          case 21511:
          case 21512:
          case 21506:
          case 21507:
          case 21508:
            {
              if (!_0x5e9db3.tty) {
                return -59;
              }
              return 0;
            }
          case 21519:
            {
              if (!_0x5e9db3.tty) {
                return -59;
              }
              var _0x331327 = _0x521741.get();
              _0x47a7a3[_0x331327 >> 2] = 0;
              return 0;
            }
          case 21520:
            {
              if (!_0x5e9db3.tty) {
                return -59;
              }
              return -28;
            }
          case 21531:
            {
              var _0x331327 = _0x521741.get();
              return _0x1c26fd.ioctl(_0x5e9db3, _0x5ea25b, _0x331327);
            }
          case 21523:
            {
              if (!_0x5e9db3.tty) {
                return -59;
              }
              return 0;
            }
          case 21524:
            {
              if (!_0x5e9db3.tty) {
                return -59;
              }
              return 0;
            }
          default:
            _0x6cb855("bad ioctl syscall " + _0x5ea25b);
        }
      } catch (_0x853420) {
        if (typeof _0x1c26fd == "undefined" || !(_0x853420 instanceof _0x1c26fd.ErrnoError)) {
          throw _0x853420;
        }
        return -_0x853420.errno;
      }
    }
    function _0x33ecc8(_0x583875, _0x33bf53) {
      try {
        var _0x1ad448 = _0x54ebd8(_0x583875);
        _0x1ad448.sock_ops.listen(_0x1ad448, _0x33bf53);
        return 0;
      } catch (_0x299f2e) {
        if (typeof _0x1c26fd == "undefined" || !(_0x299f2e instanceof _0x1c26fd.ErrnoError)) {
          throw _0x299f2e;
        }
        return -_0x299f2e.errno;
      }
    }
    function _0x3fca7f(_0xdb34c5, _0x3dae4b) {
      try {
        _0xdb34c5 = _0x521741.getStr(_0xdb34c5);
        return _0x521741.doStat(_0x1c26fd.lstat, _0xdb34c5, _0x3dae4b);
      } catch (_0x3aeed1) {
        if (typeof _0x1c26fd == "undefined" || !(_0x3aeed1 instanceof _0x1c26fd.ErrnoError)) {
          throw _0x3aeed1;
        }
        return -_0x3aeed1.errno;
      }
    }
    function _0x16c4f3(_0x927422, _0x4fb01b) {
      try {
        _0x927422 = _0x521741.getStr(_0x927422);
        return _0x521741.doMkdir(_0x927422, _0x4fb01b);
      } catch (_0x518cec) {
        if (typeof _0x1c26fd == "undefined" || !(_0x518cec instanceof _0x1c26fd.ErrnoError)) {
          throw _0x518cec;
        }
        return -_0x518cec.errno;
      }
    }
    function _0x42a900(_0x590ab5, _0x1d8379, _0x53553b, _0x256fdc) {
      try {
        _0x1d8379 = _0x521741.getStr(_0x1d8379);
        var _0x567da9 = _0x256fdc & 256;
        var _0x153e36 = _0x256fdc & 4096;
        _0x256fdc = _0x256fdc & ~4352;
        _0x1d8379 = _0x521741.calculateAt(_0x590ab5, _0x1d8379, _0x153e36);
        return _0x521741.doStat(_0x567da9 ? _0x1c26fd.lstat : _0x1c26fd.stat, _0x1d8379, _0x53553b);
      } catch (_0x2dfc9a) {
        if (typeof _0x1c26fd == "undefined" || !(_0x2dfc9a instanceof _0x1c26fd.ErrnoError)) {
          throw _0x2dfc9a;
        }
        return -_0x2dfc9a.errno;
      }
    }
    function _0x288242(_0x4c5fc2, _0x2ba40f, _0x5db356, _0x1e6da2) {
      _0x521741.varargs = _0x1e6da2;
      try {
        _0x2ba40f = _0x521741.getStr(_0x2ba40f);
        _0x2ba40f = _0x521741.calculateAt(_0x4c5fc2, _0x2ba40f);
        var _0x43cf2f = _0x1e6da2 ? _0x521741.get() : 0;
        return _0x1c26fd.open(_0x2ba40f, _0x5db356, _0x43cf2f).fd;
      } catch (_0x5f305a) {
        if (typeof _0x1c26fd == "undefined" || !(_0x5f305a instanceof _0x1c26fd.ErrnoError)) {
          throw _0x5f305a;
        }
        return -_0x5f305a.errno;
      }
    }
    var _0x425290 = {
      BUCKET_BUFFER_SIZE: 8192,
      mount: function (_0x2e7e79) {
        return _0x1c26fd.createNode(null, "/", 16895, 0);
      },
      createPipe: function () {
        var _0xd73179 = {
          buckets: [],
          refcnt: 2
        };
        _0xd73179.buckets.push({
          buffer: new Uint8Array(_0x425290.BUCKET_BUFFER_SIZE),
          offset: 0,
          roffset: 0
        });
        var _0x97a9bb = _0x425290.nextname();
        var _0x471d5d = _0x425290.nextname();
        var _0x191f3b = _0x1c26fd.createNode(_0x425290.root, _0x97a9bb, 4096, 0);
        var _0x397ef3 = _0x1c26fd.createNode(_0x425290.root, _0x471d5d, 4096, 0);
        _0x191f3b.pipe = _0xd73179;
        _0x397ef3.pipe = _0xd73179;
        var _0x1a3ce4 = _0x1c26fd.createStream({
          path: _0x97a9bb,
          node: _0x191f3b,
          flags: 0,
          seekable: false,
          stream_ops: _0x425290.stream_ops
        });
        _0x191f3b.stream = _0x1a3ce4;
        var _0x2e290f = _0x1c26fd.createStream({
          path: _0x471d5d,
          node: _0x397ef3,
          flags: 1,
          seekable: false,
          stream_ops: _0x425290.stream_ops
        });
        _0x397ef3.stream = _0x2e290f;
        return {
          readable_fd: _0x1a3ce4.fd,
          writable_fd: _0x2e290f.fd
        };
      },
      stream_ops: {
        poll: function (_0x4eb058) {
          var _0x28bfa9 = _0x4eb058.node.pipe;
          if ((_0x4eb058.flags & 2097155) === 1) {
            return 260;
          } else if (_0x28bfa9.buckets.length > 0) {
            for (var _0x44eae8 = 0; _0x44eae8 < _0x28bfa9.buckets.length; _0x44eae8++) {
              var _0xb606d2 = _0x28bfa9.buckets[_0x44eae8];
              if (_0xb606d2.offset - _0xb606d2.roffset > 0) {
                return 65;
              }
            }
          }
          return 0;
        },
        ioctl: function (_0x131eed, _0x3c0454, _0x18dfbf) {
          return 28;
        },
        fsync: function (_0x4af405) {
          return 28;
        },
        read: function (_0x24dc92, _0xa96476, _0x4687ab, _0x13ec13, _0x17915) {
          var _0x38f72f = _0x24dc92.node.pipe;
          var _0x447641 = 0;
          for (var _0x748b55 = 0; _0x748b55 < _0x38f72f.buckets.length; _0x748b55++) {
            var _0x1efad1 = _0x38f72f.buckets[_0x748b55];
            _0x447641 += _0x1efad1.offset - _0x1efad1.roffset;
          }
          _0x4c7bb6(_0xa96476 instanceof ArrayBuffer || ArrayBuffer.isView(_0xa96476));
          var _0x531e2b = _0xa96476.subarray(_0x4687ab, _0x4687ab + _0x13ec13);
          if (_0x13ec13 <= 0) {
            return 0;
          }
          if (_0x447641 == 0) {
            throw new _0x1c26fd.ErrnoError(6);
          }
          var _0x53b683 = Math.min(_0x447641, _0x13ec13);
          var _0x3fe0f1 = _0x53b683;
          var _0x4945c0 = 0;
          for (var _0x748b55 = 0; _0x748b55 < _0x38f72f.buckets.length; _0x748b55++) {
            var _0x42ca82 = _0x38f72f.buckets[_0x748b55];
            var _0x281337 = _0x42ca82.offset - _0x42ca82.roffset;
            if (_0x53b683 <= _0x281337) {
              var _0x46114c = _0x42ca82.buffer.subarray(_0x42ca82.roffset, _0x42ca82.offset);
              if (_0x53b683 < _0x281337) {
                _0x46114c = _0x46114c.subarray(0, _0x53b683);
                _0x42ca82.roffset += _0x53b683;
              } else {
                _0x4945c0++;
              }
              _0x531e2b.set(_0x46114c);
              break;
            } else {
              var _0x46114c = _0x42ca82.buffer.subarray(_0x42ca82.roffset, _0x42ca82.offset);
              _0x531e2b.set(_0x46114c);
              _0x531e2b = _0x531e2b.subarray(_0x46114c.byteLength);
              _0x53b683 -= _0x46114c.byteLength;
              _0x4945c0++;
            }
          }
          if (_0x4945c0 && _0x4945c0 == _0x38f72f.buckets.length) {
            _0x4945c0--;
            _0x38f72f.buckets[_0x4945c0].offset = 0;
            _0x38f72f.buckets[_0x4945c0].roffset = 0;
          }
          _0x38f72f.buckets.splice(0, _0x4945c0);
          return _0x3fe0f1;
        },
        write: function (_0x1338fe, _0x4ea486, _0x36c358, _0x4e4293, _0x4f212d) {
          var _0x2df5c9 = _0x1338fe.node.pipe;
          _0x4c7bb6(_0x4ea486 instanceof ArrayBuffer || ArrayBuffer.isView(_0x4ea486));
          var _0x3db976 = _0x4ea486.subarray(_0x36c358, _0x36c358 + _0x4e4293);
          var _0x5df0b0 = _0x3db976.byteLength;
          if (_0x5df0b0 <= 0) {
            return 0;
          }
          var _0x4adadd = null;
          if (_0x2df5c9.buckets.length == 0) {
            _0x4adadd = {
              buffer: new Uint8Array(_0x425290.BUCKET_BUFFER_SIZE),
              offset: 0,
              roffset: 0
            };
            _0x2df5c9.buckets.push(_0x4adadd);
          } else {
            _0x4adadd = _0x2df5c9.buckets[_0x2df5c9.buckets.length - 1];
          }
          _0x4c7bb6(_0x4adadd.offset <= _0x425290.BUCKET_BUFFER_SIZE);
          var _0x5b2b9b = _0x425290.BUCKET_BUFFER_SIZE - _0x4adadd.offset;
          if (_0x5b2b9b >= _0x5df0b0) {
            _0x4adadd.buffer.set(_0x3db976, _0x4adadd.offset);
            _0x4adadd.offset += _0x5df0b0;
            return _0x5df0b0;
          } else if (_0x5b2b9b > 0) {
            _0x4adadd.buffer.set(_0x3db976.subarray(0, _0x5b2b9b), _0x4adadd.offset);
            _0x4adadd.offset += _0x5b2b9b;
            _0x3db976 = _0x3db976.subarray(_0x5b2b9b, _0x3db976.byteLength);
          }
          var _0x5f3d60 = _0x3db976.byteLength / _0x425290.BUCKET_BUFFER_SIZE | 0;
          var _0x4fb365 = _0x3db976.byteLength % _0x425290.BUCKET_BUFFER_SIZE;
          for (var _0xff441c = 0; _0xff441c < _0x5f3d60; _0xff441c++) {
            var _0x5c662e = {
              buffer: new Uint8Array(_0x425290.BUCKET_BUFFER_SIZE),
              offset: _0x425290.BUCKET_BUFFER_SIZE,
              roffset: 0
            };
            _0x2df5c9.buckets.push(_0x5c662e);
            _0x5c662e.buffer.set(_0x3db976.subarray(0, _0x425290.BUCKET_BUFFER_SIZE));
            _0x3db976 = _0x3db976.subarray(_0x425290.BUCKET_BUFFER_SIZE, _0x3db976.byteLength);
          }
          if (_0x4fb365 > 0) {
            var _0x5c662e = {
              buffer: new Uint8Array(_0x425290.BUCKET_BUFFER_SIZE),
              offset: _0x3db976.byteLength,
              roffset: 0
            };
            _0x2df5c9.buckets.push(_0x5c662e);
            _0x5c662e.buffer.set(_0x3db976);
          }
          return _0x5df0b0;
        },
        close: function (_0x56f129) {
          var _0x3aa591 = _0x56f129.node.pipe;
          _0x3aa591.refcnt--;
          if (_0x3aa591.refcnt === 0) {
            _0x3aa591.buckets = null;
          }
        }
      },
      nextname: function () {
        if (!_0x425290.nextname.current) {
          _0x425290.nextname.current = 0;
        }
        return "pipe[" + _0x425290.nextname.current++ + "]";
      }
    };
    function _0x2d2c3f(_0x3e55da) {
      try {
        if (_0x3e55da == 0) {
          throw new _0x1c26fd.ErrnoError(21);
        }
        var _0x56e7f1 = _0x425290.createPipe();
        _0x47a7a3[_0x3e55da >> 2] = _0x56e7f1.readable_fd;
        _0x47a7a3[_0x3e55da + 4 >> 2] = _0x56e7f1.writable_fd;
        return 0;
      } catch (_0x2167a0) {
        if (typeof _0x1c26fd == "undefined" || !(_0x2167a0 instanceof _0x1c26fd.ErrnoError)) {
          throw _0x2167a0;
        }
        return -_0x2167a0.errno;
      }
    }
    function _0x47fb7a(_0x4c1cca, _0x398174, _0x26d384) {
      try {
        var _0x2f9656 = 0;
        for (var _0xe4d281 = 0; _0xe4d281 < _0x398174; _0xe4d281++) {
          var _0x241b43 = _0x4c1cca + _0xe4d281 * 8;
          var _0x5d8892 = _0x47a7a3[_0x241b43 >> 2];
          var _0x387d64 = _0x3c10c6[_0x241b43 + 4 >> 1];
          var _0x65478d = 32;
          var _0x49588f = _0x1c26fd.getStream(_0x5d8892);
          if (_0x49588f) {
            _0x65478d = _0x521741.DEFAULT_POLLMASK;
            if (_0x49588f.stream_ops.poll) {
              _0x65478d = _0x49588f.stream_ops.poll(_0x49588f);
            }
          }
          _0x65478d &= _0x387d64 | 8 | 16;
          if (_0x65478d) {
            _0x2f9656++;
          }
          _0x3c10c6[_0x241b43 + 6 >> 1] = _0x65478d;
        }
        return _0x2f9656;
      } catch (_0x4538cd) {
        if (typeof _0x1c26fd == "undefined" || !(_0x4538cd instanceof _0x1c26fd.ErrnoError)) {
          throw _0x4538cd;
        }
        return -_0x4538cd.errno;
      }
    }
    function _0x54446c(_0x5a1fc8, _0x485982, _0x4c7659, _0x39a420) {
      try {
        _0x485982 = _0x521741.getStr(_0x485982);
        _0x485982 = _0x521741.calculateAt(_0x5a1fc8, _0x485982);
        return _0x521741.doReadlink(_0x485982, _0x4c7659, _0x39a420);
      } catch (_0xac2560) {
        if (typeof _0x1c26fd == "undefined" || !(_0xac2560 instanceof _0x1c26fd.ErrnoError)) {
          throw _0xac2560;
        }
        return -_0xac2560.errno;
      }
    }
    function _0x4b08f8(_0x46fc6a, _0x571dbe, _0x58785c, _0x2d7153, _0x9670e, _0x38ff8e) {
      try {
        var _0x1595cc = _0x54ebd8(_0x46fc6a);
        var _0x1e1232 = _0x1595cc.sock_ops.recvmsg(_0x1595cc, _0x58785c);
        if (!_0x1e1232) {
          return 0;
        }
        if (_0x9670e) {
          var _0x161cb8 = _0x125185(_0x9670e, _0x1595cc.family, _0x5d0e3f.lookup_name(_0x1e1232.addr), _0x1e1232.port, _0x38ff8e);
        }
        _0xb4481c.set(_0x1e1232.buffer, _0x571dbe);
        return _0x1e1232.buffer.byteLength;
      } catch (_0x115748) {
        if (typeof _0x1c26fd == "undefined" || !(_0x115748 instanceof _0x1c26fd.ErrnoError)) {
          throw _0x115748;
        }
        return -_0x115748.errno;
      }
    }
    function _0x38733a(_0x91e57b, _0x319ea1, _0x7140fe) {
      try {
        var _0x13c7ef = _0x54ebd8(_0x91e57b);
        var _0x81bc1c = _0x47a7a3[_0x319ea1 + 8 >> 2];
        var _0x4a1ab6 = _0x47a7a3[_0x319ea1 + 12 >> 2];
        var _0x22d663 = 0;
        for (var _0x1cd08d = 0; _0x1cd08d < _0x4a1ab6; _0x1cd08d++) {
          _0x22d663 += _0x47a7a3[_0x81bc1c + (_0x1cd08d * 8 + 4) >> 2];
        }
        var _0x5e88e2 = _0x13c7ef.sock_ops.recvmsg(_0x13c7ef, _0x22d663);
        if (!_0x5e88e2) {
          return 0;
        }
        var _0x581919 = _0x47a7a3[_0x319ea1 >> 2];
        if (_0x581919) {
          var _0x594985 = _0x125185(_0x581919, _0x13c7ef.family, _0x5d0e3f.lookup_name(_0x5e88e2.addr), _0x5e88e2.port);
        }
        var _0x3ec561 = 0;
        var _0xa02ca8 = _0x5e88e2.buffer.byteLength;
        for (var _0x1cd08d = 0; _0xa02ca8 > 0 && _0x1cd08d < _0x4a1ab6; _0x1cd08d++) {
          var _0x435b67 = _0x47a7a3[_0x81bc1c + (_0x1cd08d * 8 + 0) >> 2];
          var _0x1b2f43 = _0x47a7a3[_0x81bc1c + (_0x1cd08d * 8 + 4) >> 2];
          if (!_0x1b2f43) {
            continue;
          }
          var _0x460bbb = Math.min(_0x1b2f43, _0xa02ca8);
          var _0x32ae65 = _0x5e88e2.buffer.subarray(_0x3ec561, _0x3ec561 + _0x460bbb);
          _0xb4481c.set(_0x32ae65, _0x435b67 + _0x3ec561);
          _0x3ec561 += _0x460bbb;
          _0xa02ca8 -= _0x460bbb;
        }
        return _0x3ec561;
      } catch (_0x58ac6a) {
        if (typeof _0x1c26fd == "undefined" || !(_0x58ac6a instanceof _0x1c26fd.ErrnoError)) {
          throw _0x58ac6a;
        }
        return -_0x58ac6a.errno;
      }
    }
    function _0x1dc53d(_0x4c644b, _0x5ed40c, _0x28a437, _0x128e94) {
      try {
        _0x5ed40c = _0x521741.getStr(_0x5ed40c);
        _0x128e94 = _0x521741.getStr(_0x128e94);
        _0x5ed40c = _0x521741.calculateAt(_0x4c644b, _0x5ed40c);
        _0x128e94 = _0x521741.calculateAt(_0x28a437, _0x128e94);
        _0x1c26fd.rename(_0x5ed40c, _0x128e94);
        return 0;
      } catch (_0x482024) {
        if (typeof _0x1c26fd == "undefined" || !(_0x482024 instanceof _0x1c26fd.ErrnoError)) {
          throw _0x482024;
        }
        return -_0x482024.errno;
      }
    }
    function _0x41b1a4(_0x3488a0) {
      try {
        _0x3488a0 = _0x521741.getStr(_0x3488a0);
        _0x1c26fd.rmdir(_0x3488a0);
        return 0;
      } catch (_0xf14a26) {
        if (typeof _0x1c26fd == "undefined" || !(_0xf14a26 instanceof _0x1c26fd.ErrnoError)) {
          throw _0xf14a26;
        }
        return -_0xf14a26.errno;
      }
    }
    function _0x515afd(_0x1def83, _0x1799b2, _0x313e2e) {
      try {
        var _0x18b15e = _0x54ebd8(_0x1def83);
        var _0x1b5334 = _0x47a7a3[_0x1799b2 + 8 >> 2];
        var _0x561a3b = _0x47a7a3[_0x1799b2 + 12 >> 2];
        var _0x5cd53c;
        var _0x298d6a;
        var _0x1dccb1 = _0x47a7a3[_0x1799b2 >> 2];
        var _0x1ade66 = _0x47a7a3[_0x1799b2 + 4 >> 2];
        if (_0x1dccb1) {
          var _0x44fb81 = _0x5b570e(_0x1dccb1, _0x1ade66);
          if (_0x44fb81.errno) {
            return -_0x44fb81.errno;
          }
          _0x298d6a = _0x44fb81.port;
          _0x5cd53c = _0x5d0e3f.lookup_addr(_0x44fb81.addr) || _0x44fb81.addr;
        }
        var _0x3ec61b = 0;
        for (var _0x4d59c5 = 0; _0x4d59c5 < _0x561a3b; _0x4d59c5++) {
          _0x3ec61b += _0x47a7a3[_0x1b5334 + (_0x4d59c5 * 8 + 4) >> 2];
        }
        var _0x17b8c8 = new Uint8Array(_0x3ec61b);
        var _0x3bf9b3 = 0;
        for (var _0x4d59c5 = 0; _0x4d59c5 < _0x561a3b; _0x4d59c5++) {
          var _0x4cddce = _0x47a7a3[_0x1b5334 + (_0x4d59c5 * 8 + 0) >> 2];
          var _0x3cfeba = _0x47a7a3[_0x1b5334 + (_0x4d59c5 * 8 + 4) >> 2];
          for (var _0x2b6305 = 0; _0x2b6305 < _0x3cfeba; _0x2b6305++) {
            _0x17b8c8[_0x3bf9b3++] = _0x2845ef[_0x4cddce + _0x2b6305 >> 0];
          }
        }
        return _0x18b15e.sock_ops.sendmsg(_0x18b15e, _0x17b8c8, 0, _0x3ec61b, _0x5cd53c, _0x298d6a);
      } catch (_0x3c5a88) {
        if (typeof _0x1c26fd == "undefined" || !(_0x3c5a88 instanceof _0x1c26fd.ErrnoError)) {
          throw _0x3c5a88;
        }
        return -_0x3c5a88.errno;
      }
    }
    function _0x2307f9(_0x3ff903, _0x46e7b4, _0x229ea1, _0x535f64, _0x547c6f, _0x1491fe) {
      try {
        var _0x20c7df = _0x54ebd8(_0x3ff903);
        var _0x3363e8 = _0x57af98(_0x547c6f, _0x1491fe, true);
        if (!_0x3363e8) {
          return _0x1c26fd.write(_0x20c7df.stream, _0x2845ef, _0x46e7b4, _0x229ea1);
        } else {
          return _0x20c7df.sock_ops.sendmsg(_0x20c7df, _0x2845ef, _0x46e7b4, _0x229ea1, _0x3363e8.addr, _0x3363e8.port);
        }
      } catch (_0x679141) {
        if (typeof _0x1c26fd == "undefined" || !(_0x679141 instanceof _0x1c26fd.ErrnoError)) {
          throw _0x679141;
        }
        return -_0x679141.errno;
      }
    }
    function _0x29aaea(_0x5bd320, _0x1ec9de, _0x28803e) {
      try {
        var _0x317647 = _0x252c88.createSocket(_0x5bd320, _0x1ec9de, _0x28803e);
        return _0x317647.stream.fd;
      } catch (_0x167dcc) {
        if (typeof _0x1c26fd == "undefined" || !(_0x167dcc instanceof _0x1c26fd.ErrnoError)) {
          throw _0x167dcc;
        }
        return -_0x167dcc.errno;
      }
    }
    function _0x3242e3(_0x3e0b83, _0x186306) {
      try {
        _0x3e0b83 = _0x521741.getStr(_0x3e0b83);
        return _0x521741.doStat(_0x1c26fd.stat, _0x3e0b83, _0x186306);
      } catch (_0x4ca39a) {
        if (typeof _0x1c26fd == "undefined" || !(_0x4ca39a instanceof _0x1c26fd.ErrnoError)) {
          throw _0x4ca39a;
        }
        return -_0x4ca39a.errno;
      }
    }
    function _0x399fe3(_0x133bb2, _0x3826f3, _0x3ef69d) {
      try {
        _0x133bb2 = _0x521741.getStr(_0x133bb2);
        _0x47a7a3[_0x3ef69d + 4 >> 2] = 4096;
        _0x47a7a3[_0x3ef69d + 40 >> 2] = 4096;
        _0x47a7a3[_0x3ef69d + 8 >> 2] = 1000000;
        _0x47a7a3[_0x3ef69d + 12 >> 2] = 500000;
        _0x47a7a3[_0x3ef69d + 16 >> 2] = 500000;
        _0x47a7a3[_0x3ef69d + 20 >> 2] = _0x1c26fd.nextInode;
        _0x47a7a3[_0x3ef69d + 24 >> 2] = 1000000;
        _0x47a7a3[_0x3ef69d + 28 >> 2] = 42;
        _0x47a7a3[_0x3ef69d + 44 >> 2] = 2;
        _0x47a7a3[_0x3ef69d + 36 >> 2] = 255;
        return 0;
      } catch (_0x5c8df9) {
        if (typeof _0x1c26fd == "undefined" || !(_0x5c8df9 instanceof _0x1c26fd.ErrnoError)) {
          throw _0x5c8df9;
        }
        return -_0x5c8df9.errno;
      }
    }
    function _0x1536a9(_0x26dff3, _0x439eca) {
      try {
        _0x26dff3 = _0x521741.getStr(_0x26dff3);
        _0x439eca = _0x521741.getStr(_0x439eca);
        _0x1c26fd.symlink(_0x26dff3, _0x439eca);
        return 0;
      } catch (_0x1ab611) {
        if (typeof _0x1c26fd == "undefined" || !(_0x1ab611 instanceof _0x1c26fd.ErrnoError)) {
          throw _0x1ab611;
        }
        return -_0x1ab611.errno;
      }
    }
    function _0x425897(_0x364338, _0x52070c, _0xe47e98) {
      try {
        _0x364338 = _0x521741.getStr(_0x364338);
        var _0x263346 = _0x521741.get64(_0x52070c, _0xe47e98);
        _0x1c26fd.truncate(_0x364338, _0x263346);
        return 0;
      } catch (_0xe9762f) {
        if (typeof _0x1c26fd == "undefined" || !(_0xe9762f instanceof _0x1c26fd.ErrnoError)) {
          throw _0xe9762f;
        }
        return -_0xe9762f.errno;
      }
    }
    function _0x4b5533(_0x59fad6, _0xdfb9ec, _0x31d19d) {
      try {
        _0xdfb9ec = _0x521741.getStr(_0xdfb9ec);
        _0xdfb9ec = _0x521741.calculateAt(_0x59fad6, _0xdfb9ec);
        if (_0x31d19d === 0) {
          _0x1c26fd.unlink(_0xdfb9ec);
        } else if (_0x31d19d === 512) {
          _0x1c26fd.rmdir(_0xdfb9ec);
        } else {
          _0x6cb855("Invalid flags passed to unlinkat");
        }
        return 0;
      } catch (_0xa91817) {
        if (typeof _0x1c26fd == "undefined" || !(_0xa91817 instanceof _0x1c26fd.ErrnoError)) {
          throw _0xa91817;
        }
        return -_0xa91817.errno;
      }
    }
    function _0x66ef3c(_0x546a00, _0x2c3e7d, _0x3a1fd9, _0x37fbc3) {
      try {
        _0x2c3e7d = _0x521741.getStr(_0x2c3e7d);
        _0x2c3e7d = _0x521741.calculateAt(_0x546a00, _0x2c3e7d, true);
        if (!_0x3a1fd9) {
          var _0x24c2d8 = Date.now();
          var _0x3fa77a = _0x24c2d8;
        } else {
          var _0x5c0cfb = _0x47a7a3[_0x3a1fd9 >> 2];
          var _0x4d223c = _0x47a7a3[_0x3a1fd9 + 4 >> 2];
          _0x24c2d8 = _0x5c0cfb * 1000 + _0x4d223c / 1000000;
          _0x3a1fd9 += 8;
          _0x5c0cfb = _0x47a7a3[_0x3a1fd9 >> 2];
          _0x4d223c = _0x47a7a3[_0x3a1fd9 + 4 >> 2];
          _0x3fa77a = _0x5c0cfb * 1000 + _0x4d223c / 1000000;
        }
        _0x1c26fd.utime(_0x2c3e7d, _0x24c2d8, _0x3fa77a);
        return 0;
      } catch (_0x5ad7a4) {
        if (typeof _0x1c26fd == "undefined" || !(_0x5ad7a4 instanceof _0x1c26fd.ErrnoError)) {
          throw _0x5ad7a4;
        }
        return -_0x5ad7a4.errno;
      }
    }
    var _0x236e06 = 0;
    function _0x4ccac0(_0x8d6b82) {
      var _0x4c333 = !_0x236e06;
      _0x236e06 = 1;
      return _0x4c333;
    }
    function _0x4a8554(_0x466f10, _0x1d71b8) {
      return 0;
    }
    function _0x4080a9() {
      return Date.now();
    }
    var _0x1a8871 = true;
    function _0x39979f() {
      return _0x1a8871;
    }
    function _0x4d3de0() {
      throw Infinity;
    }
    function _0x3d0273(_0x53d3fa, _0x520b40) {
      var _0x14e519 = new Date(_0x47a7a3[_0x53d3fa >> 2] * 1000);
      _0x47a7a3[_0x520b40 >> 2] = _0x14e519.getUTCSeconds();
      _0x47a7a3[_0x520b40 + 4 >> 2] = _0x14e519.getUTCMinutes();
      _0x47a7a3[_0x520b40 + 8 >> 2] = _0x14e519.getUTCHours();
      _0x47a7a3[_0x520b40 + 12 >> 2] = _0x14e519.getUTCDate();
      _0x47a7a3[_0x520b40 + 16 >> 2] = _0x14e519.getUTCMonth();
      _0x47a7a3[_0x520b40 + 20 >> 2] = _0x14e519.getUTCFullYear() - 1900;
      _0x47a7a3[_0x520b40 + 24 >> 2] = _0x14e519.getUTCDay();
      var _0x51564f = Date.UTC(_0x14e519.getUTCFullYear(), 0, 1, 0, 0, 0, 0);
      var _0x55d171 = (_0x14e519.getTime() - _0x51564f) / 86400000 | 0;
      _0x47a7a3[_0x520b40 + 28 >> 2] = _0x55d171;
    }
    function _0x183275(_0x23e51d, _0x3390af) {
      var _0x32a1cc = new Date(_0x47a7a3[_0x23e51d >> 2] * 1000);
      _0x47a7a3[_0x3390af >> 2] = _0x32a1cc.getSeconds();
      _0x47a7a3[_0x3390af + 4 >> 2] = _0x32a1cc.getMinutes();
      _0x47a7a3[_0x3390af + 8 >> 2] = _0x32a1cc.getHours();
      _0x47a7a3[_0x3390af + 12 >> 2] = _0x32a1cc.getDate();
      _0x47a7a3[_0x3390af + 16 >> 2] = _0x32a1cc.getMonth();
      _0x47a7a3[_0x3390af + 20 >> 2] = _0x32a1cc.getFullYear() - 1900;
      _0x47a7a3[_0x3390af + 24 >> 2] = _0x32a1cc.getDay();
      var _0x163328 = new Date(_0x32a1cc.getFullYear(), 0, 1);
      var _0x53fefe = (_0x32a1cc.getTime() - _0x163328.getTime()) / 86400000 | 0;
      _0x47a7a3[_0x3390af + 28 >> 2] = _0x53fefe;
      _0x47a7a3[_0x3390af + 36 >> 2] = -(_0x32a1cc.getTimezoneOffset() * 60);
      var _0x1a7b38 = new Date(_0x32a1cc.getFullYear(), 6, 1).getTimezoneOffset();
      var _0x527bc2 = _0x163328.getTimezoneOffset();
      var _0x1cd229 = (_0x1a7b38 != _0x527bc2 && _0x32a1cc.getTimezoneOffset() == Math.min(_0x527bc2, _0x1a7b38)) | 0;
      _0x47a7a3[_0x3390af + 32 >> 2] = _0x1cd229;
    }
    function _0x1305cb(_0x2b71ae) {
      var _0x4578ec = new Date(_0x47a7a3[_0x2b71ae + 20 >> 2] + 1900, _0x47a7a3[_0x2b71ae + 16 >> 2], _0x47a7a3[_0x2b71ae + 12 >> 2], _0x47a7a3[_0x2b71ae + 8 >> 2], _0x47a7a3[_0x2b71ae + 4 >> 2], _0x47a7a3[_0x2b71ae >> 2], 0);
      var _0x3fb002 = _0x47a7a3[_0x2b71ae + 32 >> 2];
      var _0x19ff32 = _0x4578ec.getTimezoneOffset();
      var _0x40b274 = new Date(_0x4578ec.getFullYear(), 0, 1);
      var _0x30c540 = new Date(_0x4578ec.getFullYear(), 6, 1).getTimezoneOffset();
      var _0x498e91 = _0x40b274.getTimezoneOffset();
      var _0x618f9d = Math.min(_0x498e91, _0x30c540);
      if (_0x3fb002 < 0) {
        _0x47a7a3[_0x2b71ae + 32 >> 2] = Number(_0x30c540 != _0x498e91 && _0x618f9d == _0x19ff32);
      } else if (_0x3fb002 > 0 != (_0x618f9d == _0x19ff32)) {
        var _0x2fe409 = Math.max(_0x498e91, _0x30c540);
        var _0x13b0b7 = _0x3fb002 > 0 ? _0x618f9d : _0x2fe409;
        _0x4578ec.setTime(_0x4578ec.getTime() + (_0x13b0b7 - _0x19ff32) * 60000);
      }
      _0x47a7a3[_0x2b71ae + 24 >> 2] = _0x4578ec.getDay();
      var _0x50d19e = (_0x4578ec.getTime() - _0x40b274.getTime()) / 86400000 | 0;
      _0x47a7a3[_0x2b71ae + 28 >> 2] = _0x50d19e;
      _0x47a7a3[_0x2b71ae >> 2] = _0x4578ec.getSeconds();
      _0x47a7a3[_0x2b71ae + 4 >> 2] = _0x4578ec.getMinutes();
      _0x47a7a3[_0x2b71ae + 8 >> 2] = _0x4578ec.getHours();
      _0x47a7a3[_0x2b71ae + 12 >> 2] = _0x4578ec.getDate();
      _0x47a7a3[_0x2b71ae + 16 >> 2] = _0x4578ec.getMonth();
      return _0x4578ec.getTime() / 1000 | 0;
    }
    function _0x5af9c5(_0x3692db, _0x1a3878, _0x1b41f8, _0x5b563c, _0x4ea746, _0x37b420, _0x214602, _0x1eb5ca) {
      try {
        var _0xe52ae = _0x1c26fd.getStream(_0x4ea746);
        if (!_0xe52ae) {
          return -8;
        }
        var _0xd52af = _0x1c26fd.mmap(_0xe52ae, _0x3692db, _0x1a3878, _0x37b420, _0x1b41f8, _0x5b563c);
        var _0x2be42c = _0xd52af.ptr;
        _0x47a7a3[_0x214602 >> 2] = _0xd52af.allocated;
        return _0x2be42c;
      } catch (_0x1cc6cf) {
        if (typeof _0x1c26fd == "undefined" || !(_0x1cc6cf instanceof _0x1c26fd.ErrnoError)) {
          throw _0x1cc6cf;
        }
        return -_0x1cc6cf.errno;
      }
    }
    function _0x3214f0(_0x1af742, _0xc43fce, _0x5e9b8d, _0xb47992, _0x306a8d, _0x3ef967) {
      try {
        var _0x227c44 = _0x1c26fd.getStream(_0x306a8d);
        if (_0x227c44) {
          if (_0x5e9b8d & 2) {
            _0x521741.doMsync(_0x1af742, _0x227c44, _0xc43fce, _0xb47992, _0x3ef967);
          }
          _0x1c26fd.munmap(_0x227c44);
        }
      } catch (_0x2f7404) {
        if (typeof _0x1c26fd == "undefined" || !(_0x2f7404 instanceof _0x1c26fd.ErrnoError)) {
          throw _0x2f7404;
        }
        return -_0x2f7404.errno;
      }
    }
    function _0x57bf8a(_0x47e37e, _0x54b2cf, _0x15af39) {
      var _0xd71b31 = new Date().getFullYear();
      var _0x390bd1 = new Date(_0xd71b31, 0, 1);
      var _0x1fb240 = new Date(_0xd71b31, 6, 1);
      var _0x7766e7 = _0x390bd1.getTimezoneOffset();
      var _0x1b510b = _0x1fb240.getTimezoneOffset();
      var _0xb103bc = Math.max(_0x7766e7, _0x1b510b);
      _0x47a7a3[_0x47e37e >> 2] = _0xb103bc * 60;
      _0x47a7a3[_0x54b2cf >> 2] = Number(_0x7766e7 != _0x1b510b);
      function _0x3e113a(_0x43587d) {
        var _0x1bd0c8 = _0x43587d.toTimeString().match(/\(([A-Za-z ]+)\)$/);
        if (_0x1bd0c8) {
          return _0x1bd0c8[1];
        } else {
          return "GMT";
        }
      }
      var _0x2f489b = _0x3e113a(_0x390bd1);
      var _0x2948a7 = _0x3e113a(_0x1fb240);
      var _0x1a0aac = _0x1dd3e1(_0x2f489b);
      var _0x2c09b5 = _0x1dd3e1(_0x2948a7);
      if (_0x1b510b < _0x7766e7) {
        _0x47a7a3[_0x15af39 >> 2] = _0x1a0aac;
        _0x47a7a3[_0x15af39 + 4 >> 2] = _0x2c09b5;
      } else {
        _0x47a7a3[_0x15af39 >> 2] = _0x2c09b5;
        _0x47a7a3[_0x15af39 + 4 >> 2] = _0x1a0aac;
      }
    }
    function _0x2f7fc0(_0x4a803e, _0x44868f, _0x448392) {
      if (_0x2f7fc0.called) {
        return;
      }
      _0x2f7fc0.called = true;
      _0x57bf8a(_0x4a803e, _0x44868f, _0x448392);
    }
    function _0x407991() {
      _0x6cb855("");
    }
    var _0x3c1b48 = [];
    function _0x44fdf2(_0x555b3a, _0x58ba43) {
      _0x3c1b48.length = 0;
      var _0x49bdaa;
      _0x58ba43 >>= 2;
      while (_0x49bdaa = _0xb4481c[_0x555b3a++]) {
        var _0x1886f2 = _0x49bdaa < 105;
        if (_0x1886f2 && _0x58ba43 & 1) {
          _0x58ba43++;
        }
        _0x3c1b48.push(_0x1886f2 ? _0x113710[_0x58ba43++ >> 1] : _0x47a7a3[_0x58ba43]);
        ++_0x58ba43;
      }
      return _0x3c1b48;
    }
    function _0x2e488a(_0x366672, _0x12f39c, _0x59fa1b, _0x2fb1ac) {
      var _0x58c515 = _0x44fdf2(_0x12f39c, _0x59fa1b);
      return _0x392651[_0x366672].apply(null, _0x58c515);
    }
    function _0x3f5518(_0x199c68, _0x36ef88, _0x42d887) {
      return _0x2e488a(_0x199c68, _0x36ef88, _0x42d887, 1);
    }
    function _0x5b83ef(_0x10983f, _0x573f9e) {
      _0x20cb1d.mainLoop.timingMode = _0x10983f;
      _0x20cb1d.mainLoop.timingValue = _0x573f9e;
      if (!_0x20cb1d.mainLoop.func) {
        return 1;
      }
      if (!_0x20cb1d.mainLoop.running) {
        _0x20cb1d.mainLoop.running = true;
      }
      if (_0x10983f == 0) {
        _0x20cb1d.mainLoop.scheduler = function _0x3dd124() {
          var _0x50d975 = Math.max(0, _0x20cb1d.mainLoop.tickStartTime + _0x573f9e - _0x5bcf45()) | 0;
          setTimeout(_0x20cb1d.mainLoop.runner, _0x50d975);
        };
        _0x20cb1d.mainLoop.method = "timeout";
      } else if (_0x10983f == 1) {
        _0x20cb1d.mainLoop.scheduler = function _0x10244b() {
          _0x20cb1d.requestAnimationFrame(_0x20cb1d.mainLoop.runner);
        };
        _0x20cb1d.mainLoop.method = "rAF";
      } else if (_0x10983f == 2) {
        if (typeof setImmediate == "undefined") {
          var _0x1527d5 = [];
          var _0x5dbbc0 = "setimmediate";
          function _0x5b81d1(_0x378a4a) {
            if (_0x378a4a.data === _0x5dbbc0 || _0x378a4a.data.target === _0x5dbbc0) {
              _0x378a4a.stopPropagation();
              _0x1527d5.shift()();
            }
          }
          addEventListener("message", _0x5b81d1, true);
          setImmediate = function _0x399635(_0x3e6978) {
            _0x1527d5.push(_0x3e6978);
            if (_0x3963d9) {
              if (_0x339df7.setImmediates === undefined) {
                _0x339df7.setImmediates = [];
              }
              _0x339df7.setImmediates.push(_0x3e6978);
              postMessage({
                target: _0x5dbbc0
              });
            } else {
              postMessage(_0x5dbbc0, "*");
            }
          };
        }
        _0x20cb1d.mainLoop.scheduler = function _0x2f9849() {
          setImmediate(_0x20cb1d.mainLoop.runner);
        };
        _0x20cb1d.mainLoop.method = "immediate";
      }
      return 0;
    }
    var _0x5bcf45;
    if (_0x47ed75) {
      _0x5bcf45 = () => {
        var _0x292cba = process.hrtime();
        return _0x292cba[0] * 1000 + _0x292cba[1] / 1000000;
      };
    } else {
      _0x5bcf45 = () => performance.now();
    }
    function _0x4cd0c8(_0x57cbc2) {
      _0x46b3ff(_0x57cbc2);
    }
    function _0x2daed1() {}
    function _0x5c6217(_0xf6d8e3, _0x2c0d09, _0xc31db4, _0x3219b5, _0x19ef2b) {
      _0x4c7bb6(!_0x20cb1d.mainLoop.func, "emscripten_set_main_loop: there can only be one main loop function at once: call emscripten_cancel_main_loop to cancel the previous one before setting a new one with different parameters.");
      _0x20cb1d.mainLoop.func = _0xf6d8e3;
      _0x20cb1d.mainLoop.arg = _0x3219b5;
      var _0x489293 = _0x20cb1d.mainLoop.currentlyRunningMainloop;
      function _0x341f39() {
        if (_0x489293 < _0x20cb1d.mainLoop.currentlyRunningMainloop) {
          _0x2daed1();
          return false;
        }
        return true;
      }
      _0x20cb1d.mainLoop.running = false;
      _0x20cb1d.mainLoop.runner = function _0x5341b8() {
        if (_0xa8d6ac) {
          return;
        }
        if (_0x20cb1d.mainLoop.queue.length > 0) {
          var _0x40cac0 = Date.now();
          var _0x2e1497 = _0x20cb1d.mainLoop.queue.shift();
          _0x2e1497.func(_0x2e1497.arg);
          if (_0x20cb1d.mainLoop.remainingBlockers) {
            var _0xe14ddc = _0x20cb1d.mainLoop.remainingBlockers;
            var _0x359120 = _0xe14ddc % 1 == 0 ? _0xe14ddc - 1 : Math.floor(_0xe14ddc);
            if (_0x2e1497.counted) {
              _0x20cb1d.mainLoop.remainingBlockers = _0x359120;
            } else {
              _0x359120 = _0x359120 + 0.5;
              _0x20cb1d.mainLoop.remainingBlockers = (_0xe14ddc * 8 + _0x359120) / 9;
            }
          }
          _0x51fb9e("main loop blocker \"" + _0x2e1497.name + "\" took " + (Date.now() - _0x40cac0) + " ms");
          _0x20cb1d.mainLoop.updateStatus();
          if (!_0x341f39()) {
            return;
          }
          setTimeout(_0x20cb1d.mainLoop.runner, 0);
          return;
        }
        if (!_0x341f39()) {
          return;
        }
        _0x20cb1d.mainLoop.currentFrameNumber = _0x20cb1d.mainLoop.currentFrameNumber + 1 | 0;
        if (_0x20cb1d.mainLoop.timingMode == 1 && _0x20cb1d.mainLoop.timingValue > 1 && _0x20cb1d.mainLoop.currentFrameNumber % _0x20cb1d.mainLoop.timingValue != 0) {
          _0x20cb1d.mainLoop.scheduler();
          return;
        } else if (_0x20cb1d.mainLoop.timingMode == 0) {
          _0x20cb1d.mainLoop.tickStartTime = _0x5bcf45();
        }
        _0x204083.newRenderingFrameStarted();
        _0x20cb1d.mainLoop.runIter(_0xf6d8e3);
        if (!_0x341f39()) {
          return;
        }
        if (typeof SDL == "object" && SDL.audio && SDL.audio.queueNewAudioData) {
          SDL.audio.queueNewAudioData();
        }
        _0x20cb1d.mainLoop.scheduler();
      };
      if (!_0x19ef2b) {
        if (_0x2c0d09 && _0x2c0d09 > 0) {
          _0x5b83ef(0, 1000 / _0x2c0d09);
        } else {
          _0x5b83ef(1, 1);
        }
        _0x20cb1d.mainLoop.scheduler();
      }
      if (_0xc31db4) {
        throw "unwind";
      }
    }
    function _0x15e899(_0x38a9a7, _0x285b89) {
      if (_0xa8d6ac) {
        return;
      }
      if (_0x285b89) {
        _0x38a9a7();
        return;
      }
      try {
        _0x38a9a7();
      } catch (_0x39ebc) {
        _0xa92303(_0x39ebc);
      }
    }
    function _0x3a2d3c(_0xa1243a, _0x18e3b4) {
      return setTimeout(function () {
        _0x15e899(_0xa1243a);
      }, _0x18e3b4);
    }
    var _0x20cb1d = {
      mainLoop: {
        running: false,
        scheduler: null,
        method: "",
        currentlyRunningMainloop: 0,
        func: null,
        arg: 0,
        timingMode: 0,
        timingValue: 0,
        currentFrameNumber: 0,
        queue: [],
        pause: function () {
          _0x20cb1d.mainLoop.scheduler = null;
          _0x20cb1d.mainLoop.currentlyRunningMainloop++;
        },
        resume: function () {
          _0x20cb1d.mainLoop.currentlyRunningMainloop++;
          var _0x24f8f5 = _0x20cb1d.mainLoop.timingMode;
          var _0x55e11e = _0x20cb1d.mainLoop.timingValue;
          var _0x50c982 = _0x20cb1d.mainLoop.func;
          _0x20cb1d.mainLoop.func = null;
          _0x5c6217(_0x50c982, 0, false, _0x20cb1d.mainLoop.arg, true);
          _0x5b83ef(_0x24f8f5, _0x55e11e);
          _0x20cb1d.mainLoop.scheduler();
        },
        updateStatus: function () {
          if (_0x339df7.setStatus) {
            var _0x54696f = _0x339df7.statusMessage || "Please wait...";
            var _0x5e61d8 = _0x20cb1d.mainLoop.remainingBlockers;
            var _0x1ab65a = _0x20cb1d.mainLoop.expectedBlockers;
            if (_0x5e61d8) {
              if (_0x5e61d8 < _0x1ab65a) {
                _0x339df7.setStatus(_0x54696f + " (" + (_0x1ab65a - _0x5e61d8) + "/" + _0x1ab65a + ")");
              } else {
                _0x339df7.setStatus(_0x54696f);
              }
            } else {
              _0x339df7.setStatus("");
            }
          }
        },
        runIter: function (_0x609266) {
          if (_0xa8d6ac) {
            return;
          }
          if (_0x339df7.preMainLoop) {
            var _0x54b0ac = _0x339df7.preMainLoop();
            if (_0x54b0ac === false) {
              return;
            }
          }
          _0x15e899(_0x609266);
          if (_0x339df7.postMainLoop) {
            _0x339df7.postMainLoop();
          }
        }
      },
      isFullscreen: false,
      pointerLock: false,
      moduleContextCreatedCallbacks: [],
      workers: [],
      init: function () {
        if (!_0x339df7.preloadPlugins) {
          _0x339df7.preloadPlugins = [];
        }
        if (_0x20cb1d.initted) {
          return;
        }
        _0x20cb1d.initted = true;
        try {
          new Blob();
          _0x20cb1d.hasBlobConstructor = true;
        } catch (_0x3a610b) {
          _0x20cb1d.hasBlobConstructor = false;
          _0x51fb9e("warning: no blob constructor, cannot create blobs with mimetypes");
        }
        _0x20cb1d.BlobBuilder = typeof MozBlobBuilder != "undefined" ? MozBlobBuilder : typeof WebKitBlobBuilder != "undefined" ? WebKitBlobBuilder : !_0x20cb1d.hasBlobConstructor ? _0x51fb9e("warning: no BlobBuilder") : null;
        _0x20cb1d.URLObject = typeof window != "undefined" ? window.URL ? window.URL : window.webkitURL : undefined;
        if (!_0x339df7.noImageDecoding && typeof _0x20cb1d.URLObject == "undefined") {
          _0x51fb9e("warning: Browser does not support creating object URLs. Built-in browser image decoding will not be available.");
          _0x339df7.noImageDecoding = true;
        }
        var _0x40035a = {};
        _0x40035a.canHandle = function _0x3ab518(_0x29a594) {
          return !_0x339df7.noImageDecoding && /\.(jpg|jpeg|png|bmp)$/i.test(_0x29a594);
        };
        _0x40035a.handle = function _0x12e819(_0x29cc77, _0x30c6c7, _0x4aa03b, _0x57bf70) {
          var _0x5f105e = null;
          if (_0x20cb1d.hasBlobConstructor) {
            try {
              _0x5f105e = new Blob([_0x29cc77], {
                type: _0x20cb1d.getMimetype(_0x30c6c7)
              });
              if (_0x5f105e.size !== _0x29cc77.length) {
                _0x5f105e = new Blob([new Uint8Array(_0x29cc77).buffer], {
                  type: _0x20cb1d.getMimetype(_0x30c6c7)
                });
              }
            } catch (_0x5f479a) {
              _0xcabc97("Blob constructor present but fails: " + _0x5f479a + "; falling back to blob builder");
            }
          }
          if (!_0x5f105e) {
            var _0x345ad4 = new _0x20cb1d.BlobBuilder();
            _0x345ad4.append(new Uint8Array(_0x29cc77).buffer);
            _0x5f105e = _0x345ad4.getBlob();
          }
          var _0x32719e = _0x20cb1d.URLObject.createObjectURL(_0x5f105e);
          var _0x1664cb = new Image();
          _0x1664cb.onload = () => {
            _0x4c7bb6(_0x1664cb.complete, "Image " + _0x30c6c7 + " could not be decoded");
            var _0x51ba7c = document.createElement("canvas");
            _0x51ba7c.width = _0x1664cb.width;
            _0x51ba7c.height = _0x1664cb.height;
            var _0xf490a = _0x51ba7c.getContext("2d");
            _0xf490a.drawImage(_0x1664cb, 0, 0);
            _0x339df7.preloadedImages[_0x30c6c7] = _0x51ba7c;
            _0x20cb1d.URLObject.revokeObjectURL(_0x32719e);
            if (_0x4aa03b) {
              _0x4aa03b(_0x29cc77);
            }
          };
          _0x1664cb.onerror = _0x43863d => {
            _0x51fb9e("Image " + _0x32719e + " could not be decoded");
            if (_0x57bf70) {
              _0x57bf70();
            }
          };
          _0x1664cb.src = _0x32719e;
        };
        _0x339df7.preloadPlugins.push(_0x40035a);
        var _0x33028f = {};
        _0x33028f.canHandle = function _0x25e9ef(_0x322f76) {
          return !_0x339df7.noAudioDecoding && _0x322f76.substr(-4) in {
            ".ogg": 1,
            ".wav": 1,
            ".mp3": 1
          };
        };
        _0x33028f.handle = function _0x5cb23e(_0x56b96c, _0x369a08, _0x3a9621, _0x486f6b) {
          var _0x397167 = false;
          function _0x2cf8e9(_0x26c204) {
            if (_0x397167) {
              return;
            }
            _0x397167 = true;
            _0x339df7.preloadedAudios[_0x369a08] = _0x26c204;
            if (_0x3a9621) {
              _0x3a9621(_0x56b96c);
            }
          }
          function _0x68ae60() {
            if (_0x397167) {
              return;
            }
            _0x397167 = true;
            _0x339df7.preloadedAudios[_0x369a08] = new Audio();
            if (_0x486f6b) {
              _0x486f6b();
            }
          }
          if (_0x20cb1d.hasBlobConstructor) {
            try {
              var _0x13f6dd = new Blob([_0x56b96c], {
                type: _0x20cb1d.getMimetype(_0x369a08)
              });
            } catch (_0x35965b) {
              return _0x68ae60();
            }
            var _0x143299 = _0x20cb1d.URLObject.createObjectURL(_0x13f6dd);
            var _0x34974e = new Audio();
            _0x34974e.addEventListener("canplaythrough", function () {
              _0x2cf8e9(_0x34974e);
            }, false);
            _0x34974e.onerror = function _0x1bf243(_0x2f6802) {
              if (_0x397167) {
                return;
              }
              _0x51fb9e("warning: browser could not fully decode audio " + _0x369a08 + ", trying slower base64 approach");
              function _0x2f32e9(_0x577250) {
                var _0x56e5e5 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
                var _0x2ab821 = "=";
                var _0x551418 = "";
                var _0x1c3be8 = 0;
                var _0x1121a7 = 0;
                for (var _0x41b90e = 0; _0x41b90e < _0x577250.length; _0x41b90e++) {
                  _0x1c3be8 = _0x1c3be8 << 8 | _0x577250[_0x41b90e];
                  _0x1121a7 += 8;
                  while (_0x1121a7 >= 6) {
                    var _0x94623 = _0x1c3be8 >> _0x1121a7 - 6 & 63;
                    _0x1121a7 -= 6;
                    _0x551418 += _0x56e5e5[_0x94623];
                  }
                }
                if (_0x1121a7 == 2) {
                  _0x551418 += _0x56e5e5[(_0x1c3be8 & 3) << 4];
                  _0x551418 += _0x2ab821 + _0x2ab821;
                } else if (_0x1121a7 == 4) {
                  _0x551418 += _0x56e5e5[(_0x1c3be8 & 15) << 2];
                  _0x551418 += _0x2ab821;
                }
                return _0x551418;
              }
              _0x34974e.src = "data:audio/x-" + _0x369a08.substr(-3) + ";base64," + _0x2f32e9(_0x56b96c);
              _0x2cf8e9(_0x34974e);
            };
            _0x34974e.src = _0x143299;
            _0x3a2d3c(function () {
              _0x2cf8e9(_0x34974e);
            }, 10000);
          } else {
            return _0x68ae60();
          }
        };
        _0x339df7.preloadPlugins.push(_0x33028f);
        function _0x39b725() {
          _0x20cb1d.pointerLock = document.pointerLockElement === _0x339df7.canvas || document.mozPointerLockElement === _0x339df7.canvas || document.webkitPointerLockElement === _0x339df7.canvas || document.msPointerLockElement === _0x339df7.canvas;
        }
        var _0x4cbaf5 = _0x339df7.canvas;
        if (_0x4cbaf5) {
          _0x4cbaf5.requestPointerLock = _0x4cbaf5.requestPointerLock || _0x4cbaf5.mozRequestPointerLock || _0x4cbaf5.webkitRequestPointerLock || _0x4cbaf5.msRequestPointerLock || function () {};
          _0x4cbaf5.exitPointerLock = document.exitPointerLock || document.mozExitPointerLock || document.webkitExitPointerLock || document.msExitPointerLock || function () {};
          _0x4cbaf5.exitPointerLock = _0x4cbaf5.exitPointerLock.bind(document);
          document.addEventListener("pointerlockchange", _0x39b725, false);
          document.addEventListener("mozpointerlockchange", _0x39b725, false);
          document.addEventListener("webkitpointerlockchange", _0x39b725, false);
          document.addEventListener("mspointerlockchange", _0x39b725, false);
          if (_0x339df7.elementPointerLock) {
            _0x4cbaf5.addEventListener("click", function (_0x5c1926) {
              if (!_0x20cb1d.pointerLock && _0x339df7.canvas.requestPointerLock) {
                _0x339df7.canvas.requestPointerLock();
                _0x5c1926.preventDefault();
              }
            }, false);
          }
        }
      },
      handledByPreloadPlugin: function (_0x30ffd9, _0x11e2b6, _0x4f52ec, _0x50e9ea) {
        _0x20cb1d.init();
        var _0x48e330 = false;
        _0x339df7.preloadPlugins.forEach(function (_0x4d929c) {
          if (_0x48e330) {
            return;
          }
          if (_0x4d929c.canHandle(_0x11e2b6)) {
            _0x4d929c.handle(_0x30ffd9, _0x11e2b6, _0x4f52ec, _0x50e9ea);
            _0x48e330 = true;
          }
        });
        return _0x48e330;
      },
      createContext: function (_0x35d487, _0x539dad, _0x22998d, _0x2e3808) {
        if (_0x539dad && _0x339df7.ctx && _0x35d487 == _0x339df7.canvas) {
          return _0x339df7.ctx;
        }
        var _0x3a0f5e;
        var _0x377985;
        if (_0x539dad) {
          var _0x570882 = {
            antialias: false,
            alpha: false,
            majorVersion: typeof WebGL2RenderingContext != "undefined" ? 2 : 1
          };
          if (_0x2e3808) {
            for (var _0x11ed30 in _0x2e3808) {
              _0x570882[_0x11ed30] = _0x2e3808[_0x11ed30];
            }
          }
          if (typeof _0x204083 != "undefined") {
            _0x377985 = _0x204083.createContext(_0x35d487, _0x570882);
            if (_0x377985) {
              _0x3a0f5e = _0x204083.getContext(_0x377985).GLctx;
            }
          }
        } else {
          _0x3a0f5e = _0x35d487.getContext("2d");
        }
        if (!_0x3a0f5e) {
          return null;
        }
        if (_0x22998d) {
          if (!_0x539dad) {
            _0x4c7bb6(typeof _0xc70178 == "undefined", "cannot set in module if GLctx is used, but we are a non-GL context that would replace it");
          }
          _0x339df7.ctx = _0x3a0f5e;
          if (_0x539dad) {
            _0x204083.makeContextCurrent(_0x377985);
          }
          _0x339df7.useWebGL = _0x539dad;
          _0x20cb1d.moduleContextCreatedCallbacks.forEach(function (_0x588978) {
            _0x588978();
          });
          _0x20cb1d.init();
        }
        return _0x3a0f5e;
      },
      destroyContext: function (_0x2791b5, _0x40291d, _0x32678b) {},
      fullscreenHandlersInstalled: false,
      lockPointer: undefined,
      resizeCanvas: undefined,
      requestFullscreen: function (_0x5e8ef5, _0x130b0b) {
        _0x20cb1d.lockPointer = _0x5e8ef5;
        _0x20cb1d.resizeCanvas = _0x130b0b;
        if (typeof _0x20cb1d.lockPointer == "undefined") {
          _0x20cb1d.lockPointer = true;
        }
        if (typeof _0x20cb1d.resizeCanvas == "undefined") {
          _0x20cb1d.resizeCanvas = false;
        }
        var _0x479163 = _0x339df7.canvas;
        function _0x118cc3() {
          _0x20cb1d.isFullscreen = false;
          var _0x5d3256 = _0x479163.parentNode;
          if ((document.fullscreenElement || document.mozFullScreenElement || document.msFullscreenElement || document.webkitFullscreenElement || document.webkitCurrentFullScreenElement) === _0x5d3256) {
            _0x479163.exitFullscreen = _0x20cb1d.exitFullscreen;
            if (_0x20cb1d.lockPointer) {
              _0x479163.requestPointerLock();
            }
            _0x20cb1d.isFullscreen = true;
            if (_0x20cb1d.resizeCanvas) {
              _0x20cb1d.setFullscreenCanvasSize();
            } else {
              _0x20cb1d.updateCanvasDimensions(_0x479163);
            }
          } else {
            _0x5d3256.parentNode.insertBefore(_0x479163, _0x5d3256);
            _0x5d3256.parentNode.removeChild(_0x5d3256);
            if (_0x20cb1d.resizeCanvas) {
              _0x20cb1d.setWindowedCanvasSize();
            } else {
              _0x20cb1d.updateCanvasDimensions(_0x479163);
            }
          }
          if (_0x339df7.onFullScreen) {
            _0x339df7.onFullScreen(_0x20cb1d.isFullscreen);
          }
          if (_0x339df7.onFullscreen) {
            _0x339df7.onFullscreen(_0x20cb1d.isFullscreen);
          }
        }
        if (!_0x20cb1d.fullscreenHandlersInstalled) {
          _0x20cb1d.fullscreenHandlersInstalled = true;
          document.addEventListener("fullscreenchange", _0x118cc3, false);
          document.addEventListener("mozfullscreenchange", _0x118cc3, false);
          document.addEventListener("webkitfullscreenchange", _0x118cc3, false);
          document.addEventListener("MSFullscreenChange", _0x118cc3, false);
        }
        var _0x1958a9 = document.createElement("div");
        _0x479163.parentNode.insertBefore(_0x1958a9, _0x479163);
        _0x1958a9.appendChild(_0x479163);
        _0x1958a9.requestFullscreen = _0x1958a9.requestFullscreen || _0x1958a9.mozRequestFullScreen || _0x1958a9.msRequestFullscreen || (_0x1958a9.webkitRequestFullscreen ? function () {
          _0x1958a9.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
        } : null) || (_0x1958a9.webkitRequestFullScreen ? function () {
          _0x1958a9.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);
        } : null);
        _0x1958a9.requestFullscreen();
      },
      exitFullscreen: function () {
        if (!_0x20cb1d.isFullscreen) {
          return false;
        }
        var _0x39b1ef = document.exitFullscreen || document.cancelFullScreen || document.mozCancelFullScreen || document.msExitFullscreen || document.webkitCancelFullScreen || function () {};
        _0x39b1ef.apply(document, []);
        return true;
      },
      nextRAF: 0,
      fakeRequestAnimationFrame: function (_0x535a2a) {
        var _0x5eab0d = Date.now();
        if (_0x20cb1d.nextRAF === 0) {
          _0x20cb1d.nextRAF = _0x5eab0d + 1000 / 60;
        } else {
          while (_0x5eab0d + 2 >= _0x20cb1d.nextRAF) {
            _0x20cb1d.nextRAF += 1000 / 60;
          }
        }
        var _0x175b0a = Math.max(_0x20cb1d.nextRAF - _0x5eab0d, 0);
        setTimeout(_0x535a2a, _0x175b0a);
      },
      requestAnimationFrame: function (_0x1dc7c2) {
        if (typeof requestAnimationFrame == "function") {
          requestAnimationFrame(_0x1dc7c2);
          return;
        }
        var _0x55c72e = _0x20cb1d.fakeRequestAnimationFrame;
        _0x55c72e(_0x1dc7c2);
      },
      safeSetTimeout: function (_0x47bf6d) {
        return _0x3a2d3c(_0x47bf6d);
      },
      safeRequestAnimationFrame: function (_0xec02a2) {
        return _0x20cb1d.requestAnimationFrame(function () {
          _0x15e899(_0xec02a2);
        });
      },
      getMimetype: function (_0x366f0f) {
        return {
          jpg: "image/jpeg",
          jpeg: "image/jpeg",
          png: "image/png",
          bmp: "image/bmp",
          ogg: "audio/ogg",
          wav: "audio/wav",
          mp3: "audio/mpeg"
        }[_0x366f0f.substr(_0x366f0f.lastIndexOf(".") + 1)];
      },
      getUserMedia: function (_0x59d9bc) {
        if (!window.getUserMedia) {
          window.getUserMedia = navigator.getUserMedia || navigator.mozGetUserMedia;
        }
        window.getUserMedia(_0x59d9bc);
      },
      getMovementX: function (_0x39159e) {
        return _0x39159e.movementX || _0x39159e.mozMovementX || _0x39159e.webkitMovementX || 0;
      },
      getMovementY: function (_0x5d5723) {
        return _0x5d5723.movementY || _0x5d5723.mozMovementY || _0x5d5723.webkitMovementY || 0;
      },
      getMouseWheelDelta: function (_0x267c47) {
        var _0x2a84c9 = 0;
        switch (_0x267c47.type) {
          case "DOMMouseScroll":
            _0x2a84c9 = _0x267c47.detail / 3;
            break;
          case "mousewheel":
            _0x2a84c9 = _0x267c47.wheelDelta / 120;
            break;
          case "wheel":
            _0x2a84c9 = _0x267c47.deltaY;
            switch (_0x267c47.deltaMode) {
              case 0:
                _0x2a84c9 /= 100;
                break;
              case 1:
                _0x2a84c9 /= 3;
                break;
              case 2:
                _0x2a84c9 *= 80;
                break;
              default:
                throw "unrecognized mouse wheel delta mode: " + _0x267c47.deltaMode;
            }
            break;
          default:
            throw "unrecognized mouse wheel event: " + _0x267c47.type;
        }
        return _0x2a84c9;
      },
      mouseX: 0,
      mouseY: 0,
      mouseMovementX: 0,
      mouseMovementY: 0,
      touches: {},
      lastTouches: {},
      calculateMouseEvent: function (_0x2c1097) {
        if (_0x20cb1d.pointerLock) {
          if (_0x2c1097.type != "mousemove" && "mozMovementX" in _0x2c1097) {
            _0x20cb1d.mouseMovementX = _0x20cb1d.mouseMovementY = 0;
          } else {
            _0x20cb1d.mouseMovementX = _0x20cb1d.getMovementX(_0x2c1097);
            _0x20cb1d.mouseMovementY = _0x20cb1d.getMovementY(_0x2c1097);
          }
          if (typeof SDL != "undefined") {
            _0x20cb1d.mouseX = SDL.mouseX + _0x20cb1d.mouseMovementX;
            _0x20cb1d.mouseY = SDL.mouseY + _0x20cb1d.mouseMovementY;
          } else {
            _0x20cb1d.mouseX += _0x20cb1d.mouseMovementX;
            _0x20cb1d.mouseY += _0x20cb1d.mouseMovementY;
          }
        } else {
          var _0x20c681 = _0x339df7.canvas.getBoundingClientRect();
          var _0x6f07ce = _0x339df7.canvas.width;
          var _0x4601e3 = _0x339df7.canvas.height;
          var _0x54fcbe = typeof window.scrollX != "undefined" ? window.scrollX : window.pageXOffset;
          var _0x5e708c = typeof window.scrollY != "undefined" ? window.scrollY : window.pageYOffset;
          if (_0x2c1097.type === "touchstart" || _0x2c1097.type === "touchend" || _0x2c1097.type === "touchmove") {
            var _0x3fc545 = _0x2c1097.touch;
            if (_0x3fc545 === undefined) {
              return;
            }
            var _0x49a32b = _0x3fc545.pageX - (_0x54fcbe + _0x20c681.left);
            var _0x3fb1a0 = _0x3fc545.pageY - (_0x5e708c + _0x20c681.top);
            _0x49a32b = _0x49a32b * (_0x6f07ce / _0x20c681.width);
            _0x3fb1a0 = _0x3fb1a0 * (_0x4601e3 / _0x20c681.height);
            var _0x219b9d = {
              x: _0x49a32b,
              y: _0x3fb1a0
            };
            if (_0x2c1097.type === "touchstart") {
              _0x20cb1d.lastTouches[_0x3fc545.identifier] = _0x219b9d;
              _0x20cb1d.touches[_0x3fc545.identifier] = _0x219b9d;
            } else if (_0x2c1097.type === "touchend" || _0x2c1097.type === "touchmove") {
              var _0x450b0a = _0x20cb1d.touches[_0x3fc545.identifier];
              if (!_0x450b0a) {
                _0x450b0a = _0x219b9d;
              }
              _0x20cb1d.lastTouches[_0x3fc545.identifier] = _0x450b0a;
              _0x20cb1d.touches[_0x3fc545.identifier] = _0x219b9d;
            }
            return;
          }
          var _0x3fc91d = _0x2c1097.pageX - (_0x54fcbe + _0x20c681.left);
          var _0x20af7e = _0x2c1097.pageY - (_0x5e708c + _0x20c681.top);
          _0x3fc91d = _0x3fc91d * (_0x6f07ce / _0x20c681.width);
          _0x20af7e = _0x20af7e * (_0x4601e3 / _0x20c681.height);
          _0x20cb1d.mouseMovementX = _0x3fc91d - _0x20cb1d.mouseX;
          _0x20cb1d.mouseMovementY = _0x20af7e - _0x20cb1d.mouseY;
          _0x20cb1d.mouseX = _0x3fc91d;
          _0x20cb1d.mouseY = _0x20af7e;
        }
      },
      resizeListeners: [],
      updateResizeListeners: function () {
        var _0x279ced = _0x339df7.canvas;
        _0x20cb1d.resizeListeners.forEach(function (_0x3b9e05) {
          _0x3b9e05(_0x279ced.width, _0x279ced.height);
        });
      },
      setCanvasSize: function (_0x18ad40, _0x50d8b4, _0x907057) {
        var _0x235e06 = _0x339df7.canvas;
        _0x20cb1d.updateCanvasDimensions(_0x235e06, _0x18ad40, _0x50d8b4);
        if (!_0x907057) {
          _0x20cb1d.updateResizeListeners();
        }
      },
      windowedWidth: 0,
      windowedHeight: 0,
      setFullscreenCanvasSize: function () {
        if (typeof SDL != "undefined") {
          var _0x2599b7 = _0x195007[SDL.screen >> 2];
          _0x2599b7 = _0x2599b7 | 8388608;
          _0x47a7a3[SDL.screen >> 2] = _0x2599b7;
        }
        _0x20cb1d.updateCanvasDimensions(_0x339df7.canvas);
        _0x20cb1d.updateResizeListeners();
      },
      setWindowedCanvasSize: function () {
        if (typeof SDL != "undefined") {
          var _0x5681a3 = _0x195007[SDL.screen >> 2];
          _0x5681a3 = _0x5681a3 & ~8388608;
          _0x47a7a3[SDL.screen >> 2] = _0x5681a3;
        }
        _0x20cb1d.updateCanvasDimensions(_0x339df7.canvas);
        _0x20cb1d.updateResizeListeners();
      },
      updateCanvasDimensions: function (_0x45715c, _0x5e15ef, _0x5382a7) {
        if (_0x5e15ef && _0x5382a7) {
          _0x45715c.widthNative = _0x5e15ef;
          _0x45715c.heightNative = _0x5382a7;
        } else {
          _0x5e15ef = _0x45715c.widthNative;
          _0x5382a7 = _0x45715c.heightNative;
        }
        var _0x3b843d = _0x5e15ef;
        var _0x129c4f = _0x5382a7;
        if (_0x339df7.forcedAspectRatio && _0x339df7.forcedAspectRatio > 0) {
          if (_0x3b843d / _0x129c4f < _0x339df7.forcedAspectRatio) {
            _0x3b843d = Math.round(_0x129c4f * _0x339df7.forcedAspectRatio);
          } else {
            _0x129c4f = Math.round(_0x3b843d / _0x339df7.forcedAspectRatio);
          }
        }
        if ((document.fullscreenElement || document.mozFullScreenElement || document.msFullscreenElement || document.webkitFullscreenElement || document.webkitCurrentFullScreenElement) === _0x45715c.parentNode && typeof screen != "undefined") {
          var _0x4ce455 = Math.min(screen.width / _0x3b843d, screen.height / _0x129c4f);
          _0x3b843d = Math.round(_0x3b843d * _0x4ce455);
          _0x129c4f = Math.round(_0x129c4f * _0x4ce455);
        }
        if (_0x20cb1d.resizeCanvas) {
          if (_0x45715c.width != _0x3b843d) {
            _0x45715c.width = _0x3b843d;
          }
          if (_0x45715c.height != _0x129c4f) {
            _0x45715c.height = _0x129c4f;
          }
          if (typeof _0x45715c.style != "undefined") {
            _0x45715c.style.removeProperty("width");
            _0x45715c.style.removeProperty("height");
          }
        } else {
          if (_0x45715c.width != _0x5e15ef) {
            _0x45715c.width = _0x5e15ef;
          }
          if (_0x45715c.height != _0x5382a7) {
            _0x45715c.height = _0x5382a7;
          }
          if (typeof _0x45715c.style != "undefined") {
            if (_0x3b843d != _0x5e15ef || _0x129c4f != _0x5382a7) {
              _0x45715c.style.setProperty("width", _0x3b843d + "px", "important");
              _0x45715c.style.setProperty("height", _0x129c4f + "px", "important");
            } else {
              _0x45715c.style.removeProperty("width");
              _0x45715c.style.removeProperty("height");
            }
          }
        }
      }
    };
    function _0x28ae75() {
      _0x20cb1d.mainLoop.pause();
      _0x20cb1d.mainLoop.func = null;
    }
    function _0x1c5217(_0x259e37) {
      clearInterval(_0x259e37);
    }
    var _0x5467e5 = {
      inEventHandler: 0,
      removeAllEventListeners: function () {
        for (var _0x4f7372 = _0x5467e5.eventHandlers.length - 1; _0x4f7372 >= 0; --_0x4f7372) {
          _0x5467e5._removeHandler(_0x4f7372);
        }
        _0x5467e5.eventHandlers = [];
        _0x5467e5.deferredCalls = [];
      },
      registerRemoveEventListeners: function () {
        if (!_0x5467e5.removeEventListenersRegistered) {
          _0x38fd0d.push(_0x5467e5.removeAllEventListeners);
          _0x5467e5.removeEventListenersRegistered = true;
        }
      },
      deferredCalls: [],
      deferCall: function (_0x1a7dd5, _0x254735, _0x32707a) {
        function _0x404178(_0x14a71e, _0x2066e8) {
          if (_0x14a71e.length != _0x2066e8.length) {
            return false;
          }
          for (var _0x439688 in _0x14a71e) {
            if (_0x14a71e[_0x439688] != _0x2066e8[_0x439688]) {
              return false;
            }
          }
          return true;
        }
        for (var _0x202c1f in _0x5467e5.deferredCalls) {
          var _0x585cbb = _0x5467e5.deferredCalls[_0x202c1f];
          if (_0x585cbb.targetFunction == _0x1a7dd5 && _0x404178(_0x585cbb.argsList, _0x32707a)) {
            return;
          }
        }
        _0x5467e5.deferredCalls.push({
          targetFunction: _0x1a7dd5,
          precedence: _0x254735,
          argsList: _0x32707a
        });
        _0x5467e5.deferredCalls.sort(function (_0x22f8d0, _0x16968c) {
          return _0x22f8d0.precedence < _0x16968c.precedence;
        });
      },
      removeDeferredCalls: function (_0x751d0a) {
        for (var _0x3439ae = 0; _0x3439ae < _0x5467e5.deferredCalls.length; ++_0x3439ae) {
          if (_0x5467e5.deferredCalls[_0x3439ae].targetFunction == _0x751d0a) {
            _0x5467e5.deferredCalls.splice(_0x3439ae, 1);
            --_0x3439ae;
          }
        }
      },
      canPerformEventHandlerRequests: function () {
        return _0x5467e5.inEventHandler && _0x5467e5.currentEventHandler.allowsDeferredCalls;
      },
      runDeferredCalls: function () {
        if (!_0x5467e5.canPerformEventHandlerRequests()) {
          return;
        }
        for (var _0x4eb30e = 0; _0x4eb30e < _0x5467e5.deferredCalls.length; ++_0x4eb30e) {
          var _0x5b3967 = _0x5467e5.deferredCalls[_0x4eb30e];
          _0x5467e5.deferredCalls.splice(_0x4eb30e, 1);
          --_0x4eb30e;
          _0x5b3967.targetFunction.apply(null, _0x5b3967.argsList);
        }
      },
      eventHandlers: [],
      removeAllHandlersOnTarget: function (_0x21a361, _0x286a5c) {
        for (var _0x499d76 = 0; _0x499d76 < _0x5467e5.eventHandlers.length; ++_0x499d76) {
          if (_0x5467e5.eventHandlers[_0x499d76].target == _0x21a361 && (!_0x286a5c || _0x286a5c == _0x5467e5.eventHandlers[_0x499d76].eventTypeString)) {
            _0x5467e5._removeHandler(_0x499d76--);
          }
        }
      },
      _removeHandler: function (_0x1d0c3b) {
        var _0x53e33b = _0x5467e5.eventHandlers[_0x1d0c3b];
        _0x53e33b.target.removeEventListener(_0x53e33b.eventTypeString, _0x53e33b.eventListenerFunc, _0x53e33b.useCapture);
        _0x5467e5.eventHandlers.splice(_0x1d0c3b, 1);
      },
      registerOrRemoveHandler: function (_0x44d3a4) {
        var _0x4570c3 = function _0x27be10(_0x4541d4) {
          ++_0x5467e5.inEventHandler;
          _0x5467e5.currentEventHandler = _0x44d3a4;
          _0x5467e5.runDeferredCalls();
          _0x44d3a4.handlerFunc(_0x4541d4);
          _0x5467e5.runDeferredCalls();
          --_0x5467e5.inEventHandler;
        };
        if (_0x44d3a4.callbackfunc) {
          _0x44d3a4.eventListenerFunc = _0x4570c3;
          _0x44d3a4.target.addEventListener(_0x44d3a4.eventTypeString, _0x4570c3, _0x44d3a4.useCapture);
          _0x5467e5.eventHandlers.push(_0x44d3a4);
          _0x5467e5.registerRemoveEventListeners();
        } else {
          for (var _0xd245c9 = 0; _0xd245c9 < _0x5467e5.eventHandlers.length; ++_0xd245c9) {
            if (_0x5467e5.eventHandlers[_0xd245c9].target == _0x44d3a4.target && _0x5467e5.eventHandlers[_0xd245c9].eventTypeString == _0x44d3a4.eventTypeString) {
              _0x5467e5._removeHandler(_0xd245c9--);
            }
          }
        }
      },
      getNodeNameForTarget: function (_0xd72cd4) {
        if (!_0xd72cd4) {
          return "";
        }
        if (_0xd72cd4 == window) {
          return "#window";
        }
        if (_0xd72cd4 == screen) {
          return "#screen";
        }
        if (_0xd72cd4 && _0xd72cd4.nodeName) {
          return _0xd72cd4.nodeName;
        } else {
          return "";
        }
      },
      fullscreenEnabled: function () {
        return document.fullscreenEnabled || document.webkitFullscreenEnabled;
      }
    };
    var _0x41c319 = {};
    function _0x5aa0c2(_0x2a5c40) {
      if (_0x2a5c40 > 2) {
        return _0x2b7aa3(_0x2a5c40);
      } else {
        return _0x2a5c40;
      }
    }
    var _0x26f7ce = [0, typeof document != "undefined" ? document : 0, typeof window != "undefined" ? window : 0];
    function _0x2c3b56(_0xea872f) {
      _0xea872f = _0x5aa0c2(_0xea872f);
      var _0x5e4853 = _0x26f7ce[_0xea872f] || (typeof document != "undefined" ? document.querySelector(_0xea872f) : undefined);
      return _0x5e4853;
    }
    function _0x408482(_0x4bbdd2) {
      return _0x2c3b56(_0x4bbdd2);
    }
    function _0x3efe4d(_0x27e8bb, _0x368983, _0xef3055) {
      var _0x461ee3 = _0x408482(_0x27e8bb);
      if (!_0x461ee3) {
        return -4;
      }
      _0x47a7a3[_0x368983 >> 2] = _0x461ee3.width;
      _0x47a7a3[_0xef3055 >> 2] = _0x461ee3.height;
    }
    function _0x402e6b(_0x504491) {
      return _0x5cf5e4(function () {
        var _0x248c40 = _0x560693(8);
        var _0x13a5bf = _0x248c40 + 4;
        var _0xa7cea1 = _0x560693(_0x504491.id.length + 1);
        _0xb1d3f9(_0x504491.id, _0xa7cea1, _0x504491.id.length + 1);
        var _0x3ca3f1 = _0x3efe4d(_0xa7cea1, _0x248c40, _0x13a5bf);
        var _0x520742 = [_0x47a7a3[_0x248c40 >> 2], _0x47a7a3[_0x13a5bf >> 2]];
        return _0x520742;
      });
    }
    function _0xd4688(_0x1c7b8e, _0x570252, _0x4f8323) {
      var _0x1c3c90 = _0x408482(_0x1c7b8e);
      if (!_0x1c3c90) {
        return -4;
      }
      _0x1c3c90.width = _0x570252;
      _0x1c3c90.height = _0x4f8323;
      return 0;
    }
    function _0x30e6df(_0x27acab, _0x58dfb6, _0x373e1d) {
      if (!_0x27acab.controlTransferredOffscreen) {
        _0x27acab.width = _0x58dfb6;
        _0x27acab.height = _0x373e1d;
      } else {
        _0x5cf5e4(function () {
          var _0xa8d667 = _0x560693(_0x27acab.id.length + 1);
          _0xb1d3f9(_0x27acab.id, _0xa8d667, _0x27acab.id.length + 1);
          _0xd4688(_0xa8d667, _0x58dfb6, _0x373e1d);
        });
      }
    }
    function _0x5c1417(_0x35897c) {
      var _0x50edcd = _0x402e6b(_0x35897c);
      var _0x3430aa = _0x50edcd[0];
      var _0x19ba59 = _0x50edcd[1];
      var _0xc640d0 = _0x35897c.style.width;
      var _0x18b52a = _0x35897c.style.height;
      var _0xda35f3 = _0x35897c.style.backgroundColor;
      var _0xb38970 = document.body.style.backgroundColor;
      var _0x3edf4d = _0x35897c.style.paddingLeft;
      var _0x33d4dc = _0x35897c.style.paddingRight;
      var _0x53b34d = _0x35897c.style.paddingTop;
      var _0x2e4f64 = _0x35897c.style.paddingBottom;
      var _0x332474 = _0x35897c.style.marginLeft;
      var _0x32724b = _0x35897c.style.marginRight;
      var _0xd186f7 = _0x35897c.style.marginTop;
      var _0x398a2d = _0x35897c.style.marginBottom;
      var _0x4fb930 = document.body.style.margin;
      var _0x316c24 = document.documentElement.style.overflow;
      var _0x256892 = document.body.scroll;
      var _0x2277f8 = _0x35897c.style.imageRendering;
      function _0x4c7f21() {
        var _0x3d7166 = document.fullscreenElement || document.webkitFullscreenElement || document.msFullscreenElement;
        if (!_0x3d7166) {
          document.removeEventListener("fullscreenchange", _0x4c7f21);
          document.removeEventListener("webkitfullscreenchange", _0x4c7f21);
          _0x30e6df(_0x35897c, _0x3430aa, _0x19ba59);
          _0x35897c.style.width = _0xc640d0;
          _0x35897c.style.height = _0x18b52a;
          _0x35897c.style.backgroundColor = _0xda35f3;
          if (!_0xb38970) {
            document.body.style.backgroundColor = "white";
          }
          document.body.style.backgroundColor = _0xb38970;
          _0x35897c.style.paddingLeft = _0x3edf4d;
          _0x35897c.style.paddingRight = _0x33d4dc;
          _0x35897c.style.paddingTop = _0x53b34d;
          _0x35897c.style.paddingBottom = _0x2e4f64;
          _0x35897c.style.marginLeft = _0x332474;
          _0x35897c.style.marginRight = _0x32724b;
          _0x35897c.style.marginTop = _0xd186f7;
          _0x35897c.style.marginBottom = _0x398a2d;
          document.body.style.margin = _0x4fb930;
          document.documentElement.style.overflow = _0x316c24;
          document.body.scroll = _0x256892;
          _0x35897c.style.imageRendering = _0x2277f8;
          if (_0x35897c.GLctxObject) {
            _0x35897c.GLctxObject.GLctx.viewport(0, 0, _0x3430aa, _0x19ba59);
          }
          if (_0x41c319.canvasResizedCallback) {
            (function (_0x48cf8f, _0x2c1633, _0x484977) {
              return _0x3cf839.apply(null, [_0x41c319.canvasResizedCallback, _0x48cf8f, _0x2c1633, _0x484977]);
            })(37, 0, _0x41c319.canvasResizedCallbackUserData);
          }
        }
      }
      document.addEventListener("fullscreenchange", _0x4c7f21);
      document.addEventListener("webkitfullscreenchange", _0x4c7f21);
      return _0x4c7f21;
    }
    function _0x2c40dc(_0x3c475a, _0x322c76, _0x4854b2) {
      _0x3c475a.style.paddingLeft = _0x3c475a.style.paddingRight = _0x4854b2 + "px";
      _0x3c475a.style.paddingTop = _0x3c475a.style.paddingBottom = _0x322c76 + "px";
    }
    function _0x568286(_0x1c06c6) {
      if (_0x26f7ce.indexOf(_0x1c06c6) < 0) {
        return _0x1c06c6.getBoundingClientRect();
      } else {
        return {
          left: 0,
          top: 0
        };
      }
    }
    function _0xaa68bc(_0x1bc84e, _0x365e8c) {
      var _0x3ce8d4 = _0x5c1417(_0x1bc84e);
      var _0x5bd4c4 = _0x365e8c.softFullscreen ? innerWidth : screen.width;
      var _0x5af9fc = _0x365e8c.softFullscreen ? innerHeight : screen.height;
      var _0x14c6de = _0x568286(_0x1bc84e);
      var _0x1b23ea = _0x14c6de.width;
      var _0x579ffa = _0x14c6de.height;
      var _0x439e86 = _0x402e6b(_0x1bc84e);
      var _0x231747 = _0x439e86[0];
      var _0x181227 = _0x439e86[1];
      if (_0x365e8c.scaleMode == 3) {
        _0x2c40dc(_0x1bc84e, (_0x5af9fc - _0x579ffa) / 2, (_0x5bd4c4 - _0x1b23ea) / 2);
        _0x5bd4c4 = _0x1b23ea;
        _0x5af9fc = _0x579ffa;
      } else if (_0x365e8c.scaleMode == 2) {
        if (_0x5bd4c4 * _0x181227 < _0x231747 * _0x5af9fc) {
          var _0x314704 = _0x181227 * _0x5bd4c4 / _0x231747;
          _0x2c40dc(_0x1bc84e, (_0x5af9fc - _0x314704) / 2, 0);
          _0x5af9fc = _0x314704;
        } else {
          var _0x3c3876 = _0x231747 * _0x5af9fc / _0x181227;
          _0x2c40dc(_0x1bc84e, 0, (_0x5bd4c4 - _0x3c3876) / 2);
          _0x5bd4c4 = _0x3c3876;
        }
      }
      if (!_0x1bc84e.style.backgroundColor) {
        _0x1bc84e.style.backgroundColor = "black";
      }
      if (!document.body.style.backgroundColor) {
        document.body.style.backgroundColor = "black";
      }
      _0x1bc84e.style.width = _0x5bd4c4 + "px";
      _0x1bc84e.style.height = _0x5af9fc + "px";
      if (_0x365e8c.filteringMode == 1) {
        _0x1bc84e.style.imageRendering = "optimizeSpeed";
        _0x1bc84e.style.imageRendering = "-moz-crisp-edges";
        _0x1bc84e.style.imageRendering = "-o-crisp-edges";
        _0x1bc84e.style.imageRendering = "-webkit-optimize-contrast";
        _0x1bc84e.style.imageRendering = "optimize-contrast";
        _0x1bc84e.style.imageRendering = "crisp-edges";
        _0x1bc84e.style.imageRendering = "pixelated";
      }
      var _0xdcc217 = _0x365e8c.canvasResolutionScaleMode == 2 ? devicePixelRatio : 1;
      if (_0x365e8c.canvasResolutionScaleMode != 0) {
        var _0x33f1d4 = _0x5bd4c4 * _0xdcc217 | 0;
        var _0x1c98a5 = _0x5af9fc * _0xdcc217 | 0;
        _0x30e6df(_0x1bc84e, _0x33f1d4, _0x1c98a5);
        if (_0x1bc84e.GLctxObject) {
          _0x1bc84e.GLctxObject.GLctx.viewport(0, 0, _0x33f1d4, _0x1c98a5);
        }
      }
      return _0x3ce8d4;
    }
    function _0x3810f7(_0x4dc12c, _0x2298c4) {
      if (_0x2298c4.scaleMode != 0 || _0x2298c4.canvasResolutionScaleMode != 0) {
        _0xaa68bc(_0x4dc12c, _0x2298c4);
      }
      if (_0x4dc12c.requestFullscreen) {
        _0x4dc12c.requestFullscreen();
      } else if (_0x4dc12c.webkitRequestFullscreen) {
        _0x4dc12c.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
      } else if (_0x5467e5.fullscreenEnabled()) {
        return -3;
      } else {
        return -1;
      }
      _0x41c319 = _0x2298c4;
      if (_0x2298c4.canvasResizedCallback) {
        (function (_0x4a59a3, _0x2ed2c0, _0x444d68) {
          return _0x3cf839.apply(null, [_0x2298c4.canvasResizedCallback, _0x4a59a3, _0x2ed2c0, _0x444d68]);
        })(37, 0, _0x2298c4.canvasResizedCallbackUserData);
      }
      return 0;
    }
    function _0x59329e() {
      if (!_0x5467e5.fullscreenEnabled()) {
        return -1;
      }
      _0x5467e5.removeDeferredCalls(_0x3810f7);
      var _0x7796da = _0x26f7ce[1];
      if (_0x7796da.exitFullscreen) {
        if (_0x7796da.fullscreenElement) {
          _0x7796da.exitFullscreen();
        }
      } else if (_0x7796da.webkitExitFullscreen) {
        if (_0x7796da.webkitFullscreenElement) {
          _0x7796da.webkitExitFullscreen();
        }
      } else {
        return -1;
      }
      return 0;
    }
    function _0x3e4f53(_0x14518e) {
      if (_0x14518e.requestPointerLock) {
        _0x14518e.requestPointerLock();
      } else if (_0x14518e.msRequestPointerLock) {
        _0x14518e.msRequestPointerLock();
      } else if (document.body.requestPointerLock || document.body.msRequestPointerLock) {
        return -3;
      } else {
        return -1;
      }
      return 0;
    }
    function _0x2bc251() {
      _0x5467e5.removeDeferredCalls(_0x3e4f53);
      if (document.exitPointerLock) {
        document.exitPointerLock();
      } else if (document.msExitPointerLock) {
        document.msExitPointerLock();
      } else {
        return -1;
      }
      return 0;
    }
    function _0x4267e5(_0x54e754) {
      var _0x2a4751 = document.fullscreenElement || document.mozFullScreenElement || document.webkitFullscreenElement || document.msFullscreenElement;
      var _0x202f8e = !!_0x2a4751;
      _0x47a7a3[_0x54e754 >> 2] = _0x202f8e;
      _0x47a7a3[_0x54e754 + 4 >> 2] = _0x5467e5.fullscreenEnabled();
      var _0x5c5d66 = _0x202f8e ? _0x2a4751 : _0x5467e5.previousFullscreenElement;
      var _0x13b3a9 = _0x5467e5.getNodeNameForTarget(_0x5c5d66);
      var _0x283208 = _0x5c5d66 && _0x5c5d66.id ? _0x5c5d66.id : "";
      _0xb1d3f9(_0x13b3a9, _0x54e754 + 8, 128);
      _0xb1d3f9(_0x283208, _0x54e754 + 136, 128);
      _0x47a7a3[_0x54e754 + 264 >> 2] = _0x5c5d66 ? _0x5c5d66.clientWidth : 0;
      _0x47a7a3[_0x54e754 + 268 >> 2] = _0x5c5d66 ? _0x5c5d66.clientHeight : 0;
      _0x47a7a3[_0x54e754 + 272 >> 2] = screen.width;
      _0x47a7a3[_0x54e754 + 276 >> 2] = screen.height;
      if (_0x202f8e) {
        _0x5467e5.previousFullscreenElement = _0x2a4751;
      }
    }
    function _0x314ff5(_0x31c14b) {
      if (!_0x5467e5.fullscreenEnabled()) {
        return -1;
      }
      _0x4267e5(_0x31c14b);
      return 0;
    }
    function _0x52e3a4(_0x13c998, _0x51c72c) {
      _0x113710[_0x13c998 >> 3] = _0x51c72c.timestamp;
      for (var _0x3ebc08 = 0; _0x3ebc08 < _0x51c72c.axes.length; ++_0x3ebc08) {
        _0x113710[_0x13c998 + _0x3ebc08 * 8 + 16 >> 3] = _0x51c72c.axes[_0x3ebc08];
      }
      for (var _0x3ebc08 = 0; _0x3ebc08 < _0x51c72c.buttons.length; ++_0x3ebc08) {
        if (typeof _0x51c72c.buttons[_0x3ebc08] == "object") {
          _0x113710[_0x13c998 + _0x3ebc08 * 8 + 528 >> 3] = _0x51c72c.buttons[_0x3ebc08].value;
        } else {
          _0x113710[_0x13c998 + _0x3ebc08 * 8 + 528 >> 3] = _0x51c72c.buttons[_0x3ebc08];
        }
      }
      for (var _0x3ebc08 = 0; _0x3ebc08 < _0x51c72c.buttons.length; ++_0x3ebc08) {
        if (typeof _0x51c72c.buttons[_0x3ebc08] == "object") {
          _0x47a7a3[_0x13c998 + _0x3ebc08 * 4 + 1040 >> 2] = _0x51c72c.buttons[_0x3ebc08].pressed;
        } else {
          _0x47a7a3[_0x13c998 + _0x3ebc08 * 4 + 1040 >> 2] = _0x51c72c.buttons[_0x3ebc08] == 1;
        }
      }
      _0x47a7a3[_0x13c998 + 1296 >> 2] = _0x51c72c.connected;
      _0x47a7a3[_0x13c998 + 1300 >> 2] = _0x51c72c.index;
      _0x47a7a3[_0x13c998 + 8 >> 2] = _0x51c72c.axes.length;
      _0x47a7a3[_0x13c998 + 12 >> 2] = _0x51c72c.buttons.length;
      _0xb1d3f9(_0x51c72c.id, _0x13c998 + 1304, 64);
      _0xb1d3f9(_0x51c72c.mapping, _0x13c998 + 1368, 64);
    }
    function _0x5cbc65(_0xa20d41, _0x54039c) {
      if (_0xa20d41 < 0 || _0xa20d41 >= _0x5467e5.lastGamepadState.length) {
        return -5;
      }
      if (!_0x5467e5.lastGamepadState[_0xa20d41]) {
        return -7;
      }
      _0x52e3a4(_0x54039c, _0x5467e5.lastGamepadState[_0xa20d41]);
      return 0;
    }
    function _0x1edd0f() {
      return 2147483648;
    }
    function _0xadb25e() {
      if (_0x47ed75) {
        return 1;
      } else {
        return 1000;
      }
    }
    function _0x9e0231() {
      return _0x5467e5.lastGamepadState.length;
    }
    function _0x30db64() {
      _0x5467e5.removeAllEventListeners();
    }
    function _0x2e5f74(_0x17e566) {
      return !_0x204083.contexts[_0x17e566] || _0x204083.contexts[_0x17e566].GLctx.isContextLost();
    }
    function _0x45fa8c(_0x3b4d23) {
      return _0x3b4d23 < 0 || _0x3b4d23 === 0 && 1 / _0x3b4d23 === -Infinity;
    }
    function _0x500fd7(_0x18a2be, _0x3f483c) {
      return (_0x18a2be >>> 0) + _0x3f483c * 4294967296;
    }
    function _0x41ad02(_0x1db411, _0x27ddae) {
      return (_0x1db411 >>> 0) + (_0x27ddae >>> 0) * 4294967296;
    }
    function _0xf2514(_0x156c6d, _0x324f00) {
      if (_0x156c6d <= 0) {
        return _0x156c6d;
      }
      var _0x2a1db8 = _0x324f00 <= 32 ? Math.abs(1 << _0x324f00 - 1) : Math.pow(2, _0x324f00 - 1);
      if (_0x156c6d >= _0x2a1db8 && (_0x324f00 <= 32 || _0x156c6d > _0x2a1db8)) {
        _0x156c6d = _0x2a1db8 * -2 + _0x156c6d;
      }
      return _0x156c6d;
    }
    function _0x8eb83f(_0x5b4ce1, _0x4d3047) {
      if (_0x5b4ce1 >= 0) {
        return _0x5b4ce1;
      }
      if (_0x4d3047 <= 32) {
        return Math.abs(1 << _0x4d3047 - 1) * 2 + _0x5b4ce1;
      } else {
        return Math.pow(2, _0x4d3047) + _0x5b4ce1;
      }
    }
    function _0x1ac905(_0x2928f5, _0x4f91a8) {
      var _0x4262eb = _0x2928f5;
      var _0x49365d = _0x4f91a8;
      function _0x442308(_0x44864b, _0x368791) {
        if (_0x368791 === "double" || _0x368791 === "i64") {
          if (_0x44864b & 7) {
            _0x44864b += 4;
          }
        } else {}
        return _0x44864b;
      }
      function _0x477ca8(_0x12626b) {
        var _0x1c145c;
        _0x49365d = _0x442308(_0x49365d, _0x12626b);
        if (_0x12626b === "double") {
          _0x1c145c = Number(_0x113710[_0x49365d >> 3]);
          _0x49365d += 8;
        } else if (_0x12626b == "i64") {
          _0x1c145c = [_0x47a7a3[_0x49365d >> 2], _0x47a7a3[_0x49365d + 4 >> 2]];
          _0x49365d += 8;
        } else {
          _0x12626b = "i32";
          _0x1c145c = _0x47a7a3[_0x49365d >> 2];
          _0x49365d += 4;
        }
        return _0x1c145c;
      }
      var _0x1c98bb = [];
      var _0x555d82;
      var _0x970c42;
      var _0x4af9b7;
      while (1) {
        var _0xf654a2 = _0x4262eb;
        _0x555d82 = _0x2845ef[_0x4262eb >> 0];
        if (_0x555d82 === 0) {
          break;
        }
        _0x970c42 = _0x2845ef[_0x4262eb + 1 >> 0];
        if (_0x555d82 == 37) {
          var _0x166475 = false;
          var _0x33a62e = false;
          var _0x442259 = false;
          var _0x23c415 = false;
          var _0x31903a = false;
          _0x1cdb56: while (1) {
            switch (_0x970c42) {
              case 43:
                _0x166475 = true;
                break;
              case 45:
                _0x33a62e = true;
                break;
              case 35:
                _0x442259 = true;
                break;
              case 48:
                if (_0x23c415) {
                  break _0x1cdb56;
                } else {
                  _0x23c415 = true;
                  break;
                }
              case 32:
                _0x31903a = true;
                break;
              default:
                break _0x1cdb56;
            }
            _0x4262eb++;
            _0x970c42 = _0x2845ef[_0x4262eb + 1 >> 0];
          }
          var _0x5cf330 = 0;
          if (_0x970c42 == 42) {
            _0x5cf330 = _0x477ca8("i32");
            _0x4262eb++;
            _0x970c42 = _0x2845ef[_0x4262eb + 1 >> 0];
          } else {
            while (_0x970c42 >= 48 && _0x970c42 <= 57) {
              _0x5cf330 = _0x5cf330 * 10 + (_0x970c42 - 48);
              _0x4262eb++;
              _0x970c42 = _0x2845ef[_0x4262eb + 1 >> 0];
            }
          }
          var _0x124aab = false;
          var _0x3a9d58 = -1;
          if (_0x970c42 == 46) {
            _0x3a9d58 = 0;
            _0x124aab = true;
            _0x4262eb++;
            _0x970c42 = _0x2845ef[_0x4262eb + 1 >> 0];
            if (_0x970c42 == 42) {
              _0x3a9d58 = _0x477ca8("i32");
              _0x4262eb++;
            } else {
              while (1) {
                var _0xc5f76b = _0x2845ef[_0x4262eb + 1 >> 0];
                if (_0xc5f76b < 48 || _0xc5f76b > 57) {
                  break;
                }
                _0x3a9d58 = _0x3a9d58 * 10 + (_0xc5f76b - 48);
                _0x4262eb++;
              }
            }
            _0x970c42 = _0x2845ef[_0x4262eb + 1 >> 0];
          }
          if (_0x3a9d58 < 0) {
            _0x3a9d58 = 6;
            _0x124aab = false;
          }
          var _0x42d1aa;
          switch (String.fromCharCode(_0x970c42)) {
            case "h":
              var _0x49ee03 = _0x2845ef[_0x4262eb + 2 >> 0];
              if (_0x49ee03 == 104) {
                _0x4262eb++;
                _0x42d1aa = 1;
              } else {
                _0x42d1aa = 2;
              }
              break;
            case "l":
              var _0x49ee03 = _0x2845ef[_0x4262eb + 2 >> 0];
              if (_0x49ee03 == 108) {
                _0x4262eb++;
                _0x42d1aa = 8;
              } else {
                _0x42d1aa = 4;
              }
              break;
            case "L":
            case "q":
            case "j":
              _0x42d1aa = 8;
              break;
            case "z":
            case "t":
            case "I":
              _0x42d1aa = 4;
              break;
            default:
              _0x42d1aa = null;
          }
          if (_0x42d1aa) {
            _0x4262eb++;
          }
          _0x970c42 = _0x2845ef[_0x4262eb + 1 >> 0];
          switch (String.fromCharCode(_0x970c42)) {
            case "d":
            case "i":
            case "u":
            case "o":
            case "x":
            case "X":
            case "p":
              {
                var _0x3499cb = _0x970c42 == 100 || _0x970c42 == 105;
                _0x42d1aa = _0x42d1aa || 4;
                _0x4af9b7 = _0x477ca8("i" + _0x42d1aa * 8);
                var _0x53be5b;
                if (_0x42d1aa == 8) {
                  _0x4af9b7 = _0x970c42 == 117 ? _0x41ad02(_0x4af9b7[0], _0x4af9b7[1]) : _0x500fd7(_0x4af9b7[0], _0x4af9b7[1]);
                }
                if (_0x42d1aa <= 4) {
                  var _0x590c75 = Math.pow(256, _0x42d1aa) - 1;
                  _0x4af9b7 = (_0x3499cb ? _0xf2514 : _0x8eb83f)(_0x4af9b7 & _0x590c75, _0x42d1aa * 8);
                }
                var _0x4cecbe = Math.abs(_0x4af9b7);
                var _0x3330f1 = "";
                if (_0x970c42 == 100 || _0x970c42 == 105) {
                  _0x53be5b = _0xf2514(_0x4af9b7, _0x42d1aa * 8).toString(10);
                } else if (_0x970c42 == 117) {
                  _0x53be5b = _0x8eb83f(_0x4af9b7, _0x42d1aa * 8).toString(10);
                  _0x4af9b7 = Math.abs(_0x4af9b7);
                } else if (_0x970c42 == 111) {
                  _0x53be5b = (_0x442259 ? "0" : "") + _0x4cecbe.toString(8);
                } else if (_0x970c42 == 120 || _0x970c42 == 88) {
                  _0x3330f1 = _0x442259 && _0x4af9b7 != 0 ? "0x" : "";
                  if (_0x4af9b7 < 0) {
                    _0x4af9b7 = -_0x4af9b7;
                    _0x53be5b = (_0x4cecbe - 1).toString(16);
                    var _0x8e1e4 = [];
                    for (var _0x11909a = 0; _0x11909a < _0x53be5b.length; _0x11909a++) {
                      _0x8e1e4.push((15 - parseInt(_0x53be5b[_0x11909a], 16)).toString(16));
                    }
                    _0x53be5b = _0x8e1e4.join("");
                    while (_0x53be5b.length < _0x42d1aa * 2) {
                      _0x53be5b = "f" + _0x53be5b;
                    }
                  } else {
                    _0x53be5b = _0x4cecbe.toString(16);
                  }
                  if (_0x970c42 == 88) {
                    _0x3330f1 = _0x3330f1.toUpperCase();
                    _0x53be5b = _0x53be5b.toUpperCase();
                  }
                } else if (_0x970c42 == 112) {
                  if (_0x4cecbe === 0) {
                    _0x53be5b = "(nil)";
                  } else {
                    _0x3330f1 = "0x";
                    _0x53be5b = _0x4cecbe.toString(16);
                  }
                }
                if (_0x124aab) {
                  while (_0x53be5b.length < _0x3a9d58) {
                    _0x53be5b = "0" + _0x53be5b;
                  }
                }
                if (_0x4af9b7 >= 0) {
                  if (_0x166475) {
                    _0x3330f1 = "+" + _0x3330f1;
                  } else if (_0x31903a) {
                    _0x3330f1 = " " + _0x3330f1;
                  }
                }
                if (_0x53be5b.charAt(0) == "-") {
                  _0x3330f1 = "-" + _0x3330f1;
                  _0x53be5b = _0x53be5b.substr(1);
                }
                while (_0x3330f1.length + _0x53be5b.length < _0x5cf330) {
                  if (_0x33a62e) {
                    _0x53be5b += " ";
                  } else if (_0x23c415) {
                    _0x53be5b = "0" + _0x53be5b;
                  } else {
                    _0x3330f1 = " " + _0x3330f1;
                  }
                }
                _0x53be5b = _0x3330f1 + _0x53be5b;
                _0x53be5b.split("").forEach(function (_0x524759) {
                  _0x1c98bb.push(_0x524759.charCodeAt(0));
                });
                break;
              }
            case "f":
            case "F":
            case "e":
            case "E":
            case "g":
            case "G":
              {
                _0x4af9b7 = _0x477ca8("double");
                var _0x53be5b;
                if (isNaN(_0x4af9b7)) {
                  _0x53be5b = "nan";
                  _0x23c415 = false;
                } else if (!isFinite(_0x4af9b7)) {
                  _0x53be5b = (_0x4af9b7 < 0 ? "-" : "") + "inf";
                  _0x23c415 = false;
                } else {
                  var _0x56b24c = false;
                  var _0x2860ec = Math.min(_0x3a9d58, 20);
                  if (_0x970c42 == 103 || _0x970c42 == 71) {
                    _0x56b24c = true;
                    _0x3a9d58 = _0x3a9d58 || 1;
                    var _0x524cd8 = parseInt(_0x4af9b7.toExponential(_0x2860ec).split("e")[1], 10);
                    if (_0x3a9d58 > _0x524cd8 && _0x524cd8 >= -4) {
                      _0x970c42 = (_0x970c42 == 103 ? "f" : "F").charCodeAt(0);
                      _0x3a9d58 -= _0x524cd8 + 1;
                    } else {
                      _0x970c42 = (_0x970c42 == 103 ? "e" : "E").charCodeAt(0);
                      _0x3a9d58--;
                    }
                    _0x2860ec = Math.min(_0x3a9d58, 20);
                  }
                  if (_0x970c42 == 101 || _0x970c42 == 69) {
                    _0x53be5b = _0x4af9b7.toExponential(_0x2860ec);
                    if (/[eE][-+]\d$/.test(_0x53be5b)) {
                      _0x53be5b = _0x53be5b.slice(0, -1) + "0" + _0x53be5b.slice(-1);
                    }
                  } else if (_0x970c42 == 102 || _0x970c42 == 70) {
                    _0x53be5b = _0x4af9b7.toFixed(_0x2860ec);
                    if (_0x4af9b7 === 0 && _0x45fa8c(_0x4af9b7)) {
                      _0x53be5b = "-" + _0x53be5b;
                    }
                  }
                  var _0x3e83df = _0x53be5b.split("e");
                  if (_0x56b24c && !_0x442259) {
                    while (_0x3e83df[0].length > 1 && _0x3e83df[0].includes(".") && (_0x3e83df[0].slice(-1) == "0" || _0x3e83df[0].slice(-1) == ".")) {
                      _0x3e83df[0] = _0x3e83df[0].slice(0, -1);
                    }
                  } else {
                    if (_0x442259 && _0x53be5b.indexOf(".") == -1) {
                      _0x3e83df[0] += ".";
                    }
                    while (_0x3a9d58 > _0x2860ec++) {
                      _0x3e83df[0] += "0";
                    }
                  }
                  _0x53be5b = _0x3e83df[0] + (_0x3e83df.length > 1 ? "e" + _0x3e83df[1] : "");
                  if (_0x970c42 == 69) {
                    _0x53be5b = _0x53be5b.toUpperCase();
                  }
                  if (_0x4af9b7 >= 0) {
                    if (_0x166475) {
                      _0x53be5b = "+" + _0x53be5b;
                    } else if (_0x31903a) {
                      _0x53be5b = " " + _0x53be5b;
                    }
                  }
                }
                while (_0x53be5b.length < _0x5cf330) {
                  if (_0x33a62e) {
                    _0x53be5b += " ";
                  } else if (_0x23c415 && (_0x53be5b[0] == "-" || _0x53be5b[0] == "+")) {
                    _0x53be5b = _0x53be5b[0] + "0" + _0x53be5b.slice(1);
                  } else {
                    _0x53be5b = (_0x23c415 ? "0" : " ") + _0x53be5b;
                  }
                }
                if (_0x970c42 < 97) {
                  _0x53be5b = _0x53be5b.toUpperCase();
                }
                _0x53be5b.split("").forEach(function (_0x57f654) {
                  _0x1c98bb.push(_0x57f654.charCodeAt(0));
                });
                break;
              }
            case "s":
              {
                var _0x16d485 = _0x477ca8("i8*");
                var _0x418d3e = _0x16d485 ? _0x5733b7(_0x16d485) : "(null)".length;
                if (_0x124aab) {
                  _0x418d3e = Math.min(_0x418d3e, _0x3a9d58);
                }
                if (!_0x33a62e) {
                  while (_0x418d3e < _0x5cf330--) {
                    _0x1c98bb.push(32);
                  }
                }
                if (_0x16d485) {
                  for (var _0x11909a = 0; _0x11909a < _0x418d3e; _0x11909a++) {
                    _0x1c98bb.push(_0xb4481c[_0x16d485++ >> 0]);
                  }
                } else {
                  _0x1c98bb = _0x1c98bb.concat(_0x2fe8e2("(null)".substr(0, _0x418d3e), true));
                }
                if (_0x33a62e) {
                  while (_0x418d3e < _0x5cf330--) {
                    _0x1c98bb.push(32);
                  }
                }
                break;
              }
            case "c":
              {
                if (_0x33a62e) {
                  _0x1c98bb.push(_0x477ca8("i8"));
                }
                while (--_0x5cf330 > 0) {
                  _0x1c98bb.push(32);
                }
                if (!_0x33a62e) {
                  _0x1c98bb.push(_0x477ca8("i8"));
                }
                break;
              }
            case "n":
              {
                var _0x52effb = _0x477ca8("i32*");
                _0x47a7a3[_0x52effb >> 2] = _0x1c98bb.length;
                break;
              }
            case "%":
              {
                _0x1c98bb.push(_0x555d82);
                break;
              }
            default:
              {
                for (var _0x11909a = _0xf654a2; _0x11909a < _0x4262eb + 2; _0x11909a++) {
                  _0x1c98bb.push(_0x2845ef[_0x11909a >> 0]);
                }
              }
          }
          _0x4262eb += 2;
        } else {
          _0x1c98bb.push(_0x555d82);
          _0x4262eb += 1;
        }
      }
      return _0x1c98bb;
    }
    function _0x301acb(_0x44760c) {
      if (!_0x44760c || !_0x44760c.callee || !_0x44760c.callee.name) {
        return [null, "", ""];
      }
      var _0x55833f = _0x44760c.callee.toString();
      var _0x20e350 = _0x44760c.callee.name;
      var _0x49e8b4 = "(";
      var _0x1fc396 = true;
      for (var _0x842890 in _0x44760c) {
        var _0x2997cb = _0x44760c[_0x842890];
        if (!_0x1fc396) {
          _0x49e8b4 += ", ";
        }
        _0x1fc396 = false;
        if (typeof _0x2997cb == "number" || typeof _0x2997cb == "string") {
          _0x49e8b4 += _0x2997cb;
        } else {
          _0x49e8b4 += "(" + typeof _0x2997cb + ")";
        }
      }
      _0x49e8b4 += ")";
      var _0x1aea29 = _0x44760c.callee.caller;
      _0x44760c = _0x1aea29 ? _0x1aea29.arguments : [];
      if (_0x1fc396) {
        _0x49e8b4 = "";
      }
      return [_0x44760c, _0x20e350, _0x49e8b4];
    }
    function _0x48993c(_0x20b8d5) {
      var _0x752a63 = _0x50302e();
      var _0x15fcd7 = _0x752a63.lastIndexOf("_emscripten_log");
      var _0x26b8b5 = _0x752a63.lastIndexOf("_emscripten_get_callstack");
      var _0x2fb72d = _0x752a63.indexOf("\n", Math.max(_0x15fcd7, _0x26b8b5)) + 1;
      _0x752a63 = _0x752a63.slice(_0x2fb72d);
      if (_0x20b8d5 & 32) {
        _0xcabc97("EM_LOG_DEMANGLE is deprecated; ignoring");
      }
      if (_0x20b8d5 & 8 && typeof emscripten_source_map == "undefined") {
        _0xcabc97("Source map information is not available, emscripten_log with EM_LOG_C_STACK will be ignored. Build with \"--pre-js $EMSCRIPTEN/src/emscripten-source-map.min.js\" linker flag to add source map loading to code.");
        _0x20b8d5 ^= 8;
        _0x20b8d5 |= 16;
      }
      var _0x50bd1b = null;
      if (_0x20b8d5 & 128) {
        _0x50bd1b = _0x301acb(arguments);
        while (_0x50bd1b[1].includes("_emscripten_")) {
          _0x50bd1b = _0x301acb(_0x50bd1b[0]);
        }
      }
      var _0x36f168 = _0x752a63.split("\n");
      _0x752a63 = "";
      var _0x3751f7 = new RegExp("\\s*(.*?)@(.*?):([0-9]+):([0-9]+)");
      var _0x507a4a = new RegExp("\\s*(.*?)@(.*):(.*)(:(.*))?");
      var _0x2083b3 = new RegExp("\\s*at (.*?) \\((.*):(.*):(.*)\\)");
      for (var _0x4c9e84 in _0x36f168) {
        var _0x29c882 = _0x36f168[_0x4c9e84];
        var _0x498507 = "";
        var _0x4b71ce = "";
        var _0xf4783d = 0;
        var _0x432f9e = 0;
        var _0x590d7e = _0x2083b3.exec(_0x29c882);
        if (_0x590d7e && _0x590d7e.length == 5) {
          _0x498507 = _0x590d7e[1];
          _0x4b71ce = _0x590d7e[2];
          _0xf4783d = _0x590d7e[3];
          _0x432f9e = _0x590d7e[4];
        } else {
          _0x590d7e = _0x3751f7.exec(_0x29c882);
          if (!_0x590d7e) {
            _0x590d7e = _0x507a4a.exec(_0x29c882);
          }
          if (_0x590d7e && _0x590d7e.length >= 4) {
            _0x498507 = _0x590d7e[1];
            _0x4b71ce = _0x590d7e[2];
            _0xf4783d = _0x590d7e[3];
            _0x432f9e = _0x590d7e[4] | 0;
          } else {
            _0x752a63 += _0x29c882 + "\n";
            continue;
          }
        }
        var _0x399ba9 = false;
        if (_0x20b8d5 & 8) {
          var _0x496bf2 = emscripten_source_map.originalPositionFor({
            line: _0xf4783d,
            column: _0x432f9e
          });
          _0x399ba9 = _0x496bf2 && _0x496bf2.source;
          if (_0x399ba9) {
            if (_0x20b8d5 & 64) {
              _0x496bf2.source = _0x496bf2.source.substring(_0x496bf2.source.replace(/\\/g, "/").lastIndexOf("/") + 1);
            }
            _0x752a63 += "    at " + _0x498507 + " (" + _0x496bf2.source + ":" + _0x496bf2.line + ":" + _0x496bf2.column + ")\n";
          }
        }
        if (_0x20b8d5 & 16 || !_0x399ba9) {
          if (_0x20b8d5 & 64) {
            _0x4b71ce = _0x4b71ce.substring(_0x4b71ce.replace(/\\/g, "/").lastIndexOf("/") + 1);
          }
          _0x752a63 += (_0x399ba9 ? "     = " + _0x498507 : "    at " + _0x498507) + " (" + _0x4b71ce + ":" + _0xf4783d + ":" + _0x432f9e + ")\n";
        }
        if (_0x20b8d5 & 128 && _0x50bd1b[0]) {
          if (_0x50bd1b[1] == _0x498507 && _0x50bd1b[2].length > 0) {
            _0x752a63 = _0x752a63.replace(/\s+$/, "");
            _0x752a63 += " with values: " + _0x50bd1b[1] + _0x50bd1b[2] + "\n";
          }
          _0x50bd1b = _0x301acb(_0x50bd1b[0]);
        }
      }
      _0x752a63 = _0x752a63.replace(/\s+$/, "");
      return _0x752a63;
    }
    function _0x396c16(_0x518b02, _0x5a2cfb) {
      if (_0x518b02 & 24) {
        _0x5a2cfb = _0x5a2cfb.replace(/\s+$/, "");
        _0x5a2cfb += (_0x5a2cfb.length > 0 ? "\n" : "") + _0x48993c(_0x518b02);
      }
      if (_0x518b02 & 1) {
        if (_0x518b02 & 4) {
          console.error(_0x5a2cfb);
        } else if (_0x518b02 & 2) {
          console.warn(_0x5a2cfb);
        } else if (_0x518b02 & 512) {
          console.info(_0x5a2cfb);
        } else if (_0x518b02 & 256) {
          console.debug(_0x5a2cfb);
        } else {
          console.log(_0x5a2cfb);
        }
      } else if (_0x518b02 & 6) {
        _0x2b9f46(_0x5a2cfb);
      } else {
        _0x51fb9e(_0x5a2cfb);
      }
    }
    function _0x47b79d(_0x260413, _0xe654cf, _0x34311e) {
      var _0x5bd582 = _0x1ac905(_0xe654cf, _0x34311e);
      var _0x51d435 = _0x1c811f(_0x5bd582, 0);
      _0x396c16(_0x260413, _0x51d435);
    }
    function _0x3b7516(_0x43d511, _0x3a5eae, _0x4b3f84) {
      _0xb4481c.copyWithin(_0x43d511, _0x3a5eae, _0x3a5eae + _0x4b3f84);
    }
    function _0x81a8e1(_0x4fb6f4, _0x593e90) {
      if (!_0x5467e5.fullscreenEnabled()) {
        return -1;
      }
      _0x4fb6f4 = _0x2c3b56(_0x4fb6f4);
      if (!_0x4fb6f4) {
        return -4;
      }
      if (!_0x4fb6f4.requestFullscreen && !_0x4fb6f4.webkitRequestFullscreen) {
        return -3;
      }
      var _0x2f86f5 = _0x5467e5.canPerformEventHandlerRequests();
      if (!_0x2f86f5) {
        if (_0x593e90.deferUntilInEventHandler) {
          _0x5467e5.deferCall(_0x3810f7, 1, [_0x4fb6f4, _0x593e90]);
          return 1;
        } else {
          return -2;
        }
      }
      return _0x3810f7(_0x4fb6f4, _0x593e90);
    }
    function _0x5021e6(_0x4a1a5d, _0x3c311a) {
      var _0x49cc15 = {
        scaleMode: 0,
        canvasResolutionScaleMode: 0,
        filteringMode: 0,
        deferUntilInEventHandler: _0x3c311a,
        canvasResizedCallbackTargetThread: 2
      };
      return _0x81a8e1(_0x4a1a5d, _0x49cc15);
    }
    function _0x52a3b2(_0x2a0d29, _0x1a19ab) {
      _0x2a0d29 = _0x2c3b56(_0x2a0d29);
      if (!_0x2a0d29) {
        return -4;
      }
      if (!_0x2a0d29.requestPointerLock && !_0x2a0d29.msRequestPointerLock) {
        return -1;
      }
      var _0x5b55fc = _0x5467e5.canPerformEventHandlerRequests();
      if (!_0x5b55fc) {
        if (_0x1a19ab) {
          _0x5467e5.deferCall(_0x3e4f53, 2, [_0x2a0d29]);
          return 1;
        } else {
          return -2;
        }
      }
      return _0x3e4f53(_0x2a0d29);
    }
    function _0x3d984c(_0x8393f9) {
      try {
        _0x598810.grow(_0x8393f9 - _0x1ae08d.byteLength + 65535 >>> 16);
        _0x3f3708(_0x598810.buffer);
        return 1;
      } catch (_0x39f420) {}
    }
    function _0x140c51(_0x868578) {
      var _0x5c25d6 = _0xb4481c.length;
      _0x868578 = _0x868578 >>> 0;
      var _0x5ea333 = _0x1edd0f();
      if (_0x868578 > _0x5ea333) {
        return false;
      }
      let _0x59f01f = (_0x48be1e, _0x3cabc9) => _0x48be1e + (_0x3cabc9 - _0x48be1e % _0x3cabc9) % _0x3cabc9;
      for (var _0x38650e = 1; _0x38650e <= 4; _0x38650e *= 2) {
        var _0x5e09d0 = _0x5c25d6 * (1 + 0.2 / _0x38650e);
        _0x5e09d0 = Math.min(_0x5e09d0, _0x868578 + 100663296);
        var _0x360163 = Math.min(_0x5ea333, _0x59f01f(Math.max(_0x868578, _0x5e09d0), 65536));
        var _0x3f75db = _0x3d984c(_0x360163);
        if (_0x3f75db) {
          return true;
        }
      }
      return false;
    }
    function _0x1b5ed1() {
      try {
        if (navigator.getGamepads) {
          if (_0x5467e5.lastGamepadState = navigator.getGamepads()) {
            return 0;
          } else {
            return -1;
          }
        }
      } catch (_0x2da410) {
        navigator.getGamepads = null;
      }
      return -1;
    }
    function _0x2107c9(_0x12745e, _0x369bac, _0x2311b4, _0x52b470, _0x53f0f4, _0x1dfc6c, _0x412029) {
      if (!_0x5467e5.focusEvent) {
        _0x5467e5.focusEvent = _0x5d55ea(256);
      }
      function _0x38d651(_0xb8c237) {
        var _0x2ab5ee = _0xb8c237 || event;
        var _0x51c29e = _0x5467e5.getNodeNameForTarget(_0x2ab5ee.target);
        var _0x520273 = _0x2ab5ee.target.id ? _0x2ab5ee.target.id : "";
        var _0x461e8e = _0x5467e5.focusEvent;
        _0xb1d3f9(_0x51c29e, _0x461e8e + 0, 128);
        _0xb1d3f9(_0x520273, _0x461e8e + 128, 128);
        if (function (_0x2093e5, _0x2b5470, _0x503491) {
          return _0x3cf839.apply(null, [_0x52b470, _0x2093e5, _0x2b5470, _0x503491]);
        }(_0x53f0f4, _0x461e8e, _0x369bac)) {
          _0x2ab5ee.preventDefault();
        }
      }
      var _0x2ab8f5 = {
        target: _0x2c3b56(_0x12745e),
        eventTypeString: _0x1dfc6c,
        callbackfunc: _0x52b470,
        handlerFunc: _0x38d651,
        useCapture: _0x2311b4
      };
      _0x5467e5.registerOrRemoveHandler(_0x2ab8f5);
    }
    function _0x58450a(_0x34153a, _0x5628ee, _0x3339ff, _0x3b7972, _0x2b42ba) {
      _0x2107c9(_0x34153a, _0x5628ee, _0x3339ff, _0x3b7972, 12, "blur", _0x2b42ba);
      return 0;
    }
    function _0x46aebb(_0x1a5c21, _0x351128, _0xb5081e, _0xc7eff7, _0x3a31b1) {
      _0x2107c9(_0x1a5c21, _0x351128, _0xb5081e, _0xc7eff7, 13, "focus", _0x3a31b1);
      return 0;
    }
    function _0x12c308(_0x146a3f, _0x50414c, _0x10148b, _0x4c2bc3, _0x29deb2, _0x18c133, _0x38ff6a) {
      if (!_0x5467e5.fullscreenChangeEvent) {
        _0x5467e5.fullscreenChangeEvent = _0x5d55ea(280);
      }
      function _0x4d7a39(_0x45a988) {
        var _0xc62f7b = _0x45a988 || event;
        var _0x20007c = _0x5467e5.fullscreenChangeEvent;
        _0x4267e5(_0x20007c);
        if (function (_0x1d404f, _0x504438, _0xc99215) {
          return _0x3cf839.apply(null, [_0x4c2bc3, _0x1d404f, _0x504438, _0xc99215]);
        }(_0x29deb2, _0x20007c, _0x50414c)) {
          _0xc62f7b.preventDefault();
        }
      }
      var _0x96a28a = {
        target: _0x146a3f,
        eventTypeString: _0x18c133,
        callbackfunc: _0x4c2bc3,
        handlerFunc: _0x4d7a39,
        useCapture: _0x10148b
      };
      _0x5467e5.registerOrRemoveHandler(_0x96a28a);
    }
    function _0x57a4ad(_0x4a417a, _0x171a2f, _0x5f0255, _0x55e2dd, _0xf704e) {
      if (!_0x5467e5.fullscreenEnabled()) {
        return -1;
      }
      _0x4a417a = _0x2c3b56(_0x4a417a);
      if (!_0x4a417a) {
        return -4;
      }
      _0x12c308(_0x4a417a, _0x171a2f, _0x5f0255, _0x55e2dd, 19, "fullscreenchange", _0xf704e);
      _0x12c308(_0x4a417a, _0x171a2f, _0x5f0255, _0x55e2dd, 19, "webkitfullscreenchange", _0xf704e);
      return 0;
    }
    function _0x41ad74(_0x461c52, _0x40e920, _0xd697ae, _0x2fca39, _0x3a323e, _0x11dc34, _0xbe890) {
      if (!_0x5467e5.gamepadEvent) {
        _0x5467e5.gamepadEvent = _0x5d55ea(1432);
      }
      function _0x2d6970(_0x262dd0) {
        var _0x56a65c = _0x262dd0 || event;
        var _0x149d11 = _0x5467e5.gamepadEvent;
        _0x52e3a4(_0x149d11, _0x56a65c.gamepad);
        if (function (_0x242f6f, _0x4af58d, _0xf9d160) {
          return _0x3cf839.apply(null, [_0x2fca39, _0x242f6f, _0x4af58d, _0xf9d160]);
        }(_0x3a323e, _0x149d11, _0x40e920)) {
          _0x56a65c.preventDefault();
        }
      }
      var _0xc0f435 = {
        target: _0x2c3b56(_0x461c52),
        allowsDeferredCalls: true,
        eventTypeString: _0x11dc34,
        callbackfunc: _0x2fca39,
        handlerFunc: _0x2d6970,
        useCapture: _0xd697ae
      };
      _0x5467e5.registerOrRemoveHandler(_0xc0f435);
    }
    function _0x1a4585(_0x328c13, _0x36217b, _0x21d76e, _0x4a8d6e) {
      if (_0x1b5ed1()) {
        return -1;
      }
      return _0x41ad74(2, _0x328c13, _0x36217b, _0x21d76e, 26, "gamepadconnected", _0x4a8d6e);
    }
    function _0x986fcb(_0x5a68d2, _0x2c825f, _0x441cf9, _0x40d8bb) {
      if (_0x1b5ed1()) {
        return -1;
      }
      return _0x41ad74(2, _0x5a68d2, _0x2c825f, _0x441cf9, 27, "gamepaddisconnected", _0x40d8bb);
    }
    function _0x198b2b(_0x20c64a, _0x5afb83, _0x3a4c91) {
      return setInterval(function () {
        _0x15e899(function () {
          (function (_0xd75301) {
            _0x4f6e0f.apply(null, [_0x20c64a, _0xd75301]);
          })(_0x3a4c91);
        });
      }, _0x5afb83);
    }
    function _0x3a89b9(_0x195e08, _0x2f7aef, _0x41d325, _0x1a73e7, _0x3338e1, _0x507f48, _0x27a584) {
      if (!_0x5467e5.keyEvent) {
        _0x5467e5.keyEvent = _0x5d55ea(176);
      }
      function _0x29e696(_0x4b7148) {
        var _0xa44eb7 = _0x5467e5.keyEvent;
        _0x113710[_0xa44eb7 >> 3] = _0x4b7148.timeStamp;
        var _0x86cd77 = _0xa44eb7 >> 2;
        _0x47a7a3[_0x86cd77 + 2] = _0x4b7148.location;
        _0x47a7a3[_0x86cd77 + 3] = _0x4b7148.ctrlKey;
        _0x47a7a3[_0x86cd77 + 4] = _0x4b7148.shiftKey;
        _0x47a7a3[_0x86cd77 + 5] = _0x4b7148.altKey;
        _0x47a7a3[_0x86cd77 + 6] = _0x4b7148.metaKey;
        _0x47a7a3[_0x86cd77 + 7] = _0x4b7148.repeat;
        _0x47a7a3[_0x86cd77 + 8] = _0x4b7148.charCode;
        _0x47a7a3[_0x86cd77 + 9] = _0x4b7148.keyCode;
        _0x47a7a3[_0x86cd77 + 10] = _0x4b7148.which;
        _0xb1d3f9(_0x4b7148.key || "", _0xa44eb7 + 44, 32);
        _0xb1d3f9(_0x4b7148.code || "", _0xa44eb7 + 76, 32);
        _0xb1d3f9(_0x4b7148.char || "", _0xa44eb7 + 108, 32);
        _0xb1d3f9(_0x4b7148.locale || "", _0xa44eb7 + 140, 32);
        if (function (_0x216506, _0x44e3d1, _0x40dc9f) {
          return _0x3cf839.apply(null, [_0x1a73e7, _0x216506, _0x44e3d1, _0x40dc9f]);
        }(_0x3338e1, _0xa44eb7, _0x2f7aef)) {
          _0x4b7148.preventDefault();
        }
      }
      var _0x539ee4 = {
        target: _0x2c3b56(_0x195e08),
        allowsDeferredCalls: true,
        eventTypeString: _0x507f48,
        callbackfunc: _0x1a73e7,
        handlerFunc: _0x29e696,
        useCapture: _0x41d325
      };
      _0x5467e5.registerOrRemoveHandler(_0x539ee4);
    }
    function _0x2d1ce1(_0x2cc20b, _0x3eb108, _0x153886, _0x3c5777, _0x59d2ee) {
      _0x3a89b9(_0x2cc20b, _0x3eb108, _0x153886, _0x3c5777, 2, "keydown", _0x59d2ee);
      return 0;
    }
    function _0x1aea79(_0x163b3c, _0x454c23, _0x23b13d, _0x1eaefb, _0x5433be) {
      _0x3a89b9(_0x163b3c, _0x454c23, _0x23b13d, _0x1eaefb, 1, "keypress", _0x5433be);
      return 0;
    }
    function _0x5923e5(_0x4db582, _0x5254c4, _0x51fe12, _0xa0c786, _0x2d8fb0) {
      _0x3a89b9(_0x4db582, _0x5254c4, _0x51fe12, _0xa0c786, 3, "keyup", _0x2d8fb0);
      return 0;
    }
    function _0x45da90(_0x22c005, _0x545d57, _0x2fb445) {
      function _0x93abf8() {
        _0x4ef107.call(null, _0x22c005);
      }
      _0x5c6217(_0x93abf8, _0x545d57, _0x2fb445);
    }
    function _0x4f771f(_0x1812bd, _0x441f88, _0x2ec3e9) {
      _0x113710[_0x1812bd >> 3] = _0x441f88.timeStamp;
      var _0x41f0a2 = _0x1812bd >> 2;
      _0x47a7a3[_0x41f0a2 + 2] = _0x441f88.screenX;
      _0x47a7a3[_0x41f0a2 + 3] = _0x441f88.screenY;
      _0x47a7a3[_0x41f0a2 + 4] = _0x441f88.clientX;
      _0x47a7a3[_0x41f0a2 + 5] = _0x441f88.clientY;
      _0x47a7a3[_0x41f0a2 + 6] = _0x441f88.ctrlKey;
      _0x47a7a3[_0x41f0a2 + 7] = _0x441f88.shiftKey;
      _0x47a7a3[_0x41f0a2 + 8] = _0x441f88.altKey;
      _0x47a7a3[_0x41f0a2 + 9] = _0x441f88.metaKey;
      _0x3c10c6[_0x41f0a2 * 2 + 20] = _0x441f88.button;
      _0x3c10c6[_0x41f0a2 * 2 + 21] = _0x441f88.buttons;
      _0x47a7a3[_0x41f0a2 + 11] = _0x441f88.movementX;
      _0x47a7a3[_0x41f0a2 + 12] = _0x441f88.movementY;
      var _0x5bd73d = _0x568286(_0x2ec3e9);
      _0x47a7a3[_0x41f0a2 + 13] = _0x441f88.clientX - _0x5bd73d.left;
      _0x47a7a3[_0x41f0a2 + 14] = _0x441f88.clientY - _0x5bd73d.top;
    }
    function _0x1d2200(_0xd9176c, _0x5c48ea, _0x1f09eb, _0x52edfe, _0x426ada, _0x391f25, _0x3b22e0) {
      if (!_0x5467e5.mouseEvent) {
        _0x5467e5.mouseEvent = _0x5d55ea(72);
      }
      _0xd9176c = _0x2c3b56(_0xd9176c);
      function _0x18f899(_0x2fc3cd) {
        var _0x13700d = _0x2fc3cd || event;
        _0x4f771f(_0x5467e5.mouseEvent, _0x13700d, _0xd9176c);
        if (function (_0x317775, _0x49d0e8, _0x7e024b) {
          return _0x3cf839.apply(null, [_0x52edfe, _0x317775, _0x49d0e8, _0x7e024b]);
        }(_0x426ada, _0x5467e5.mouseEvent, _0x5c48ea)) {
          _0x13700d.preventDefault();
        }
      }
      var _0x1e7c46 = {
        target: _0xd9176c,
        allowsDeferredCalls: _0x391f25 != "mousemove" && _0x391f25 != "mouseenter" && _0x391f25 != "mouseleave",
        eventTypeString: _0x391f25,
        callbackfunc: _0x52edfe,
        handlerFunc: _0x18f899,
        useCapture: _0x1f09eb
      };
      _0x5467e5.registerOrRemoveHandler(_0x1e7c46);
    }
    function _0x2159d2(_0x209169, _0x501801, _0x23a3b0, _0x343943, _0x226bca) {
      _0x1d2200(_0x209169, _0x501801, _0x23a3b0, _0x343943, 5, "mousedown", _0x226bca);
      return 0;
    }
    function _0x4e3b68(_0x2b8f2f, _0x251172, _0x4924c0, _0x1a893b, _0x3e3d22) {
      _0x1d2200(_0x2b8f2f, _0x251172, _0x4924c0, _0x1a893b, 8, "mousemove", _0x3e3d22);
      return 0;
    }
    function _0x29dc3f(_0x518500, _0x2954ca, _0x2cef4c, _0x875948, _0x58ddd6) {
      _0x1d2200(_0x518500, _0x2954ca, _0x2cef4c, _0x875948, 6, "mouseup", _0x58ddd6);
      return 0;
    }
    function _0x4f062e(_0x254ac2) {
      var _0x18eb31 = document.pointerLockElement || document.mozPointerLockElement || document.webkitPointerLockElement || document.msPointerLockElement;
      var _0x5270a6 = !!_0x18eb31;
      _0x47a7a3[_0x254ac2 >> 2] = _0x5270a6;
      var _0x5839da = _0x5467e5.getNodeNameForTarget(_0x18eb31);
      var _0x239da1 = _0x18eb31 && _0x18eb31.id ? _0x18eb31.id : "";
      _0xb1d3f9(_0x5839da, _0x254ac2 + 4, 128);
      _0xb1d3f9(_0x239da1, _0x254ac2 + 132, 128);
    }
    function _0x1b904a(_0xf37874, _0x452a49, _0x509b08, _0x309bd, _0x38706b, _0x23f47f, _0x5978ae) {
      if (!_0x5467e5.pointerlockChangeEvent) {
        _0x5467e5.pointerlockChangeEvent = _0x5d55ea(260);
      }
      function _0x12b9f7(_0x3b6ec5) {
        var _0x5f113f = _0x3b6ec5 || event;
        var _0x31d18f = _0x5467e5.pointerlockChangeEvent;
        _0x4f062e(_0x31d18f);
        if (function (_0x57e272, _0x4cfe7b, _0x512ea4) {
          return _0x3cf839.apply(null, [_0x309bd, _0x57e272, _0x4cfe7b, _0x512ea4]);
        }(_0x38706b, _0x31d18f, _0x452a49)) {
          _0x5f113f.preventDefault();
        }
      }
      var _0x5c91b6 = {
        target: _0xf37874,
        eventTypeString: _0x23f47f,
        callbackfunc: _0x309bd,
        handlerFunc: _0x12b9f7,
        useCapture: _0x509b08
      };
      _0x5467e5.registerOrRemoveHandler(_0x5c91b6);
    }
    function _0x37efd4(_0x3ea5af, _0x5d785f, _0x30eefe, _0xb80621, _0x315ae6) {
      if (!document || !document.body || !document.body.requestPointerLock && !document.body.mozRequestPointerLock && !document.body.webkitRequestPointerLock && !document.body.msRequestPointerLock) {
        return -1;
      }
      _0x3ea5af = _0x2c3b56(_0x3ea5af);
      if (!_0x3ea5af) {
        return -4;
      }
      _0x1b904a(_0x3ea5af, _0x5d785f, _0x30eefe, _0xb80621, 20, "pointerlockchange", _0x315ae6);
      _0x1b904a(_0x3ea5af, _0x5d785f, _0x30eefe, _0xb80621, 20, "mozpointerlockchange", _0x315ae6);
      _0x1b904a(_0x3ea5af, _0x5d785f, _0x30eefe, _0xb80621, 20, "webkitpointerlockchange", _0x315ae6);
      _0x1b904a(_0x3ea5af, _0x5d785f, _0x30eefe, _0xb80621, 20, "mspointerlockchange", _0x315ae6);
      return 0;
    }
    function _0x4e780c(_0x3bc09f, _0x4d9cff, _0x41f673, _0x3dee38, _0x2780e4, _0x1789f0, _0x376169) {
      if (!_0x5467e5.touchEvent) {
        _0x5467e5.touchEvent = _0x5d55ea(1696);
      }
      _0x3bc09f = _0x2c3b56(_0x3bc09f);
      function _0x537184(_0x484884) {
        var _0x67c45b;
        var _0x35562e = {};
        var _0x418f96 = _0x484884.touches;
        for (var _0x3dd539 = 0; _0x3dd539 < _0x418f96.length; ++_0x3dd539) {
          _0x67c45b = _0x418f96[_0x3dd539];
          _0x67c45b.isChanged = _0x67c45b.onTarget = 0;
          _0x35562e[_0x67c45b.identifier] = _0x67c45b;
        }
        for (var _0x3dd539 = 0; _0x3dd539 < _0x484884.changedTouches.length; ++_0x3dd539) {
          _0x67c45b = _0x484884.changedTouches[_0x3dd539];
          _0x67c45b.isChanged = 1;
          _0x35562e[_0x67c45b.identifier] = _0x67c45b;
        }
        for (var _0x3dd539 = 0; _0x3dd539 < _0x484884.targetTouches.length; ++_0x3dd539) {
          _0x35562e[_0x484884.targetTouches[_0x3dd539].identifier].onTarget = 1;
        }
        var _0x2c9e4f = _0x5467e5.touchEvent;
        var _0x2d0833 = _0x2c9e4f >> 2;
        _0x47a7a3[_0x2d0833 + 3] = _0x484884.ctrlKey;
        _0x47a7a3[_0x2d0833 + 4] = _0x484884.shiftKey;
        _0x47a7a3[_0x2d0833 + 5] = _0x484884.altKey;
        _0x47a7a3[_0x2d0833 + 6] = _0x484884.metaKey;
        _0x2d0833 += 7;
        var _0x1341ed = _0x568286(_0x3bc09f);
        var _0x49d69f = 0;
        for (var _0x3dd539 in _0x35562e) {
          var _0x67c45b = _0x35562e[_0x3dd539];
          _0x47a7a3[_0x2d0833 + 0] = _0x67c45b.identifier;
          _0x47a7a3[_0x2d0833 + 1] = _0x67c45b.screenX;
          _0x47a7a3[_0x2d0833 + 2] = _0x67c45b.screenY;
          _0x47a7a3[_0x2d0833 + 3] = _0x67c45b.clientX;
          _0x47a7a3[_0x2d0833 + 4] = _0x67c45b.clientY;
          _0x47a7a3[_0x2d0833 + 5] = _0x67c45b.pageX;
          _0x47a7a3[_0x2d0833 + 6] = _0x67c45b.pageY;
          _0x47a7a3[_0x2d0833 + 7] = _0x67c45b.isChanged;
          _0x47a7a3[_0x2d0833 + 8] = _0x67c45b.onTarget;
          _0x47a7a3[_0x2d0833 + 9] = _0x67c45b.clientX - _0x1341ed.left;
          _0x47a7a3[_0x2d0833 + 10] = _0x67c45b.clientY - _0x1341ed.top;
          _0x2d0833 += 13;
          if (++_0x49d69f > 31) {
            break;
          }
        }
        _0x47a7a3[_0x2c9e4f + 8 >> 2] = _0x49d69f;
        if (function (_0x1ff882, _0x4b3141, _0x1c6808) {
          return _0x3cf839.apply(null, [_0x3dee38, _0x1ff882, _0x4b3141, _0x1c6808]);
        }(_0x2780e4, _0x2c9e4f, _0x4d9cff)) {
          _0x484884.preventDefault();
        }
      }
      var _0x1a5517 = {
        target: _0x3bc09f,
        allowsDeferredCalls: _0x1789f0 == "touchstart" || _0x1789f0 == "touchend",
        eventTypeString: _0x1789f0,
        callbackfunc: _0x3dee38,
        handlerFunc: _0x537184,
        useCapture: _0x41f673
      };
      _0x5467e5.registerOrRemoveHandler(_0x1a5517);
    }
    function _0x4e05f0(_0x23a255, _0x2f2e18, _0x25f60f, _0x670b89, _0x4b88f5) {
      _0x4e780c(_0x23a255, _0x2f2e18, _0x25f60f, _0x670b89, 25, "touchcancel", _0x4b88f5);
      return 0;
    }
    function _0x492862(_0x3a5241, _0x16390a, _0xc2c01e, _0x41f450, _0x13563c) {
      _0x4e780c(_0x3a5241, _0x16390a, _0xc2c01e, _0x41f450, 23, "touchend", _0x13563c);
      return 0;
    }
    function _0x2f76b5(_0x1aeb44, _0x6b9f61, _0xab91b9, _0x4a2c30, _0x39c199) {
      _0x4e780c(_0x1aeb44, _0x6b9f61, _0xab91b9, _0x4a2c30, 24, "touchmove", _0x39c199);
      return 0;
    }
    function _0x87d8c6(_0x484560, _0x5cc9e8, _0x292039, _0x1ceeac, _0x3e6f6e) {
      _0x4e780c(_0x484560, _0x5cc9e8, _0x292039, _0x1ceeac, 22, "touchstart", _0x3e6f6e);
      return 0;
    }
    function _0x7ab587(_0x5215bd, _0x10db02, _0x1b6aa4, _0x5cdd23, _0x1c848e, _0x5b835e, _0x34706a) {
      if (!_0x5467e5.wheelEvent) {
        _0x5467e5.wheelEvent = _0x5d55ea(104);
      }
      function _0x38c040(_0x442397) {
        var _0x231305 = _0x442397 || event;
        var _0x5af2d4 = _0x5467e5.wheelEvent;
        _0x4f771f(_0x5af2d4, _0x231305, _0x5215bd);
        _0x113710[_0x5af2d4 + 72 >> 3] = _0x231305.deltaX;
        _0x113710[_0x5af2d4 + 80 >> 3] = _0x231305.deltaY;
        _0x113710[_0x5af2d4 + 88 >> 3] = _0x231305.deltaZ;
        _0x47a7a3[_0x5af2d4 + 96 >> 2] = _0x231305.deltaMode;
        if (function (_0x381676, _0x3e2a73, _0x367cf6) {
          return _0x3cf839.apply(null, [_0x5cdd23, _0x381676, _0x3e2a73, _0x367cf6]);
        }(_0x1c848e, _0x5af2d4, _0x10db02)) {
          _0x231305.preventDefault();
        }
      }
      var _0x3482c4 = {
        target: _0x5215bd,
        allowsDeferredCalls: true,
        eventTypeString: _0x5b835e,
        callbackfunc: _0x5cdd23,
        handlerFunc: _0x38c040,
        useCapture: _0x1b6aa4
      };
      _0x5467e5.registerOrRemoveHandler(_0x3482c4);
    }
    function _0x581a3d(_0x130374, _0x278b07, _0x4ec6ff, _0x4447ad, _0x279e81) {
      _0x130374 = _0x2c3b56(_0x130374);
      if (typeof _0x130374.onwheel != "undefined") {
        _0x7ab587(_0x130374, _0x278b07, _0x4ec6ff, _0x4447ad, 9, "wheel", _0x279e81);
        return 0;
      } else {
        return -1;
      }
    }
    function _0xea7f78(_0x324e78) {
      var _0x3d25aa = _0x324e78.getExtension("ANGLE_instanced_arrays");
      if (_0x3d25aa) {
        _0x324e78.vertexAttribDivisor = function (_0x1b9c7f, _0x28f5a7) {
          _0x3d25aa.vertexAttribDivisorANGLE(_0x1b9c7f, _0x28f5a7);
        };
        _0x324e78.drawArraysInstanced = function (_0x5cbfdb, _0x2a78b6, _0x20cd24, _0x23efe2) {
          _0x3d25aa.drawArraysInstancedANGLE(_0x5cbfdb, _0x2a78b6, _0x20cd24, _0x23efe2);
        };
        _0x324e78.drawElementsInstanced = function (_0x35d57c, _0x2343e9, _0x45c906, _0x2edcfe, _0x156b50) {
          _0x3d25aa.drawElementsInstancedANGLE(_0x35d57c, _0x2343e9, _0x45c906, _0x2edcfe, _0x156b50);
        };
        return 1;
      }
    }
    function _0xe87567(_0x4dbf9e) {
      var _0x3f48c1 = _0x4dbf9e.getExtension("OES_vertex_array_object");
      if (_0x3f48c1) {
        _0x4dbf9e.createVertexArray = function () {
          return _0x3f48c1.createVertexArrayOES();
        };
        _0x4dbf9e.deleteVertexArray = function (_0x4d2445) {
          _0x3f48c1.deleteVertexArrayOES(_0x4d2445);
        };
        _0x4dbf9e.bindVertexArray = function (_0x349ecf) {
          _0x3f48c1.bindVertexArrayOES(_0x349ecf);
        };
        _0x4dbf9e.isVertexArray = function (_0x47d97f) {
          return _0x3f48c1.isVertexArrayOES(_0x47d97f);
        };
        return 1;
      }
    }
    function _0x472943(_0x4eafe7) {
      var _0x34f0e7 = _0x4eafe7.getExtension("WEBGL_draw_buffers");
      if (_0x34f0e7) {
        _0x4eafe7.drawBuffers = function (_0x4cffde, _0x52fd47) {
          _0x34f0e7.drawBuffersWEBGL(_0x4cffde, _0x52fd47);
        };
        return 1;
      }
    }
    function _0x3f2138(_0x4762cd) {
      return !!(_0x4762cd.dibvbi = _0x4762cd.getExtension("WEBGL_draw_instanced_base_vertex_base_instance"));
    }
    function _0x3d706d(_0x3bce4a) {
      return !!(_0x3bce4a.mdibvbi = _0x3bce4a.getExtension("WEBGL_multi_draw_instanced_base_vertex_base_instance"));
    }
    function _0x8b458a(_0x1916bb) {
      return !!(_0x1916bb.multiDrawWebgl = _0x1916bb.getExtension("WEBGL_multi_draw"));
    }
    var _0x204083 = {
      counter: 1,
      buffers: [],
      mappedBuffers: {},
      programs: [],
      framebuffers: [],
      renderbuffers: [],
      textures: [],
      shaders: [],
      vaos: [],
      contexts: [],
      offscreenCanvases: {},
      queries: [],
      samplers: [],
      transformFeedbacks: [],
      syncs: [],
      byteSizeByTypeRoot: 5120,
      byteSizeByType: [1, 1, 2, 2, 4, 4, 4, 2, 3, 4, 8],
      stringCache: {},
      stringiCache: {},
      unpackAlignment: 4,
      recordError: function _0x59a770(_0x114905) {
        if (!_0x204083.lastError) {
          _0x204083.lastError = _0x114905;
        }
      },
      getNewId: function (_0x389356) {
        var _0x5ed9e5 = _0x204083.counter++;
        for (var _0x48e0e3 = _0x389356.length; _0x48e0e3 < _0x5ed9e5; _0x48e0e3++) {
          _0x389356[_0x48e0e3] = null;
        }
        return _0x5ed9e5;
      },
      MAX_TEMP_BUFFER_SIZE: 2097152,
      numTempVertexBuffersPerSize: 64,
      log2ceilLookup: function (_0x1ba3bf) {
        return 32 - Math.clz32(_0x1ba3bf === 0 ? 0 : _0x1ba3bf - 1);
      },
      generateTempBuffers: function (_0x429ed6, _0x4675b5) {
        var _0xac6c47 = _0x204083.log2ceilLookup(_0x204083.MAX_TEMP_BUFFER_SIZE);
        _0x4675b5.tempVertexBufferCounters1 = [];
        _0x4675b5.tempVertexBufferCounters2 = [];
        _0x4675b5.tempVertexBufferCounters1.length = _0x4675b5.tempVertexBufferCounters2.length = _0xac6c47 + 1;
        _0x4675b5.tempVertexBuffers1 = [];
        _0x4675b5.tempVertexBuffers2 = [];
        _0x4675b5.tempVertexBuffers1.length = _0x4675b5.tempVertexBuffers2.length = _0xac6c47 + 1;
        _0x4675b5.tempIndexBuffers = [];
        _0x4675b5.tempIndexBuffers.length = _0xac6c47 + 1;
        for (var _0x1e268d = 0; _0x1e268d <= _0xac6c47; ++_0x1e268d) {
          _0x4675b5.tempIndexBuffers[_0x1e268d] = null;
          _0x4675b5.tempVertexBufferCounters1[_0x1e268d] = _0x4675b5.tempVertexBufferCounters2[_0x1e268d] = 0;
          var _0x34e64c = _0x204083.numTempVertexBuffersPerSize;
          _0x4675b5.tempVertexBuffers1[_0x1e268d] = [];
          _0x4675b5.tempVertexBuffers2[_0x1e268d] = [];
          var _0x26402c = _0x4675b5.tempVertexBuffers1[_0x1e268d];
          var _0x32c05c = _0x4675b5.tempVertexBuffers2[_0x1e268d];
          _0x26402c.length = _0x32c05c.length = _0x34e64c;
          for (var _0xf677fe = 0; _0xf677fe < _0x34e64c; ++_0xf677fe) {
            _0x26402c[_0xf677fe] = _0x32c05c[_0xf677fe] = null;
          }
        }
        if (_0x429ed6) {
          _0x4675b5.tempQuadIndexBuffer = _0xc70178.createBuffer();
          _0x4675b5.GLctx.bindBuffer(34963, _0x4675b5.tempQuadIndexBuffer);
          var _0x5be090 = _0x204083.MAX_TEMP_BUFFER_SIZE >> 1;
          var _0x5d84bf = new Uint16Array(_0x5be090);
          var _0x1e268d = 0;
          var _0x2876f7 = 0;
          while (1) {
            _0x5d84bf[_0x1e268d++] = _0x2876f7;
            if (_0x1e268d >= _0x5be090) {
              break;
            }
            _0x5d84bf[_0x1e268d++] = _0x2876f7 + 1;
            if (_0x1e268d >= _0x5be090) {
              break;
            }
            _0x5d84bf[_0x1e268d++] = _0x2876f7 + 2;
            if (_0x1e268d >= _0x5be090) {
              break;
            }
            _0x5d84bf[_0x1e268d++] = _0x2876f7;
            if (_0x1e268d >= _0x5be090) {
              break;
            }
            _0x5d84bf[_0x1e268d++] = _0x2876f7 + 2;
            if (_0x1e268d >= _0x5be090) {
              break;
            }
            _0x5d84bf[_0x1e268d++] = _0x2876f7 + 3;
            if (_0x1e268d >= _0x5be090) {
              break;
            }
            _0x2876f7 += 4;
          }
          _0x4675b5.GLctx.bufferData(34963, _0x5d84bf, 35044);
          _0x4675b5.GLctx.bindBuffer(34963, null);
        }
      },
      getTempVertexBuffer: function _0x5dbc4d(_0x2f072a) {
        var _0x3c84e3 = _0x204083.log2ceilLookup(_0x2f072a);
        var _0xd91a40 = _0x204083.currentContext.tempVertexBuffers1[_0x3c84e3];
        var _0x3205ad = _0x204083.currentContext.tempVertexBufferCounters1[_0x3c84e3];
        _0x204083.currentContext.tempVertexBufferCounters1[_0x3c84e3] = _0x204083.currentContext.tempVertexBufferCounters1[_0x3c84e3] + 1 & _0x204083.numTempVertexBuffersPerSize - 1;
        var _0xe748ae = _0xd91a40[_0x3205ad];
        if (_0xe748ae) {
          return _0xe748ae;
        }
        var _0x544028 = _0xc70178.getParameter(34964);
        _0xd91a40[_0x3205ad] = _0xc70178.createBuffer();
        _0xc70178.bindBuffer(34962, _0xd91a40[_0x3205ad]);
        _0xc70178.bufferData(34962, 1 << _0x3c84e3, 35048);
        _0xc70178.bindBuffer(34962, _0x544028);
        return _0xd91a40[_0x3205ad];
      },
      getTempIndexBuffer: function _0x1236e7(_0x7b196) {
        var _0x5dd59f = _0x204083.log2ceilLookup(_0x7b196);
        var _0x274072 = _0x204083.currentContext.tempIndexBuffers[_0x5dd59f];
        if (_0x274072) {
          return _0x274072;
        }
        var _0x554c89 = _0xc70178.getParameter(34965);
        _0x204083.currentContext.tempIndexBuffers[_0x5dd59f] = _0xc70178.createBuffer();
        _0xc70178.bindBuffer(34963, _0x204083.currentContext.tempIndexBuffers[_0x5dd59f]);
        _0xc70178.bufferData(34963, 1 << _0x5dd59f, 35048);
        _0xc70178.bindBuffer(34963, _0x554c89);
        return _0x204083.currentContext.tempIndexBuffers[_0x5dd59f];
      },
      newRenderingFrameStarted: function _0x805bba() {
        if (!_0x204083.currentContext) {
          return;
        }
        var _0x475968 = _0x204083.currentContext.tempVertexBuffers1;
        _0x204083.currentContext.tempVertexBuffers1 = _0x204083.currentContext.tempVertexBuffers2;
        _0x204083.currentContext.tempVertexBuffers2 = _0x475968;
        _0x475968 = _0x204083.currentContext.tempVertexBufferCounters1;
        _0x204083.currentContext.tempVertexBufferCounters1 = _0x204083.currentContext.tempVertexBufferCounters2;
        _0x204083.currentContext.tempVertexBufferCounters2 = _0x475968;
        var _0x3a95f0 = _0x204083.log2ceilLookup(_0x204083.MAX_TEMP_BUFFER_SIZE);
        for (var _0x5579d0 = 0; _0x5579d0 <= _0x3a95f0; ++_0x5579d0) {
          _0x204083.currentContext.tempVertexBufferCounters1[_0x5579d0] = 0;
        }
      },
      getSource: function (_0x3e4537, _0x324b9b, _0x5624f9, _0x1f359c) {
        var _0x1fbea3 = "";
        for (var _0x41fb62 = 0; _0x41fb62 < _0x324b9b; ++_0x41fb62) {
          var _0x2770c2 = _0x1f359c ? _0x47a7a3[_0x1f359c + _0x41fb62 * 4 >> 2] : -1;
          _0x1fbea3 += _0x2b7aa3(_0x47a7a3[_0x5624f9 + _0x41fb62 * 4 >> 2], _0x2770c2 < 0 ? undefined : _0x2770c2);
        }
        return _0x1fbea3;
      },
      calcBufLength: function _0x540e3c(_0x4bbd2e, _0x646f7c, _0x46323c, _0x5540bc) {
        if (_0x46323c > 0) {
          return _0x5540bc * _0x46323c;
        }
        var _0x262403 = _0x204083.byteSizeByType[_0x646f7c - _0x204083.byteSizeByTypeRoot];
        return _0x4bbd2e * _0x262403 * _0x5540bc;
      },
      usedTempBuffers: [],
      preDrawHandleClientVertexAttribBindings: function _0x12b684(_0x118bbc) {
        _0x204083.resetBufferBinding = false;
        for (var _0x3ddfe6 = 0; _0x3ddfe6 < _0x204083.currentContext.maxVertexAttribs; ++_0x3ddfe6) {
          var _0x428fdc = _0x204083.currentContext.clientBuffers[_0x3ddfe6];
          if (!_0x428fdc.clientside || !_0x428fdc.enabled) {
            continue;
          }
          _0x204083.resetBufferBinding = true;
          var _0x5b1303 = _0x204083.calcBufLength(_0x428fdc.size, _0x428fdc.type, _0x428fdc.stride, _0x118bbc);
          var _0x55036e = _0x204083.getTempVertexBuffer(_0x5b1303);
          _0xc70178.bindBuffer(34962, _0x55036e);
          _0xc70178.bufferSubData(34962, 0, _0xb4481c.subarray(_0x428fdc.ptr, _0x428fdc.ptr + _0x5b1303));
          _0x428fdc.vertexAttribPointerAdaptor.call(_0xc70178, _0x3ddfe6, _0x428fdc.size, _0x428fdc.type, _0x428fdc.normalized, _0x428fdc.stride, 0);
        }
      },
      postDrawHandleClientVertexAttribBindings: function _0x170873() {
        if (_0x204083.resetBufferBinding) {
          _0xc70178.bindBuffer(34962, _0x204083.buffers[_0xc70178.currentArrayBufferBinding]);
        }
      },
      createContext: function (_0x59ea72, _0x127bca) {
        if (!_0x59ea72.getContextSafariWebGL2Fixed) {
          _0x59ea72.getContextSafariWebGL2Fixed = _0x59ea72.getContext;
          function _0x48f8c2(_0x2540ea, _0x3ec517) {
            var _0x5da1c7 = _0x59ea72.getContextSafariWebGL2Fixed(_0x2540ea, _0x3ec517);
            if (_0x2540ea == "webgl" == _0x5da1c7 instanceof WebGLRenderingContext) {
              return _0x5da1c7;
            } else {
              return null;
            }
          }
          _0x59ea72.getContext = _0x48f8c2;
        }
        var _0x3c9acd = _0x127bca.majorVersion > 1 ? _0x59ea72.getContext("webgl2", _0x127bca) : _0x59ea72.getContext("webgl", _0x127bca);
        if (!_0x3c9acd) {
          return 0;
        }
        var _0x1748cd = _0x204083.registerContext(_0x3c9acd, _0x127bca);
        return _0x1748cd;
      },
      registerContext: function (_0x1c4b4d, _0x5b9b2e) {
        var _0x29c43c = _0x204083.getNewId(_0x204083.contexts);
        var _0x34d0e2 = {
          handle: _0x29c43c,
          attributes: _0x5b9b2e,
          version: _0x5b9b2e.majorVersion,
          GLctx: _0x1c4b4d
        };
        if (_0x1c4b4d.canvas) {
          _0x1c4b4d.canvas.GLctxObject = _0x34d0e2;
        }
        _0x204083.contexts[_0x29c43c] = _0x34d0e2;
        if (typeof _0x5b9b2e.enableExtensionsByDefault == "undefined" || _0x5b9b2e.enableExtensionsByDefault) {
          _0x204083.initExtensions(_0x34d0e2);
        }
        _0x34d0e2.maxVertexAttribs = _0x34d0e2.GLctx.getParameter(34921);
        _0x34d0e2.clientBuffers = [];
        for (var _0x596344 = 0; _0x596344 < _0x34d0e2.maxVertexAttribs; _0x596344++) {
          _0x34d0e2.clientBuffers[_0x596344] = {
            enabled: false,
            clientside: false,
            size: 0,
            type: 0,
            normalized: 0,
            stride: 0,
            ptr: 0,
            vertexAttribPointerAdaptor: null
          };
        }
        _0x204083.generateTempBuffers(false, _0x34d0e2);
        return _0x29c43c;
      },
      makeContextCurrent: function (_0x203ad0) {
        _0x204083.currentContext = _0x204083.contexts[_0x203ad0];
        _0x339df7.ctx = _0xc70178 = _0x204083.currentContext && _0x204083.currentContext.GLctx;
        return !_0x203ad0 || !!_0xc70178;
      },
      getContext: function (_0x3710c6) {
        return _0x204083.contexts[_0x3710c6];
      },
      deleteContext: function (_0x567520) {
        if (_0x204083.currentContext === _0x204083.contexts[_0x567520]) {
          _0x204083.currentContext = null;
        }
        if (typeof _0x5467e5 == "object") {
          _0x5467e5.removeAllHandlersOnTarget(_0x204083.contexts[_0x567520].GLctx.canvas);
        }
        if (_0x204083.contexts[_0x567520] && _0x204083.contexts[_0x567520].GLctx.canvas) {
          _0x204083.contexts[_0x567520].GLctx.canvas.GLctxObject = undefined;
        }
        _0x204083.contexts[_0x567520] = null;
      },
      initExtensions: function (_0x2b6a18) {
        if (!_0x2b6a18) {
          _0x2b6a18 = _0x204083.currentContext;
        }
        if (_0x2b6a18.initExtensionsDone) {
          return;
        }
        _0x2b6a18.initExtensionsDone = true;
        var _0x3c7bec = _0x2b6a18.GLctx;
        _0xea7f78(_0x3c7bec);
        _0xe87567(_0x3c7bec);
        _0x472943(_0x3c7bec);
        _0x3f2138(_0x3c7bec);
        _0x3d706d(_0x3c7bec);
        if (_0x2b6a18.version >= 2) {
          _0x3c7bec.disjointTimerQueryExt = _0x3c7bec.getExtension("EXT_disjoint_timer_query_webgl2");
        }
        if (_0x2b6a18.version < 2 || !_0x3c7bec.disjointTimerQueryExt) {
          _0x3c7bec.disjointTimerQueryExt = _0x3c7bec.getExtension("EXT_disjoint_timer_query");
        }
        _0x8b458a(_0x3c7bec);
        var _0xad861 = _0x3c7bec.getSupportedExtensions() || [];
        _0xad861.forEach(function (_0x3ecf19) {
          if (!_0x3ecf19.includes("lose_context") && !_0x3ecf19.includes("debug")) {
            _0x3c7bec.getExtension(_0x3ecf19);
          }
        });
      }
    };
    var _0x1901fe = ["default", "low-power", "high-performance"];
    function _0x455eaf(_0x1a4f8b, _0x29dc03) {
      var _0x438cc7 = _0x29dc03 >> 2;
      var _0xf477e3 = _0x47a7a3[_0x438cc7 + 6];
      var _0x460dcc = {
        alpha: !!_0x47a7a3[_0x438cc7 + 0],
        depth: !!_0x47a7a3[_0x438cc7 + 1],
        stencil: !!_0x47a7a3[_0x438cc7 + 2],
        antialias: !!_0x47a7a3[_0x438cc7 + 3],
        premultipliedAlpha: !!_0x47a7a3[_0x438cc7 + 4],
        preserveDrawingBuffer: !!_0x47a7a3[_0x438cc7 + 5],
        powerPreference: _0x1901fe[_0xf477e3],
        failIfMajorPerformanceCaveat: !!_0x47a7a3[_0x438cc7 + 7],
        majorVersion: _0x47a7a3[_0x438cc7 + 8],
        minorVersion: _0x47a7a3[_0x438cc7 + 9],
        enableExtensionsByDefault: _0x47a7a3[_0x438cc7 + 10],
        explicitSwapControl: _0x47a7a3[_0x438cc7 + 11],
        proxyContextToMainThread: _0x47a7a3[_0x438cc7 + 12],
        renderViaOffscreenBackBuffer: _0x47a7a3[_0x438cc7 + 13]
      };
      var _0xac548 = _0x408482(_0x1a4f8b);
      if (!_0xac548) {
        return 0;
      }
      if (_0x460dcc.explicitSwapControl) {
        return 0;
      }
      var _0x13b2c1 = _0x204083.createContext(_0xac548, _0x460dcc);
      return _0x13b2c1;
    }
    function _0x1faf12(_0x2b006f, _0x44ff54) {
      return _0x455eaf(_0x2b006f, _0x44ff54);
    }
    function _0x4e7fd1(_0x27d788) {
      if (_0x204083.currentContext == _0x27d788) {
        _0x204083.currentContext = 0;
      }
      _0x204083.deleteContext(_0x27d788);
    }
    function _0x51df7f(_0x4c725d, _0xf866b6) {
      var _0x2ead23 = _0x204083.getContext(_0x4c725d);
      var _0x51a136 = _0x2b7aa3(_0xf866b6);
      if (_0x51a136.startsWith("GL_")) {
        _0x51a136 = _0x51a136.substr(3);
      }
      if (_0x51a136 == "ANGLE_instanced_arrays") {
        _0xea7f78(_0xc70178);
      }
      if (_0x51a136 == "OES_vertex_array_object") {
        _0xe87567(_0xc70178);
      }
      if (_0x51a136 == "WEBGL_draw_buffers") {
        _0x472943(_0xc70178);
      }
      if (_0x51a136 == "WEBGL_draw_instanced_base_vertex_base_instance") {
        _0x3f2138(_0xc70178);
      }
      if (_0x51a136 == "WEBGL_multi_draw_instanced_base_vertex_base_instance") {
        _0x3d706d(_0xc70178);
      }
      if (_0x51a136 == "WEBGL_multi_draw") {
        _0x8b458a(_0xc70178);
      }
      var _0x572bc4 = _0x2ead23.GLctx.getExtension(_0x51a136);
      return !!_0x572bc4;
    }
    function _0x2df5c2() {
      if (_0x204083.currentContext) {
        return _0x204083.currentContext.handle;
      } else {
        return 0;
      }
    }
    function _0x1b7fce() {
      return _0x2df5c2();
    }
    function _0x3e0ab5(_0x221ba9) {
      var _0x483833 = _0x221ba9 >> 2;
      for (var _0x2e4e64 = 0; _0x2e4e64 < 14; ++_0x2e4e64) {
        _0x47a7a3[_0x483833 + _0x2e4e64] = 0;
      }
      _0x47a7a3[_0x483833 + 0] = _0x47a7a3[_0x483833 + 1] = _0x47a7a3[_0x483833 + 3] = _0x47a7a3[_0x483833 + 4] = _0x47a7a3[_0x483833 + 8] = _0x47a7a3[_0x483833 + 10] = 1;
    }
    function _0x271916(_0x1b1f5b) {
      var _0xc95f83 = _0x204083.makeContextCurrent(_0x1b1f5b);
      if (_0xc95f83) {
        return 0;
      } else {
        return -5;
      }
    }
    var _0x6f0f31 = {};
    function _0x532f20() {
      return _0x1ed323 || "./this.program";
    }
    function _0x221a0a() {
      if (!_0x221a0a.strings) {
        var _0x414862 = (typeof navigator == "object" && navigator.languages && navigator.languages[0] || "C").replace("-", "_") + ".UTF-8";
        var _0x4aeca3 = {
          USER: "web_user",
          LOGNAME: "web_user",
          PATH: "/",
          PWD: "/",
          HOME: "/home/web_user",
          LANG: _0x414862,
          _: _0x532f20()
        };
        for (var _0x121a4d in _0x6f0f31) {
          if (_0x6f0f31[_0x121a4d] === undefined) {
            delete _0x4aeca3[_0x121a4d];
          } else {
            _0x4aeca3[_0x121a4d] = _0x6f0f31[_0x121a4d];
          }
        }
        var _0x322333 = [];
        for (var _0x121a4d in _0x4aeca3) {
          _0x322333.push(_0x121a4d + "=" + _0x4aeca3[_0x121a4d]);
        }
        _0x221a0a.strings = _0x322333;
      }
      return _0x221a0a.strings;
    }
    function _0x538bbc(_0x5f27e8, _0x5575ac) {
      var _0x50b9d7 = 0;
      _0x221a0a().forEach(function (_0x3a3111, _0x496049) {
        var _0x2ce0bb = _0x5575ac + _0x50b9d7;
        _0x47a7a3[_0x5f27e8 + _0x496049 * 4 >> 2] = _0x2ce0bb;
        _0x989835(_0x3a3111, _0x2ce0bb);
        _0x50b9d7 += _0x3a3111.length + 1;
      });
      return 0;
    }
    function _0x5b36c4(_0x5d0646, _0x2b6b20) {
      var _0x349446 = _0x221a0a();
      _0x47a7a3[_0x5d0646 >> 2] = _0x349446.length;
      var _0x334801 = 0;
      _0x349446.forEach(function (_0x6d5f2c) {
        _0x334801 += _0x6d5f2c.length + 1;
      });
      _0x47a7a3[_0x2b6b20 >> 2] = _0x334801;
      return 0;
    }
    function _0x1115e3(_0x55b9c6) {
      try {
        var _0x47cab7 = _0x521741.getStreamFromFD(_0x55b9c6);
        _0x1c26fd.close(_0x47cab7);
        return 0;
      } catch (_0x5bea7d) {
        if (typeof _0x1c26fd == "undefined" || !(_0x5bea7d instanceof _0x1c26fd.ErrnoError)) {
          throw _0x5bea7d;
        }
        return _0x5bea7d.errno;
      }
    }
    function _0x168dfe(_0x500e2b, _0x38a2e7) {
      try {
        var _0x4d139e = _0x521741.getStreamFromFD(_0x500e2b);
        var _0x45e651 = _0x4d139e.tty ? 2 : _0x1c26fd.isDir(_0x4d139e.mode) ? 3 : _0x1c26fd.isLink(_0x4d139e.mode) ? 7 : 4;
        _0x2845ef[_0x38a2e7 >> 0] = _0x45e651;
        return 0;
      } catch (_0x56855a) {
        if (typeof _0x1c26fd == "undefined" || !(_0x56855a instanceof _0x1c26fd.ErrnoError)) {
          throw _0x56855a;
        }
        return _0x56855a.errno;
      }
    }
    function _0x313d85(_0x7614f6, _0x9acca9, _0x481b67, _0x1f53e6) {
      try {
        var _0x3084a3 = _0x521741.getStreamFromFD(_0x7614f6);
        var _0x2ef2b8 = _0x521741.doReadv(_0x3084a3, _0x9acca9, _0x481b67);
        _0x47a7a3[_0x1f53e6 >> 2] = _0x2ef2b8;
        return 0;
      } catch (_0x5ea7e1) {
        if (typeof _0x1c26fd == "undefined" || !(_0x5ea7e1 instanceof _0x1c26fd.ErrnoError)) {
          throw _0x5ea7e1;
        }
        return _0x5ea7e1.errno;
      }
    }
    function _0x506034(_0x3d97dc, _0x4c7637, _0x185a07, _0x45fce9, _0x416d9d) {
      try {
        var _0x8d7cd8 = _0x521741.getStreamFromFD(_0x3d97dc);
        var _0x1d4384 = 4294967296;
        var _0x172b22 = _0x185a07 * _0x1d4384 + (_0x4c7637 >>> 0);
        var _0x379691 = 9007199254740992;
        if (_0x172b22 <= -_0x379691 || _0x172b22 >= _0x379691) {
          return -61;
        }
        _0x1c26fd.llseek(_0x8d7cd8, _0x172b22, _0x45fce9);
        _0x1b09b3 = [_0x8d7cd8.position >>> 0, (_0x563ecc = _0x8d7cd8.position, +Math.abs(_0x563ecc) >= 1 ? _0x563ecc > 0 ? (Math.min(+Math.floor(_0x563ecc / 4294967296), 4294967295) | 0) >>> 0 : ~~+Math.ceil((_0x563ecc - +(~~_0x563ecc >>> 0)) / 4294967296) >>> 0 : 0)];
        _0x47a7a3[_0x416d9d >> 2] = _0x1b09b3[0];
        _0x47a7a3[_0x416d9d + 4 >> 2] = _0x1b09b3[1];
        if (_0x8d7cd8.getdents && _0x172b22 === 0 && _0x45fce9 === 0) {
          _0x8d7cd8.getdents = null;
        }
        return 0;
      } catch (_0x47ab51) {
        if (typeof _0x1c26fd == "undefined" || !(_0x47ab51 instanceof _0x1c26fd.ErrnoError)) {
          throw _0x47ab51;
        }
        return _0x47ab51.errno;
      }
    }
    function _0x57cf3d(_0x421673, _0x3c828b, _0x43ae5e, _0xe3fa61) {
      try {
        var _0x43e714 = _0x521741.getStreamFromFD(_0x421673);
        var _0x14945d = _0x521741.doWritev(_0x43e714, _0x3c828b, _0x43ae5e);
        _0x47a7a3[_0xe3fa61 >> 2] = _0x14945d;
        return 0;
      } catch (_0x574d34) {
        if (typeof _0x1c26fd == "undefined" || !(_0x574d34 instanceof _0x1c26fd.ErrnoError)) {
          throw _0x574d34;
        }
        return _0x574d34.errno;
      }
    }
    function _0x25ef50() {
      return _0xfe669();
    }
    function _0x6856ea(_0x521662, _0x5f58c5, _0x4b4b1a, _0xd5c8dd) {
      var _0x32e3ea = 0;
      var _0x591be4 = 0;
      var _0x3a77fd = 0;
      var _0x12024b = 0;
      var _0x28fa5d = 0;
      var _0xc7988a = 0;
      var _0x381ee8;
      function _0x1ba4ae(_0x198585, _0x15bb7e, _0x3ef1fe, _0x13b1ce, _0x4da87d, _0x11cde7) {
        var _0x2bb1c0;
        var _0x35f45b;
        var _0x951c94;
        var _0x5eefc6;
        _0x35f45b = _0x198585 === 10 ? 28 : 16;
        _0x4da87d = _0x198585 === 10 ? _0x2dd5da(_0x4da87d) : _0x4d7650(_0x4da87d);
        _0x2bb1c0 = _0x5d55ea(_0x35f45b);
        _0x5eefc6 = _0x125185(_0x2bb1c0, _0x198585, _0x4da87d, _0x11cde7);
        _0x4c7bb6(!_0x5eefc6);
        _0x951c94 = _0x5d55ea(32);
        _0x47a7a3[_0x951c94 + 4 >> 2] = _0x198585;
        _0x47a7a3[_0x951c94 + 8 >> 2] = _0x15bb7e;
        _0x47a7a3[_0x951c94 + 12 >> 2] = _0x3ef1fe;
        _0x47a7a3[_0x951c94 + 24 >> 2] = _0x13b1ce;
        _0x47a7a3[_0x951c94 + 20 >> 2] = _0x2bb1c0;
        if (_0x198585 === 10) {
          _0x47a7a3[_0x951c94 + 16 >> 2] = 28;
        } else {
          _0x47a7a3[_0x951c94 + 16 >> 2] = 16;
        }
        _0x47a7a3[_0x951c94 + 28 >> 2] = 0;
        return _0x951c94;
      }
      if (_0x4b4b1a) {
        _0x3a77fd = _0x47a7a3[_0x4b4b1a >> 2];
        _0x12024b = _0x47a7a3[_0x4b4b1a + 4 >> 2];
        _0x28fa5d = _0x47a7a3[_0x4b4b1a + 8 >> 2];
        _0xc7988a = _0x47a7a3[_0x4b4b1a + 12 >> 2];
      }
      if (_0x28fa5d && !_0xc7988a) {
        _0xc7988a = _0x28fa5d === 2 ? 17 : 6;
      }
      if (!_0x28fa5d && _0xc7988a) {
        _0x28fa5d = _0xc7988a === 17 ? 2 : 1;
      }
      if (_0xc7988a === 0) {
        _0xc7988a = 6;
      }
      if (_0x28fa5d === 0) {
        _0x28fa5d = 1;
      }
      if (!_0x521662 && !_0x5f58c5) {
        return -2;
      }
      if (_0x3a77fd & ~1087) {
        return -1;
      }
      if (_0x4b4b1a !== 0 && _0x47a7a3[_0x4b4b1a >> 2] & 2 && !_0x521662) {
        return -1;
      }
      if (_0x3a77fd & 32) {
        return -2;
      }
      if (_0x28fa5d !== 0 && _0x28fa5d !== 1 && _0x28fa5d !== 2) {
        return -7;
      }
      if (_0x12024b !== 0 && _0x12024b !== 2 && _0x12024b !== 10) {
        return -6;
      }
      if (_0x5f58c5) {
        _0x5f58c5 = _0x2b7aa3(_0x5f58c5);
        _0x591be4 = parseInt(_0x5f58c5, 10);
        if (isNaN(_0x591be4)) {
          if (_0x3a77fd & 1024) {
            return -2;
          }
          return -8;
        }
      }
      if (!_0x521662) {
        if (_0x12024b === 0) {
          _0x12024b = 2;
        }
        if ((_0x3a77fd & 1) === 0) {
          if (_0x12024b === 2) {
            _0x32e3ea = _0x2a9265(2130706433);
          } else {
            _0x32e3ea = [0, 0, 0, 1];
          }
        }
        _0x381ee8 = _0x1ba4ae(_0x12024b, _0x28fa5d, _0xc7988a, null, _0x32e3ea, _0x591be4);
        _0x47a7a3[_0xd5c8dd >> 2] = _0x381ee8;
        return 0;
      }
      _0x521662 = _0x2b7aa3(_0x521662);
      _0x32e3ea = _0x54119c(_0x521662);
      if (_0x32e3ea !== null) {
        if (_0x12024b === 0 || _0x12024b === 2) {
          _0x12024b = 2;
        } else if (_0x12024b === 10 && _0x3a77fd & 8) {
          _0x32e3ea = [0, 0, _0x2a9265(65535), _0x32e3ea];
          _0x12024b = 10;
        } else {
          return -2;
        }
      } else {
        _0x32e3ea = _0x1390b9(_0x521662);
        if (_0x32e3ea !== null) {
          if (_0x12024b === 0 || _0x12024b === 10) {
            _0x12024b = 10;
          } else {
            return -2;
          }
        }
      }
      if (_0x32e3ea != null) {
        _0x381ee8 = _0x1ba4ae(_0x12024b, _0x28fa5d, _0xc7988a, _0x521662, _0x32e3ea, _0x591be4);
        _0x47a7a3[_0xd5c8dd >> 2] = _0x381ee8;
        return 0;
      }
      if (_0x3a77fd & 4) {
        return -2;
      }
      _0x521662 = _0x5d0e3f.lookup_name(_0x521662);
      _0x32e3ea = _0x54119c(_0x521662);
      if (_0x12024b === 0) {
        _0x12024b = 2;
      } else if (_0x12024b === 10) {
        _0x32e3ea = [0, 0, _0x2a9265(65535), _0x32e3ea];
      }
      _0x381ee8 = _0x1ba4ae(_0x12024b, _0x28fa5d, _0xc7988a, null, _0x32e3ea, _0x591be4);
      _0x47a7a3[_0xd5c8dd >> 2] = _0x381ee8;
      return 0;
    }
    function _0x2aa87b(_0x429547) {
      var _0x1acb76 = _0x5d55ea(20);
      var _0x11cdc1 = _0x5d55ea(_0x429547.length + 1);
      _0xb1d3f9(_0x429547, _0x11cdc1, _0x429547.length + 1);
      _0x47a7a3[_0x1acb76 >> 2] = _0x11cdc1;
      var _0x292ca7 = _0x5d55ea(4);
      _0x47a7a3[_0x292ca7 >> 2] = 0;
      _0x47a7a3[_0x1acb76 + 4 >> 2] = _0x292ca7;
      var _0x1dfe63 = 2;
      _0x47a7a3[_0x1acb76 + 8 >> 2] = _0x1dfe63;
      _0x47a7a3[_0x1acb76 + 12 >> 2] = 4;
      var _0x2ca6ab = _0x5d55ea(12);
      _0x47a7a3[_0x2ca6ab >> 2] = _0x2ca6ab + 8;
      _0x47a7a3[_0x2ca6ab + 4 >> 2] = 0;
      _0x47a7a3[_0x2ca6ab + 8 >> 2] = _0x54119c(_0x5d0e3f.lookup_name(_0x429547));
      _0x47a7a3[_0x1acb76 + 16 >> 2] = _0x2ca6ab;
      return _0x1acb76;
    }
    function _0x157304(_0xa95347, _0x4ee58b, _0xaca534) {
      if (_0xaca534 !== 2) {
        _0x1c033a(5);
        return null;
      }
      _0xa95347 = _0x47a7a3[_0xa95347 >> 2];
      var _0x2ff7a8 = _0x4d7650(_0xa95347);
      var _0x531a2c = _0x5d0e3f.lookup_addr(_0x2ff7a8);
      if (_0x531a2c) {
        _0x2ff7a8 = _0x531a2c;
      }
      return _0x2aa87b(_0x2ff7a8);
    }
    function _0xdc5fbf(_0x109a0e) {
      return _0x2aa87b(_0x2b7aa3(_0x109a0e));
    }
    function _0x21c2d1(_0x58a358, _0x4b75a4, _0x23e730, _0x345414, _0xf0a416, _0x4698a3, _0x3e4e6a) {
      var _0x313489 = _0x5b570e(_0x58a358, _0x4b75a4);
      if (_0x313489.errno) {
        return -6;
      }
      var _0x5b88cc = _0x313489.port;
      var _0x41345d = _0x313489.addr;
      var _0x3c091e = false;
      if (_0x23e730 && _0x345414) {
        var _0x1c4b8d;
        if (_0x3e4e6a & 1 || !(_0x1c4b8d = _0x5d0e3f.lookup_addr(_0x41345d))) {
          if (_0x3e4e6a & 8) {
            return -2;
          }
        } else {
          _0x41345d = _0x1c4b8d;
        }
        var _0x1c84a2 = _0xb1d3f9(_0x41345d, _0x23e730, _0x345414);
        if (_0x1c84a2 + 1 >= _0x345414) {
          _0x3c091e = true;
        }
      }
      if (_0xf0a416 && _0x4698a3) {
        _0x5b88cc = "" + _0x5b88cc;
        var _0x1c84a2 = _0xb1d3f9(_0x5b88cc, _0xf0a416, _0x4698a3);
        if (_0x1c84a2 + 1 >= _0x4698a3) {
          _0x3c091e = true;
        }
      }
      if (_0x3c091e) {
        return -12;
      }
      return 0;
    }
    function _0x240369(_0xd94500) {
      _0xc70178.activeTexture(_0xd94500);
    }
    function _0xa7e820(_0x3d5bfc, _0x27f8db) {
      _0x3d5bfc = _0x204083.programs[_0x3d5bfc];
      _0x27f8db = _0x204083.shaders[_0x27f8db];
      _0x3d5bfc[_0x27f8db.shaderType] = _0x27f8db;
      _0xc70178.attachShader(_0x3d5bfc, _0x27f8db);
    }
    function _0x5f0be7(_0x521f3a, _0x375aa3) {
      _0xc70178.beginQuery(_0x521f3a, _0x204083.queries[_0x375aa3]);
    }
    function _0x583df4(_0x35f39c, _0x198677, _0x6993e3) {
      _0xc70178.bindAttribLocation(_0x204083.programs[_0x35f39c], _0x198677, _0x2b7aa3(_0x6993e3));
    }
    function _0x17ea69(_0x2f39da, _0x424973) {
      if (_0x2f39da == 34962) {
        _0xc70178.currentArrayBufferBinding = _0x424973;
      } else if (_0x2f39da == 34963) {
        _0xc70178.currentElementArrayBufferBinding = _0x424973;
      }
      if (_0x2f39da == 35051) {
        _0xc70178.currentPixelPackBufferBinding = _0x424973;
      } else if (_0x2f39da == 35052) {
        _0xc70178.currentPixelUnpackBufferBinding = _0x424973;
      }
      _0xc70178.bindBuffer(_0x2f39da, _0x204083.buffers[_0x424973]);
    }
    function _0x19009e(_0x3cc04b, _0x3af7a1, _0x532e0b) {
      _0xc70178.bindBufferBase(_0x3cc04b, _0x3af7a1, _0x204083.buffers[_0x532e0b]);
    }
    function _0x10a93e(_0x2ba53b, _0x343a09, _0x5e2747, _0x324680, _0x17884a) {
      _0xc70178.bindBufferRange(_0x2ba53b, _0x343a09, _0x204083.buffers[_0x5e2747], _0x324680, _0x17884a);
    }
    function _0x3cb68b(_0x475cd4, _0x3e3f68) {
      _0xc70178.bindFramebuffer(_0x475cd4, _0x204083.framebuffers[_0x3e3f68]);
    }
    function _0x16e889(_0x4d989d, _0x3aad53) {
      _0xc70178.bindRenderbuffer(_0x4d989d, _0x204083.renderbuffers[_0x3aad53]);
    }
    function _0x4bc2c0(_0x926f3c, _0x43b515) {
      _0xc70178.bindSampler(_0x926f3c, _0x204083.samplers[_0x43b515]);
    }
    function _0xe1d855(_0x261172, _0x4d5bf1) {
      _0xc70178.bindTexture(_0x261172, _0x204083.textures[_0x4d5bf1]);
    }
    function _0x14bf22(_0x1fd584) {
      _0xc70178.bindVertexArray(_0x204083.vaos[_0x1fd584]);
      var _0x3231f9 = _0xc70178.getParameter(34965);
      _0xc70178.currentElementArrayBufferBinding = _0x3231f9 ? _0x3231f9.name | 0 : 0;
    }
    function _0x475ee2(_0x57a9fb) {
      _0xc70178.blendEquation(_0x57a9fb);
    }
    function _0x49f84c(_0x3571b6, _0x34a856) {
      _0xc70178.blendEquationSeparate(_0x3571b6, _0x34a856);
    }
    function _0x13406c(_0x45bfdb, _0x2aa000, _0xeaeb2d, _0x12bcac) {
      _0xc70178.blendFuncSeparate(_0x45bfdb, _0x2aa000, _0xeaeb2d, _0x12bcac);
    }
    function _0x3d88ee(_0x21967e, _0x34090f, _0x1a6786, _0xc36cf3, _0x41bb7f, _0xe46070, _0x4f8cc8, _0x515add, _0x2994f5, _0x2b9111) {
      _0xc70178.blitFramebuffer(_0x21967e, _0x34090f, _0x1a6786, _0xc36cf3, _0x41bb7f, _0xe46070, _0x4f8cc8, _0x515add, _0x2994f5, _0x2b9111);
    }
    function _0x365804(_0x429c39, _0x2d7bd8, _0x52c897, _0x2b410f) {
      if (_0x204083.currentContext.version >= 2) {
        if (_0x52c897) {
          _0xc70178.bufferData(_0x429c39, _0xb4481c, _0x2b410f, _0x52c897, _0x2d7bd8);
        } else {
          _0xc70178.bufferData(_0x429c39, _0x2d7bd8, _0x2b410f);
        }
      } else {
        _0xc70178.bufferData(_0x429c39, _0x52c897 ? _0xb4481c.subarray(_0x52c897, _0x52c897 + _0x2d7bd8) : _0x2d7bd8, _0x2b410f);
      }
    }
    function _0x4f3060(_0x3b0218, _0xd79513, _0xf602fe, _0x165285) {
      if (_0x204083.currentContext.version >= 2) {
        _0xc70178.bufferSubData(_0x3b0218, _0xd79513, _0xb4481c, _0x165285, _0xf602fe);
        return;
      }
      _0xc70178.bufferSubData(_0x3b0218, _0xd79513, _0xb4481c.subarray(_0x165285, _0x165285 + _0xf602fe));
    }
    function _0x1f0d6c(_0x33aa50) {
      return _0xc70178.checkFramebufferStatus(_0x33aa50);
    }
    function _0x2465d8(_0x4d8e74) {
      _0xc70178.clear(_0x4d8e74);
    }
    function _0x4baff4(_0x4391fb, _0x1ddec1, _0x1c9245, _0x35f496) {
      _0xc70178.clearBufferfi(_0x4391fb, _0x1ddec1, _0x1c9245, _0x35f496);
    }
    function _0x30f845(_0x2118a0, _0x4c50b8, _0x46726c) {
      _0xc70178.clearBufferfv(_0x2118a0, _0x4c50b8, _0x50a76e, _0x46726c >> 2);
    }
    function _0xa97610(_0x38cf15, _0x197867, _0x73a750) {
      _0xc70178.clearBufferuiv(_0x38cf15, _0x197867, _0x195007, _0x73a750 >> 2);
    }
    function _0x4658f2(_0x526c1e, _0x4d6d85, _0x585769, _0x48e56e) {
      _0xc70178.clearColor(_0x526c1e, _0x4d6d85, _0x585769, _0x48e56e);
    }
    function _0x3c32e5(_0xe4b320) {
      _0xc70178.clearDepth(_0xe4b320);
    }
    function _0x3c47b8(_0x2342e4) {
      _0xc70178.clearStencil(_0x2342e4);
    }
    function _0x3b6aea(_0x5e8f4e, _0x3c3968, _0x412ebc, _0x568d58) {
      return _0xc70178.clientWaitSync(_0x204083.syncs[_0x5e8f4e], _0x3c3968, _0x500fd7(_0x412ebc, _0x568d58));
    }
    function _0x48ea5b(_0x4c1970, _0xc7868, _0x3c76cb, _0x5adbdf) {
      _0xc70178.colorMask(!!_0x4c1970, !!_0xc7868, !!_0x3c76cb, !!_0x5adbdf);
    }
    function _0x3e315f(_0xd3fc42) {
      _0xc70178.compileShader(_0x204083.shaders[_0xd3fc42]);
    }
    function _0x3ce4c1(_0x125296, _0x5021cb, _0x4a4733, _0x212cfc, _0xea3a94, _0x20e818, _0x1af1e3, _0x4c7205) {
      if (_0x204083.currentContext.version >= 2) {
        if (_0xc70178.currentPixelUnpackBufferBinding) {
          _0xc70178.compressedTexImage2D(_0x125296, _0x5021cb, _0x4a4733, _0x212cfc, _0xea3a94, _0x20e818, _0x1af1e3, _0x4c7205);
        } else {
          _0xc70178.compressedTexImage2D(_0x125296, _0x5021cb, _0x4a4733, _0x212cfc, _0xea3a94, _0x20e818, _0xb4481c, _0x4c7205, _0x1af1e3);
        }
        return;
      }
      _0xc70178.compressedTexImage2D(_0x125296, _0x5021cb, _0x4a4733, _0x212cfc, _0xea3a94, _0x20e818, _0x4c7205 ? _0xb4481c.subarray(_0x4c7205, _0x4c7205 + _0x1af1e3) : null);
    }
    function _0x2812d6(_0x4e3058, _0x4aad25, _0x4bfc75, _0x46d2a8, _0x35515c, _0x466c2c, _0x3a5e1b, _0x5ec2c0, _0x139c5e) {
      if (_0xc70178.currentPixelUnpackBufferBinding) {
        _0xc70178.compressedTexImage3D(_0x4e3058, _0x4aad25, _0x4bfc75, _0x46d2a8, _0x35515c, _0x466c2c, _0x3a5e1b, _0x5ec2c0, _0x139c5e);
      } else {
        _0xc70178.compressedTexImage3D(_0x4e3058, _0x4aad25, _0x4bfc75, _0x46d2a8, _0x35515c, _0x466c2c, _0x3a5e1b, _0xb4481c, _0x139c5e, _0x5ec2c0);
      }
    }
    function _0x239f6a(_0x516165, _0x4bc3bd, _0xef24c5, _0x67c1b6, _0x465b12, _0x33fc13, _0x1b0abd, _0x398ed4, _0x11bed4) {
      if (_0x204083.currentContext.version >= 2) {
        if (_0xc70178.currentPixelUnpackBufferBinding) {
          _0xc70178.compressedTexSubImage2D(_0x516165, _0x4bc3bd, _0xef24c5, _0x67c1b6, _0x465b12, _0x33fc13, _0x1b0abd, _0x398ed4, _0x11bed4);
        } else {
          _0xc70178.compressedTexSubImage2D(_0x516165, _0x4bc3bd, _0xef24c5, _0x67c1b6, _0x465b12, _0x33fc13, _0x1b0abd, _0xb4481c, _0x11bed4, _0x398ed4);
        }
        return;
      }
      _0xc70178.compressedTexSubImage2D(_0x516165, _0x4bc3bd, _0xef24c5, _0x67c1b6, _0x465b12, _0x33fc13, _0x1b0abd, _0x11bed4 ? _0xb4481c.subarray(_0x11bed4, _0x11bed4 + _0x398ed4) : null);
    }
    function _0x3b14c1(_0x51be8d, _0x52443b, _0x39fe37, _0x417095, _0x26e29f, _0x3b7582, _0x2f5f14, _0x49eb86, _0x3499b5, _0x242e2d, _0x1dfe8d) {
      if (_0xc70178.currentPixelUnpackBufferBinding) {
        _0xc70178.compressedTexSubImage3D(_0x51be8d, _0x52443b, _0x39fe37, _0x417095, _0x26e29f, _0x3b7582, _0x2f5f14, _0x49eb86, _0x3499b5, _0x242e2d, _0x1dfe8d);
      } else {
        _0xc70178.compressedTexSubImage3D(_0x51be8d, _0x52443b, _0x39fe37, _0x417095, _0x26e29f, _0x3b7582, _0x2f5f14, _0x49eb86, _0x3499b5, _0xb4481c, _0x1dfe8d, _0x242e2d);
      }
    }
    function _0x275812(_0x160e22, _0x28f37b, _0x28c0fa, _0x4553f, _0x311682) {
      _0xc70178.copyBufferSubData(_0x160e22, _0x28f37b, _0x28c0fa, _0x4553f, _0x311682);
    }
    function _0x4f7401(_0x536ad6, _0x5ad6cf, _0x147dea, _0x322e7e, _0x51507f, _0x362522, _0x2b39e7, _0x284430) {
      _0xc70178.copyTexImage2D(_0x536ad6, _0x5ad6cf, _0x147dea, _0x322e7e, _0x51507f, _0x362522, _0x2b39e7, _0x284430);
    }
    function _0x12e1fd(_0x121a9f, _0x3b510a, _0x3ad9b5, _0x119db1, _0x27ff7f, _0x408661, _0x526cea, _0xe6120f) {
      _0xc70178.copyTexSubImage2D(_0x121a9f, _0x3b510a, _0x3ad9b5, _0x119db1, _0x27ff7f, _0x408661, _0x526cea, _0xe6120f);
    }
    function _0x34881f() {
      var _0x5430fb = _0x204083.getNewId(_0x204083.programs);
      var _0xd97936 = _0xc70178.createProgram();
      _0xd97936.name = _0x5430fb;
      _0xd97936.maxUniformLength = _0xd97936.maxAttributeLength = _0xd97936.maxUniformBlockNameLength = 0;
      _0xd97936.uniformIdCounter = 1;
      _0x204083.programs[_0x5430fb] = _0xd97936;
      return _0x5430fb;
    }
    function _0x2ca83c(_0x2cc040) {
      var _0x2e17d1 = _0x204083.getNewId(_0x204083.shaders);
      _0x204083.shaders[_0x2e17d1] = _0xc70178.createShader(_0x2cc040);
      _0x204083.shaders[_0x2e17d1].shaderType = _0x2cc040 & 1 ? "vs" : "fs";
      return _0x2e17d1;
    }
    function _0x2c1fe5(_0x3688d1) {
      _0xc70178.cullFace(_0x3688d1);
    }
    function _0x48b057(_0x4a387d, _0x424ddf) {
      for (var _0x3d4303 = 0; _0x3d4303 < _0x4a387d; _0x3d4303++) {
        var _0x3cc7a8 = _0x47a7a3[_0x424ddf + _0x3d4303 * 4 >> 2];
        var _0x1aa57b = _0x204083.buffers[_0x3cc7a8];
        if (!_0x1aa57b) {
          continue;
        }
        _0xc70178.deleteBuffer(_0x1aa57b);
        _0x1aa57b.name = 0;
        _0x204083.buffers[_0x3cc7a8] = null;
        if (_0x3cc7a8 == _0xc70178.currentArrayBufferBinding) {
          _0xc70178.currentArrayBufferBinding = 0;
        }
        if (_0x3cc7a8 == _0xc70178.currentElementArrayBufferBinding) {
          _0xc70178.currentElementArrayBufferBinding = 0;
        }
        if (_0x3cc7a8 == _0xc70178.currentPixelPackBufferBinding) {
          _0xc70178.currentPixelPackBufferBinding = 0;
        }
        if (_0x3cc7a8 == _0xc70178.currentPixelUnpackBufferBinding) {
          _0xc70178.currentPixelUnpackBufferBinding = 0;
        }
      }
    }
    function _0x4f6484(_0x48c0d5, _0x1244df) {
      for (var _0x582416 = 0; _0x582416 < _0x48c0d5; ++_0x582416) {
        var _0x23970f = _0x47a7a3[_0x1244df + _0x582416 * 4 >> 2];
        var _0x1040b1 = _0x204083.framebuffers[_0x23970f];
        if (!_0x1040b1) {
          continue;
        }
        _0xc70178.deleteFramebuffer(_0x1040b1);
        _0x1040b1.name = 0;
        _0x204083.framebuffers[_0x23970f] = null;
      }
    }
    function _0x2b7049(_0x29ef8b) {
      if (!_0x29ef8b) {
        return;
      }
      var _0x1d3a80 = _0x204083.programs[_0x29ef8b];
      if (!_0x1d3a80) {
        _0x204083.recordError(1281);
        return;
      }
      _0xc70178.deleteProgram(_0x1d3a80);
      _0x1d3a80.name = 0;
      _0x204083.programs[_0x29ef8b] = null;
    }
    function _0x27e235(_0x1b550b, _0x5a805c) {
      for (var _0x67bf7d = 0; _0x67bf7d < _0x1b550b; _0x67bf7d++) {
        var _0x5d55f7 = _0x47a7a3[_0x5a805c + _0x67bf7d * 4 >> 2];
        var _0x29817a = _0x204083.queries[_0x5d55f7];
        if (!_0x29817a) {
          continue;
        }
        _0xc70178.deleteQuery(_0x29817a);
        _0x204083.queries[_0x5d55f7] = null;
      }
    }
    function _0x77c1df(_0x524424, _0x283d98) {
      for (var _0x1510b7 = 0; _0x1510b7 < _0x524424; _0x1510b7++) {
        var _0x43de7d = _0x47a7a3[_0x283d98 + _0x1510b7 * 4 >> 2];
        var _0x148f07 = _0x204083.renderbuffers[_0x43de7d];
        if (!_0x148f07) {
          continue;
        }
        _0xc70178.deleteRenderbuffer(_0x148f07);
        _0x148f07.name = 0;
        _0x204083.renderbuffers[_0x43de7d] = null;
      }
    }
    function _0x51e5dc(_0xfff385, _0x35a1e1) {
      for (var _0x370c77 = 0; _0x370c77 < _0xfff385; _0x370c77++) {
        var _0x32cd0d = _0x47a7a3[_0x35a1e1 + _0x370c77 * 4 >> 2];
        var _0x4e50ba = _0x204083.samplers[_0x32cd0d];
        if (!_0x4e50ba) {
          continue;
        }
        _0xc70178.deleteSampler(_0x4e50ba);
        _0x4e50ba.name = 0;
        _0x204083.samplers[_0x32cd0d] = null;
      }
    }
    function _0x314e61(_0x1979ad) {
      if (!_0x1979ad) {
        return;
      }
      var _0x3edde8 = _0x204083.shaders[_0x1979ad];
      if (!_0x3edde8) {
        _0x204083.recordError(1281);
        return;
      }
      _0xc70178.deleteShader(_0x3edde8);
      _0x204083.shaders[_0x1979ad] = null;
    }
    function _0x340201(_0x44f999) {
      if (!_0x44f999) {
        return;
      }
      var _0x5c39f9 = _0x204083.syncs[_0x44f999];
      if (!_0x5c39f9) {
        _0x204083.recordError(1281);
        return;
      }
      _0xc70178.deleteSync(_0x5c39f9);
      _0x5c39f9.name = 0;
      _0x204083.syncs[_0x44f999] = null;
    }
    function _0x38d035(_0x4b8817, _0x342e40) {
      for (var _0x15abf5 = 0; _0x15abf5 < _0x4b8817; _0x15abf5++) {
        var _0x3df005 = _0x47a7a3[_0x342e40 + _0x15abf5 * 4 >> 2];
        var _0x543fbc = _0x204083.textures[_0x3df005];
        if (!_0x543fbc) {
          continue;
        }
        _0xc70178.deleteTexture(_0x543fbc);
        _0x543fbc.name = 0;
        _0x204083.textures[_0x3df005] = null;
      }
    }
    function _0xf5db0(_0x40482c, _0x57047) {
      for (var _0x39ee9e = 0; _0x39ee9e < _0x40482c; _0x39ee9e++) {
        var _0x1b0f19 = _0x47a7a3[_0x57047 + _0x39ee9e * 4 >> 2];
        _0xc70178.deleteVertexArray(_0x204083.vaos[_0x1b0f19]);
        _0x204083.vaos[_0x1b0f19] = null;
      }
    }
    function _0x54de71(_0x32cb51) {
      _0xc70178.depthFunc(_0x32cb51);
    }
    function _0x2b4347(_0x523551) {
      _0xc70178.depthMask(!!_0x523551);
    }
    function _0xbcfeb1(_0x2d4f4e, _0x5b1a6f) {
      _0xc70178.detachShader(_0x204083.programs[_0x2d4f4e], _0x204083.shaders[_0x5b1a6f]);
    }
    function _0x2dc2e9(_0x534616) {
      _0xc70178.disable(_0x534616);
    }
    function _0x5034a2(_0x4abf6f) {
      var _0x4c2bbe = _0x204083.currentContext.clientBuffers[_0x4abf6f];
      _0x4c2bbe.enabled = false;
      _0xc70178.disableVertexAttribArray(_0x4abf6f);
    }
    function _0x3ced0f(_0x499e96, _0x3a2968, _0x80d48e) {
      _0x204083.preDrawHandleClientVertexAttribBindings(_0x3a2968 + _0x80d48e);
      _0xc70178.drawArrays(_0x499e96, _0x3a2968, _0x80d48e);
      _0x204083.postDrawHandleClientVertexAttribBindings();
    }
    function _0x1401fc(_0x3a4068, _0x30ad1d, _0x138c22, _0x597d96) {
      _0xc70178.drawArraysInstanced(_0x3a4068, _0x30ad1d, _0x138c22, _0x597d96);
    }
    var _0x53096f = [];
    function _0x5218cf(_0x5093ce, _0x36d892) {
      var _0xa8ce0c = _0x53096f[_0x5093ce];
      for (var _0x1103ff = 0; _0x1103ff < _0x5093ce; _0x1103ff++) {
        _0xa8ce0c[_0x1103ff] = _0x47a7a3[_0x36d892 + _0x1103ff * 4 >> 2];
      }
      _0xc70178.drawBuffers(_0xa8ce0c);
    }
    function _0x39cd71(_0x109d74, _0x7a46b7, _0x2fe414, _0x56c996) {
      var _0x18f4cc;
      if (!_0xc70178.currentElementArrayBufferBinding) {
        var _0xff5fa1 = _0x204083.calcBufLength(1, _0x2fe414, 0, _0x7a46b7);
        _0x18f4cc = _0x204083.getTempIndexBuffer(_0xff5fa1);
        _0xc70178.bindBuffer(34963, _0x18f4cc);
        _0xc70178.bufferSubData(34963, 0, _0xb4481c.subarray(_0x56c996, _0x56c996 + _0xff5fa1));
        _0x56c996 = 0;
      }
      _0x204083.preDrawHandleClientVertexAttribBindings(_0x7a46b7);
      _0xc70178.drawElements(_0x109d74, _0x7a46b7, _0x2fe414, _0x56c996);
      _0x204083.postDrawHandleClientVertexAttribBindings(_0x7a46b7);
      if (!_0xc70178.currentElementArrayBufferBinding) {
        _0xc70178.bindBuffer(34963, null);
      }
    }
    function _0x2f6968(_0x45898e, _0x290d89, _0x2e26a5, _0x131b40, _0x191e92) {
      _0xc70178.drawElementsInstanced(_0x45898e, _0x290d89, _0x2e26a5, _0x131b40, _0x191e92);
    }
    function _0x5bb11d(_0x533d1a) {
      _0xc70178.enable(_0x533d1a);
    }
    function _0x56d954(_0x1a1212) {
      var _0x3059f3 = _0x204083.currentContext.clientBuffers[_0x1a1212];
      _0x3059f3.enabled = true;
      _0xc70178.enableVertexAttribArray(_0x1a1212);
    }
    function _0x3ca454(_0x8e3df2) {
      _0xc70178.endQuery(_0x8e3df2);
    }
    function _0xaef8fd(_0x1388c3, _0x343319) {
      var _0x5a9c77 = _0xc70178.fenceSync(_0x1388c3, _0x343319);
      if (_0x5a9c77) {
        var _0x57d9bc = _0x204083.getNewId(_0x204083.syncs);
        _0x5a9c77.name = _0x57d9bc;
        _0x204083.syncs[_0x57d9bc] = _0x5a9c77;
        return _0x57d9bc;
      } else {
        return 0;
      }
    }
    function _0x1681e4() {
      _0xc70178.finish();
    }
    function _0x35a8e0() {
      _0xc70178.flush();
    }
    function _0x1b5806(_0xd9a5bb) {
      switch (_0xd9a5bb) {
        case 34962:
          _0xd9a5bb = 34964;
          break;
        case 34963:
          _0xd9a5bb = 34965;
          break;
        case 35051:
          _0xd9a5bb = 35053;
          break;
        case 35052:
          _0xd9a5bb = 35055;
          break;
        case 35982:
          _0xd9a5bb = 35983;
          break;
        case 36662:
          _0xd9a5bb = 36662;
          break;
        case 36663:
          _0xd9a5bb = 36663;
          break;
        case 35345:
          _0xd9a5bb = 35368;
          break;
      }
      var _0x4076ab = _0xc70178.getParameter(_0xd9a5bb);
      if (_0x4076ab) {
        return _0x4076ab.name | 0;
      } else {
        return 0;
      }
    }
    function _0x20328d(_0x13a997) {
      switch (_0x13a997) {
        case 34962:
        case 34963:
        case 36662:
        case 36663:
        case 35051:
        case 35052:
        case 35882:
        case 35982:
        case 35345:
          return true;
        default:
          return false;
      }
    }
    function _0x4ca917(_0x384505, _0x11aaba, _0x5ac2b2) {
      if (!_0x20328d(_0x384505)) {
        _0x204083.recordError(1280);
        _0x2b9f46("GL_INVALID_ENUM in glFlushMappedBufferRange");
        return;
      }
      var _0x1db3c8 = _0x204083.mappedBuffers[_0x1b5806(_0x384505)];
      if (!_0x1db3c8) {
        _0x204083.recordError(1282);
        _0x2b9f46("buffer was never mapped in glFlushMappedBufferRange");
        return;
      }
      if (!(_0x1db3c8.access & 16)) {
        _0x204083.recordError(1282);
        _0x2b9f46("buffer was not mapped with GL_MAP_FLUSH_EXPLICIT_BIT in glFlushMappedBufferRange");
        return;
      }
      if (_0x11aaba < 0 || _0x5ac2b2 < 0 || _0x11aaba + _0x5ac2b2 > _0x1db3c8.length) {
        _0x204083.recordError(1281);
        _0x2b9f46("invalid range in glFlushMappedBufferRange");
        return;
      }
      _0xc70178.bufferSubData(_0x384505, _0x1db3c8.offset, _0xb4481c.subarray(_0x1db3c8.mem + _0x11aaba, _0x1db3c8.mem + _0x11aaba + _0x5ac2b2));
    }
    function _0x2139b1(_0x54100a, _0x3fd79f, _0x208e53, _0x1c7ceb) {
      _0xc70178.framebufferRenderbuffer(_0x54100a, _0x3fd79f, _0x208e53, _0x204083.renderbuffers[_0x1c7ceb]);
    }
    function _0x4b3316(_0x2d7747, _0x2e749e, _0x1d1c7d, _0x533e20, _0x4ca290) {
      _0xc70178.framebufferTexture2D(_0x2d7747, _0x2e749e, _0x1d1c7d, _0x204083.textures[_0x533e20], _0x4ca290);
    }
    function _0x55e731(_0x5bd26d, _0x2b2569, _0x392395, _0x3b9398, _0x2dbd16) {
      _0xc70178.framebufferTextureLayer(_0x5bd26d, _0x2b2569, _0x204083.textures[_0x392395], _0x3b9398, _0x2dbd16);
    }
    function _0x194def(_0x30cbaa) {
      _0xc70178.frontFace(_0x30cbaa);
    }
    function _0x56b68d(_0x3684bd, _0x4f8793, _0x9e64a4, _0x52025e) {
      for (var _0x454771 = 0; _0x454771 < _0x3684bd; _0x454771++) {
        var _0x5447ef = _0xc70178[_0x9e64a4]();
        var _0x2fed9a = _0x5447ef && _0x204083.getNewId(_0x52025e);
        if (_0x5447ef) {
          _0x5447ef.name = _0x2fed9a;
          _0x52025e[_0x2fed9a] = _0x5447ef;
        } else {
          _0x204083.recordError(1282);
        }
        _0x47a7a3[_0x4f8793 + _0x454771 * 4 >> 2] = _0x2fed9a;
      }
    }
    function _0x263618(_0x48c11d, _0x8a9aa7) {
      _0x56b68d(_0x48c11d, _0x8a9aa7, "createBuffer", _0x204083.buffers);
    }
    function _0x30e5bb(_0x44d7a8, _0x3982f5) {
      _0x56b68d(_0x44d7a8, _0x3982f5, "createFramebuffer", _0x204083.framebuffers);
    }
    function _0x6fd1fd(_0x26dc53, _0x50e369) {
      _0x56b68d(_0x26dc53, _0x50e369, "createQuery", _0x204083.queries);
    }
    function _0x765be6(_0x1718ca, _0xa34e63) {
      _0x56b68d(_0x1718ca, _0xa34e63, "createRenderbuffer", _0x204083.renderbuffers);
    }
    function _0x26040c(_0x2bacf6, _0x62a05a) {
      _0x56b68d(_0x2bacf6, _0x62a05a, "createSampler", _0x204083.samplers);
    }
    function _0x11e537(_0x403ca1, _0x3ad009) {
      _0x56b68d(_0x403ca1, _0x3ad009, "createTexture", _0x204083.textures);
    }
    function _0x358ff6(_0x1a6210, _0x4f0e34) {
      _0x56b68d(_0x1a6210, _0x4f0e34, "createVertexArray", _0x204083.vaos);
    }
    function _0x483ea7(_0x3a25aa) {
      _0xc70178.generateMipmap(_0x3a25aa);
    }
    function _0x424b01(_0x5b750a, _0x55165a, _0x1d1490, _0x55b676, _0x4b0abd, _0x49cae1, _0x589bca, _0xd6f354) {
      _0x55165a = _0x204083.programs[_0x55165a];
      var _0x249331 = _0xc70178[_0x5b750a](_0x55165a, _0x1d1490);
      if (_0x249331) {
        var _0x97219 = _0xd6f354 && _0xb1d3f9(_0x249331.name, _0xd6f354, _0x55b676);
        if (_0x4b0abd) {
          _0x47a7a3[_0x4b0abd >> 2] = _0x97219;
        }
        if (_0x49cae1) {
          _0x47a7a3[_0x49cae1 >> 2] = _0x249331.size;
        }
        if (_0x589bca) {
          _0x47a7a3[_0x589bca >> 2] = _0x249331.type;
        }
      }
    }
    function _0x2a9bd5(_0x3af145, _0x3d4094, _0xe36395, _0x29f41c, _0x536611, _0x4e715d, _0x3cecb7) {
      _0x424b01("getActiveAttrib", _0x3af145, _0x3d4094, _0xe36395, _0x29f41c, _0x536611, _0x4e715d, _0x3cecb7);
    }
    function _0x1b8b27(_0x4f1e0c, _0x38d47f, _0x143c00, _0x25b8d3, _0x2e58b7, _0x4d5b40, _0x4eda1d) {
      _0x424b01("getActiveUniform", _0x4f1e0c, _0x38d47f, _0x143c00, _0x25b8d3, _0x2e58b7, _0x4d5b40, _0x4eda1d);
    }
    function _0x2b68c1(_0xd44518, _0x950a41, _0x59aaf6, _0x1afbff, _0x3ad75e) {
      _0xd44518 = _0x204083.programs[_0xd44518];
      var _0x865d8b = _0xc70178.getActiveUniformBlockName(_0xd44518, _0x950a41);
      if (!_0x865d8b) {
        return;
      }
      if (_0x3ad75e && _0x59aaf6 > 0) {
        var _0x3d7eeb = _0xb1d3f9(_0x865d8b, _0x3ad75e, _0x59aaf6);
        if (_0x1afbff) {
          _0x47a7a3[_0x1afbff >> 2] = _0x3d7eeb;
        }
      } else if (_0x1afbff) {
        _0x47a7a3[_0x1afbff >> 2] = 0;
      }
    }
    function _0x17973b(_0x37b691, _0x4a51f5, _0x353fac, _0x3c367c) {
      if (!_0x3c367c) {
        _0x204083.recordError(1281);
        return;
      }
      _0x37b691 = _0x204083.programs[_0x37b691];
      if (_0x353fac == 35393) {
        var _0x1fe83c = _0xc70178.getActiveUniformBlockName(_0x37b691, _0x4a51f5);
        _0x47a7a3[_0x3c367c >> 2] = _0x1fe83c.length + 1;
        return;
      }
      var _0x12fbd6 = _0xc70178.getActiveUniformBlockParameter(_0x37b691, _0x4a51f5, _0x353fac);
      if (_0x12fbd6 === null) {
        return;
      }
      if (_0x353fac == 35395) {
        for (var _0x150542 = 0; _0x150542 < _0x12fbd6.length; _0x150542++) {
          _0x47a7a3[_0x3c367c + _0x150542 * 4 >> 2] = _0x12fbd6[_0x150542];
        }
      } else {
        _0x47a7a3[_0x3c367c >> 2] = _0x12fbd6;
      }
    }
    function _0x5760f3(_0x59b23c, _0x5f46ab, _0x540063, _0x51e65e, _0xcfef8a) {
      if (!_0xcfef8a) {
        _0x204083.recordError(1281);
        return;
      }
      if (_0x5f46ab > 0 && _0x540063 == 0) {
        _0x204083.recordError(1281);
        return;
      }
      _0x59b23c = _0x204083.programs[_0x59b23c];
      var _0xf7b252 = [];
      for (var _0x4f2f2e = 0; _0x4f2f2e < _0x5f46ab; _0x4f2f2e++) {
        _0xf7b252.push(_0x47a7a3[_0x540063 + _0x4f2f2e * 4 >> 2]);
      }
      var _0x6b79c3 = _0xc70178.getActiveUniforms(_0x59b23c, _0xf7b252, _0x51e65e);
      if (!_0x6b79c3) {
        return;
      }
      var _0x4999c6 = _0x6b79c3.length;
      for (var _0x4f2f2e = 0; _0x4f2f2e < _0x4999c6; _0x4f2f2e++) {
        _0x47a7a3[_0xcfef8a + _0x4f2f2e * 4 >> 2] = _0x6b79c3[_0x4f2f2e];
      }
    }
    function _0x384040(_0x4ab49f, _0x33f47b) {
      return _0xc70178.getAttribLocation(_0x204083.programs[_0x4ab49f], _0x2b7aa3(_0x33f47b));
    }
    function _0x419bb6(_0x29c708, _0x1affe9, _0x4caa6d, _0x176999) {
      if (!_0x176999) {
        _0x204083.recordError(1281);
        return;
      }
      _0xc70178.getBufferSubData(_0x29c708, _0x1affe9, _0xb4481c, _0x176999, _0x4caa6d);
    }
    function _0x5040df() {
      var _0x19f339 = _0xc70178.getError() || _0x204083.lastError;
      _0x204083.lastError = 0;
      return _0x19f339;
    }
    function _0x5d6f6a(_0x453791, _0x6c1bf0, _0x8e6ac0, _0x1248e4) {
      var _0x3ba2f7 = _0xc70178.getFramebufferAttachmentParameter(_0x453791, _0x6c1bf0, _0x8e6ac0);
      if (_0x3ba2f7 instanceof WebGLRenderbuffer || _0x3ba2f7 instanceof WebGLTexture) {
        _0x3ba2f7 = _0x3ba2f7.name | 0;
      }
      _0x47a7a3[_0x1248e4 >> 2] = _0x3ba2f7;
    }
    function _0x76f1fe(_0x41e907, _0x3287be) {
      _0x195007[_0x41e907 >> 2] = _0x3287be;
      _0x195007[_0x41e907 + 4 >> 2] = (_0x3287be - _0x195007[_0x41e907 >> 2]) / 4294967296;
    }
    function _0x2484ec(_0x358c23, _0x317cb5, _0x1a2c8a, _0x209fd8) {
      if (!_0x1a2c8a) {
        _0x204083.recordError(1281);
        return;
      }
      var _0x41d5f6 = _0xc70178.getIndexedParameter(_0x358c23, _0x317cb5);
      var _0x2e0d97;
      switch (typeof _0x41d5f6) {
        case "boolean":
          _0x2e0d97 = _0x41d5f6 ? 1 : 0;
          break;
        case "number":
          _0x2e0d97 = _0x41d5f6;
          break;
        case "object":
          if (_0x41d5f6 === null) {
            switch (_0x358c23) {
              case 35983:
              case 35368:
                _0x2e0d97 = 0;
                break;
              default:
                {
                  _0x204083.recordError(1280);
                  return;
                }
            }
          } else if (_0x41d5f6 instanceof WebGLBuffer) {
            _0x2e0d97 = _0x41d5f6.name | 0;
          } else {
            _0x204083.recordError(1280);
            return;
          }
          break;
        default:
          _0x204083.recordError(1280);
          return;
      }
      switch (_0x209fd8) {
        case 1:
          _0x76f1fe(_0x1a2c8a, _0x2e0d97);
          break;
        case 0:
          _0x47a7a3[_0x1a2c8a >> 2] = _0x2e0d97;
          break;
        case 2:
          _0x50a76e[_0x1a2c8a >> 2] = _0x2e0d97;
          break;
        case 4:
          _0x2845ef[_0x1a2c8a >> 0] = _0x2e0d97 ? 1 : 0;
          break;
        default:
          throw "internal emscriptenWebGLGetIndexed() error, bad type: " + _0x209fd8;
      }
    }
    function _0x546f78(_0x325418, _0x531041, _0x12e73d) {
      _0x2484ec(_0x325418, _0x531041, _0x12e73d, 0);
    }
    function _0x177a43(_0x3c63b5, _0x35cef5, _0xd74ceb) {
      if (!_0x35cef5) {
        _0x204083.recordError(1281);
        return;
      }
      var _0x58bdb1 = undefined;
      switch (_0x3c63b5) {
        case 36346:
          _0x58bdb1 = 1;
          break;
        case 36344:
          if (_0xd74ceb != 0 && _0xd74ceb != 1) {
            _0x204083.recordError(1280);
          }
          return;
        case 34814:
        case 36345:
          _0x58bdb1 = 0;
          break;
        case 34466:
          var _0x89c8f6 = _0xc70178.getParameter(34467);
          _0x58bdb1 = _0x89c8f6 ? _0x89c8f6.length : 0;
          break;
        case 33390:
          _0x58bdb1 = 1048576;
          break;
        case 33309:
          if (_0x204083.currentContext.version < 2) {
            _0x204083.recordError(1282);
            return;
          }
          var _0x525b27 = _0xc70178.getSupportedExtensions() || [];
          _0x58bdb1 = _0x525b27.length * 2;
          break;
        case 33307:
        case 33308:
          if (_0x204083.currentContext.version < 2) {
            _0x204083.recordError(1280);
            return;
          }
          _0x58bdb1 = _0x3c63b5 == 33307 ? 3 : 0;
          break;
      }
      if (_0x58bdb1 === undefined) {
        var _0x167b10 = _0xc70178.getParameter(_0x3c63b5);
        switch (typeof _0x167b10) {
          case "number":
            _0x58bdb1 = _0x167b10;
            break;
          case "boolean":
            _0x58bdb1 = _0x167b10 ? 1 : 0;
            break;
          case "string":
            _0x204083.recordError(1280);
            return;
          case "object":
            if (_0x167b10 === null) {
              switch (_0x3c63b5) {
                case 34964:
                case 35725:
                case 34965:
                case 36006:
                case 36007:
                case 32873:
                case 34229:
                case 36662:
                case 36663:
                case 35053:
                case 35055:
                case 36010:
                case 35097:
                case 35869:
                case 32874:
                case 36389:
                case 35983:
                case 35368:
                case 34068:
                  {
                    _0x58bdb1 = 0;
                    break;
                  }
                default:
                  {
                    _0x204083.recordError(1280);
                    return;
                  }
              }
            } else if (_0x167b10 instanceof Float32Array || _0x167b10 instanceof Uint32Array || _0x167b10 instanceof Int32Array || _0x167b10 instanceof Array) {
              for (var _0x8e99e8 = 0; _0x8e99e8 < _0x167b10.length; ++_0x8e99e8) {
                switch (_0xd74ceb) {
                  case 0:
                    _0x47a7a3[_0x35cef5 + _0x8e99e8 * 4 >> 2] = _0x167b10[_0x8e99e8];
                    break;
                  case 2:
                    _0x50a76e[_0x35cef5 + _0x8e99e8 * 4 >> 2] = _0x167b10[_0x8e99e8];
                    break;
                  case 4:
                    _0x2845ef[_0x35cef5 + _0x8e99e8 >> 0] = _0x167b10[_0x8e99e8] ? 1 : 0;
                    break;
                }
              }
              return;
            } else {
              try {
                _0x58bdb1 = _0x167b10.name | 0;
              } catch (_0x5bbe6b) {
                _0x204083.recordError(1280);
                _0x2b9f46("GL_INVALID_ENUM in glGet" + _0xd74ceb + "v: Unknown object returned from WebGL getParameter(" + _0x3c63b5 + ")! (error: " + _0x5bbe6b + ")");
                return;
              }
            }
            break;
          default:
            _0x204083.recordError(1280);
            _0x2b9f46("GL_INVALID_ENUM in glGet" + _0xd74ceb + "v: Native code calling glGet" + _0xd74ceb + "v(" + _0x3c63b5 + ") and it returns " + _0x167b10 + " of type " + typeof _0x167b10 + "!");
            return;
        }
      }
      switch (_0xd74ceb) {
        case 1:
          _0x76f1fe(_0x35cef5, _0x58bdb1);
          break;
        case 0:
          _0x47a7a3[_0x35cef5 >> 2] = _0x58bdb1;
          break;
        case 2:
          _0x50a76e[_0x35cef5 >> 2] = _0x58bdb1;
          break;
        case 4:
          _0x2845ef[_0x35cef5 >> 0] = _0x58bdb1 ? 1 : 0;
          break;
      }
    }
    function _0x48f75f(_0x31d723, _0x5db5e6) {
      _0x177a43(_0x31d723, _0x5db5e6, 0);
    }
    function _0x3673d5(_0x2d46f6, _0x1bf37c, _0x697c56, _0x1cd098, _0x3308df) {
      if (_0x1cd098 < 0) {
        _0x204083.recordError(1281);
        return;
      }
      if (!_0x3308df) {
        _0x204083.recordError(1281);
        return;
      }
      var _0x42f7b9 = _0xc70178.getInternalformatParameter(_0x2d46f6, _0x1bf37c, _0x697c56);
      if (_0x42f7b9 === null) {
        return;
      }
      for (var _0x3985ef = 0; _0x3985ef < _0x42f7b9.length && _0x3985ef < _0x1cd098; ++_0x3985ef) {
        _0x47a7a3[_0x3308df + _0x3985ef * 4 >> 2] = _0x42f7b9[_0x3985ef];
      }
    }
    function _0xd04518(_0x5b48ee, _0x33c6b4, _0x52a340, _0x20391a, _0x533e70) {
      _0x204083.recordError(1282);
    }
    function _0x59eefd(_0x2a5e64, _0x32ce25, _0x1b14bf, _0x3ad28e) {
      var _0x51feb0 = _0xc70178.getProgramInfoLog(_0x204083.programs[_0x2a5e64]);
      if (_0x51feb0 === null) {
        _0x51feb0 = "(unknown error)";
      }
      var _0x2838af = _0x32ce25 > 0 && _0x3ad28e ? _0xb1d3f9(_0x51feb0, _0x3ad28e, _0x32ce25) : 0;
      if (_0x1b14bf) {
        _0x47a7a3[_0x1b14bf >> 2] = _0x2838af;
      }
    }
    function _0x2eca1a(_0x5aa36c, _0x3f59c3, _0x3d60f9) {
      if (!_0x3d60f9) {
        _0x204083.recordError(1281);
        return;
      }
      if (_0x5aa36c >= _0x204083.counter) {
        _0x204083.recordError(1281);
        return;
      }
      _0x5aa36c = _0x204083.programs[_0x5aa36c];
      if (_0x3f59c3 == 35716) {
        var _0x441693 = _0xc70178.getProgramInfoLog(_0x5aa36c);
        if (_0x441693 === null) {
          _0x441693 = "(unknown error)";
        }
        _0x47a7a3[_0x3d60f9 >> 2] = _0x441693.length + 1;
      } else if (_0x3f59c3 == 35719) {
        if (!_0x5aa36c.maxUniformLength) {
          for (var _0x1d665b = 0; _0x1d665b < _0xc70178.getProgramParameter(_0x5aa36c, 35718); ++_0x1d665b) {
            _0x5aa36c.maxUniformLength = Math.max(_0x5aa36c.maxUniformLength, _0xc70178.getActiveUniform(_0x5aa36c, _0x1d665b).name.length + 1);
          }
        }
        _0x47a7a3[_0x3d60f9 >> 2] = _0x5aa36c.maxUniformLength;
      } else if (_0x3f59c3 == 35722) {
        if (!_0x5aa36c.maxAttributeLength) {
          for (var _0x1d665b = 0; _0x1d665b < _0xc70178.getProgramParameter(_0x5aa36c, 35721); ++_0x1d665b) {
            _0x5aa36c.maxAttributeLength = Math.max(_0x5aa36c.maxAttributeLength, _0xc70178.getActiveAttrib(_0x5aa36c, _0x1d665b).name.length + 1);
          }
        }
        _0x47a7a3[_0x3d60f9 >> 2] = _0x5aa36c.maxAttributeLength;
      } else if (_0x3f59c3 == 35381) {
        if (!_0x5aa36c.maxUniformBlockNameLength) {
          for (var _0x1d665b = 0; _0x1d665b < _0xc70178.getProgramParameter(_0x5aa36c, 35382); ++_0x1d665b) {
            _0x5aa36c.maxUniformBlockNameLength = Math.max(_0x5aa36c.maxUniformBlockNameLength, _0xc70178.getActiveUniformBlockName(_0x5aa36c, _0x1d665b).length + 1);
          }
        }
        _0x47a7a3[_0x3d60f9 >> 2] = _0x5aa36c.maxUniformBlockNameLength;
      } else {
        _0x47a7a3[_0x3d60f9 >> 2] = _0xc70178.getProgramParameter(_0x5aa36c, _0x3f59c3);
      }
    }
    function _0x3057c8(_0xf06f30, _0x1f458e, _0x43d2a5) {
      if (!_0x43d2a5) {
        _0x204083.recordError(1281);
        return;
      }
      var _0x168f55 = _0x204083.queries[_0xf06f30];
      var _0x13548f = _0xc70178.getQueryParameter(_0x168f55, _0x1f458e);
      var _0x4c6296;
      if (typeof _0x13548f == "boolean") {
        _0x4c6296 = _0x13548f ? 1 : 0;
      } else {
        _0x4c6296 = _0x13548f;
      }
      _0x47a7a3[_0x43d2a5 >> 2] = _0x4c6296;
    }
    function _0x781bf7(_0x3d734c, _0x521d3b, _0x1d8378) {
      if (!_0x1d8378) {
        _0x204083.recordError(1281);
        return;
      }
      _0x47a7a3[_0x1d8378 >> 2] = _0xc70178.getQuery(_0x3d734c, _0x521d3b);
    }
    function _0x2290e8(_0x5be2a7, _0x406fdf, _0x190268) {
      if (!_0x190268) {
        _0x204083.recordError(1281);
        return;
      }
      _0x47a7a3[_0x190268 >> 2] = _0xc70178.getRenderbufferParameter(_0x5be2a7, _0x406fdf);
    }
    function _0x488860(_0x1b08ea, _0x5aa00d, _0x3c2091, _0x2f2781) {
      var _0x1efd1e = _0xc70178.getShaderInfoLog(_0x204083.shaders[_0x1b08ea]);
      if (_0x1efd1e === null) {
        _0x1efd1e = "(unknown error)";
      }
      var _0x3003d8 = _0x5aa00d > 0 && _0x2f2781 ? _0xb1d3f9(_0x1efd1e, _0x2f2781, _0x5aa00d) : 0;
      if (_0x3c2091) {
        _0x47a7a3[_0x3c2091 >> 2] = _0x3003d8;
      }
    }
    function _0x31202c(_0x1ec4f9, _0x43f943, _0x49d503, _0x15ed47) {
      var _0x5b8753 = _0xc70178.getShaderPrecisionFormat(_0x1ec4f9, _0x43f943);
      _0x47a7a3[_0x49d503 >> 2] = _0x5b8753.rangeMin;
      _0x47a7a3[_0x49d503 + 4 >> 2] = _0x5b8753.rangeMax;
      _0x47a7a3[_0x15ed47 >> 2] = _0x5b8753.precision;
    }
    function _0x395715(_0x369196, _0x402a26, _0x1c5161, _0xea7005) {
      var _0x18cc1c = _0xc70178.getShaderSource(_0x204083.shaders[_0x369196]);
      if (!_0x18cc1c) {
        return;
      }
      var _0x507d81 = _0x402a26 > 0 && _0xea7005 ? _0xb1d3f9(_0x18cc1c, _0xea7005, _0x402a26) : 0;
      if (_0x1c5161) {
        _0x47a7a3[_0x1c5161 >> 2] = _0x507d81;
      }
    }
    function _0x35f1d7(_0xb0b2f6, _0xe026cb, _0xfcfa5f) {
      if (!_0xfcfa5f) {
        _0x204083.recordError(1281);
        return;
      }
      if (_0xe026cb == 35716) {
        var _0x46d87a = _0xc70178.getShaderInfoLog(_0x204083.shaders[_0xb0b2f6]);
        if (_0x46d87a === null) {
          _0x46d87a = "(unknown error)";
        }
        var _0x5b710b = _0x46d87a ? _0x46d87a.length + 1 : 0;
        _0x47a7a3[_0xfcfa5f >> 2] = _0x5b710b;
      } else if (_0xe026cb == 35720) {
        var _0x1e61a7 = _0xc70178.getShaderSource(_0x204083.shaders[_0xb0b2f6]);
        var _0x45eb5d = _0x1e61a7 ? _0x1e61a7.length + 1 : 0;
        _0x47a7a3[_0xfcfa5f >> 2] = _0x45eb5d;
      } else {
        _0x47a7a3[_0xfcfa5f >> 2] = _0xc70178.getShaderParameter(_0x204083.shaders[_0xb0b2f6], _0xe026cb);
      }
    }
    function _0x25f6ca(_0x5f3497) {
      var _0x5c60db = _0x204083.stringCache[_0x5f3497];
      if (!_0x5c60db) {
        switch (_0x5f3497) {
          case 7939:
            var _0x5b0ed7 = _0xc70178.getSupportedExtensions() || [];
            _0x5b0ed7 = _0x5b0ed7.concat(_0x5b0ed7.map(function (_0x5abd23) {
              return "GL_" + _0x5abd23;
            }));
            _0x5c60db = _0x4a04ee(_0x5b0ed7.join(" "));
            break;
          case 7936:
          case 7937:
          case 37445:
          case 37446:
            var _0x2696a2 = _0xc70178.getParameter(_0x5f3497);
            if (!_0x2696a2) {
              _0x204083.recordError(1280);
            }
            _0x5c60db = _0x2696a2 && _0x4a04ee(_0x2696a2);
            break;
          case 7938:
            var _0x374e3e = _0xc70178.getParameter(7938);
            if (_0x204083.currentContext.version >= 2) {
              _0x374e3e = "OpenGL ES 3.0 (" + _0x374e3e + ")";
            } else {
              _0x374e3e = "OpenGL ES 2.0 (" + _0x374e3e + ")";
            }
            _0x5c60db = _0x4a04ee(_0x374e3e);
            break;
          case 35724:
            var _0x4eae12 = _0xc70178.getParameter(35724);
            var _0x3b0cb3 = /^WebGL GLSL ES ([0-9]\.[0-9][0-9]?)(?:$| .*)/;
            var _0x463e95 = _0x4eae12.match(_0x3b0cb3);
            if (_0x463e95 !== null) {
              if (_0x463e95[1].length == 3) {
                _0x463e95[1] = _0x463e95[1] + "0";
              }
              _0x4eae12 = "OpenGL ES GLSL ES " + _0x463e95[1] + " (" + _0x4eae12 + ")";
            }
            _0x5c60db = _0x4a04ee(_0x4eae12);
            break;
          default:
            _0x204083.recordError(1280);
        }
        _0x204083.stringCache[_0x5f3497] = _0x5c60db;
      }
      return _0x5c60db;
    }
    function _0x4c12c9(_0x23eccf, _0xc903c5) {
      if (_0x204083.currentContext.version < 2) {
        _0x204083.recordError(1282);
        return 0;
      }
      var _0x5d7b29 = _0x204083.stringiCache[_0x23eccf];
      if (_0x5d7b29) {
        if (_0xc903c5 < 0 || _0xc903c5 >= _0x5d7b29.length) {
          _0x204083.recordError(1281);
          return 0;
        }
        return _0x5d7b29[_0xc903c5];
      }
      switch (_0x23eccf) {
        case 7939:
          var _0x35b51d = _0xc70178.getSupportedExtensions() || [];
          _0x35b51d = _0x35b51d.concat(_0x35b51d.map(function (_0x5d5b3f) {
            return "GL_" + _0x5d5b3f;
          }));
          _0x35b51d = _0x35b51d.map(function (_0x48691e) {
            return _0x4a04ee(_0x48691e);
          });
          _0x5d7b29 = _0x204083.stringiCache[_0x23eccf] = _0x35b51d;
          if (_0xc903c5 < 0 || _0xc903c5 >= _0x5d7b29.length) {
            _0x204083.recordError(1281);
            return 0;
          }
          return _0x5d7b29[_0xc903c5];
        default:
          _0x204083.recordError(1280);
          return 0;
      }
    }
    function _0x3150ca(_0x352662, _0x3e5d5a, _0x4e848f) {
      if (!_0x4e848f) {
        _0x204083.recordError(1281);
        return;
      }
      _0x47a7a3[_0x4e848f >> 2] = _0xc70178.getTexParameter(_0x352662, _0x3e5d5a);
    }
    function _0x100beb(_0x2c88d1, _0x50317a) {
      return _0xc70178.getUniformBlockIndex(_0x204083.programs[_0x2c88d1], _0x2b7aa3(_0x50317a));
    }
    function _0x4d22dd(_0x4b6ed3, _0xdec02e, _0x5aec91, _0x3fb3c5) {
      if (!_0x3fb3c5) {
        _0x204083.recordError(1281);
        return;
      }
      if (_0xdec02e > 0 && (_0x5aec91 == 0 || _0x3fb3c5 == 0)) {
        _0x204083.recordError(1281);
        return;
      }
      _0x4b6ed3 = _0x204083.programs[_0x4b6ed3];
      var _0x5accb2 = [];
      for (var _0x44ab9f = 0; _0x44ab9f < _0xdec02e; _0x44ab9f++) {
        _0x5accb2.push(_0x2b7aa3(_0x47a7a3[_0x5aec91 + _0x44ab9f * 4 >> 2]));
      }
      var _0x2a8411 = _0xc70178.getUniformIndices(_0x4b6ed3, _0x5accb2);
      if (!_0x2a8411) {
        return;
      }
      var _0xb522da = _0x2a8411.length;
      for (var _0x44ab9f = 0; _0x44ab9f < _0xb522da; _0x44ab9f++) {
        _0x47a7a3[_0x3fb3c5 + _0x44ab9f * 4 >> 2] = _0x2a8411[_0x44ab9f];
      }
    }
    function _0x137e74(_0x447a39) {
      return _0x447a39.slice(-1) == "]" && _0x447a39.lastIndexOf("[");
    }
    function _0x5eafd9(_0x244d00) {
      var _0x2e78b5 = _0x244d00.uniformLocsById;
      var _0x232bc7 = _0x244d00.uniformSizeAndIdsByName;
      var _0x5e893f;
      var _0x43f73b;
      if (!_0x2e78b5) {
        _0x244d00.uniformLocsById = _0x2e78b5 = {};
        _0x244d00.uniformArrayNamesById = {};
        for (_0x5e893f = 0; _0x5e893f < _0xc70178.getProgramParameter(_0x244d00, 35718); ++_0x5e893f) {
          var _0x51c8f9 = _0xc70178.getActiveUniform(_0x244d00, _0x5e893f);
          var _0xffab3e = _0x51c8f9.name;
          var _0x24d538 = _0x51c8f9.size;
          var _0x2caf11 = _0x137e74(_0xffab3e);
          var _0x4efa9d = _0x2caf11 > 0 ? _0xffab3e.slice(0, _0x2caf11) : _0xffab3e;
          var _0xae2b76 = _0x232bc7[_0x4efa9d] ? _0x232bc7[_0x4efa9d][1] : _0x244d00.uniformIdCounter;
          _0x244d00.uniformIdCounter = Math.max(_0xae2b76 + _0x24d538, _0x244d00.uniformIdCounter);
          _0x232bc7[_0x4efa9d] = [_0x24d538, _0xae2b76];
          for (_0x43f73b = 0; _0x43f73b < _0x24d538; ++_0x43f73b) {
            _0x2e78b5[_0xae2b76] = _0x43f73b;
            _0x244d00.uniformArrayNamesById[_0xae2b76++] = _0x4efa9d;
          }
        }
      }
    }
    function _0x2487a3(_0x19006b, _0x505a0f) {
      _0x505a0f = _0x2b7aa3(_0x505a0f);
      if (_0x19006b = _0x204083.programs[_0x19006b]) {
        _0x5eafd9(_0x19006b);
        var _0x1b5d56 = _0x19006b.uniformLocsById;
        var _0x44e1cb = 0;
        var _0xadced3 = _0x505a0f;
        var _0x302476 = _0x137e74(_0x505a0f);
        if (_0x302476 > 0) {
          _0x44e1cb = _0x49c2e7(_0x505a0f.slice(_0x302476 + 1)) >>> 0;
          _0xadced3 = _0x505a0f.slice(0, _0x302476);
        }
        var _0x45042d = _0x19006b.uniformSizeAndIdsByName[_0xadced3];
        if (_0x45042d && _0x44e1cb < _0x45042d[0]) {
          _0x44e1cb += _0x45042d[1];
          if (_0x1b5d56[_0x44e1cb] = _0x1b5d56[_0x44e1cb] || _0xc70178.getUniformLocation(_0x19006b, _0x505a0f)) {
            return _0x44e1cb;
          }
        }
      } else {
        _0x204083.recordError(1281);
      }
      return -1;
    }
    function _0x183a44(_0x4afee7) {
      var _0x568fcb = _0xc70178.currentProgram;
      if (_0x568fcb) {
        var _0x48bfcf = _0x568fcb.uniformLocsById[_0x4afee7];
        if (typeof _0x48bfcf == "number") {
          _0x568fcb.uniformLocsById[_0x4afee7] = _0x48bfcf = _0xc70178.getUniformLocation(_0x568fcb, _0x568fcb.uniformArrayNamesById[_0x4afee7] + (_0x48bfcf > 0 ? "[" + _0x48bfcf + "]" : ""));
        }
        return _0x48bfcf;
      } else {
        _0x204083.recordError(1282);
      }
    }
    function _0x2f4655(_0x435bc0, _0x4b5b98, _0x5c5c70, _0x5990f0) {
      if (!_0x5c5c70) {
        _0x204083.recordError(1281);
        return;
      }
      _0x435bc0 = _0x204083.programs[_0x435bc0];
      _0x5eafd9(_0x435bc0);
      var _0x341e40 = _0xc70178.getUniform(_0x435bc0, _0x183a44(_0x4b5b98));
      if (typeof _0x341e40 == "number" || typeof _0x341e40 == "boolean") {
        switch (_0x5990f0) {
          case 0:
            _0x47a7a3[_0x5c5c70 >> 2] = _0x341e40;
            break;
          case 2:
            _0x50a76e[_0x5c5c70 >> 2] = _0x341e40;
            break;
        }
      } else {
        for (var _0x15f670 = 0; _0x15f670 < _0x341e40.length; _0x15f670++) {
          switch (_0x5990f0) {
            case 0:
              _0x47a7a3[_0x5c5c70 + _0x15f670 * 4 >> 2] = _0x341e40[_0x15f670];
              break;
            case 2:
              _0x50a76e[_0x5c5c70 + _0x15f670 * 4 >> 2] = _0x341e40[_0x15f670];
              break;
          }
        }
      }
    }
    function _0x5865a7(_0x4b21f8, _0x363641, _0x586b95) {
      _0x2f4655(_0x4b21f8, _0x363641, _0x586b95, 0);
    }
    function _0x13007f(_0x35237f, _0x7279e7, _0x2c1911, _0x5f3b8d) {
      if (!_0x2c1911) {
        _0x204083.recordError(1281);
        return;
      }
      if (_0x204083.currentContext.clientBuffers[_0x35237f].enabled) {
        _0x2b9f46("glGetVertexAttrib*v on client-side array: not supported, bad data returned");
      }
      var _0x4ddde2 = _0xc70178.getVertexAttrib(_0x35237f, _0x7279e7);
      if (_0x7279e7 == 34975) {
        _0x47a7a3[_0x2c1911 >> 2] = _0x4ddde2 && _0x4ddde2.name;
      } else if (typeof _0x4ddde2 == "number" || typeof _0x4ddde2 == "boolean") {
        switch (_0x5f3b8d) {
          case 0:
            _0x47a7a3[_0x2c1911 >> 2] = _0x4ddde2;
            break;
          case 2:
            _0x50a76e[_0x2c1911 >> 2] = _0x4ddde2;
            break;
          case 5:
            _0x47a7a3[_0x2c1911 >> 2] = Math.fround(_0x4ddde2);
            break;
        }
      } else {
        for (var _0x27fb8f = 0; _0x27fb8f < _0x4ddde2.length; _0x27fb8f++) {
          switch (_0x5f3b8d) {
            case 0:
              _0x47a7a3[_0x2c1911 + _0x27fb8f * 4 >> 2] = _0x4ddde2[_0x27fb8f];
              break;
            case 2:
              _0x50a76e[_0x2c1911 + _0x27fb8f * 4 >> 2] = _0x4ddde2[_0x27fb8f];
              break;
            case 5:
              _0x47a7a3[_0x2c1911 + _0x27fb8f * 4 >> 2] = Math.fround(_0x4ddde2[_0x27fb8f]);
              break;
          }
        }
      }
    }
    function _0x584a48(_0x4fa1df, _0x438147, _0x230c05) {
      _0x13007f(_0x4fa1df, _0x438147, _0x230c05, 5);
    }
    function _0x2d4d8e(_0x10fab2, _0x1436b2, _0x302ea9) {
      var _0x27799c = _0x53096f[_0x1436b2];
      for (var _0x1eb1ea = 0; _0x1eb1ea < _0x1436b2; _0x1eb1ea++) {
        _0x27799c[_0x1eb1ea] = _0x47a7a3[_0x302ea9 + _0x1eb1ea * 4 >> 2];
      }
      _0xc70178.invalidateFramebuffer(_0x10fab2, _0x27799c);
    }
    function _0x3bab9f(_0xfbfc21) {
      return _0xc70178.isEnabled(_0xfbfc21);
    }
    function _0x508432(_0x387392) {
      var _0x5d11b7 = _0x204083.vaos[_0x387392];
      if (!_0x5d11b7) {
        return 0;
      }
      return _0xc70178.isVertexArray(_0x5d11b7);
    }
    function _0x3ee60e(_0x168d30) {
      _0x168d30 = _0x204083.programs[_0x168d30];
      _0xc70178.linkProgram(_0x168d30);
      _0x168d30.uniformLocsById = 0;
      _0x168d30.uniformSizeAndIdsByName = {};
      [_0x168d30.vs, _0x168d30.fs].forEach(function (_0x61ede4) {
        Object.keys(_0x61ede4.explicitUniformLocations).forEach(function (_0x3655d1) {
          var _0x6ccb5 = _0x61ede4.explicitUniformLocations[_0x3655d1];
          _0x168d30.uniformSizeAndIdsByName[_0x3655d1] = [1, _0x6ccb5];
          _0x168d30.uniformIdCounter = Math.max(_0x168d30.uniformIdCounter, _0x6ccb5 + 1);
        });
      });
      function _0x45d3fd(_0x28a3eb, _0x583c48) {
        Object.keys(_0x583c48).forEach(function (_0x515015) {
          _0x28a3eb[_0x515015] = _0x583c48[_0x515015];
        });
      }
      _0x168d30.explicitUniformBindings = {};
      _0x168d30.explicitSamplerBindings = {};
      [_0x168d30.vs, _0x168d30.fs].forEach(function (_0x156430) {
        _0x45d3fd(_0x168d30.explicitUniformBindings, _0x156430.explicitUniformBindings);
        _0x45d3fd(_0x168d30.explicitSamplerBindings, _0x156430.explicitSamplerBindings);
      });
      _0x168d30.explicitProgramBindingsApplied = 0;
    }
    function _0x18c3d5(_0xeb3454, _0x23524d, _0xa6f8d3, _0x4934c9) {
      if (_0x4934c9 != 26 && _0x4934c9 != 10) {
        _0x2b9f46("glMapBufferRange is only supported when access is MAP_WRITE|INVALIDATE_BUFFER");
        return 0;
      }
      if (!_0x20328d(_0xeb3454)) {
        _0x204083.recordError(1280);
        _0x2b9f46("GL_INVALID_ENUM in glMapBufferRange");
        return 0;
      }
      var _0x5023c8 = _0x5d55ea(_0xa6f8d3);
      if (!_0x5023c8) {
        return 0;
      }
      _0x204083.mappedBuffers[_0x1b5806(_0xeb3454)] = {
        offset: _0x23524d,
        length: _0xa6f8d3,
        mem: _0x5023c8,
        access: _0x4934c9
      };
      return _0x5023c8;
    }
    function _0x15b2bf(_0x382217, _0x156829) {
      if (_0x382217 == 3317) {
        _0x204083.unpackAlignment = _0x156829;
      }
      _0xc70178.pixelStorei(_0x382217, _0x156829);
    }
    function _0x1b2555(_0x7e176e, _0x52b071) {
      _0xc70178.polygonOffset(_0x7e176e, _0x52b071);
    }
    function _0x2d9abd(_0x4e5acd, _0x269971, _0x337b79, _0x5393e2) {
      _0x204083.recordError(1280);
    }
    function _0x637b2a(_0x195eda, _0xecc8e5, _0x1293a2) {
      _0x204083.recordError(1280);
    }
    function _0x17576d(_0x337c33) {
      _0xc70178.readBuffer(_0x337c33);
    }
    function _0x269d16(_0x323840, _0x127183, _0x20994c, _0x543757) {
      function _0x18d5a0(_0x7aa439, _0xdf8f1) {
        return _0x7aa439 + _0xdf8f1 - 1 & -_0xdf8f1;
      }
      var _0x537800 = _0x323840 * _0x20994c;
      var _0x307f1a = _0x18d5a0(_0x537800, _0x543757);
      return _0x127183 * _0x307f1a;
    }
    function _0x594512(_0x30d291) {
      var _0x5506db = {
        5: 3,
        6: 4,
        8: 2,
        29502: 3,
        29504: 4,
        26917: 2,
        26918: 2,
        29846: 3,
        29847: 4
      };
      return _0x5506db[_0x30d291 - 6402] || 1;
    }
    function _0x2ecbd6(_0x51b212) {
      _0x51b212 -= 5120;
      if (_0x51b212 == 0) {
        return _0x2845ef;
      }
      if (_0x51b212 == 1) {
        return _0xb4481c;
      }
      if (_0x51b212 == 2) {
        return _0x3c10c6;
      }
      if (_0x51b212 == 4) {
        return _0x47a7a3;
      }
      if (_0x51b212 == 6) {
        return _0x50a76e;
      }
      if (_0x51b212 == 5 || _0x51b212 == 28922 || _0x51b212 == 28520 || _0x51b212 == 30779 || _0x51b212 == 30782) {
        return _0x195007;
      }
      return _0x4181af;
    }
    function _0x10dd2b(_0x4adb7f) {
      return 31 - Math.clz32(_0x4adb7f.BYTES_PER_ELEMENT);
    }
    function _0x5c500f(_0x541af9, _0x29554c, _0x2fe94e, _0x3ade03, _0x3b2a39, _0x58ac1a) {
      var _0x23c5e9 = _0x2ecbd6(_0x541af9);
      var _0x3be60f = _0x10dd2b(_0x23c5e9);
      var _0x1e8977 = 1 << _0x3be60f;
      var _0x31dd48 = _0x594512(_0x29554c) * _0x1e8977;
      var _0xa53b41 = _0x269d16(_0x2fe94e, _0x3ade03, _0x31dd48, _0x204083.unpackAlignment);
      return _0x23c5e9.subarray(_0x3b2a39 >> _0x3be60f, _0x3b2a39 + _0xa53b41 >> _0x3be60f);
    }
    function _0x5e8453(_0x2ee152, _0x38f779, _0x7390f, _0x1fce70, _0xa950f1, _0x4bec16, _0x7b6576) {
      if (_0x204083.currentContext.version >= 2) {
        if (_0xc70178.currentPixelPackBufferBinding) {
          _0xc70178.readPixels(_0x2ee152, _0x38f779, _0x7390f, _0x1fce70, _0xa950f1, _0x4bec16, _0x7b6576);
        } else {
          var _0x56d1e5 = _0x2ecbd6(_0x4bec16);
          _0xc70178.readPixels(_0x2ee152, _0x38f779, _0x7390f, _0x1fce70, _0xa950f1, _0x4bec16, _0x56d1e5, _0x7b6576 >> _0x10dd2b(_0x56d1e5));
        }
        return;
      }
      var _0x143ec7 = _0x5c500f(_0x4bec16, _0xa950f1, _0x7390f, _0x1fce70, _0x7b6576, _0xa950f1);
      if (!_0x143ec7) {
        _0x204083.recordError(1280);
        return;
      }
      _0xc70178.readPixels(_0x2ee152, _0x38f779, _0x7390f, _0x1fce70, _0xa950f1, _0x4bec16, _0x143ec7);
    }
    function _0x4d2038(_0x395f60, _0x7ff20f, _0x5d3377, _0x30b62b) {
      _0xc70178.renderbufferStorage(_0x395f60, _0x7ff20f, _0x5d3377, _0x30b62b);
    }
    function _0x2135f4(_0xa8622e, _0x375e1f, _0x569beb, _0x1112fc, _0x430af3) {
      _0xc70178.renderbufferStorageMultisample(_0xa8622e, _0x375e1f, _0x569beb, _0x1112fc, _0x430af3);
    }
    function _0x3e4441(_0x3b75a1, _0x4cf3f8, _0x569937) {
      _0xc70178.samplerParameteri(_0x204083.samplers[_0x3b75a1], _0x4cf3f8, _0x569937);
    }
    function _0x33da36(_0x97a0ef, _0x42e790, _0x4f4b3e, _0x11ca52) {
      _0xc70178.scissor(_0x97a0ef, _0x42e790, _0x4f4b3e, _0x11ca52);
    }
    function _0xff01b2(_0x48ede6, _0x283803, _0x3c3d7e = "(", _0x449dad = ")") {
      var _0xe59904 = 0;
      for (; _0x283803 < _0x48ede6.length; ++_0x283803) {
        if (_0x48ede6[_0x283803] == _0x3c3d7e) {
          ++_0xe59904;
        }
        if (_0x48ede6[_0x283803] == _0x449dad && --_0xe59904 == 0) {
          return _0x283803;
        }
      }
    }
    function _0x3bf0b5(_0x1a68c0, _0x242ca0 = {}) {
      var _0x3803c6 = 0;
      var _0x575a99 = _0x1a68c0.length;
      var _0x262c04 = "";
      var _0x375653 = [1];
      _0x242ca0.defined = _0x4a3542 => {
        if (_0x242ca0[_0x4a3542[0]]) {
          return 1;
        } else {
          return 0;
        }
      };
      function _0x3572eb(_0x32e28b, _0x1a49be) {
        return !(_0x32e28b.charCodeAt(_0x1a49be) > 32);
      }
      function _0x42426d(_0x2a32eb, _0x3c9fe5) {
        while (!_0x3572eb(_0x2a32eb, _0x3c9fe5)) {
          ++_0x3c9fe5;
        }
        return _0x3c9fe5;
      }
      function _0x32e088(_0x43de61, _0x3be7ad) {
        var _0x14f97a = _0x43de61.charCodeAt(_0x3be7ad);
        if (_0x14f97a > 32) {
          if (_0x14f97a < 48) {
            return 1;
          }
          if (_0x14f97a < 58) {
            return 2;
          }
          if (_0x14f97a < 65) {
            return 1;
          }
          if (_0x14f97a < 91 || _0x14f97a == 95) {
            return 3;
          }
          if (_0x14f97a < 97) {
            return 1;
          }
          if (_0x14f97a < 123) {
            return 3;
          }
          return 1;
        }
        if (_0x14f97a < 33) {
          return 0;
        } else {
          return 4;
        }
      }
      function _0xac9a6c(_0x1fadb7, _0x2eea58) {
        var _0x50f67e = [];
        var _0x1ec2d8 = _0x1fadb7.length;
        for (var _0x2fa749 = 0; _0x2fa749 <= _0x1ec2d8; ++_0x2fa749) {
          var _0x1bc678 = _0x32e088(_0x1fadb7, _0x2fa749);
          if (_0x1bc678 == 2 || _0x1bc678 == 3) {
            for (var _0x4d3bb6 = _0x2fa749 + 1; _0x4d3bb6 <= _0x1ec2d8; ++_0x4d3bb6) {
              var _0x247308 = _0x32e088(_0x1fadb7, _0x4d3bb6);
              if (_0x247308 != _0x1bc678 && (_0x247308 != 2 || _0x1bc678 != 3)) {
                _0x50f67e.push(_0x1fadb7.substring(_0x2fa749, _0x4d3bb6));
                _0x2fa749 = _0x4d3bb6 - 1;
                break;
              }
            }
          } else if (_0x1bc678 == 1) {
            var _0x5058ba = _0x1fadb7.substr(_0x2fa749, 2);
            if (["<=", ">=", "==", "!=", "&&", "||"].includes(_0x5058ba)) {
              _0x50f67e.push(_0x5058ba);
              ++_0x2fa749;
            } else {
              _0x50f67e.push(_0x1fadb7[_0x2fa749]);
            }
          }
        }
        return _0x50f67e;
      }
      function _0x2c69e7(_0x553031, _0x11d044, _0x8258ac = _0x553031.length) {
        var _0x353347 = _0x553031.length;
        var _0x355d9a = "";
        for (var _0x22ce9a = _0x11d044; _0x22ce9a < _0x8258ac; ++_0x22ce9a) {
          var _0x3600f4 = _0x32e088(_0x553031, _0x22ce9a);
          if (_0x3600f4 == 3) {
            for (var _0x163dbc = _0x22ce9a + 1; _0x163dbc <= _0x8258ac; ++_0x163dbc) {
              var _0x90bf59 = _0x32e088(_0x553031, _0x163dbc);
              if (_0x90bf59 != 2 && _0x90bf59 != 3) {
                var _0xd4df1 = _0x553031.substring(_0x22ce9a, _0x163dbc);
                var _0x2c1cd2 = _0x242ca0[_0xd4df1];
                if (_0x2c1cd2) {
                  var _0x4d6098 = _0x553031.substring(_0x11d044, _0x22ce9a);
                  if (_0x2c1cd2.length && _0x553031[_0x163dbc] == "(") {
                    var _0x42dbab = _0xff01b2(_0x553031, _0x163dbc);
                    _0x4d6098 += _0x2c1cd2(_0x553031.substring(_0x163dbc + 1, _0x42dbab).split(",")) + _0x553031.substring(_0x42dbab + 1, _0x8258ac);
                  } else {
                    _0x4d6098 += _0x2c1cd2() + _0x553031.substring(_0x163dbc, _0x8258ac);
                  }
                  return _0x2c69e7(_0x4d6098, 0);
                } else {
                  _0x355d9a += _0xd4df1;
                  _0x22ce9a = _0x163dbc - 1;
                  break;
                }
              }
            }
          } else {
            _0x355d9a += _0x553031[_0x22ce9a];
          }
        }
        return _0x355d9a;
      }
      function _0x1a3772(_0x1eb35e) {
        while (_0x1eb35e.length > 1 || typeof _0x1eb35e[0] != "function") {
          _0x1eb35e = function (_0x1aa603) {
            var _0x24ecbb;
            var _0x1ce361;
            var _0x2224d1;
            var _0x21bcfd = -2;
            for (_0x1ce361 = 0; _0x1ce361 < _0x1aa603.length; ++_0x1ce361) {
              if ((_0x2224d1 = ["*", "/", "+", "-", "!", "<", "<=", ">", ">=", "==", "!=", "&&", "||", "("].indexOf(_0x1aa603[_0x1ce361])) > _0x21bcfd) {
                _0x24ecbb = _0x1ce361;
                _0x21bcfd = _0x2224d1;
              }
            }
            if (_0x21bcfd == 13) {
              var _0x1ce361 = _0xff01b2(_0x1aa603, _0x24ecbb);
              if (_0x1ce361) {
                _0x1aa603.splice(_0x24ecbb, _0x1ce361 + 1 - _0x24ecbb, _0x1a3772(_0x1aa603.slice(_0x24ecbb + 1, _0x1ce361)));
                return _0x1aa603;
              }
            }
            if (_0x21bcfd == 4) {
              _0x24ecbb = _0x1aa603.lastIndexOf("!");
              var _0x46e0a5 = _0x1a3772(_0x1aa603.slice(_0x24ecbb + 1, _0x24ecbb + 2));
              _0x1aa603.splice(_0x24ecbb, 2, function () {
                return !_0x46e0a5();
              });
              return _0x1aa603;
            }
            if (_0x21bcfd >= 0) {
              var _0x1a5e31 = _0x1a3772(_0x1aa603.slice(0, _0x24ecbb));
              var _0xbe8e4e = _0x1a3772(_0x1aa603.slice(_0x24ecbb + 1));
              switch (_0x1aa603[_0x24ecbb]) {
                case "&&":
                  return [function () {
                    return _0x1a5e31() && _0xbe8e4e();
                  }];
                case "||":
                  return [function () {
                    return _0x1a5e31() || _0xbe8e4e();
                  }];
                case "==":
                  return [function () {
                    return _0x1a5e31() == _0xbe8e4e();
                  }];
                case "!=":
                  return [function () {
                    return _0x1a5e31() != _0xbe8e4e();
                  }];
                case "<":
                  return [function () {
                    return _0x1a5e31() < _0xbe8e4e();
                  }];
                case "<=":
                  return [function () {
                    return _0x1a5e31() <= _0xbe8e4e();
                  }];
                case ">":
                  return [function () {
                    return _0x1a5e31() > _0xbe8e4e();
                  }];
                case ">=":
                  return [function () {
                    return _0x1a5e31() >= _0xbe8e4e();
                  }];
                case "+":
                  return [function () {
                    return _0x1a5e31() + _0xbe8e4e();
                  }];
                case "-":
                  return [function () {
                    return _0x1a5e31() - _0xbe8e4e();
                  }];
                case "*":
                  return [function () {
                    return _0x1a5e31() * _0xbe8e4e();
                  }];
                case "/":
                  return [function () {
                    return Math.floor(_0x1a5e31() / _0xbe8e4e());
                  }];
              }
            }
            var _0xdfee94 = _0x49c2e7(_0x1aa603[_0x24ecbb]);
            return [function () {
              return _0xdfee94;
            }];
          }(_0x1eb35e);
        }
        return _0x1eb35e[0];
      }
      for (; _0x3803c6 < _0x575a99; ++_0x3803c6) {
        var _0xd621e6 = _0x3803c6;
        _0x3803c6 = _0x1a68c0.indexOf("\n", _0x3803c6);
        if (_0x3803c6 < 0) {
          _0x3803c6 = _0x575a99;
        }
        for (var _0xf08ec5 = _0xd621e6; _0xf08ec5 < _0x3803c6 && _0x3572eb(_0x1a68c0, _0xf08ec5); ++_0xf08ec5);
        var _0x48194d = _0x375653[_0x375653.length - 1];
        if (_0x1a68c0[_0xf08ec5] != "#") {
          if (_0x48194d) {
            _0x262c04 += _0x2c69e7(_0x1a68c0, _0xd621e6, _0x3803c6) + "\n";
          }
          continue;
        }
        var _0x3714a1 = _0x42426d(_0x1a68c0, _0xf08ec5);
        var _0x374963 = _0x1a68c0.substring(_0xf08ec5 + 1, _0x3714a1);
        var _0xd0b92b = _0x1a68c0.substring(_0x3714a1, _0x3803c6).trim();
        switch (_0x374963) {
          case "if":
            var _0x403e48 = _0xac9a6c(_0x2c69e7(_0xd0b92b, 0));
            var _0x4596b5 = _0x1a3772(_0x403e48);
            var _0x39be4c = _0x4596b5();
            _0x375653.push(!!_0x39be4c * _0x375653[_0x375653.length - 1]);
            break;
          case "ifdef":
            _0x375653.push(!!_0x242ca0[_0xd0b92b] * _0x375653[_0x375653.length - 1]);
            break;
          case "ifndef":
            _0x375653.push(!_0x242ca0[_0xd0b92b] * _0x375653[_0x375653.length - 1]);
            break;
          case "else":
            _0x375653[_0x375653.length - 1] = 1 - _0x375653[_0x375653.length - 1];
            break;
          case "endif":
            _0x375653.pop();
            break;
          case "define":
            if (_0x48194d) {
              var _0x5a8c92 = _0xd0b92b.indexOf("(");
              var _0x2e85c4 = _0x42426d(_0xd0b92b, 0);
              if (_0x2e85c4 < _0x5a8c92) {
                _0x5a8c92 = 0;
              }
              if (_0x5a8c92 > 0) {
                var _0x75ab55 = _0xd0b92b.indexOf(")", _0x5a8c92);
                let _0x50cf64 = _0xd0b92b.substring(_0x5a8c92 + 1, _0x75ab55).split(",").map(_0x2efd06 => _0x2efd06.trim());
                let _0x11b317 = _0xac9a6c(_0xd0b92b.substring(_0x75ab55 + 1).trim());
                _0x242ca0[_0xd0b92b.substring(0, _0x5a8c92)] = _0x4c3af9 => {
                  var _0x3c2f5b = "";
                  _0x11b317.forEach(_0x2f3c43 => {
                    var _0x315779 = _0x50cf64.indexOf(_0x2f3c43);
                    _0x3c2f5b += _0x315779 >= 0 ? _0x4c3af9[_0x315779] : _0x2f3c43;
                  });
                  return _0x3c2f5b;
                };
              } else {
                let _0x578a91 = _0x2c69e7(_0xd0b92b.substring(_0x2e85c4 + 1).trim(), 0);
                _0x242ca0[_0xd0b92b.substring(0, _0x2e85c4)] = () => _0x578a91;
              }
            }
            break;
          case "undef":
            if (_0x48194d) {
              delete _0x242ca0[_0xd0b92b];
            }
            break;
          default:
            if (_0x374963 != "version" && _0x374963 != "pragma" && _0x374963 != "extension") {}
            _0x262c04 += _0x2c69e7(_0x1a68c0, _0xd621e6, _0x3803c6) + "\n";
        }
      }
      return _0x262c04;
    }
    function _0x28e2e4(_0x2aa247) {
      var _0x2070f8 = 0;
      var _0x50b88c = "";
      var _0x5e087f;
      var _0x1fef1d;
      var _0x1deb20 = _0x2aa247.length;
      for (; _0x2070f8 < _0x1deb20; ++_0x2070f8) {
        _0x5e087f = _0x2aa247[_0x2070f8];
        if (_0x5e087f == "/") {
          _0x1fef1d = _0x2aa247[_0x2070f8 + 1];
          if (_0x1fef1d == "/") {
            while (_0x2070f8 < _0x1deb20 && _0x2aa247[_0x2070f8 + 1] != "\n") {
              ++_0x2070f8;
            }
          } else if (_0x1fef1d == "*") {
            while (_0x2070f8 < _0x1deb20 && (_0x2aa247[_0x2070f8 - 1] != "*" || _0x2aa247[_0x2070f8] != "/")) {
              ++_0x2070f8;
            }
          } else {
            _0x50b88c += _0x5e087f;
          }
        } else {
          _0x50b88c += _0x5e087f;
        }
      }
      return _0x50b88c;
    }
    function _0x52d51b(_0x21c3e4, _0x3c7574, _0x380587, _0xe21733) {
      var _0x3c1a62 = _0x204083.getSource(_0x21c3e4, _0x3c7574, _0x380587, _0xe21733);
      _0x3c1a62 = _0x3bf0b5(_0x28e2e4(_0x3c1a62), {
        GL_FRAGMENT_PRECISION_HIGH: () => 1,
        GL_ES: () => 1,
        __VERSION__: () => _0x3c1a62.includes("#version 300") ? 300 : 100
      });
      var _0x4ee7a5 = /layout\s*\(\s*location\s*=\s*(-?\d+)\s*\)\s*(uniform\s+((lowp|mediump|highp)\s+)?\w+\s+(\w+))/g;
      var _0x56f87f = {};
      var _0x380696;
      while (_0x380696 = _0x4ee7a5.exec(_0x3c1a62)) {
        _0x56f87f[_0x380696[5]] = _0x49c2e7(_0x380696[1]);
        if (!(_0x56f87f[_0x380696[5]] >= 0) || !(_0x56f87f[_0x380696[5]] < 1048576)) {
          _0x2b9f46("Specified an out of range layout(location=x) directive \"" + _0x56f87f[_0x380696[5]] + "\"! (" + _0x380696[0] + ")");
          _0x204083.recordError(1281);
          return;
        }
      }
      _0x3c1a62 = _0x3c1a62.replace(_0x4ee7a5, "$2");
      _0x204083.shaders[_0x21c3e4].explicitUniformLocations = _0x56f87f;
      var _0x29da0c = /layout\s*\(.*?binding\s*=\s*(-?\d+).*?\)\s*uniform\s+(\w+)\s+(\w+)?/g;
      var _0xc5c97d = {};
      var _0x4b8fd1 = {};
      var _0x51ff4e;
      while (_0x51ff4e = _0x29da0c.exec(_0x3c1a62)) {
        var _0x42dd4b = 1;
        for (var _0x137e93 = _0x51ff4e.index; _0x137e93 < _0x3c1a62.length && _0x3c1a62[_0x137e93] != ";"; ++_0x137e93) {
          if (_0x3c1a62[_0x137e93] == "[") {
            _0x42dd4b = _0x49c2e7(_0x3c1a62.slice(_0x137e93 + 1));
            break;
          }
          if (_0x3c1a62[_0x137e93] == "{") {
            _0x137e93 = _0xff01b2(_0x3c1a62, _0x137e93, "{", "}") - 1;
          }
        }
        var _0x77d5ac = _0x49c2e7(_0x51ff4e[1]);
        var _0x41d0e3 = 34930;
        if (_0x51ff4e[3] && _0x51ff4e[2].indexOf("sampler") != -1) {
          _0xc5c97d[_0x51ff4e[3]] = [_0x77d5ac, _0x42dd4b];
        } else {
          _0x41d0e3 = 35374;
          _0x4b8fd1[_0x51ff4e[2]] = [_0x77d5ac, _0x42dd4b];
        }
        var _0x215110 = _0xc70178.getParameter(_0x41d0e3);
        if (!(_0x77d5ac >= 0) || !(_0x77d5ac + _0x42dd4b <= _0x215110)) {
          _0x2b9f46("Specified an out of range layout(binding=x) directive \"" + _0x77d5ac + "\"! (" + _0x51ff4e[0] + "). Valid range is [0, " + _0x215110 + "-1]");
          _0x204083.recordError(1281);
          return;
        }
      }
      _0x3c1a62 = _0x3c1a62.replace(/layout\s*\(.*?binding\s*=\s*([-\d]+).*?\)/g, "");
      _0x3c1a62 = _0x3c1a62.replace(/(layout\s*\((.*?)),\s*binding\s*=\s*([-\d]+)\)/g, "$1)");
      _0x3c1a62 = _0x3c1a62.replace(/layout\s*\(\s*binding\s*=\s*([-\d]+)\s*,(.*?)\)/g, "layout($2)");
      _0x204083.shaders[_0x21c3e4].explicitSamplerBindings = _0xc5c97d;
      _0x204083.shaders[_0x21c3e4].explicitUniformBindings = _0x4b8fd1;
      _0xc70178.shaderSource(_0x204083.shaders[_0x21c3e4], _0x3c1a62);
    }
    function _0x55b992(_0xb6af4e, _0x4683cb, _0x392fb3, _0x230300) {
      _0xc70178.stencilFuncSeparate(_0xb6af4e, _0x4683cb, _0x392fb3, _0x230300);
    }
    function _0x204cde(_0x5a45b1) {
      _0xc70178.stencilMask(_0x5a45b1);
    }
    function _0x3bd466(_0x29d432, _0x377c56, _0x32c19a, _0x5c8824) {
      _0xc70178.stencilOpSeparate(_0x29d432, _0x377c56, _0x32c19a, _0x5c8824);
    }
    function _0x22898e(_0x53aa93, _0x1cff91, _0x5e120b, _0x5331bd, _0xbc5d6f, _0x74c669, _0x550ad1, _0xbbc85a, _0x2a7bd5) {
      if (_0x204083.currentContext.version >= 2) {
        if (_0xc70178.currentPixelUnpackBufferBinding) {
          _0xc70178.texImage2D(_0x53aa93, _0x1cff91, _0x5e120b, _0x5331bd, _0xbc5d6f, _0x74c669, _0x550ad1, _0xbbc85a, _0x2a7bd5);
        } else if (_0x2a7bd5) {
          var _0x4492e2 = _0x2ecbd6(_0xbbc85a);
          _0xc70178.texImage2D(_0x53aa93, _0x1cff91, _0x5e120b, _0x5331bd, _0xbc5d6f, _0x74c669, _0x550ad1, _0xbbc85a, _0x4492e2, _0x2a7bd5 >> _0x10dd2b(_0x4492e2));
        } else {
          _0xc70178.texImage2D(_0x53aa93, _0x1cff91, _0x5e120b, _0x5331bd, _0xbc5d6f, _0x74c669, _0x550ad1, _0xbbc85a, null);
        }
        return;
      }
      _0xc70178.texImage2D(_0x53aa93, _0x1cff91, _0x5e120b, _0x5331bd, _0xbc5d6f, _0x74c669, _0x550ad1, _0xbbc85a, _0x2a7bd5 ? _0x5c500f(_0xbbc85a, _0x550ad1, _0x5331bd, _0xbc5d6f, _0x2a7bd5, _0x5e120b) : null);
    }
    function _0x15ef40(_0x1999d2, _0x304951, _0x175de2, _0x267d98, _0x409225, _0x59af93, _0x3921a9, _0x288882, _0x584360, _0x3cf56f) {
      if (_0xc70178.currentPixelUnpackBufferBinding) {
        _0xc70178.texImage3D(_0x1999d2, _0x304951, _0x175de2, _0x267d98, _0x409225, _0x59af93, _0x3921a9, _0x288882, _0x584360, _0x3cf56f);
      } else if (_0x3cf56f) {
        var _0x3b8e48 = _0x2ecbd6(_0x584360);
        _0xc70178.texImage3D(_0x1999d2, _0x304951, _0x175de2, _0x267d98, _0x409225, _0x59af93, _0x3921a9, _0x288882, _0x584360, _0x3b8e48, _0x3cf56f >> _0x10dd2b(_0x3b8e48));
      } else {
        _0xc70178.texImage3D(_0x1999d2, _0x304951, _0x175de2, _0x267d98, _0x409225, _0x59af93, _0x3921a9, _0x288882, _0x584360, null);
      }
    }
    function _0x15a665(_0xd024f6, _0x526f3b, _0x5e6224) {
      _0xc70178.texParameterf(_0xd024f6, _0x526f3b, _0x5e6224);
    }
    function _0x26c59c(_0x56a77e, _0x5e38ee, _0xb018ae) {
      _0xc70178.texParameteri(_0x56a77e, _0x5e38ee, _0xb018ae);
    }
    function _0x23b9ae(_0x2b6216, _0x1375d3, _0x6063f2) {
      var _0x68621 = _0x47a7a3[_0x6063f2 >> 2];
      _0xc70178.texParameteri(_0x2b6216, _0x1375d3, _0x68621);
    }
    function _0x3abf08(_0x39f1ac, _0xaf4d5d, _0x32eeab, _0x4b2b7d, _0xaf20f1) {
      _0xc70178.texStorage2D(_0x39f1ac, _0xaf4d5d, _0x32eeab, _0x4b2b7d, _0xaf20f1);
    }
    function _0x44efaa(_0x3abde0, _0x4b0a67, _0x2af6c9, _0x29cfae, _0x5abc64, _0x5a9fa7) {
      _0xc70178.texStorage3D(_0x3abde0, _0x4b0a67, _0x2af6c9, _0x29cfae, _0x5abc64, _0x5a9fa7);
    }
    function _0x293aef(_0x4b6d2f, _0x5626e5, _0x1786d7, _0x2f16fa, _0x1883d6, _0x552865, _0x4d451b, _0x2f91a5, _0x465c19) {
      if (_0x204083.currentContext.version >= 2) {
        if (_0xc70178.currentPixelUnpackBufferBinding) {
          _0xc70178.texSubImage2D(_0x4b6d2f, _0x5626e5, _0x1786d7, _0x2f16fa, _0x1883d6, _0x552865, _0x4d451b, _0x2f91a5, _0x465c19);
        } else if (_0x465c19) {
          var _0x4486f4 = _0x2ecbd6(_0x2f91a5);
          _0xc70178.texSubImage2D(_0x4b6d2f, _0x5626e5, _0x1786d7, _0x2f16fa, _0x1883d6, _0x552865, _0x4d451b, _0x2f91a5, _0x4486f4, _0x465c19 >> _0x10dd2b(_0x4486f4));
        } else {
          _0xc70178.texSubImage2D(_0x4b6d2f, _0x5626e5, _0x1786d7, _0x2f16fa, _0x1883d6, _0x552865, _0x4d451b, _0x2f91a5, null);
        }
        return;
      }
      var _0x59b385 = null;
      if (_0x465c19) {
        _0x59b385 = _0x5c500f(_0x2f91a5, _0x4d451b, _0x1883d6, _0x552865, _0x465c19, 0);
      }
      _0xc70178.texSubImage2D(_0x4b6d2f, _0x5626e5, _0x1786d7, _0x2f16fa, _0x1883d6, _0x552865, _0x4d451b, _0x2f91a5, _0x59b385);
    }
    function _0x52f666(_0x3a70d2, _0x5090ce, _0x446d61, _0x32e406, _0x10a845, _0x354e84, _0xfa8340, _0x56aed0, _0x35178c, _0x8d061f, _0x7465f7) {
      if (_0xc70178.currentPixelUnpackBufferBinding) {
        _0xc70178.texSubImage3D(_0x3a70d2, _0x5090ce, _0x446d61, _0x32e406, _0x10a845, _0x354e84, _0xfa8340, _0x56aed0, _0x35178c, _0x8d061f, _0x7465f7);
      } else if (_0x7465f7) {
        var _0x3d3716 = _0x2ecbd6(_0x8d061f);
        _0xc70178.texSubImage3D(_0x3a70d2, _0x5090ce, _0x446d61, _0x32e406, _0x10a845, _0x354e84, _0xfa8340, _0x56aed0, _0x35178c, _0x8d061f, _0x3d3716, _0x7465f7 >> _0x10dd2b(_0x3d3716));
      } else {
        _0xc70178.texSubImage3D(_0x3a70d2, _0x5090ce, _0x446d61, _0x32e406, _0x10a845, _0x354e84, _0xfa8340, _0x56aed0, _0x35178c, _0x8d061f, null);
      }
    }
    var _0x4255d5 = [];
    function _0xea5033(_0x9457b3, _0x20f69d, _0x540910) {
      if (_0x204083.currentContext.version >= 2) {
        _0xc70178.uniform1fv(_0x183a44(_0x9457b3), _0x50a76e, _0x540910 >> 2, _0x20f69d);
        return;
      }
      if (_0x20f69d <= 288) {
        var _0x42fae4 = _0x4255d5[_0x20f69d - 1];
        for (var _0x42784c = 0; _0x42784c < _0x20f69d; ++_0x42784c) {
          _0x42fae4[_0x42784c] = _0x50a76e[_0x540910 + _0x42784c * 4 >> 2];
        }
      } else {
        var _0x42fae4 = _0x50a76e.subarray(_0x540910 >> 2, _0x540910 + _0x20f69d * 4 >> 2);
      }
      _0xc70178.uniform1fv(_0x183a44(_0x9457b3), _0x42fae4);
    }
    function _0x405db3(_0x463e68, _0x22b8e6) {
      _0xc70178.uniform1i(_0x183a44(_0x463e68), _0x22b8e6);
    }
    var _0x3bcc63 = [];
    function _0x41471d(_0xc02c90, _0x2790e1, _0x84daa8) {
      if (_0x204083.currentContext.version >= 2) {
        _0xc70178.uniform1iv(_0x183a44(_0xc02c90), _0x47a7a3, _0x84daa8 >> 2, _0x2790e1);
        return;
      }
      if (_0x2790e1 <= 288) {
        var _0xf75af0 = _0x3bcc63[_0x2790e1 - 1];
        for (var _0x37a419 = 0; _0x37a419 < _0x2790e1; ++_0x37a419) {
          _0xf75af0[_0x37a419] = _0x47a7a3[_0x84daa8 + _0x37a419 * 4 >> 2];
        }
      } else {
        var _0xf75af0 = _0x47a7a3.subarray(_0x84daa8 >> 2, _0x84daa8 + _0x2790e1 * 4 >> 2);
      }
      _0xc70178.uniform1iv(_0x183a44(_0xc02c90), _0xf75af0);
    }
    function _0x417387(_0x11b646, _0x17949d, _0x34508d) {
      _0xc70178.uniform1uiv(_0x183a44(_0x11b646), _0x195007, _0x34508d >> 2, _0x17949d);
    }
    function _0x1b4d94(_0x18a0df, _0x140e7f, _0x458765) {
      if (_0x204083.currentContext.version >= 2) {
        _0xc70178.uniform2fv(_0x183a44(_0x18a0df), _0x50a76e, _0x458765 >> 2, _0x140e7f * 2);
        return;
      }
      if (_0x140e7f <= 144) {
        var _0xc61b29 = _0x4255d5[_0x140e7f * 2 - 1];
        for (var _0x4d2744 = 0; _0x4d2744 < _0x140e7f * 2; _0x4d2744 += 2) {
          _0xc61b29[_0x4d2744] = _0x50a76e[_0x458765 + _0x4d2744 * 4 >> 2];
          _0xc61b29[_0x4d2744 + 1] = _0x50a76e[_0x458765 + (_0x4d2744 * 4 + 4) >> 2];
        }
      } else {
        var _0xc61b29 = _0x50a76e.subarray(_0x458765 >> 2, _0x458765 + _0x140e7f * 8 >> 2);
      }
      _0xc70178.uniform2fv(_0x183a44(_0x18a0df), _0xc61b29);
    }
    function _0x270b97(_0x76ab32, _0x597d14, _0x3127f9) {
      if (_0x204083.currentContext.version >= 2) {
        _0xc70178.uniform2iv(_0x183a44(_0x76ab32), _0x47a7a3, _0x3127f9 >> 2, _0x597d14 * 2);
        return;
      }
      if (_0x597d14 <= 144) {
        var _0x58e5fa = _0x3bcc63[_0x597d14 * 2 - 1];
        for (var _0x20da04 = 0; _0x20da04 < _0x597d14 * 2; _0x20da04 += 2) {
          _0x58e5fa[_0x20da04] = _0x47a7a3[_0x3127f9 + _0x20da04 * 4 >> 2];
          _0x58e5fa[_0x20da04 + 1] = _0x47a7a3[_0x3127f9 + (_0x20da04 * 4 + 4) >> 2];
        }
      } else {
        var _0x58e5fa = _0x47a7a3.subarray(_0x3127f9 >> 2, _0x3127f9 + _0x597d14 * 8 >> 2);
      }
      _0xc70178.uniform2iv(_0x183a44(_0x76ab32), _0x58e5fa);
    }
    function _0x1ec526(_0x547ff0, _0x83e7d5, _0x205751) {
      _0xc70178.uniform2uiv(_0x183a44(_0x547ff0), _0x195007, _0x205751 >> 2, _0x83e7d5 * 2);
    }
    function _0x207f38(_0x4c0731, _0x4fa501, _0x1a01ec) {
      if (_0x204083.currentContext.version >= 2) {
        _0xc70178.uniform3fv(_0x183a44(_0x4c0731), _0x50a76e, _0x1a01ec >> 2, _0x4fa501 * 3);
        return;
      }
      if (_0x4fa501 <= 96) {
        var _0x39358 = _0x4255d5[_0x4fa501 * 3 - 1];
        for (var _0x1ed157 = 0; _0x1ed157 < _0x4fa501 * 3; _0x1ed157 += 3) {
          _0x39358[_0x1ed157] = _0x50a76e[_0x1a01ec + _0x1ed157 * 4 >> 2];
          _0x39358[_0x1ed157 + 1] = _0x50a76e[_0x1a01ec + (_0x1ed157 * 4 + 4) >> 2];
          _0x39358[_0x1ed157 + 2] = _0x50a76e[_0x1a01ec + (_0x1ed157 * 4 + 8) >> 2];
        }
      } else {
        var _0x39358 = _0x50a76e.subarray(_0x1a01ec >> 2, _0x1a01ec + _0x4fa501 * 12 >> 2);
      }
      _0xc70178.uniform3fv(_0x183a44(_0x4c0731), _0x39358);
    }
    function _0x3ca065(_0x33f3c7, _0x2a2625, _0x4b7f3e) {
      if (_0x204083.currentContext.version >= 2) {
        _0xc70178.uniform3iv(_0x183a44(_0x33f3c7), _0x47a7a3, _0x4b7f3e >> 2, _0x2a2625 * 3);
        return;
      }
      if (_0x2a2625 <= 96) {
        var _0x42119d = _0x3bcc63[_0x2a2625 * 3 - 1];
        for (var _0x185aed = 0; _0x185aed < _0x2a2625 * 3; _0x185aed += 3) {
          _0x42119d[_0x185aed] = _0x47a7a3[_0x4b7f3e + _0x185aed * 4 >> 2];
          _0x42119d[_0x185aed + 1] = _0x47a7a3[_0x4b7f3e + (_0x185aed * 4 + 4) >> 2];
          _0x42119d[_0x185aed + 2] = _0x47a7a3[_0x4b7f3e + (_0x185aed * 4 + 8) >> 2];
        }
      } else {
        var _0x42119d = _0x47a7a3.subarray(_0x4b7f3e >> 2, _0x4b7f3e + _0x2a2625 * 12 >> 2);
      }
      _0xc70178.uniform3iv(_0x183a44(_0x33f3c7), _0x42119d);
    }
    function _0x223693(_0x4c21d5, _0x44a246, _0xdb7d47) {
      _0xc70178.uniform3uiv(_0x183a44(_0x4c21d5), _0x195007, _0xdb7d47 >> 2, _0x44a246 * 3);
    }
    function _0x5c32ea(_0x1b3f84, _0x597bc2, _0x9a959b) {
      if (_0x204083.currentContext.version >= 2) {
        _0xc70178.uniform4fv(_0x183a44(_0x1b3f84), _0x50a76e, _0x9a959b >> 2, _0x597bc2 * 4);
        return;
      }
      if (_0x597bc2 <= 72) {
        var _0x7356c4 = _0x4255d5[_0x597bc2 * 4 - 1];
        var _0x1eadda = _0x50a76e;
        _0x9a959b >>= 2;
        for (var _0x4df053 = 0; _0x4df053 < _0x597bc2 * 4; _0x4df053 += 4) {
          var _0x3dbb92 = _0x9a959b + _0x4df053;
          _0x7356c4[_0x4df053] = _0x1eadda[_0x3dbb92];
          _0x7356c4[_0x4df053 + 1] = _0x1eadda[_0x3dbb92 + 1];
          _0x7356c4[_0x4df053 + 2] = _0x1eadda[_0x3dbb92 + 2];
          _0x7356c4[_0x4df053 + 3] = _0x1eadda[_0x3dbb92 + 3];
        }
      } else {
        var _0x7356c4 = _0x50a76e.subarray(_0x9a959b >> 2, _0x9a959b + _0x597bc2 * 16 >> 2);
      }
      _0xc70178.uniform4fv(_0x183a44(_0x1b3f84), _0x7356c4);
    }
    function _0x395382(_0x1bad88, _0x25d246, _0x54d2d0) {
      if (_0x204083.currentContext.version >= 2) {
        _0xc70178.uniform4iv(_0x183a44(_0x1bad88), _0x47a7a3, _0x54d2d0 >> 2, _0x25d246 * 4);
        return;
      }
      if (_0x25d246 <= 72) {
        var _0x50cc59 = _0x3bcc63[_0x25d246 * 4 - 1];
        for (var _0x14e683 = 0; _0x14e683 < _0x25d246 * 4; _0x14e683 += 4) {
          _0x50cc59[_0x14e683] = _0x47a7a3[_0x54d2d0 + _0x14e683 * 4 >> 2];
          _0x50cc59[_0x14e683 + 1] = _0x47a7a3[_0x54d2d0 + (_0x14e683 * 4 + 4) >> 2];
          _0x50cc59[_0x14e683 + 2] = _0x47a7a3[_0x54d2d0 + (_0x14e683 * 4 + 8) >> 2];
          _0x50cc59[_0x14e683 + 3] = _0x47a7a3[_0x54d2d0 + (_0x14e683 * 4 + 12) >> 2];
        }
      } else {
        var _0x50cc59 = _0x47a7a3.subarray(_0x54d2d0 >> 2, _0x54d2d0 + _0x25d246 * 16 >> 2);
      }
      _0xc70178.uniform4iv(_0x183a44(_0x1bad88), _0x50cc59);
    }
    function _0x152425(_0x23557a, _0x29cf8c, _0x760ae2) {
      _0xc70178.uniform4uiv(_0x183a44(_0x23557a), _0x195007, _0x760ae2 >> 2, _0x29cf8c * 4);
    }
    function _0x29865b(_0x29b548, _0x220529, _0x481f73) {
      _0x29b548 = _0x204083.programs[_0x29b548];
      _0xc70178.uniformBlockBinding(_0x29b548, _0x220529, _0x481f73);
    }
    function _0x302aa5(_0xd9376e, _0x98c20f, _0x401504, _0x5e6aba) {
      if (_0x204083.currentContext.version >= 2) {
        _0xc70178.uniformMatrix3fv(_0x183a44(_0xd9376e), !!_0x401504, _0x50a76e, _0x5e6aba >> 2, _0x98c20f * 9);
        return;
      }
      if (_0x98c20f <= 32) {
        var _0x2c5b03 = _0x4255d5[_0x98c20f * 9 - 1];
        for (var _0x3d91d9 = 0; _0x3d91d9 < _0x98c20f * 9; _0x3d91d9 += 9) {
          _0x2c5b03[_0x3d91d9] = _0x50a76e[_0x5e6aba + _0x3d91d9 * 4 >> 2];
          _0x2c5b03[_0x3d91d9 + 1] = _0x50a76e[_0x5e6aba + (_0x3d91d9 * 4 + 4) >> 2];
          _0x2c5b03[_0x3d91d9 + 2] = _0x50a76e[_0x5e6aba + (_0x3d91d9 * 4 + 8) >> 2];
          _0x2c5b03[_0x3d91d9 + 3] = _0x50a76e[_0x5e6aba + (_0x3d91d9 * 4 + 12) >> 2];
          _0x2c5b03[_0x3d91d9 + 4] = _0x50a76e[_0x5e6aba + (_0x3d91d9 * 4 + 16) >> 2];
          _0x2c5b03[_0x3d91d9 + 5] = _0x50a76e[_0x5e6aba + (_0x3d91d9 * 4 + 20) >> 2];
          _0x2c5b03[_0x3d91d9 + 6] = _0x50a76e[_0x5e6aba + (_0x3d91d9 * 4 + 24) >> 2];
          _0x2c5b03[_0x3d91d9 + 7] = _0x50a76e[_0x5e6aba + (_0x3d91d9 * 4 + 28) >> 2];
          _0x2c5b03[_0x3d91d9 + 8] = _0x50a76e[_0x5e6aba + (_0x3d91d9 * 4 + 32) >> 2];
        }
      } else {
        var _0x2c5b03 = _0x50a76e.subarray(_0x5e6aba >> 2, _0x5e6aba + _0x98c20f * 36 >> 2);
      }
      _0xc70178.uniformMatrix3fv(_0x183a44(_0xd9376e), !!_0x401504, _0x2c5b03);
    }
    function _0x9ad186(_0x27569f, _0x27ffd6, _0x162d13, _0x314f41) {
      if (_0x204083.currentContext.version >= 2) {
        _0xc70178.uniformMatrix4fv(_0x183a44(_0x27569f), !!_0x162d13, _0x50a76e, _0x314f41 >> 2, _0x27ffd6 * 16);
        return;
      }
      if (_0x27ffd6 <= 18) {
        var _0x3694a5 = _0x4255d5[_0x27ffd6 * 16 - 1];
        var _0xb6cbc3 = _0x50a76e;
        _0x314f41 >>= 2;
        for (var _0x8744f7 = 0; _0x8744f7 < _0x27ffd6 * 16; _0x8744f7 += 16) {
          var _0x5222bc = _0x314f41 + _0x8744f7;
          _0x3694a5[_0x8744f7] = _0xb6cbc3[_0x5222bc];
          _0x3694a5[_0x8744f7 + 1] = _0xb6cbc3[_0x5222bc + 1];
          _0x3694a5[_0x8744f7 + 2] = _0xb6cbc3[_0x5222bc + 2];
          _0x3694a5[_0x8744f7 + 3] = _0xb6cbc3[_0x5222bc + 3];
          _0x3694a5[_0x8744f7 + 4] = _0xb6cbc3[_0x5222bc + 4];
          _0x3694a5[_0x8744f7 + 5] = _0xb6cbc3[_0x5222bc + 5];
          _0x3694a5[_0x8744f7 + 6] = _0xb6cbc3[_0x5222bc + 6];
          _0x3694a5[_0x8744f7 + 7] = _0xb6cbc3[_0x5222bc + 7];
          _0x3694a5[_0x8744f7 + 8] = _0xb6cbc3[_0x5222bc + 8];
          _0x3694a5[_0x8744f7 + 9] = _0xb6cbc3[_0x5222bc + 9];
          _0x3694a5[_0x8744f7 + 10] = _0xb6cbc3[_0x5222bc + 10];
          _0x3694a5[_0x8744f7 + 11] = _0xb6cbc3[_0x5222bc + 11];
          _0x3694a5[_0x8744f7 + 12] = _0xb6cbc3[_0x5222bc + 12];
          _0x3694a5[_0x8744f7 + 13] = _0xb6cbc3[_0x5222bc + 13];
          _0x3694a5[_0x8744f7 + 14] = _0xb6cbc3[_0x5222bc + 14];
          _0x3694a5[_0x8744f7 + 15] = _0xb6cbc3[_0x5222bc + 15];
        }
      } else {
        var _0x3694a5 = _0x50a76e.subarray(_0x314f41 >> 2, _0x314f41 + _0x27ffd6 * 64 >> 2);
      }
      _0xc70178.uniformMatrix4fv(_0x183a44(_0x27569f), !!_0x162d13, _0x3694a5);
    }
    function _0x14951e(_0x39b4a2) {
      if (!_0x20328d(_0x39b4a2)) {
        _0x204083.recordError(1280);
        _0x2b9f46("GL_INVALID_ENUM in glUnmapBuffer");
        return 0;
      }
      var _0x5e3c58 = _0x1b5806(_0x39b4a2);
      var _0x47bebb = _0x204083.mappedBuffers[_0x5e3c58];
      if (!_0x47bebb) {
        _0x204083.recordError(1282);
        _0x2b9f46("buffer was never mapped in glUnmapBuffer");
        return 0;
      }
      _0x204083.mappedBuffers[_0x5e3c58] = null;
      if (!(_0x47bebb.access & 16)) {
        if (_0x204083.currentContext.version >= 2) {
          _0xc70178.bufferSubData(_0x39b4a2, _0x47bebb.offset, _0xb4481c, _0x47bebb.mem, _0x47bebb.length);
        } else {
          _0xc70178.bufferSubData(_0x39b4a2, _0x47bebb.offset, _0xb4481c.subarray(_0x47bebb.mem, _0x47bebb.mem + _0x47bebb.length));
        }
      }
      _0x6cc71d(_0x47bebb.mem);
      return 1;
    }
    function _0x501931() {
      var _0x2f5dbc = _0xc70178.currentProgram;
      if (!_0x2f5dbc.explicitProgramBindingsApplied) {
        if (_0x204083.currentContext.version >= 2) {
          Object.keys(_0x2f5dbc.explicitUniformBindings).forEach(function (_0x3b2a0c) {
            var _0x268991 = _0x2f5dbc.explicitUniformBindings[_0x3b2a0c];
            for (var _0x4d80d5 = 0; _0x4d80d5 < _0x268991[1]; ++_0x4d80d5) {
              var _0x5bde50 = _0xc70178.getUniformBlockIndex(_0x2f5dbc, _0x3b2a0c + (_0x268991[1] > 1 ? "[" + _0x4d80d5 + "]" : ""));
              _0xc70178.uniformBlockBinding(_0x2f5dbc, _0x5bde50, _0x268991[0] + _0x4d80d5);
            }
          });
        }
        Object.keys(_0x2f5dbc.explicitSamplerBindings).forEach(function (_0x2b9f6c) {
          var _0x493abf = _0x2f5dbc.explicitSamplerBindings[_0x2b9f6c];
          for (var _0x33c0c3 = 0; _0x33c0c3 < _0x493abf[1]; ++_0x33c0c3) {
            _0xc70178.uniform1i(_0xc70178.getUniformLocation(_0x2f5dbc, _0x2b9f6c + (_0x33c0c3 ? "[" + _0x33c0c3 + "]" : "")), _0x493abf[0] + _0x33c0c3);
          }
        });
        _0x2f5dbc.explicitProgramBindingsApplied = 1;
      }
    }
    function _0x379992(_0xb6bf28) {
      _0xb6bf28 = _0x204083.programs[_0xb6bf28];
      _0xc70178.useProgram(_0xb6bf28);
      if (_0xc70178.currentProgram = _0xb6bf28) {
        _0x501931();
      }
    }
    function _0x178a7c(_0x5dff2a) {
      _0xc70178.validateProgram(_0x204083.programs[_0x5dff2a]);
    }
    function _0x3eb838(_0x34340d, _0x2a698b, _0x5bf1a4, _0x306e18, _0x41e4da) {
      _0xc70178.vertexAttrib4f(_0x34340d, _0x2a698b, _0x5bf1a4, _0x306e18, _0x41e4da);
    }
    function _0x516a22(_0x378324, _0x43132c) {
      _0xc70178.vertexAttrib4f(_0x378324, _0x50a76e[_0x43132c >> 2], _0x50a76e[_0x43132c + 4 >> 2], _0x50a76e[_0x43132c + 8 >> 2], _0x50a76e[_0x43132c + 12 >> 2]);
    }
    function _0x38f534(_0x519d96, _0x12e5d0, _0x31059a, _0x51f30, _0x24b05c) {
      var _0x588c02 = _0x204083.currentContext.clientBuffers[_0x519d96];
      if (!_0xc70178.currentArrayBufferBinding) {
        _0x588c02.size = _0x12e5d0;
        _0x588c02.type = _0x31059a;
        _0x588c02.normalized = false;
        _0x588c02.stride = _0x51f30;
        _0x588c02.ptr = _0x24b05c;
        _0x588c02.clientside = true;
        _0x588c02.vertexAttribPointerAdaptor = function (_0x4e5299, _0x1369c8, _0xac0f46, _0x4cdd46, _0x487702, _0x3a1d43) {
          this.vertexAttribIPointer(_0x4e5299, _0x1369c8, _0xac0f46, _0x487702, _0x3a1d43);
        };
        return;
      }
      _0x588c02.clientside = false;
      _0xc70178.vertexAttribIPointer(_0x519d96, _0x12e5d0, _0x31059a, _0x51f30, _0x24b05c);
    }
    function _0x35595d(_0x5b32b3, _0x1294f0, _0x4bb425, _0x576d1c, _0x5e6bdc, _0x177561) {
      var _0x38bc5c = _0x204083.currentContext.clientBuffers[_0x5b32b3];
      if (!_0xc70178.currentArrayBufferBinding) {
        _0x38bc5c.size = _0x1294f0;
        _0x38bc5c.type = _0x4bb425;
        _0x38bc5c.normalized = _0x576d1c;
        _0x38bc5c.stride = _0x5e6bdc;
        _0x38bc5c.ptr = _0x177561;
        _0x38bc5c.clientside = true;
        _0x38bc5c.vertexAttribPointerAdaptor = function (_0x5d22ce, _0x52f036, _0x4f6038, _0x3e32c8, _0x5afb72, _0x842e1a) {
          this.vertexAttribPointer(_0x5d22ce, _0x52f036, _0x4f6038, _0x3e32c8, _0x5afb72, _0x842e1a);
        };
        return;
      }
      _0x38bc5c.clientside = false;
      _0xc70178.vertexAttribPointer(_0x5b32b3, _0x1294f0, _0x4bb425, !!_0x576d1c, _0x5e6bdc, _0x177561);
    }
    function _0x1c9ab0(_0x3f6334, _0x2ade80, _0x421c83, _0x35c1d8) {
      _0xc70178.viewport(_0x3f6334, _0x2ade80, _0x421c83, _0x35c1d8);
    }
    function _0x307363(_0x4b5153) {
      return _0x4b5153;
    }
    function _0x314063(_0x52cd68) {
      _0x2a1bf9(_0x52cd68);
    }
    function _0x26c760(_0x46e6d1) {
      return _0x46e6d1 % 4 === 0 && (_0x46e6d1 % 100 !== 0 || _0x46e6d1 % 400 === 0);
    }
    function _0x831888(_0x894f95, _0x366675) {
      var _0x23c101 = 0;
      for (var _0x56b979 = 0; _0x56b979 <= _0x366675; _0x23c101 += _0x894f95[_0x56b979++]) {}
      return _0x23c101;
    }
    var _0x533f2a = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    var _0x296802 = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    function _0x1b5f3d(_0x43d620, _0x527197) {
      var _0x25bf7b = new Date(_0x43d620.getTime());
      while (_0x527197 > 0) {
        var _0x3bad86 = _0x26c760(_0x25bf7b.getFullYear());
        var _0x510e39 = _0x25bf7b.getMonth();
        var _0x5ae168 = (_0x3bad86 ? _0x533f2a : _0x296802)[_0x510e39];
        if (_0x527197 > _0x5ae168 - _0x25bf7b.getDate()) {
          _0x527197 -= _0x5ae168 - _0x25bf7b.getDate() + 1;
          _0x25bf7b.setDate(1);
          if (_0x510e39 < 11) {
            _0x25bf7b.setMonth(_0x510e39 + 1);
          } else {
            _0x25bf7b.setMonth(0);
            _0x25bf7b.setFullYear(_0x25bf7b.getFullYear() + 1);
          }
        } else {
          _0x25bf7b.setDate(_0x25bf7b.getDate() + _0x527197);
          return _0x25bf7b;
        }
      }
      return _0x25bf7b;
    }
    function _0x2774ae(_0x598523, _0x5f0891, _0x32a6e6, _0x94b5e4) {
      var _0x1de535 = _0x47a7a3[_0x94b5e4 + 40 >> 2];
      var _0x5db42d = {
        tm_sec: _0x47a7a3[_0x94b5e4 >> 2],
        tm_min: _0x47a7a3[_0x94b5e4 + 4 >> 2],
        tm_hour: _0x47a7a3[_0x94b5e4 + 8 >> 2],
        tm_mday: _0x47a7a3[_0x94b5e4 + 12 >> 2],
        tm_mon: _0x47a7a3[_0x94b5e4 + 16 >> 2],
        tm_year: _0x47a7a3[_0x94b5e4 + 20 >> 2],
        tm_wday: _0x47a7a3[_0x94b5e4 + 24 >> 2],
        tm_yday: _0x47a7a3[_0x94b5e4 + 28 >> 2],
        tm_isdst: _0x47a7a3[_0x94b5e4 + 32 >> 2],
        tm_gmtoff: _0x47a7a3[_0x94b5e4 + 36 >> 2],
        tm_zone: _0x1de535 ? _0x2b7aa3(_0x1de535) : ""
      };
      var _0xcca142 = _0x2b7aa3(_0x32a6e6);
      var _0x11857e = {
        "%c": "%a %b %d %H:%M:%S %Y",
        "%D": "%m/%d/%y",
        "%F": "%Y-%m-%d",
        "%h": "%b",
        "%r": "%I:%M:%S %p",
        "%R": "%H:%M",
        "%T": "%H:%M:%S",
        "%x": "%m/%d/%y",
        "%X": "%H:%M:%S",
        "%Ec": "%c",
        "%EC": "%C",
        "%Ex": "%m/%d/%y",
        "%EX": "%H:%M:%S",
        "%Ey": "%y",
        "%EY": "%Y",
        "%Od": "%d",
        "%Oe": "%e",
        "%OH": "%H",
        "%OI": "%I",
        "%Om": "%m",
        "%OM": "%M",
        "%OS": "%S",
        "%Ou": "%u",
        "%OU": "%U",
        "%OV": "%V",
        "%Ow": "%w",
        "%OW": "%W",
        "%Oy": "%y"
      };
      for (var _0x197a84 in _0x11857e) {
        _0xcca142 = _0xcca142.replace(new RegExp(_0x197a84, "g"), _0x11857e[_0x197a84]);
      }
      var _0x2193ef = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
      var _0x25feba = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
      function _0x3e5835(_0xa9b6dc, _0x49c693, _0xde0792) {
        var _0x9dfeb1 = typeof _0xa9b6dc == "number" ? _0xa9b6dc.toString() : _0xa9b6dc || "";
        while (_0x9dfeb1.length < _0x49c693) {
          _0x9dfeb1 = _0xde0792[0] + _0x9dfeb1;
        }
        return _0x9dfeb1;
      }
      function _0x31fbc0(_0x15c7b4, _0x5b1298) {
        return _0x3e5835(_0x15c7b4, _0x5b1298, "0");
      }
      function _0x41619d(_0x19490c, _0x2fe8b0) {
        function _0x4d38db(_0x34eb67) {
          if (_0x34eb67 < 0) {
            return -1;
          } else if (_0x34eb67 > 0) {
            return 1;
          } else {
            return 0;
          }
        }
        var _0x17e8b8;
        if ((_0x17e8b8 = _0x4d38db(_0x19490c.getFullYear() - _0x2fe8b0.getFullYear())) === 0) {
          if ((_0x17e8b8 = _0x4d38db(_0x19490c.getMonth() - _0x2fe8b0.getMonth())) === 0) {
            _0x17e8b8 = _0x4d38db(_0x19490c.getDate() - _0x2fe8b0.getDate());
          }
        }
        return _0x17e8b8;
      }
      function _0x78c291(_0x157e22) {
        switch (_0x157e22.getDay()) {
          case 0:
            return new Date(_0x157e22.getFullYear() - 1, 11, 29);
          case 1:
            return _0x157e22;
          case 2:
            return new Date(_0x157e22.getFullYear(), 0, 3);
          case 3:
            return new Date(_0x157e22.getFullYear(), 0, 2);
          case 4:
            return new Date(_0x157e22.getFullYear(), 0, 1);
          case 5:
            return new Date(_0x157e22.getFullYear() - 1, 11, 31);
          case 6:
            return new Date(_0x157e22.getFullYear() - 1, 11, 30);
        }
      }
      function _0x53d3de(_0x1e0866) {
        var _0x3cb5f7 = _0x1b5f3d(new Date(_0x1e0866.tm_year + 1900, 0, 1), _0x1e0866.tm_yday);
        var _0x4cda33 = new Date(_0x3cb5f7.getFullYear(), 0, 4);
        var _0x22cfb6 = new Date(_0x3cb5f7.getFullYear() + 1, 0, 4);
        var _0x2db68e = _0x78c291(_0x4cda33);
        var _0x428fda = _0x78c291(_0x22cfb6);
        if (_0x41619d(_0x2db68e, _0x3cb5f7) <= 0) {
          if (_0x41619d(_0x428fda, _0x3cb5f7) <= 0) {
            return _0x3cb5f7.getFullYear() + 1;
          } else {
            return _0x3cb5f7.getFullYear();
          }
        } else {
          return _0x3cb5f7.getFullYear() - 1;
        }
      }
      var _0x300d7b = {
        "%a": function (_0x53f500) {
          return _0x2193ef[_0x53f500.tm_wday].substring(0, 3);
        },
        "%A": function (_0x58e28d) {
          return _0x2193ef[_0x58e28d.tm_wday];
        },
        "%b": function (_0x1b2a25) {
          return _0x25feba[_0x1b2a25.tm_mon].substring(0, 3);
        },
        "%B": function (_0xc01363) {
          return _0x25feba[_0xc01363.tm_mon];
        },
        "%C": function (_0x3f203e) {
          var _0x56c134 = _0x3f203e.tm_year + 1900;
          return _0x31fbc0(_0x56c134 / 100 | 0, 2);
        },
        "%d": function (_0x59770f) {
          return _0x31fbc0(_0x59770f.tm_mday, 2);
        },
        "%e": function (_0x37632c) {
          return _0x3e5835(_0x37632c.tm_mday, 2, " ");
        },
        "%g": function (_0xc724a4) {
          return _0x53d3de(_0xc724a4).toString().substring(2);
        },
        "%G": function (_0x5e0ff4) {
          return _0x53d3de(_0x5e0ff4);
        },
        "%H": function (_0x182ce3) {
          return _0x31fbc0(_0x182ce3.tm_hour, 2);
        },
        "%I": function (_0x31ab83) {
          var _0x3348d7 = _0x31ab83.tm_hour;
          if (_0x3348d7 == 0) {
            _0x3348d7 = 12;
          } else if (_0x3348d7 > 12) {
            _0x3348d7 -= 12;
          }
          return _0x31fbc0(_0x3348d7, 2);
        },
        "%j": function (_0xac7de6) {
          return _0x31fbc0(_0xac7de6.tm_mday + _0x831888(_0x26c760(_0xac7de6.tm_year + 1900) ? _0x533f2a : _0x296802, _0xac7de6.tm_mon - 1), 3);
        },
        "%m": function (_0x58ffed) {
          return _0x31fbc0(_0x58ffed.tm_mon + 1, 2);
        },
        "%M": function (_0x53cfc1) {
          return _0x31fbc0(_0x53cfc1.tm_min, 2);
        },
        "%n": function () {
          return "\n";
        },
        "%p": function (_0x12d679) {
          if (_0x12d679.tm_hour >= 0 && _0x12d679.tm_hour < 12) {
            return "AM";
          } else {
            return "PM";
          }
        },
        "%S": function (_0x1e3c32) {
          return _0x31fbc0(_0x1e3c32.tm_sec, 2);
        },
        "%t": function () {
          return "\t";
        },
        "%u": function (_0x32488a) {
          return _0x32488a.tm_wday || 7;
        },
        "%U": function (_0x4c4173) {
          var _0x432715 = _0x4c4173.tm_yday + 7 - _0x4c4173.tm_wday;
          return _0x31fbc0(Math.floor(_0x432715 / 7), 2);
        },
        "%V": function (_0x1510ac) {
          var _0x418d18 = Math.floor((_0x1510ac.tm_yday + 7 - (_0x1510ac.tm_wday + 6) % 7) / 7);
          if ((_0x1510ac.tm_wday + 371 - _0x1510ac.tm_yday - 2) % 7 <= 2) {
            _0x418d18++;
          }
          if (!_0x418d18) {
            _0x418d18 = 52;
            var _0xfe87a1 = (_0x1510ac.tm_wday + 7 - _0x1510ac.tm_yday - 1) % 7;
            if (_0xfe87a1 == 4 || _0xfe87a1 == 5 && _0x26c760(_0x1510ac.tm_year % 400 - 1)) {
              _0x418d18++;
            }
          } else if (_0x418d18 == 53) {
            var _0x49fc15 = (_0x1510ac.tm_wday + 371 - _0x1510ac.tm_yday) % 7;
            if (_0x49fc15 != 4 && (_0x49fc15 != 3 || !_0x26c760(_0x1510ac.tm_year))) {
              _0x418d18 = 1;
            }
          }
          return _0x31fbc0(_0x418d18, 2);
        },
        "%w": function (_0x324759) {
          return _0x324759.tm_wday;
        },
        "%W": function (_0x5c61d7) {
          var _0x183436 = _0x5c61d7.tm_yday + 7 - (_0x5c61d7.tm_wday + 6) % 7;
          return _0x31fbc0(Math.floor(_0x183436 / 7), 2);
        },
        "%y": function (_0x46d72a) {
          return (_0x46d72a.tm_year + 1900).toString().substring(2);
        },
        "%Y": function (_0x398932) {
          return _0x398932.tm_year + 1900;
        },
        "%z": function (_0x1e5ed0) {
          var _0x3e3461 = _0x1e5ed0.tm_gmtoff;
          var _0x226a7d = _0x3e3461 >= 0;
          _0x3e3461 = Math.abs(_0x3e3461) / 60;
          _0x3e3461 = _0x3e3461 / 60 * 100 + _0x3e3461 % 60;
          return (_0x226a7d ? "+" : "-") + String("0000" + _0x3e3461).slice(-4);
        },
        "%Z": function (_0x46c695) {
          return _0x46c695.tm_zone;
        },
        "%%": function () {
          return "%";
        }
      };
      _0xcca142 = _0xcca142.replace(/%%/g, "\0\0");
      for (var _0x197a84 in _0x300d7b) {
        if (_0xcca142.includes(_0x197a84)) {
          _0xcca142 = _0xcca142.replace(new RegExp(_0x197a84, "g"), _0x300d7b[_0x197a84](_0x5db42d));
        }
      }
      _0xcca142 = _0xcca142.replace(/\0\0/g, "%");
      var _0x169b4c = _0x2fe8e2(_0xcca142, false);
      if (_0x169b4c.length > _0x5f0891) {
        return 0;
      }
      _0x44ada4(_0x169b4c, _0x598523);
      return _0x169b4c.length - 1;
    }
    function _0x2f8a3d(_0x16b384, _0xe01a9f, _0x7616bc, _0x5378d7) {
      if (!_0x16b384) {
        _0x16b384 = this;
      }
      this.parent = _0x16b384;
      this.mount = _0x16b384.mount;
      this.mounted = null;
      this.id = _0x1c26fd.nextInode++;
      this.name = _0xe01a9f;
      this.mode = _0x7616bc;
      this.node_ops = {};
      this.stream_ops = {};
      this.rdev = _0x5378d7;
    }
    var _0x43f9b6 = 365;
    var _0x1e2b1a = 146;
    Object.defineProperties(_0x2f8a3d.prototype, {
      read: {
        get: function () {
          return (this.mode & _0x43f9b6) === _0x43f9b6;
        },
        set: function (_0xc7de67) {
          if (_0xc7de67) {
            this.mode |= _0x43f9b6;
          } else {
            this.mode &= ~_0x43f9b6;
          }
        }
      },
      write: {
        get: function () {
          return (this.mode & _0x1e2b1a) === _0x1e2b1a;
        },
        set: function (_0x47b823) {
          if (_0x47b823) {
            this.mode |= _0x1e2b1a;
          } else {
            this.mode &= ~_0x1e2b1a;
          }
        }
      },
      isFolder: {
        get: function () {
          return _0x1c26fd.isDir(this.mode);
        }
      },
      isDevice: {
        get: function () {
          return _0x1c26fd.isChrdev(this.mode);
        }
      }
    });
    _0x1c26fd.FSNode = _0x2f8a3d;
    _0x1c26fd.staticInit();
    _0x339df7.FS_createPath = _0x1c26fd.createPath;
    _0x339df7.FS_createDataFile = _0x1c26fd.createDataFile;
    _0x339df7.requestFullscreen = function _0x2f641a(_0x364901, _0x5aa413) {
      _0x20cb1d.requestFullscreen(_0x364901, _0x5aa413);
    };
    _0x339df7.requestAnimationFrame = function _0x173fe7(_0x559fe0) {
      _0x20cb1d.requestAnimationFrame(_0x559fe0);
    };
    _0x339df7.setCanvasSize = function _0x5066fb(_0x2c563a, _0x14ef13, _0x56b9de) {
      _0x20cb1d.setCanvasSize(_0x2c563a, _0x14ef13, _0x56b9de);
    };
    _0x339df7.pauseMainLoop = function _0x2f645c() {
      _0x20cb1d.mainLoop.pause();
    };
    _0x339df7.resumeMainLoop = function _0x10aaac() {
      _0x20cb1d.mainLoop.resume();
    };
    _0x339df7.getUserMedia = function _0x16c800() {
      _0x20cb1d.getUserMedia();
    };
    _0x339df7.createContext = function _0x16b40b(_0x313e47, _0x37e1d6, _0x1db831, _0x6174b4) {
      return _0x20cb1d.createContext(_0x313e47, _0x37e1d6, _0x1db831, _0x6174b4);
    };
    var _0xc70178;
    for (var _0x3e018c = 0; _0x3e018c < 32; ++_0x3e018c) {
      _0x53096f.push(new Array(_0x3e018c));
    }
    var _0x3cd8ab = new Float32Array(288);
    for (var _0x3e018c = 0; _0x3e018c < 288; ++_0x3e018c) {
      _0x4255d5[_0x3e018c] = _0x3cd8ab.subarray(0, _0x3e018c + 1);
    }
    var _0x34d961 = new Int32Array(288);
    for (var _0x3e018c = 0; _0x3e018c < 288; ++_0x3e018c) {
      _0x3bcc63[_0x3e018c] = _0x34d961.subarray(0, _0x3e018c + 1);
    }
    var _0x522e6f = false;
    function _0x2fe8e2(_0x21a4cd, _0x1693e9, _0x346644) {
      var _0x37dcc6 = _0x346644 > 0 ? _0x346644 : _0x12cdfc(_0x21a4cd) + 1;
      var _0x252031 = new Array(_0x37dcc6);
      var _0x417e12 = _0x1dd967(_0x21a4cd, _0x252031, 0, _0x252031.length);
      if (_0x1693e9) {
        _0x252031.length = _0x417e12;
      }
      return _0x252031;
    }
    var _0x22dabc = {
      AddDocument: _0x5c8d4f,
      AddElementInArrayField: _0x4fdd1d,
      CreateUserWithEmailAndPassword: _0x20532c,
      DeleteDocument: _0x1989ba,
      DeleteField: _0x4f30cf,
      DeleteJSON: _0x17b8de,
      DownloadFile: _0x381ca9,
      FetchAd: _0x361824,
      GD_SDK_Init: _0x5a0bd6,
      GD_SDK_PreloadAd: _0xfb5196,
      GD_SDK_SendEvent: _0x2ff12d,
      GD_SDK_ShowAd: _0x4622b7,
      GameEvent: _0xcf4e76,
      GetCurrentProjectId: _0xaf554f,
      GetDocument: _0x354311,
      GetDocumentsInCollection: _0x36eac5,
      GetJSMemoryInfo: _0x47ed2d,
      GetJSON: _0x3f8fb1,
      IncrementFieldValue: _0x3d2955,
      JS_Accelerometer_IsRunning: _0x5b0c2d,
      JS_Accelerometer_Start: _0x2462b,
      JS_Accelerometer_Stop: _0x3e3964,
      JS_CallAsLongAsNoExceptionsSeen: _0x339ddf,
      JS_Cursor_SetImage: _0x2bfb69,
      JS_Cursor_SetShow: _0x2cf9ff,
      JS_DOM_MapViewportCoordinateToElementLocalCoordinate: _0x329c68,
      JS_DOM_UnityCanvasSelector: _0x2b4546,
      JS_Eval_EvalJS: _0x358d9b,
      JS_Eval_OpenURL: _0x10c9dc,
      JS_FileSystem_Initialize: _0x2c113e,
      JS_FileSystem_Sync: _0x82da53,
      JS_GravitySensor_IsRunning: _0x801116,
      JS_GravitySensor_Start: _0x5664d3,
      JS_GravitySensor_Stop: _0x4c5433,
      JS_GuardAgainstJsExceptions: _0x2a91c3,
      JS_Gyroscope_IsRunning: _0x113dad,
      JS_Gyroscope_Start: _0x1ca593,
      JS_Gyroscope_Stop: _0xbb2591,
      JS_Init_ContextMenuHandler: _0x5396de,
      JS_LinearAccelerationSensor_IsRunning: _0x174aff,
      JS_LinearAccelerationSensor_Start: _0x123c6f,
      JS_LinearAccelerationSensor_Stop: _0x3cdf31,
      JS_Log_Dump: _0x151225,
      JS_Log_StackTrace: _0x4c069e,
      JS_MobileKeybard_GetIgnoreBlurEvent: _0xc20b5b,
      JS_MobileKeyboard_GetKeyboardStatus: _0x385414,
      JS_MobileKeyboard_GetText: _0x399d8d,
      JS_MobileKeyboard_GetTextSelection: _0xb80345,
      JS_MobileKeyboard_Hide: _0x41949e,
      JS_MobileKeyboard_SetCharacterLimit: _0x308315,
      JS_MobileKeyboard_SetText: _0x727f1e,
      JS_MobileKeyboard_SetTextSelection: _0xb7a221,
      JS_MobileKeyboard_Show: _0x29a149,
      JS_OrientationSensor_IsRunning: _0x257997,
      JS_OrientationSensor_Start: _0x5c7257,
      JS_OrientationSensor_Stop: _0xfd8730,
      JS_RequestDeviceSensorPermissionsOnTouch: _0x3fc19b,
      JS_RunQuitCallbacks: _0x6b6b44,
      JS_ScreenOrientation_DeInit: _0x2142f6,
      JS_ScreenOrientation_Init: _0x27f5fe,
      JS_ScreenOrientation_Lock: _0x154c38,
      JS_Sound_Create_Channel: _0x55bfb3,
      JS_Sound_GetAudioBufferSampleRate: _0xdde45a,
      JS_Sound_GetAudioContextSampleRate: _0x3ec6ea,
      JS_Sound_GetLength: _0x43685d,
      JS_Sound_GetLoadState: _0x2ff599,
      JS_Sound_Init: _0x3d5773,
      JS_Sound_IsStopped: _0x39cc14,
      JS_Sound_Load: _0x425b22,
      JS_Sound_Load_PCM: _0x451c77,
      JS_Sound_Play: _0x5054e3,
      JS_Sound_ReleaseInstance: _0x22da95,
      JS_Sound_ResumeIfNeeded: _0x1dcfc2,
      JS_Sound_Set3D: _0x555b4a,
      JS_Sound_SetListenerOrientation: _0x2c2eee,
      JS_Sound_SetListenerPosition: _0x1afd09,
      JS_Sound_SetLoop: _0x172e42,
      JS_Sound_SetLoopPoints: _0x414d7e,
      JS_Sound_SetPaused: _0x52839c,
      JS_Sound_SetPitch: _0x44afa4,
      JS_Sound_SetPosition: _0x148a80,
      JS_Sound_SetVolume: _0x590428,
      JS_Sound_Stop: _0x1b22ea,
      JS_SystemInfo_GetBrowserName: _0x1e2443,
      JS_SystemInfo_GetBrowserVersionString: _0xcfe8bd,
      JS_SystemInfo_GetCanvasClientSize: _0x3708cc,
      JS_SystemInfo_GetDocumentURL: _0x5248df,
      JS_SystemInfo_GetGPUInfo: _0x429b98,
      JS_SystemInfo_GetLanguage: _0x4a9417,
      JS_SystemInfo_GetMatchWebGLToCanvasSize: _0x4e89e1,
      JS_SystemInfo_GetMemory: _0xb7459e,
      JS_SystemInfo_GetOS: _0x395e6e,
      JS_SystemInfo_GetPreferredDevicePixelRatio: _0x49151f,
      JS_SystemInfo_GetScreenSize: _0x3fbd6c,
      JS_SystemInfo_GetStreamingAssetsURL: _0x4fa16d,
      JS_SystemInfo_HasAstcHdr: _0x37ef73,
      JS_SystemInfo_HasCursorLock: _0x37fdb0,
      JS_SystemInfo_HasFullscreen: _0x157e71,
      JS_SystemInfo_HasWebGL: _0x5ae605,
      JS_UnityEngineShouldQuit: _0x5bd9b0,
      JS_WebRequest_Abort: _0x393813,
      JS_WebRequest_Create: _0x512ad6,
      JS_WebRequest_GetResponseMetaData: _0x5f2208,
      JS_WebRequest_GetResponseMetaDataLengths: _0x2c9854,
      JS_WebRequest_Release: _0x4e1703,
      JS_WebRequest_Send: _0x2127e3,
      JS_WebRequest_SetRedirectLimit: _0x46acb3,
      JS_WebRequest_SetRequestHeader: _0x57ea46,
      JS_WebRequest_SetTimeout: _0x22b1f9,
      ListenForChildAdded: _0x31ee56,
      ListenForChildChanged: _0x338d0a,
      ListenForChildRemoved: _0x4d3cf3,
      ListenForCollectionChange: _0x4e59d9,
      ListenForDocumentChange: _0x1e8f40,
      ListenForValueChanged: _0x16d156,
      LogEvent: _0x584a45,
      LogEventParameter: _0xebef93,
      ModifyNumberWithTransaction: _0x4b3bca,
      OnAuthStateChanged: _0x3e48cd,
      Ping: _0x54e572,
      PostJSON: _0x53936f,
      PushJSON: _0x4f7b26,
      Redirect: _0x2d5672,
      RedirectDomain: _0x15389d,
      RefetchReward: _0x587e59,
      RegisterGameControls: _0x20879a,
      RegisterRewardCallbacks: _0x2f1b4e,
      RemoveElementInArrayField: _0x292db1,
      SDK_GMEvent: _0x2d6c8d,
      SDK_Init: _0x265774,
      SDK_InitParam: _0x1bdf93,
      SDK_PreloadAd: _0x4aba8c,
      SDK_SendEvent: _0x41a938,
      SDK_ShowAd: _0x3fd438,
      SetDocument: _0x1183f9,
      SetUserProperties: _0x3b594b,
      ShowRewardAdCallback: _0x37850f,
      SignInAnonymously: _0x684a29,
      SignInWithEmailAndPassword: _0xf4c365,
      SignInWithFacebook: _0x119fd3,
      SignInWithGoogle: _0x4f91da,
      StopListeningForChildAdded: _0x425685,
      StopListeningForChildChanged: _0x3c854c,
      StopListeningForChildRemoved: _0x2ce281,
      StopListeningForCollectionChange: _0x3612d5,
      StopListeningForDocumentChange: _0x59c72f,
      StopListeningForValueChanged: _0x397f1b,
      ToggleBooleanWithTransaction: _0x1a2e94,
      UpdateDocument: _0x4d89fa,
      UpdateJSON: _0x104c30,
      UploadFile: _0x17156b,
      XHR_Abort: _0x11b0f2,
      XHR_Create: _0xe1b001,
      XHR_Release: _0x549e6a,
      XHR_Send: _0x3a3b7a,
      XHR_SetLoglevel: _0x14638c,
      XHR_SetProgressHandler: _0x44c736,
      XHR_SetRequestHeader: _0x4075df,
      XHR_SetResponseHandler: _0x505433,
      XHR_SetTimeout: _0x544fc8,
      __cxa_allocate_exception: _0x13e924,
      __cxa_begin_catch: _0x4fab7c,
      __cxa_end_catch: _0x381ab0,
      __cxa_find_matching_catch_2: _0x4a924e,
      __cxa_find_matching_catch_3: _0x2ddce0,
      __cxa_find_matching_catch_4: _0x5474bb,
      __cxa_free_exception: _0x480b47,
      __cxa_rethrow: _0x1a17ac,
      __cxa_throw: _0x500771,
      __resumeException: _0x50d17b,
      __syscall__newselect: _0x29403c,
      __syscall_accept4: _0xe17bb9,
      __syscall_bind: _0x146ea4,
      __syscall_chmod: _0x4d097c,
      __syscall_connect: _0x2f3d57,
      __syscall_dup3: _0x3efd33,
      __syscall_faccessat: _0x2b1e29,
      __syscall_fcntl64: _0x563587,
      __syscall_fstat64: _0x144a8e,
      __syscall_ftruncate64: _0x7ea9ee,
      __syscall_getcwd: _0x4900bb,
      __syscall_getdents64: _0x4774d2,
      __syscall_getpeername: _0x305588,
      __syscall_getsockname: _0x42dd9b,
      __syscall_getsockopt: _0xdf7da7,
      __syscall_ioctl: _0x12f975,
      __syscall_listen: _0x33ecc8,
      __syscall_lstat64: _0x3fca7f,
      __syscall_mkdir: _0x16c4f3,
      __syscall_newfstatat: _0x42a900,
      __syscall_openat: _0x288242,
      __syscall_pipe: _0x2d2c3f,
      __syscall_poll: _0x47fb7a,
      __syscall_readlinkat: _0x54446c,
      __syscall_recvfrom: _0x4b08f8,
      __syscall_recvmsg: _0x38733a,
      __syscall_renameat: _0x1dc53d,
      __syscall_rmdir: _0x41b1a4,
      __syscall_sendmsg: _0x515afd,
      __syscall_sendto: _0x2307f9,
      __syscall_socket: _0x29aaea,
      __syscall_stat64: _0x3242e3,
      __syscall_statfs64: _0x399fe3,
      __syscall_symlink: _0x1536a9,
      __syscall_truncate64: _0x425897,
      __syscall_unlinkat: _0x4b5533,
      __syscall_utimensat: _0x66ef3c,
      _dlopen_js: _0x4ccac0,
      _dlsym_js: _0x4a8554,
      _emscripten_date_now: _0x4080a9,
      _emscripten_get_now_is_monotonic: _0x39979f,
      _emscripten_throw_longjmp: _0x4d3de0,
      _gmtime_js: _0x3d0273,
      _localtime_js: _0x183275,
      _mktime_js: _0x1305cb,
      _mmap_js: _0x5af9c5,
      _munmap_js: _0x3214f0,
      _tzset_js: _0x2f7fc0,
      abort: _0x407991,
      emscripten_asm_const_int_sync_on_main_thread: _0x3f5518,
      emscripten_cancel_main_loop: _0x28ae75,
      emscripten_clear_interval: _0x1c5217,
      emscripten_exit_fullscreen: _0x59329e,
      emscripten_exit_pointerlock: _0x2bc251,
      emscripten_get_canvas_element_size: _0x3efe4d,
      emscripten_get_fullscreen_status: _0x314ff5,
      emscripten_get_gamepad_status: _0x5cbc65,
      emscripten_get_heap_max: _0x1edd0f,
      emscripten_get_now: _0x5bcf45,
      emscripten_get_now_res: _0xadb25e,
      emscripten_get_num_gamepads: _0x9e0231,
      emscripten_html5_remove_all_event_listeners: _0x30db64,
      emscripten_is_webgl_context_lost: _0x2e5f74,
      emscripten_log: _0x47b79d,
      emscripten_memcpy_big: _0x3b7516,
      emscripten_request_fullscreen: _0x5021e6,
      emscripten_request_pointerlock: _0x52a3b2,
      emscripten_resize_heap: _0x140c51,
      emscripten_sample_gamepad_data: _0x1b5ed1,
      emscripten_set_blur_callback_on_thread: _0x58450a,
      emscripten_set_canvas_element_size: _0xd4688,
      emscripten_set_focus_callback_on_thread: _0x46aebb,
      emscripten_set_fullscreenchange_callback_on_thread: _0x57a4ad,
      emscripten_set_gamepadconnected_callback_on_thread: _0x1a4585,
      emscripten_set_gamepaddisconnected_callback_on_thread: _0x986fcb,
      emscripten_set_interval: _0x198b2b,
      emscripten_set_keydown_callback_on_thread: _0x2d1ce1,
      emscripten_set_keypress_callback_on_thread: _0x1aea79,
      emscripten_set_keyup_callback_on_thread: _0x5923e5,
      emscripten_set_main_loop: _0x45da90,
      emscripten_set_main_loop_timing: _0x5b83ef,
      emscripten_set_mousedown_callback_on_thread: _0x2159d2,
      emscripten_set_mousemove_callback_on_thread: _0x4e3b68,
      emscripten_set_mouseup_callback_on_thread: _0x29dc3f,
      emscripten_set_pointerlockchange_callback_on_thread: _0x37efd4,
      emscripten_set_touchcancel_callback_on_thread: _0x4e05f0,
      emscripten_set_touchend_callback_on_thread: _0x492862,
      emscripten_set_touchmove_callback_on_thread: _0x2f76b5,
      emscripten_set_touchstart_callback_on_thread: _0x87d8c6,
      emscripten_set_wheel_callback_on_thread: _0x581a3d,
      emscripten_webgl_create_context: _0x1faf12,
      emscripten_webgl_destroy_context: _0x4e7fd1,
      emscripten_webgl_enable_extension: _0x51df7f,
      emscripten_webgl_get_current_context: _0x1b7fce,
      emscripten_webgl_init_context_attributes: _0x3e0ab5,
      emscripten_webgl_make_context_current: _0x271916,
      environ_get: _0x538bbc,
      environ_sizes_get: _0x5b36c4,
      exit: _0x4cd0c8,
      fd_close: _0x1115e3,
      fd_fdstat_get: _0x168dfe,
      fd_read: _0x313d85,
      fd_seek: _0x506034,
      fd_write: _0x57cf3d,
      getTempRet0: _0x25ef50,
      getaddrinfo: _0x6856ea,
      gethostbyaddr: _0x157304,
      gethostbyname: _0xdc5fbf,
      getnameinfo: _0x21c2d1,
      glActiveTexture: _0x240369,
      glAttachShader: _0xa7e820,
      glBeginQuery: _0x5f0be7,
      glBindAttribLocation: _0x583df4,
      glBindBuffer: _0x17ea69,
      glBindBufferBase: _0x19009e,
      glBindBufferRange: _0x10a93e,
      glBindFramebuffer: _0x3cb68b,
      glBindRenderbuffer: _0x16e889,
      glBindSampler: _0x4bc2c0,
      glBindTexture: _0xe1d855,
      glBindVertexArray: _0x14bf22,
      glBlendEquation: _0x475ee2,
      glBlendEquationSeparate: _0x49f84c,
      glBlendFuncSeparate: _0x13406c,
      glBlitFramebuffer: _0x3d88ee,
      glBufferData: _0x365804,
      glBufferSubData: _0x4f3060,
      glCheckFramebufferStatus: _0x1f0d6c,
      glClear: _0x2465d8,
      glClearBufferfi: _0x4baff4,
      glClearBufferfv: _0x30f845,
      glClearBufferuiv: _0xa97610,
      glClearColor: _0x4658f2,
      glClearDepthf: _0x3c32e5,
      glClearStencil: _0x3c47b8,
      glClientWaitSync: _0x3b6aea,
      glColorMask: _0x48ea5b,
      glCompileShader: _0x3e315f,
      glCompressedTexImage2D: _0x3ce4c1,
      glCompressedTexImage3D: _0x2812d6,
      glCompressedTexSubImage2D: _0x239f6a,
      glCompressedTexSubImage3D: _0x3b14c1,
      glCopyBufferSubData: _0x275812,
      glCopyTexImage2D: _0x4f7401,
      glCopyTexSubImage2D: _0x12e1fd,
      glCreateProgram: _0x34881f,
      glCreateShader: _0x2ca83c,
      glCullFace: _0x2c1fe5,
      glDeleteBuffers: _0x48b057,
      glDeleteFramebuffers: _0x4f6484,
      glDeleteProgram: _0x2b7049,
      glDeleteQueries: _0x27e235,
      glDeleteRenderbuffers: _0x77c1df,
      glDeleteSamplers: _0x51e5dc,
      glDeleteShader: _0x314e61,
      glDeleteSync: _0x340201,
      glDeleteTextures: _0x38d035,
      glDeleteVertexArrays: _0xf5db0,
      glDepthFunc: _0x54de71,
      glDepthMask: _0x2b4347,
      glDetachShader: _0xbcfeb1,
      glDisable: _0x2dc2e9,
      glDisableVertexAttribArray: _0x5034a2,
      glDrawArrays: _0x3ced0f,
      glDrawArraysInstanced: _0x1401fc,
      glDrawBuffers: _0x5218cf,
      glDrawElements: _0x39cd71,
      glDrawElementsInstanced: _0x2f6968,
      glEnable: _0x5bb11d,
      glEnableVertexAttribArray: _0x56d954,
      glEndQuery: _0x3ca454,
      glFenceSync: _0xaef8fd,
      glFinish: _0x1681e4,
      glFlush: _0x35a8e0,
      glFlushMappedBufferRange: _0x4ca917,
      glFramebufferRenderbuffer: _0x2139b1,
      glFramebufferTexture2D: _0x4b3316,
      glFramebufferTextureLayer: _0x55e731,
      glFrontFace: _0x194def,
      glGenBuffers: _0x263618,
      glGenFramebuffers: _0x30e5bb,
      glGenQueries: _0x6fd1fd,
      glGenRenderbuffers: _0x765be6,
      glGenSamplers: _0x26040c,
      glGenTextures: _0x11e537,
      glGenVertexArrays: _0x358ff6,
      glGenerateMipmap: _0x483ea7,
      glGetActiveAttrib: _0x2a9bd5,
      glGetActiveUniform: _0x1b8b27,
      glGetActiveUniformBlockName: _0x2b68c1,
      glGetActiveUniformBlockiv: _0x17973b,
      glGetActiveUniformsiv: _0x5760f3,
      glGetAttribLocation: _0x384040,
      glGetBufferSubData: _0x419bb6,
      glGetError: _0x5040df,
      glGetFramebufferAttachmentParameteriv: _0x5d6f6a,
      glGetIntegeri_v: _0x546f78,
      glGetIntegerv: _0x48f75f,
      glGetInternalformativ: _0x3673d5,
      glGetProgramBinary: _0xd04518,
      glGetProgramInfoLog: _0x59eefd,
      glGetProgramiv: _0x2eca1a,
      glGetQueryObjectuiv: _0x3057c8,
      glGetQueryiv: _0x781bf7,
      glGetRenderbufferParameteriv: _0x2290e8,
      glGetShaderInfoLog: _0x488860,
      glGetShaderPrecisionFormat: _0x31202c,
      glGetShaderSource: _0x395715,
      glGetShaderiv: _0x35f1d7,
      glGetString: _0x25f6ca,
      glGetStringi: _0x4c12c9,
      glGetTexParameteriv: _0x3150ca,
      glGetUniformBlockIndex: _0x100beb,
      glGetUniformIndices: _0x4d22dd,
      glGetUniformLocation: _0x2487a3,
      glGetUniformiv: _0x5865a7,
      glGetVertexAttribiv: _0x584a48,
      glInvalidateFramebuffer: _0x2d4d8e,
      glIsEnabled: _0x3bab9f,
      glIsVertexArray: _0x508432,
      glLinkProgram: _0x3ee60e,
      glMapBufferRange: _0x18c3d5,
      glPixelStorei: _0x15b2bf,
      glPolygonOffset: _0x1b2555,
      glProgramBinary: _0x2d9abd,
      glProgramParameteri: _0x637b2a,
      glReadBuffer: _0x17576d,
      glReadPixels: _0x5e8453,
      glRenderbufferStorage: _0x4d2038,
      glRenderbufferStorageMultisample: _0x2135f4,
      glSamplerParameteri: _0x3e4441,
      glScissor: _0x33da36,
      glShaderSource: _0x52d51b,
      glStencilFuncSeparate: _0x55b992,
      glStencilMask: _0x204cde,
      glStencilOpSeparate: _0x3bd466,
      glTexImage2D: _0x22898e,
      glTexImage3D: _0x15ef40,
      glTexParameterf: _0x15a665,
      glTexParameteri: _0x26c59c,
      glTexParameteriv: _0x23b9ae,
      glTexStorage2D: _0x3abf08,
      glTexStorage3D: _0x44efaa,
      glTexSubImage2D: _0x293aef,
      glTexSubImage3D: _0x52f666,
      glUniform1fv: _0xea5033,
      glUniform1i: _0x405db3,
      glUniform1iv: _0x41471d,
      glUniform1uiv: _0x417387,
      glUniform2fv: _0x1b4d94,
      glUniform2iv: _0x270b97,
      glUniform2uiv: _0x1ec526,
      glUniform3fv: _0x207f38,
      glUniform3iv: _0x3ca065,
      glUniform3uiv: _0x223693,
      glUniform4fv: _0x5c32ea,
      glUniform4iv: _0x395382,
      glUniform4uiv: _0x152425,
      glUniformBlockBinding: _0x29865b,
      glUniformMatrix3fv: _0x302aa5,
      glUniformMatrix4fv: _0x9ad186,
      glUnmapBuffer: _0x14951e,
      glUseProgram: _0x379992,
      glValidateProgram: _0x178a7c,
      glVertexAttrib4f: _0x3eb838,
      glVertexAttrib4fv: _0x516a22,
      glVertexAttribIPointer: _0x38f534,
      glVertexAttribPointer: _0x35595d,
      glViewport: _0x1c9ab0,
      invoke_dddi: _0x5ec8ed,
      invoke_ddiii: _0x2fe286,
      invoke_dii: _0x1ce21b,
      invoke_diidi: _0x8e0b53,
      invoke_diii: _0x2c801e,
      invoke_diiii: _0x1ffb8e,
      invoke_dji: _0xaee62b,
      invoke_fffi: _0xf098c3,
      invoke_fi: _0x4532cb,
      invoke_fii: _0x28f0d8,
      invoke_fiifi: _0x10555e,
      invoke_fiii: _0x4db8d4,
      invoke_fiiii: _0x4a72dd,
      invoke_i: _0x288e5d,
      invoke_idi: _0x4757e5,
      invoke_ifi: _0x2ab46c,
      invoke_ii: _0x5d950d,
      invoke_iidi: _0xaadcf7,
      invoke_iifi: _0x35c170,
      invoke_iii: _0x176ce1,
      invoke_iiid: _0x5cdaca,
      invoke_iiidii: _0x21a309,
      invoke_iiidiii: _0x1e5868,
      invoke_iiifi: _0x161f91,
      invoke_iiifii: _0x14455d,
      invoke_iiii: _0x31ccf7,
      invoke_iiiidii: _0x1b1d38,
      invoke_iiiifii: _0x20594f,
      invoke_iiiii: _0x16d870,
      invoke_iiiiii: _0x1d597d,
      invoke_iiiiiii: _0x3b700e,
      invoke_iiiiiiii: _0x54ae87,
      invoke_iiiiiiiii: _0x639a39,
      invoke_iiiiiiiiii: _0x4c4124,
      invoke_iiiiiiiiiii: _0x121c6b,
      invoke_iiiiiiiiiji: _0x555c32,
      invoke_iiiiij: _0x57b092,
      invoke_iiiijii: _0x49c51c,
      invoke_iiiijjii: _0x1dcb5f,
      invoke_iiij: _0x541d1e,
      invoke_iiiji: _0xafb7,
      invoke_iiijii: _0x239b89,
      invoke_iiijiii: _0x542687,
      invoke_iij: _0x5614c5,
      invoke_iiji: _0x33522c,
      invoke_iijii: _0x44e534,
      invoke_iijiii: _0x2ee63d,
      invoke_iijiiiiii: _0x292d20,
      invoke_iijji: _0x1f66d6,
      invoke_iijjiiiiii: _0x379046,
      invoke_iji: _0x2b5808,
      invoke_ijiii: _0x60f75f,
      invoke_ijji: _0x88a6c,
      invoke_j: _0xc765c,
      invoke_jdi: _0x7dbcf5,
      invoke_ji: _0x2908ca,
      invoke_jidi: _0x39dc36,
      invoke_jii: _0x5e61a1,
      invoke_jiii: _0xd10f5d,
      invoke_jiiii: _0x49b325,
      invoke_jiiiii: _0x2553b6,
      invoke_jiiiiiiiiii: _0x561e63,
      invoke_jiiji: _0x40b296,
      invoke_jiji: _0x435bf0,
      invoke_jijii: _0x1a6749,
      invoke_jji: _0x49c82d,
      invoke_jjii: _0x21af1d,
      invoke_jjji: _0x34db71,
      invoke_v: _0x36103a,
      invoke_vi: _0x1cba00,
      invoke_vidd: _0x4b4125,
      invoke_vidi: _0x1b5984,
      invoke_viffi: _0x3e3af6,
      invoke_vifi: _0x2b48d6,
      invoke_vifii: _0x27fa2f,
      invoke_vii: _0x581c12,
      invoke_viid: _0x51bb75,
      invoke_viidi: _0x12e7c2,
      invoke_viif: _0x3c1236,
      invoke_viiffi: _0x41bb79,
      invoke_viifi: _0x4e9cbf,
      invoke_viifii: _0x1afe98,
      invoke_viii: _0x172e7b,
      invoke_viiidii: _0xa99eda,
      invoke_viiii: _0x4751e9,
      invoke_viiiifi: _0x426c20,
      invoke_viiiii: _0x4705cc,
      invoke_viiiiii: _0x31d856,
      invoke_viiiiiifddfiiii: _0x11d99e,
      invoke_viiiiiiffffiiii: _0x3cb92e,
      invoke_viiiiiifiifiiii: _0x5de6ac,
      invoke_viiiiiifjjfiiii: _0x577bbb,
      invoke_viiiiiii: _0x533b26,
      invoke_viiiiiiii: _0x5e1bce,
      invoke_viiiiiiiii: _0x2ed791,
      invoke_viiiiiiiiii: _0x4b5f47,
      invoke_viiiiiiiiiiii: _0x16ab42,
      invoke_viiiiiiiiiiiii: _0x19b942,
      invoke_viiiijiii: _0x50969d,
      invoke_viiiji: _0x499c38,
      invoke_viij: _0x44dfc5,
      invoke_viiji: _0x2cd2d8,
      invoke_viijii: _0x2b1b45,
      invoke_viijiii: _0x2dd14d,
      invoke_viijiiijiiii: _0x11e747,
      invoke_viijji: _0x2f1777,
      invoke_viji: _0x3c4623,
      invoke_vijii: _0x146c1c,
      invoke_vijiii: _0x191679,
      invoke_vijiiii: _0x26103a,
      invoke_vijijii: _0x1c15f4,
      invoke_vijji: _0x458ea5,
      invoke_vijjji: _0x351227,
      invoke_vji: _0x521f1a,
      invoke_vjiii: _0x29b7aa,
      invoke_vjiiiii: _0x574930,
      invoke_vjiiiiii: _0x3ad177,
      invoke_vjjjiiii: _0x58e816,
      llvm_eh_typeid_for: _0x307363,
      setTempRet0: _0x314063,
      strftime: _0x2774ae
    };
    var _0x5ac3bb = _0x233325();
    var _0x259cc3 = _0x339df7.___wasm_call_ctors = function () {
      return (_0x259cc3 = _0x339df7.___wasm_call_ctors = _0x339df7.asm.__wasm_call_ctors).apply(null, arguments);
    };
    var _0x38e312 = _0x339df7._ReleaseKeys = function () {
      return (_0x38e312 = _0x339df7._ReleaseKeys = _0x339df7.asm.ReleaseKeys).apply(null, arguments);
    };
    var _0xb9fe99 = _0x339df7._getMemInfo = function () {
      return (_0xb9fe99 = _0x339df7._getMemInfo = _0x339df7.asm.getMemInfo).apply(null, arguments);
    };
    var _0x4dc2d0 = _0x339df7._SendMessageFloat = function () {
      return (_0x4dc2d0 = _0x339df7._SendMessageFloat = _0x339df7.asm.SendMessageFloat).apply(null, arguments);
    };
    var _0x433c64 = _0x339df7._SendMessageString = function () {
      return (_0x433c64 = _0x339df7._SendMessageString = _0x339df7.asm.SendMessageString).apply(null, arguments);
    };
    var _0x4e107c = _0x339df7._SendMessage = function () {
      return (_0x4e107c = _0x339df7._SendMessage = _0x339df7.asm.SendMessage).apply(null, arguments);
    };
    var _0x37c4e8 = _0x339df7._SetFullscreen = function () {
      return (_0x37c4e8 = _0x339df7._SetFullscreen = _0x339df7.asm.SetFullscreen).apply(null, arguments);
    };
    var _0x3247b6 = _0x339df7._main = function () {
      return (_0x3247b6 = _0x339df7._main = _0x339df7.asm.main).apply(null, arguments);
    };
    var _0x3fda2b = _0x339df7.___errno_location = function () {
      return (_0x3fda2b = _0x339df7.___errno_location = _0x339df7.asm.__errno_location).apply(null, arguments);
    };
    var _0x223574 = _0x339df7.___dl_seterr = function () {
      return (_0x223574 = _0x339df7.___dl_seterr = _0x339df7.asm.__dl_seterr).apply(null, arguments);
    };
    var _0x2a9265 = _0x339df7._htonl = function () {
      return (_0x2a9265 = _0x339df7._htonl = _0x339df7.asm.htonl).apply(null, arguments);
    };
    var _0x15a67e = _0x339df7._htons = function () {
      return (_0x15a67e = _0x339df7._htons = _0x339df7.asm.htons).apply(null, arguments);
    };
    var _0x25ff9b = _0x339df7._ntohs = function () {
      return (_0x25ff9b = _0x339df7._ntohs = _0x339df7.asm.ntohs).apply(null, arguments);
    };
    var _0x5733b7 = _0x339df7._strlen = function () {
      return (_0x5733b7 = _0x339df7._strlen = _0x339df7.asm.strlen).apply(null, arguments);
    };
    var _0x5d55ea = _0x339df7._malloc = function () {
      return (_0x5d55ea = _0x339df7._malloc = _0x339df7.asm.malloc).apply(null, arguments);
    };
    var _0x6cc71d = _0x339df7._free = function () {
      return (_0x6cc71d = _0x339df7._free = _0x339df7.asm.free).apply(null, arguments);
    };
    var _0x53347d = _0x339df7._emscripten_builtin_memalign = function () {
      return (_0x53347d = _0x339df7._emscripten_builtin_memalign = _0x339df7.asm.emscripten_builtin_memalign).apply(null, arguments);
    };
    var _0x558a37 = _0x339df7._setThrew = function () {
      return (_0x558a37 = _0x339df7._setThrew = _0x339df7.asm.setThrew).apply(null, arguments);
    };
    var _0x550385 = _0x339df7._saveSetjmp = function () {
      return (_0x550385 = _0x339df7._saveSetjmp = _0x339df7.asm.saveSetjmp).apply(null, arguments);
    };
    var _0x42a2ea = _0x339df7.stackSave = function () {
      return (_0x42a2ea = _0x339df7.stackSave = _0x339df7.asm.stackSave).apply(null, arguments);
    };
    var _0x4c02af = _0x339df7.stackRestore = function () {
      return (_0x4c02af = _0x339df7.stackRestore = _0x339df7.asm.stackRestore).apply(null, arguments);
    };
    var _0x560693 = _0x339df7.stackAlloc = function () {
      return (_0x560693 = _0x339df7.stackAlloc = _0x339df7.asm.stackAlloc).apply(null, arguments);
    };
    var _0x40e2b9 = _0x339df7.___cxa_can_catch = function () {
      return (_0x40e2b9 = _0x339df7.___cxa_can_catch = _0x339df7.asm.__cxa_can_catch).apply(null, arguments);
    };
    var _0x314808 = _0x339df7.___cxa_is_pointer_type = function () {
      return (_0x314808 = _0x339df7.___cxa_is_pointer_type = _0x339df7.asm.__cxa_is_pointer_type).apply(null, arguments);
    };
    var _0x5678ed = _0x339df7.dynCall_iidiiii = function () {
      return (_0x5678ed = _0x339df7.dynCall_iidiiii = _0x339df7.asm.dynCall_iidiiii).apply(null, arguments);
    };
    var _0x4cc732 = _0x339df7.dynCall_vii = function () {
      return (_0x4cc732 = _0x339df7.dynCall_vii = _0x339df7.asm.dynCall_vii).apply(null, arguments);
    };
    var _0x3cf839 = _0x339df7.dynCall_iiii = function () {
      return (_0x3cf839 = _0x339df7.dynCall_iiii = _0x339df7.asm.dynCall_iiii).apply(null, arguments);
    };
    var _0x5bffba = _0x339df7.dynCall_iii = function () {
      return (_0x5bffba = _0x339df7.dynCall_iii = _0x339df7.asm.dynCall_iii).apply(null, arguments);
    };
    var _0x54a0c7 = _0x339df7.dynCall_ii = function () {
      return (_0x54a0c7 = _0x339df7.dynCall_ii = _0x339df7.asm.dynCall_ii).apply(null, arguments);
    };
    var _0x4bab2c = _0x339df7.dynCall_jiji = function () {
      return (_0x4bab2c = _0x339df7.dynCall_jiji = _0x339df7.asm.dynCall_jiji).apply(null, arguments);
    };
    var _0x4f6e0f = _0x339df7.dynCall_vi = function () {
      return (_0x4f6e0f = _0x339df7.dynCall_vi = _0x339df7.asm.dynCall_vi).apply(null, arguments);
    };
    var _0x474ddb = _0x339df7.dynCall_iiiii = function () {
      return (_0x474ddb = _0x339df7.dynCall_iiiii = _0x339df7.asm.dynCall_iiiii).apply(null, arguments);
    };
    var _0x4a04ed = _0x339df7.dynCall_viii = function () {
      return (_0x4a04ed = _0x339df7.dynCall_viii = _0x339df7.asm.dynCall_viii).apply(null, arguments);
    };
    var _0x4ef107 = _0x339df7.dynCall_v = function () {
      return (_0x4ef107 = _0x339df7.dynCall_v = _0x339df7.asm.dynCall_v).apply(null, arguments);
    };
    var _0x3fabbd = _0x339df7.dynCall_viiiiii = function () {
      return (_0x3fabbd = _0x339df7.dynCall_viiiiii = _0x339df7.asm.dynCall_viiiiii).apply(null, arguments);
    };
    var _0x57daea = _0x339df7.dynCall_viiiii = function () {
      return (_0x57daea = _0x339df7.dynCall_viiiii = _0x339df7.asm.dynCall_viiiii).apply(null, arguments);
    };
    var _0x2346d1 = _0x339df7.dynCall_viiii = function () {
      return (_0x2346d1 = _0x339df7.dynCall_viiii = _0x339df7.asm.dynCall_viiii).apply(null, arguments);
    };
    var _0x2abd1b = _0x339df7.dynCall_iiiiii = function () {
      return (_0x2abd1b = _0x339df7.dynCall_iiiiii = _0x339df7.asm.dynCall_iiiiii).apply(null, arguments);
    };
    var _0x2e616c = _0x339df7.dynCall_iiiiiiii = function () {
      return (_0x2e616c = _0x339df7.dynCall_iiiiiiii = _0x339df7.asm.dynCall_iiiiiiii).apply(null, arguments);
    };
    var _0x2a25d6 = _0x339df7.dynCall_iiijiii = function () {
      return (_0x2a25d6 = _0x339df7.dynCall_iiijiii = _0x339df7.asm.dynCall_iiijiii).apply(null, arguments);
    };
    var _0x3c5bc9 = _0x339df7.dynCall_iij = function () {
      return (_0x3c5bc9 = _0x339df7.dynCall_iij = _0x339df7.asm.dynCall_iij).apply(null, arguments);
    };
    var _0x51d9bf = _0x339df7.dynCall_i = function () {
      return (_0x51d9bf = _0x339df7.dynCall_i = _0x339df7.asm.dynCall_i).apply(null, arguments);
    };
    var _0x248210 = _0x339df7.dynCall_iiiiiii = function () {
      return (_0x248210 = _0x339df7.dynCall_iiiiiii = _0x339df7.asm.dynCall_iiiiiii).apply(null, arguments);
    };
    var _0x2e2a86 = _0x339df7.dynCall_jii = function () {
      return (_0x2e2a86 = _0x339df7.dynCall_jii = _0x339df7.asm.dynCall_jii).apply(null, arguments);
    };
    var _0x57a460 = _0x339df7.dynCall_iiiifii = function () {
      return (_0x57a460 = _0x339df7.dynCall_iiiifii = _0x339df7.asm.dynCall_iiiifii).apply(null, arguments);
    };
    var _0x62ff2b = _0x339df7.dynCall_iiiijii = function () {
      return (_0x62ff2b = _0x339df7.dynCall_iiiijii = _0x339df7.asm.dynCall_iiiijii).apply(null, arguments);
    };
    var _0x2ef7b9 = _0x339df7.dynCall_iiiidii = function () {
      return (_0x2ef7b9 = _0x339df7.dynCall_iiiidii = _0x339df7.asm.dynCall_iiiidii).apply(null, arguments);
    };
    var _0x3d7922 = _0x339df7.dynCall_jiiii = function () {
      return (_0x3d7922 = _0x339df7.dynCall_jiiii = _0x339df7.asm.dynCall_jiiii).apply(null, arguments);
    };
    var _0x4361b3 = _0x339df7.dynCall_fiiii = function () {
      return (_0x4361b3 = _0x339df7.dynCall_fiiii = _0x339df7.asm.dynCall_fiiii).apply(null, arguments);
    };
    var _0x811ea9 = _0x339df7.dynCall_diiii = function () {
      return (_0x811ea9 = _0x339df7.dynCall_diiii = _0x339df7.asm.dynCall_diiii).apply(null, arguments);
    };
    var _0x4aab9e = _0x339df7.dynCall_viji = function () {
      return (_0x4aab9e = _0x339df7.dynCall_viji = _0x339df7.asm.dynCall_viji).apply(null, arguments);
    };
    var _0xebf8f1 = _0x339df7.dynCall_viiji = function () {
      return (_0xebf8f1 = _0x339df7.dynCall_viiji = _0x339df7.asm.dynCall_viiji).apply(null, arguments);
    };
    var _0x37c511 = _0x339df7.dynCall_iiijii = function () {
      return (_0x37c511 = _0x339df7.dynCall_iiijii = _0x339df7.asm.dynCall_iiijii).apply(null, arguments);
    };
    var _0x2ee60a = _0x339df7.dynCall_iiifii = function () {
      return (_0x2ee60a = _0x339df7.dynCall_iiifii = _0x339df7.asm.dynCall_iiifii).apply(null, arguments);
    };
    var _0x4a6dfc = _0x339df7.dynCall_viifi = function () {
      return (_0x4a6dfc = _0x339df7.dynCall_viifi = _0x339df7.asm.dynCall_viifi).apply(null, arguments);
    };
    var _0x44924b = _0x339df7.dynCall_viiiiiii = function () {
      return (_0x44924b = _0x339df7.dynCall_viiiiiii = _0x339df7.asm.dynCall_viiiiiii).apply(null, arguments);
    };
    var _0x1ca048 = _0x339df7.dynCall_viijji = function () {
      return (_0x1ca048 = _0x339df7.dynCall_viijji = _0x339df7.asm.dynCall_viijji).apply(null, arguments);
    };
    var _0x4448a6 = _0x339df7.dynCall_ji = function () {
      return (_0x4448a6 = _0x339df7.dynCall_ji = _0x339df7.asm.dynCall_ji).apply(null, arguments);
    };
    var _0x11a634 = _0x339df7.dynCall_jdi = function () {
      return (_0x11a634 = _0x339df7.dynCall_jdi = _0x339df7.asm.dynCall_jdi).apply(null, arguments);
    };
    var _0x4549e = _0x339df7.dynCall_vijiii = function () {
      return (_0x4549e = _0x339df7.dynCall_vijiii = _0x339df7.asm.dynCall_vijiii).apply(null, arguments);
    };
    var _0x1c1c55 = _0x339df7.dynCall_ijiii = function () {
      return (_0x1c1c55 = _0x339df7.dynCall_ijiii = _0x339df7.asm.dynCall_ijiii).apply(null, arguments);
    };
    var _0x5b06d0 = _0x339df7.dynCall_iiji = function () {
      return (_0x5b06d0 = _0x339df7.dynCall_iiji = _0x339df7.asm.dynCall_iiji).apply(null, arguments);
    };
    var _0x5d4fb1 = _0x339df7.dynCall_jji = function () {
      return (_0x5d4fb1 = _0x339df7.dynCall_jji = _0x339df7.asm.dynCall_jji).apply(null, arguments);
    };
    var _0x18bd41 = _0x339df7.dynCall_vidi = function () {
      return (_0x18bd41 = _0x339df7.dynCall_vidi = _0x339df7.asm.dynCall_vidi).apply(null, arguments);
    };
    var _0x3a4918 = _0x339df7.dynCall_viidi = function () {
      return (_0x3a4918 = _0x339df7.dynCall_viidi = _0x339df7.asm.dynCall_viidi).apply(null, arguments);
    };
    var _0x316a2f = _0x339df7.dynCall_jjji = function () {
      return (_0x316a2f = _0x339df7.dynCall_jjji = _0x339df7.asm.dynCall_jjji).apply(null, arguments);
    };
    var _0x3cadda = _0x339df7.dynCall_ijji = function () {
      return (_0x3cadda = _0x339df7.dynCall_ijji = _0x339df7.asm.dynCall_ijji).apply(null, arguments);
    };
    var _0x31575b = _0x339df7.dynCall_j = function () {
      return (_0x31575b = _0x339df7.dynCall_j = _0x339df7.asm.dynCall_j).apply(null, arguments);
    };
    var _0x1a8571 = _0x339df7.dynCall_iiiji = function () {
      return (_0x1a8571 = _0x339df7.dynCall_iiiji = _0x339df7.asm.dynCall_iiiji).apply(null, arguments);
    };
    var _0x3fc07d = _0x339df7.dynCall_iiiiiiiii = function () {
      return (_0x3fc07d = _0x339df7.dynCall_iiiiiiiii = _0x339df7.asm.dynCall_iiiiiiiii).apply(null, arguments);
    };
    var _0x28e4f0 = _0x339df7.dynCall_viiiiiiii = function () {
      return (_0x28e4f0 = _0x339df7.dynCall_viiiiiiii = _0x339df7.asm.dynCall_viiiiiiii).apply(null, arguments);
    };
    var _0x292023 = _0x339df7.dynCall_viiiiiiiiii = function () {
      return (_0x292023 = _0x339df7.dynCall_viiiiiiiiii = _0x339df7.asm.dynCall_viiiiiiiiii).apply(null, arguments);
    };
    var _0x395631 = _0x339df7.dynCall_iiiiij = function () {
      return (_0x395631 = _0x339df7.dynCall_iiiiij = _0x339df7.asm.dynCall_iiiiij).apply(null, arguments);
    };
    var _0x5938be = _0x339df7.dynCall_viiiiiiiii = function () {
      return (_0x5938be = _0x339df7.dynCall_viiiiiiiii = _0x339df7.asm.dynCall_viiiiiiiii).apply(null, arguments);
    };
    var _0x42da20 = _0x339df7.dynCall_dii = function () {
      return (_0x42da20 = _0x339df7.dynCall_dii = _0x339df7.asm.dynCall_dii).apply(null, arguments);
    };
    var _0x543fb3 = _0x339df7.dynCall_viijiiijiiii = function () {
      return (_0x543fb3 = _0x339df7.dynCall_viijiiijiiii = _0x339df7.asm.dynCall_viijiiijiiii).apply(null, arguments);
    };
    var _0x30cfff = _0x339df7.dynCall_fii = function () {
      return (_0x30cfff = _0x339df7.dynCall_fii = _0x339df7.asm.dynCall_fii).apply(null, arguments);
    };
    var _0x5bf437 = _0x339df7.dynCall_vifi = function () {
      return (_0x5bf437 = _0x339df7.dynCall_vifi = _0x339df7.asm.dynCall_vifi).apply(null, arguments);
    };
    var _0x12a4c7 = _0x339df7.dynCall_fiii = function () {
      return (_0x12a4c7 = _0x339df7.dynCall_fiii = _0x339df7.asm.dynCall_fiii).apply(null, arguments);
    };
    var _0x1e7bff = _0x339df7.dynCall_viiiifii = function () {
      return (_0x1e7bff = _0x339df7.dynCall_viiiifii = _0x339df7.asm.dynCall_viiiifii).apply(null, arguments);
    };
    var _0x177e92 = _0x339df7.dynCall_viiffi = function () {
      return (_0x177e92 = _0x339df7.dynCall_viiffi = _0x339df7.asm.dynCall_viiffi).apply(null, arguments);
    };
    var _0x32c4b8 = _0x339df7.dynCall_fiffffi = function () {
      return (_0x32c4b8 = _0x339df7.dynCall_fiffffi = _0x339df7.asm.dynCall_fiffffi).apply(null, arguments);
    };
    var _0x5752a5 = _0x339df7.dynCall_viijjii = function () {
      return (_0x5752a5 = _0x339df7.dynCall_viijjii = _0x339df7.asm.dynCall_viijjii).apply(null, arguments);
    };
    var _0x1b87b3 = _0x339df7.dynCall_jiii = function () {
      return (_0x1b87b3 = _0x339df7.dynCall_jiii = _0x339df7.asm.dynCall_jiii).apply(null, arguments);
    };
    var _0x218d38 = _0x339df7.dynCall_ddiii = function () {
      return (_0x218d38 = _0x339df7.dynCall_ddiii = _0x339df7.asm.dynCall_ddiii).apply(null, arguments);
    };
    var _0x2051dd = _0x339df7.dynCall_iiiiiiiiii = function () {
      return (_0x2051dd = _0x339df7.dynCall_iiiiiiiiii = _0x339df7.asm.dynCall_iiiiiiiiii).apply(null, arguments);
    };
    var _0x3df865 = _0x339df7.dynCall_fffi = function () {
      return (_0x3df865 = _0x339df7.dynCall_fffi = _0x339df7.asm.dynCall_fffi).apply(null, arguments);
    };
    var _0x696c5d = _0x339df7.dynCall_viifii = function () {
      return (_0x696c5d = _0x339df7.dynCall_viifii = _0x339df7.asm.dynCall_viifii).apply(null, arguments);
    };
    var _0x532665 = _0x339df7.dynCall_jjii = function () {
      return (_0x532665 = _0x339df7.dynCall_jjii = _0x339df7.asm.dynCall_jjii).apply(null, arguments);
    };
    var _0x4a4d7a = _0x339df7.dynCall_diii = function () {
      return (_0x4a4d7a = _0x339df7.dynCall_diii = _0x339df7.asm.dynCall_diii).apply(null, arguments);
    };
    var _0x553a4c = _0x339df7.dynCall_iidi = function () {
      return (_0x553a4c = _0x339df7.dynCall_iidi = _0x339df7.asm.dynCall_iidi).apply(null, arguments);
    };
    var _0x2c6a55 = _0x339df7.dynCall_iifi = function () {
      return (_0x2c6a55 = _0x339df7.dynCall_iifi = _0x339df7.asm.dynCall_iifi).apply(null, arguments);
    };
    var _0x3c2cc8 = _0x339df7.dynCall_viiidii = function () {
      return (_0x3c2cc8 = _0x339df7.dynCall_viiidii = _0x339df7.asm.dynCall_viiidii).apply(null, arguments);
    };
    var _0x3023b2 = _0x339df7.dynCall_fifi = function () {
      return (_0x3023b2 = _0x339df7.dynCall_fifi = _0x339df7.asm.dynCall_fifi).apply(null, arguments);
    };
    var _0x4f44ff = _0x339df7.dynCall_fiffi = function () {
      return (_0x4f44ff = _0x339df7.dynCall_fiffi = _0x339df7.asm.dynCall_fiffi).apply(null, arguments);
    };
    var _0x54902b = _0x339df7.dynCall_fifffi = function () {
      return (_0x54902b = _0x339df7.dynCall_fifffi = _0x339df7.asm.dynCall_fifffi).apply(null, arguments);
    };
    var _0x166aec = _0x339df7.dynCall_viidii = function () {
      return (_0x166aec = _0x339df7.dynCall_viidii = _0x339df7.asm.dynCall_viidii).apply(null, arguments);
    };
    var _0x2f849f = _0x339df7.dynCall_viijii = function () {
      return (_0x2f849f = _0x339df7.dynCall_viijii = _0x339df7.asm.dynCall_viijii).apply(null, arguments);
    };
    var _0x35083e = _0x339df7.dynCall_viijiii = function () {
      return (_0x35083e = _0x339df7.dynCall_viijiii = _0x339df7.asm.dynCall_viijiii).apply(null, arguments);
    };
    var _0x3a86ef = _0x339df7.dynCall_vjiii = function () {
      return (_0x3a86ef = _0x339df7.dynCall_vjiii = _0x339df7.asm.dynCall_vjiii).apply(null, arguments);
    };
    var _0x15c97d = _0x339df7.dynCall_vjiiiiii = function () {
      return (_0x15c97d = _0x339df7.dynCall_vjiiiiii = _0x339df7.asm.dynCall_vjiiiiii).apply(null, arguments);
    };
    var _0x54a1b3 = _0x339df7.dynCall_vijiiii = function () {
      return (_0x54a1b3 = _0x339df7.dynCall_vijiiii = _0x339df7.asm.dynCall_vijiiii).apply(null, arguments);
    };
    var _0x2f189c = _0x339df7.dynCall_vijiiiiii = function () {
      return (_0x2f189c = _0x339df7.dynCall_vijiiiiii = _0x339df7.asm.dynCall_vijiiiiii).apply(null, arguments);
    };
    var _0x225647 = _0x339df7.dynCall_ifi = function () {
      return (_0x225647 = _0x339df7.dynCall_ifi = _0x339df7.asm.dynCall_ifi).apply(null, arguments);
    };
    var _0x53403e = _0x339df7.dynCall_idi = function () {
      return (_0x53403e = _0x339df7.dynCall_idi = _0x339df7.asm.dynCall_idi).apply(null, arguments);
    };
    var _0x2a0eb2 = _0x339df7.dynCall_iiiiji = function () {
      return (_0x2a0eb2 = _0x339df7.dynCall_iiiiji = _0x339df7.asm.dynCall_iiiiji).apply(null, arguments);
    };
    var _0x5b597c = _0x339df7.dynCall_viiiiiiiiiiiii = function () {
      return (_0x5b597c = _0x339df7.dynCall_viiiiiiiiiiiii = _0x339df7.asm.dynCall_viiiiiiiiiiiii).apply(null, arguments);
    };
    var _0x472974 = _0x339df7.dynCall_iiiiiiiiiji = function () {
      return (_0x472974 = _0x339df7.dynCall_iiiiiiiiiji = _0x339df7.asm.dynCall_iiiiiiiiiji).apply(null, arguments);
    };
    var _0x3bc709 = _0x339df7.dynCall_vji = function () {
      return (_0x3bc709 = _0x339df7.dynCall_vji = _0x339df7.asm.dynCall_vji).apply(null, arguments);
    };
    var _0x5e1b50 = _0x339df7.dynCall_vijjji = function () {
      return (_0x5e1b50 = _0x339df7.dynCall_vijjji = _0x339df7.asm.dynCall_vijjji).apply(null, arguments);
    };
    var _0x25be3b = _0x339df7.dynCall_viiiijiii = function () {
      return (_0x25be3b = _0x339df7.dynCall_viiiijiii = _0x339df7.asm.dynCall_viiiijiii).apply(null, arguments);
    };
    var _0x53d7c2 = _0x339df7.dynCall_jijii = function () {
      return (_0x53d7c2 = _0x339df7.dynCall_jijii = _0x339df7.asm.dynCall_jijii).apply(null, arguments);
    };
    var _0x1ab181 = _0x339df7.dynCall_dddi = function () {
      return (_0x1ab181 = _0x339df7.dynCall_dddi = _0x339df7.asm.dynCall_dddi).apply(null, arguments);
    };
    var _0x1b88ac = _0x339df7.dynCall_iji = function () {
      return (_0x1b88ac = _0x339df7.dynCall_iji = _0x339df7.asm.dynCall_iji).apply(null, arguments);
    };
    var _0x4e5ea3 = _0x339df7.dynCall_viiiiiiiiiii = function () {
      return (_0x4e5ea3 = _0x339df7.dynCall_viiiiiiiiiii = _0x339df7.asm.dynCall_viiiiiiiiiii).apply(null, arguments);
    };
    var _0x518cdf = _0x339df7.dynCall_iijiiii = function () {
      return (_0x518cdf = _0x339df7.dynCall_iijiiii = _0x339df7.asm.dynCall_iijiiii).apply(null, arguments);
    };
    var _0x52568f = _0x339df7.dynCall_jijiii = function () {
      return (_0x52568f = _0x339df7.dynCall_jijiii = _0x339df7.asm.dynCall_jijiii).apply(null, arguments);
    };
    var _0x44f282 = _0x339df7.dynCall_iijiiiiii = function () {
      return (_0x44f282 = _0x339df7.dynCall_iijiiiiii = _0x339df7.asm.dynCall_iijiiiiii).apply(null, arguments);
    };
    var _0x66d1c = _0x339df7.dynCall_iijjiiiiii = function () {
      return (_0x66d1c = _0x339df7.dynCall_iijjiiiiii = _0x339df7.asm.dynCall_iijjiiiiii).apply(null, arguments);
    };
    var _0xbc4370 = _0x339df7.dynCall_iiiijjii = function () {
      return (_0xbc4370 = _0x339df7.dynCall_iiiijjii = _0x339df7.asm.dynCall_iiiijjii).apply(null, arguments);
    };
    var _0x4b9b3a = _0x339df7.dynCall_iijii = function () {
      return (_0x4b9b3a = _0x339df7.dynCall_iijii = _0x339df7.asm.dynCall_iijii).apply(null, arguments);
    };
    var _0x1fbef8 = _0x339df7.dynCall_jidi = function () {
      return (_0x1fbef8 = _0x339df7.dynCall_jidi = _0x339df7.asm.dynCall_jidi).apply(null, arguments);
    };
    var _0x35f20f = _0x339df7.dynCall_vijii = function () {
      return (_0x35f20f = _0x339df7.dynCall_vijii = _0x339df7.asm.dynCall_vijii).apply(null, arguments);
    };
    var _0xcad5e0 = _0x339df7.dynCall_iiiifi = function () {
      return (_0xcad5e0 = _0x339df7.dynCall_iiiifi = _0x339df7.asm.dynCall_iiiifi).apply(null, arguments);
    };
    var _0x144550 = _0x339df7.dynCall_viiiji = function () {
      return (_0x144550 = _0x339df7.dynCall_viiiji = _0x339df7.asm.dynCall_viiiji).apply(null, arguments);
    };
    var _0x124f5c = _0x339df7.dynCall_viiiifi = function () {
      return (_0x124f5c = _0x339df7.dynCall_viiiifi = _0x339df7.asm.dynCall_viiiifi).apply(null, arguments);
    };
    var _0x392c1b = _0x339df7.dynCall_fiiffi = function () {
      return (_0x392c1b = _0x339df7.dynCall_fiiffi = _0x339df7.asm.dynCall_fiiffi).apply(null, arguments);
    };
    var _0x2f90d6 = _0x339df7.dynCall_viiififii = function () {
      return (_0x2f90d6 = _0x339df7.dynCall_viiififii = _0x339df7.asm.dynCall_viiififii).apply(null, arguments);
    };
    var _0x3242ae = _0x339df7.dynCall_fi = function () {
      return (_0x3242ae = _0x339df7.dynCall_fi = _0x339df7.asm.dynCall_fi).apply(null, arguments);
    };
    var _0x594657 = _0x339df7.dynCall_iiifi = function () {
      return (_0x594657 = _0x339df7.dynCall_iiifi = _0x339df7.asm.dynCall_iiifi).apply(null, arguments);
    };
    var _0xe28aa2 = _0x339df7.dynCall_vifii = function () {
      return (_0xe28aa2 = _0x339df7.dynCall_vifii = _0x339df7.asm.dynCall_vifii).apply(null, arguments);
    };
    var _0x1031ec = _0x339df7.dynCall_viiiiiiiiiiii = function () {
      return (_0x1031ec = _0x339df7.dynCall_viiiiiiiiiiii = _0x339df7.asm.dynCall_viiiiiiiiiiii).apply(null, arguments);
    };
    var _0x6b4593 = _0x339df7.dynCall_viiiiiiiiiiiiii = function () {
      return (_0x6b4593 = _0x339df7.dynCall_viiiiiiiiiiiiii = _0x339df7.asm.dynCall_viiiiiiiiiiiiii).apply(null, arguments);
    };
    var _0x290541 = _0x339df7.dynCall_viiiiiiiiiiiiiii = function () {
      return (_0x290541 = _0x339df7.dynCall_viiiiiiiiiiiiiii = _0x339df7.asm.dynCall_viiiiiiiiiiiiiii).apply(null, arguments);
    };
    var _0xfdfb71 = _0x339df7.dynCall_viiiiiiiiiiiiiiii = function () {
      return (_0xfdfb71 = _0x339df7.dynCall_viiiiiiiiiiiiiiii = _0x339df7.asm.dynCall_viiiiiiiiiiiiiiii).apply(null, arguments);
    };
    var _0x2e01c7 = _0x339df7.dynCall_viiiiiiiiiiiiiiiii = function () {
      return (_0x2e01c7 = _0x339df7.dynCall_viiiiiiiiiiiiiiiii = _0x339df7.asm.dynCall_viiiiiiiiiiiiiiiii).apply(null, arguments);
    };
    var _0x86159c = _0x339df7.dynCall_viiiiiiiiiiiiiiiiii = function () {
      return (_0x86159c = _0x339df7.dynCall_viiiiiiiiiiiiiiiiii = _0x339df7.asm.dynCall_viiiiiiiiiiiiiiiiii).apply(null, arguments);
    };
    var _0x1cedd6 = _0x339df7.dynCall_viiidi = function () {
      return (_0x1cedd6 = _0x339df7.dynCall_viiidi = _0x339df7.asm.dynCall_viiidi).apply(null, arguments);
    };
    var _0x4506ba = _0x339df7.dynCall_viiifi = function () {
      return (_0x4506ba = _0x339df7.dynCall_viiifi = _0x339df7.asm.dynCall_viiifi).apply(null, arguments);
    };
    var _0x51f616 = _0x339df7.dynCall_vijijii = function () {
      return (_0x51f616 = _0x339df7.dynCall_vijijii = _0x339df7.asm.dynCall_vijijii).apply(null, arguments);
    };
    var _0x5a4b47 = _0x339df7.dynCall_dji = function () {
      return (_0x5a4b47 = _0x339df7.dynCall_dji = _0x339df7.asm.dynCall_dji).apply(null, arguments);
    };
    var _0x399bad = _0x339df7.dynCall_iijiii = function () {
      return (_0x399bad = _0x339df7.dynCall_iijiii = _0x339df7.asm.dynCall_iijiii).apply(null, arguments);
    };
    var _0x50f78d = _0x339df7.dynCall_jiiijii = function () {
      return (_0x50f78d = _0x339df7.dynCall_jiiijii = _0x339df7.asm.dynCall_jiiijii).apply(null, arguments);
    };
    var _0xadaafa = _0x339df7.dynCall_viiijiii = function () {
      return (_0xadaafa = _0x339df7.dynCall_viiijiii = _0x339df7.asm.dynCall_viiijiii).apply(null, arguments);
    };
    var _0x45e8a2 = _0x339df7.dynCall_viiiiiiiiiiiiiiiiiii = function () {
      return (_0x45e8a2 = _0x339df7.dynCall_viiiiiiiiiiiiiiiiiii = _0x339df7.asm.dynCall_viiiiiiiiiiiiiiiiiii).apply(null, arguments);
    };
    var _0x52de40 = _0x339df7.dynCall_didi = function () {
      return (_0x52de40 = _0x339df7.dynCall_didi = _0x339df7.asm.dynCall_didi).apply(null, arguments);
    };
    var _0xd705ff = _0x339df7.dynCall_iiddi = function () {
      return (_0xd705ff = _0x339df7.dynCall_iiddi = _0x339df7.asm.dynCall_iiddi).apply(null, arguments);
    };
    var _0x39bf12 = _0x339df7.dynCall_diidi = function () {
      return (_0x39bf12 = _0x339df7.dynCall_diidi = _0x339df7.asm.dynCall_diidi).apply(null, arguments);
    };
    var _0x4899c6 = _0x339df7.dynCall_jiiji = function () {
      return (_0x4899c6 = _0x339df7.dynCall_jiiji = _0x339df7.asm.dynCall_jiiji).apply(null, arguments);
    };
    var _0x5aa797 = _0x339df7.dynCall_fiifi = function () {
      return (_0x5aa797 = _0x339df7.dynCall_fiifi = _0x339df7.asm.dynCall_fiifi).apply(null, arguments);
    };
    var _0x3b44de = _0x339df7.dynCall_iiffi = function () {
      return (_0x3b44de = _0x339df7.dynCall_iiffi = _0x339df7.asm.dynCall_iiffi).apply(null, arguments);
    };
    var _0x1d9861 = _0x339df7.dynCall_iijji = function () {
      return (_0x1d9861 = _0x339df7.dynCall_iijji = _0x339df7.asm.dynCall_iijji).apply(null, arguments);
    };
    var _0x2f3b64 = _0x339df7.dynCall_vjjjiiii = function () {
      return (_0x2f3b64 = _0x339df7.dynCall_vjjjiiii = _0x339df7.asm.dynCall_vjjjiiii).apply(null, arguments);
    };
    var _0x1090ff = _0x339df7.dynCall_vjiiiii = function () {
      return (_0x1090ff = _0x339df7.dynCall_vjiiiii = _0x339df7.asm.dynCall_vjiiiii).apply(null, arguments);
    };
    var _0x21840b = _0x339df7.dynCall_jiiiii = function () {
      return (_0x21840b = _0x339df7.dynCall_jiiiii = _0x339df7.asm.dynCall_jiiiii).apply(null, arguments);
    };
    var _0xe24d14 = _0x339df7.dynCall_viffi = function () {
      return (_0xe24d14 = _0x339df7.dynCall_viffi = _0x339df7.asm.dynCall_viffi).apply(null, arguments);
    };
    var _0x2c0e3a = _0x339df7.dynCall_vffi = function () {
      return (_0x2c0e3a = _0x339df7.dynCall_vffi = _0x339df7.asm.dynCall_vffi).apply(null, arguments);
    };
    var _0x5e27b6 = _0x339df7.dynCall_viiifiii = function () {
      return (_0x5e27b6 = _0x339df7.dynCall_viiifiii = _0x339df7.asm.dynCall_viiifiii).apply(null, arguments);
    };
    var _0x5db593 = _0x339df7.dynCall_vifiiiii = function () {
      return (_0x5db593 = _0x339df7.dynCall_vifiiiii = _0x339df7.asm.dynCall_vifiiiii).apply(null, arguments);
    };
    var _0x1749de = _0x339df7.dynCall_viffffiiii = function () {
      return (_0x1749de = _0x339df7.dynCall_viffffiiii = _0x339df7.asm.dynCall_viffffiiii).apply(null, arguments);
    };
    var _0x446397 = _0x339df7.dynCall_vfiiiii = function () {
      return (_0x446397 = _0x339df7.dynCall_vfiiiii = _0x339df7.asm.dynCall_vfiiiii).apply(null, arguments);
    };
    var _0x59d126 = _0x339df7.dynCall_vffffiiii = function () {
      return (_0x59d126 = _0x339df7.dynCall_vffffiiii = _0x339df7.asm.dynCall_vffffiiii).apply(null, arguments);
    };
    var _0x1153e6 = _0x339df7.dynCall_viifffi = function () {
      return (_0x1153e6 = _0x339df7.dynCall_viifffi = _0x339df7.asm.dynCall_viifffi).apply(null, arguments);
    };
    var _0x384296 = _0x339df7.dynCall_iiiiffi = function () {
      return (_0x384296 = _0x339df7.dynCall_iiiiffi = _0x339df7.asm.dynCall_iiiiffi).apply(null, arguments);
    };
    var _0x2d1488 = _0x339df7.dynCall_iiiiiffi = function () {
      return (_0x2d1488 = _0x339df7.dynCall_iiiiiffi = _0x339df7.asm.dynCall_iiiiiffi).apply(null, arguments);
    };
    var _0x55c6e8 = _0x339df7.dynCall_viiffffi = function () {
      return (_0x55c6e8 = _0x339df7.dynCall_viiffffi = _0x339df7.asm.dynCall_viiffffi).apply(null, arguments);
    };
    var _0xb4e331 = _0x339df7.dynCall_viifffffffi = function () {
      return (_0xb4e331 = _0x339df7.dynCall_viifffffffi = _0x339df7.asm.dynCall_viifffffffi).apply(null, arguments);
    };
    var _0x3bc239 = _0x339df7.dynCall_viifffffffffi = function () {
      return (_0x3bc239 = _0x339df7.dynCall_viifffffffffi = _0x339df7.asm.dynCall_viifffffffffi).apply(null, arguments);
    };
    var _0x56c626 = _0x339df7.dynCall_viiiffi = function () {
      return (_0x56c626 = _0x339df7.dynCall_viiiffi = _0x339df7.asm.dynCall_viiiffi).apply(null, arguments);
    };
    var _0xb4fee1 = _0x339df7.dynCall_viiiiffi = function () {
      return (_0xb4fee1 = _0x339df7.dynCall_viiiiffi = _0x339df7.asm.dynCall_viiiiffi).apply(null, arguments);
    };
    var _0x4f281a = _0x339df7.dynCall_viiiiifi = function () {
      return (_0x4f281a = _0x339df7.dynCall_viiiiifi = _0x339df7.asm.dynCall_viiiiifi).apply(null, arguments);
    };
    var _0x244a3a = _0x339df7.dynCall_viiifii = function () {
      return (_0x244a3a = _0x339df7.dynCall_viiifii = _0x339df7.asm.dynCall_viiifii).apply(null, arguments);
    };
    var _0x4a83a8 = _0x339df7.dynCall_ffi = function () {
      return (_0x4a83a8 = _0x339df7.dynCall_ffi = _0x339df7.asm.dynCall_ffi).apply(null, arguments);
    };
    var _0x2550db = _0x339df7.dynCall_fiiffffi = function () {
      return (_0x2550db = _0x339df7.dynCall_fiiffffi = _0x339df7.asm.dynCall_fiiffffi).apply(null, arguments);
    };
    var _0x4bd6cb = _0x339df7.dynCall_viffffi = function () {
      return (_0x4bd6cb = _0x339df7.dynCall_viffffi = _0x339df7.asm.dynCall_viffffi).apply(null, arguments);
    };
    var _0x23a312 = _0x339df7.dynCall_viiiffffi = function () {
      return (_0x23a312 = _0x339df7.dynCall_viiiffffi = _0x339df7.asm.dynCall_viiiffffi).apply(null, arguments);
    };
    var _0x1ee2fe = _0x339df7.dynCall_viffffii = function () {
      return (_0x1ee2fe = _0x339df7.dynCall_viffffii = _0x339df7.asm.dynCall_viffffii).apply(null, arguments);
    };
    var _0x1d0cdd = _0x339df7.dynCall_viffii = function () {
      return (_0x1d0cdd = _0x339df7.dynCall_viffii = _0x339df7.asm.dynCall_viffii).apply(null, arguments);
    };
    var _0x35c1d6 = _0x339df7.dynCall_vifffii = function () {
      return (_0x35c1d6 = _0x339df7.dynCall_vifffii = _0x339df7.asm.dynCall_vifffii).apply(null, arguments);
    };
    var _0x17fc15 = _0x339df7.dynCall_viiiiiiifi = function () {
      return (_0x17fc15 = _0x339df7.dynCall_viiiiiiifi = _0x339df7.asm.dynCall_viiiiiiifi).apply(null, arguments);
    };
    var _0x1f490e = _0x339df7.dynCall_vifffffii = function () {
      return (_0x1f490e = _0x339df7.dynCall_vifffffii = _0x339df7.asm.dynCall_vifffffii).apply(null, arguments);
    };
    var _0x5881a8 = _0x339df7.dynCall_viiffiffi = function () {
      return (_0x5881a8 = _0x339df7.dynCall_viiffiffi = _0x339df7.asm.dynCall_viiffiffi).apply(null, arguments);
    };
    var _0x5b52eb = _0x339df7.dynCall_viiffifi = function () {
      return (_0x5b52eb = _0x339df7.dynCall_viiffifi = _0x339df7.asm.dynCall_viiffifi).apply(null, arguments);
    };
    var _0x30c89f = _0x339df7.dynCall_viiffii = function () {
      return (_0x30c89f = _0x339df7.dynCall_viiffii = _0x339df7.asm.dynCall_viiffii).apply(null, arguments);
    };
    var _0x3d99d1 = _0x339df7.dynCall_viifffiffi = function () {
      return (_0x3d99d1 = _0x339df7.dynCall_viifffiffi = _0x339df7.asm.dynCall_viifffiffi).apply(null, arguments);
    };
    var _0x16fd6f = _0x339df7.dynCall_viifffifi = function () {
      return (_0x16fd6f = _0x339df7.dynCall_viifffifi = _0x339df7.asm.dynCall_viifffifi).apply(null, arguments);
    };
    var _0x29b831 = _0x339df7.dynCall_viifffii = function () {
      return (_0x29b831 = _0x339df7.dynCall_viifffii = _0x339df7.asm.dynCall_viifffii).apply(null, arguments);
    };
    var _0x291f95 = _0x339df7.dynCall_viiffffiffi = function () {
      return (_0x291f95 = _0x339df7.dynCall_viiffffiffi = _0x339df7.asm.dynCall_viiffffiffi).apply(null, arguments);
    };
    var _0x3d01aa = _0x339df7.dynCall_viiffffifi = function () {
      return (_0x3d01aa = _0x339df7.dynCall_viiffffifi = _0x339df7.asm.dynCall_viiffffifi).apply(null, arguments);
    };
    var _0x5c0ca3 = _0x339df7.dynCall_viiffffii = function () {
      return (_0x5c0ca3 = _0x339df7.dynCall_viiffffii = _0x339df7.asm.dynCall_viiffffii).apply(null, arguments);
    };
    var _0x4d32ac = _0x339df7.dynCall_iififfi = function () {
      return (_0x4d32ac = _0x339df7.dynCall_iififfi = _0x339df7.asm.dynCall_iififfi).apply(null, arguments);
    };
    var _0x37ff61 = _0x339df7.dynCall_viiiiiiiffiii = function () {
      return (_0x37ff61 = _0x339df7.dynCall_viiiiiiiffiii = _0x339df7.asm.dynCall_viiiiiiiffiii).apply(null, arguments);
    };
    var _0x3e7f73 = _0x339df7.dynCall_iiiiffii = function () {
      return (_0x3e7f73 = _0x339df7.dynCall_iiiiffii = _0x339df7.asm.dynCall_iiiiffii).apply(null, arguments);
    };
    var _0x3e7660 = _0x339df7.dynCall_iifiii = function () {
      return (_0x3e7660 = _0x339df7.dynCall_iifiii = _0x339df7.asm.dynCall_iifiii).apply(null, arguments);
    };
    var _0x2829ac = _0x339df7.dynCall_iiffiii = function () {
      return (_0x2829ac = _0x339df7.dynCall_iiffiii = _0x339df7.asm.dynCall_iiffiii).apply(null, arguments);
    };
    var _0x17cae3 = _0x339df7.dynCall_iifffiii = function () {
      return (_0x17cae3 = _0x339df7.dynCall_iifffiii = _0x339df7.asm.dynCall_iifffiii).apply(null, arguments);
    };
    var _0x2df78f = _0x339df7.dynCall_vfi = function () {
      return (_0x2df78f = _0x339df7.dynCall_vfi = _0x339df7.asm.dynCall_vfi).apply(null, arguments);
    };
    var _0x3d7b7e = _0x339df7.dynCall_ffffi = function () {
      return (_0x3d7b7e = _0x339df7.dynCall_ffffi = _0x339df7.asm.dynCall_ffffi).apply(null, arguments);
    };
    var _0x3e59bf = _0x339df7.dynCall_ffffffi = function () {
      return (_0x3e59bf = _0x339df7.dynCall_ffffffi = _0x339df7.asm.dynCall_ffffffi).apply(null, arguments);
    };
    var _0x19aeef = _0x339df7.dynCall_ffffffffi = function () {
      return (_0x19aeef = _0x339df7.dynCall_ffffffffi = _0x339df7.asm.dynCall_ffffffffi).apply(null, arguments);
    };
    var _0xc178b5 = _0x339df7.dynCall_fiifffi = function () {
      return (_0xc178b5 = _0x339df7.dynCall_fiifffi = _0x339df7.asm.dynCall_fiifffi).apply(null, arguments);
    };
    var _0x273d27 = _0x339df7.dynCall_fffii = function () {
      return (_0x273d27 = _0x339df7.dynCall_fffii = _0x339df7.asm.dynCall_fffii).apply(null, arguments);
    };
    var _0x1da81d = _0x339df7.dynCall_vifffi = function () {
      return (_0x1da81d = _0x339df7.dynCall_vifffi = _0x339df7.asm.dynCall_vifffi).apply(null, arguments);
    };
    var _0x363c7d = _0x339df7.dynCall_viffiii = function () {
      return (_0x363c7d = _0x339df7.dynCall_viffiii = _0x339df7.asm.dynCall_viffiii).apply(null, arguments);
    };
    var _0x524e2e = _0x339df7.dynCall_iiiifffii = function () {
      return (_0x524e2e = _0x339df7.dynCall_iiiifffii = _0x339df7.asm.dynCall_iiiifffii).apply(null, arguments);
    };
    var _0x5ec273 = _0x339df7.dynCall_fiiiifffi = function () {
      return (_0x5ec273 = _0x339df7.dynCall_fiiiifffi = _0x339df7.asm.dynCall_fiiiifffi).apply(null, arguments);
    };
    var _0x374c58 = _0x339df7.dynCall_viifffffi = function () {
      return (_0x374c58 = _0x339df7.dynCall_viifffffi = _0x339df7.asm.dynCall_viifffffi).apply(null, arguments);
    };
    var _0x346ae4 = _0x339df7.dynCall_fiffii = function () {
      return (_0x346ae4 = _0x339df7.dynCall_fiffii = _0x339df7.asm.dynCall_fiffii).apply(null, arguments);
    };
    var _0x20391d = _0x339df7.dynCall_viiiffiii = function () {
      return (_0x20391d = _0x339df7.dynCall_viiiffiii = _0x339df7.asm.dynCall_viiiffiii).apply(null, arguments);
    };
    var _0x28246c = _0x339df7.dynCall_fiiiffii = function () {
      return (_0x28246c = _0x339df7.dynCall_fiiiffii = _0x339df7.asm.dynCall_fiiiffii).apply(null, arguments);
    };
    var _0x4ea636 = _0x339df7.dynCall_fiiiiiii = function () {
      return (_0x4ea636 = _0x339df7.dynCall_fiiiiiii = _0x339df7.asm.dynCall_fiiiiiii).apply(null, arguments);
    };
    var _0x496d90 = _0x339df7.dynCall_vijijijii = function () {
      return (_0x496d90 = _0x339df7.dynCall_vijijijii = _0x339df7.asm.dynCall_vijijijii).apply(null, arguments);
    };
    var _0x57f594 = _0x339df7.dynCall_iiidiiii = function () {
      return (_0x57f594 = _0x339df7.dynCall_iiidiiii = _0x339df7.asm.dynCall_iiidiiii).apply(null, arguments);
    };
    var _0x543863 = _0x339df7.dynCall_viiiijii = function () {
      return (_0x543863 = _0x339df7.dynCall_viiiijii = _0x339df7.asm.dynCall_viiiijii).apply(null, arguments);
    };
    var _0x5a15ec = _0x339df7.dynCall_iijiiiii = function () {
      return (_0x5a15ec = _0x339df7.dynCall_iijiiiii = _0x339df7.asm.dynCall_iijiiiii).apply(null, arguments);
    };
    var _0x2e78b6 = _0x339df7.dynCall_iijiiiiiiii = function () {
      return (_0x2e78b6 = _0x339df7.dynCall_iijiiiiiiii = _0x339df7.asm.dynCall_iijiiiiiiii).apply(null, arguments);
    };
    var _0x281850 = _0x339df7.dynCall_viiiijiiiii = function () {
      return (_0x281850 = _0x339df7.dynCall_viiiijiiiii = _0x339df7.asm.dynCall_viiiijiiiii).apply(null, arguments);
    };
    var _0x55feba = _0x339df7.dynCall_iiiiiiiiiii = function () {
      return (_0x55feba = _0x339df7.dynCall_iiiiiiiiiii = _0x339df7.asm.dynCall_iiiiiiiiiii).apply(null, arguments);
    };
    var _0x252d19 = _0x339df7.dynCall_vidii = function () {
      return (_0x252d19 = _0x339df7.dynCall_vidii = _0x339df7.asm.dynCall_vidii).apply(null, arguments);
    };
    var _0x16a7f0 = _0x339df7.dynCall_viiidiiiii = function () {
      return (_0x16a7f0 = _0x339df7.dynCall_viiidiiiii = _0x339df7.asm.dynCall_viiidiiiii).apply(null, arguments);
    };
    var _0x4e770c = _0x339df7.dynCall_vifiiii = function () {
      return (_0x4e770c = _0x339df7.dynCall_vifiiii = _0x339df7.asm.dynCall_vifiiii).apply(null, arguments);
    };
    var _0x4caace = _0x339df7.dynCall_iiiffi = function () {
      return (_0x4caace = _0x339df7.dynCall_iiiffi = _0x339df7.asm.dynCall_iiiffi).apply(null, arguments);
    };
    var _0x2a1648 = _0x339df7.dynCall_iifii = function () {
      return (_0x2a1648 = _0x339df7.dynCall_iifii = _0x339df7.asm.dynCall_iifii).apply(null, arguments);
    };
    var _0x1caa4e = _0x339df7.dynCall_iiffii = function () {
      return (_0x1caa4e = _0x339df7.dynCall_iiffii = _0x339df7.asm.dynCall_iiffii).apply(null, arguments);
    };
    var _0x56d696 = _0x339df7.dynCall_iiifiii = function () {
      return (_0x56d696 = _0x339df7.dynCall_iiifiii = _0x339df7.asm.dynCall_iiifiii).apply(null, arguments);
    };
    var _0x4dceab = _0x339df7.dynCall_iiififii = function () {
      return (_0x4dceab = _0x339df7.dynCall_iiififii = _0x339df7.asm.dynCall_iiififii).apply(null, arguments);
    };
    var _0x1c14ff = _0x339df7.dynCall_iiifiiiii = function () {
      return (_0x1c14ff = _0x339df7.dynCall_iiifiiiii = _0x339df7.asm.dynCall_iiifiiiii).apply(null, arguments);
    };
    var _0x35592f = _0x339df7.dynCall_iiffifiiii = function () {
      return (_0x35592f = _0x339df7.dynCall_iiffifiiii = _0x339df7.asm.dynCall_iiffifiiii).apply(null, arguments);
    };
    var _0x560672 = _0x339df7.dynCall_iifiifiiii = function () {
      return (_0x560672 = _0x339df7.dynCall_iifiifiiii = _0x339df7.asm.dynCall_iifiifiiii).apply(null, arguments);
    };
    var _0x24b6db = _0x339df7.dynCall_iiiifiii = function () {
      return (_0x24b6db = _0x339df7.dynCall_iiiifiii = _0x339df7.asm.dynCall_iiiifiii).apply(null, arguments);
    };
    var _0x16991f = _0x339df7.dynCall_iiifiiii = function () {
      return (_0x16991f = _0x339df7.dynCall_iiifiiii = _0x339df7.asm.dynCall_iiifiiii).apply(null, arguments);
    };
    var _0x318b1d = _0x339df7.dynCall_iiiffiii = function () {
      return (_0x318b1d = _0x339df7.dynCall_iiiffiii = _0x339df7.asm.dynCall_iiiffiii).apply(null, arguments);
    };
    var _0x473ea8 = _0x339df7.dynCall_iiiiifii = function () {
      return (_0x473ea8 = _0x339df7.dynCall_iiiiifii = _0x339df7.asm.dynCall_iiiiifii).apply(null, arguments);
    };
    var _0x1e431f = _0x339df7.dynCall_iifiifffii = function () {
      return (_0x1e431f = _0x339df7.dynCall_iifiifffii = _0x339df7.asm.dynCall_iifiifffii).apply(null, arguments);
    };
    var _0x591183 = _0x339df7.dynCall_fiifii = function () {
      return (_0x591183 = _0x339df7.dynCall_fiifii = _0x339df7.asm.dynCall_fiifii).apply(null, arguments);
    };
    var _0x1d042b = _0x339df7.dynCall_viiiiiifiifiiii = function () {
      return (_0x1d042b = _0x339df7.dynCall_viiiiiifiifiiii = _0x339df7.asm.dynCall_viiiiiifiifiiii).apply(null, arguments);
    };
    var _0x41422b = _0x339df7.dynCall_iiffffiii = function () {
      return (_0x41422b = _0x339df7.dynCall_iiffffiii = _0x339df7.asm.dynCall_iiffffiii).apply(null, arguments);
    };
    var _0x1584ab = _0x339df7.dynCall_iiidfi = function () {
      return (_0x1584ab = _0x339df7.dynCall_iiidfi = _0x339df7.asm.dynCall_iiidfi).apply(null, arguments);
    };
    var _0x338aa5 = _0x339df7.dynCall_iiijfi = function () {
      return (_0x338aa5 = _0x339df7.dynCall_iiijfi = _0x339df7.asm.dynCall_iiijfi).apply(null, arguments);
    };
    var _0x54cef4 = _0x339df7.dynCall_iiiffii = function () {
      return (_0x54cef4 = _0x339df7.dynCall_iiiffii = _0x339df7.asm.dynCall_iiiffii).apply(null, arguments);
    };
    var _0x4f601d = _0x339df7.dynCall_iifffi = function () {
      return (_0x4f601d = _0x339df7.dynCall_iifffi = _0x339df7.asm.dynCall_iifffi).apply(null, arguments);
    };
    var _0x6a371b = _0x339df7.dynCall_iiiififi = function () {
      return (_0x6a371b = _0x339df7.dynCall_iiiififi = _0x339df7.asm.dynCall_iiiififi).apply(null, arguments);
    };
    var _0x3d31b5 = _0x339df7.dynCall_iiiffifiiii = function () {
      return (_0x3d31b5 = _0x339df7.dynCall_iiiffifiiii = _0x339df7.asm.dynCall_iiiffifiiii).apply(null, arguments);
    };
    var _0x5d8e45 = _0x339df7.dynCall_iiifiifiii = function () {
      return (_0x5d8e45 = _0x339df7.dynCall_iiifiifiii = _0x339df7.asm.dynCall_iiifiifiii).apply(null, arguments);
    };
    var _0x59f31d = _0x339df7.dynCall_iiifiifiiiii = function () {
      return (_0x59f31d = _0x339df7.dynCall_iiifiifiiiii = _0x339df7.asm.dynCall_iiifiifiiiii).apply(null, arguments);
    };
    var _0x4a2006 = _0x339df7.dynCall_ifii = function () {
      return (_0x4a2006 = _0x339df7.dynCall_ifii = _0x339df7.asm.dynCall_ifii).apply(null, arguments);
    };
    var _0x4e41ce = _0x339df7.dynCall_ifffii = function () {
      return (_0x4e41ce = _0x339df7.dynCall_ifffii = _0x339df7.asm.dynCall_ifffii).apply(null, arguments);
    };
    var _0x496843 = _0x339df7.dynCall_ffffii = function () {
      return (_0x496843 = _0x339df7.dynCall_ffffii = _0x339df7.asm.dynCall_ffffii).apply(null, arguments);
    };
    var _0x22dc22 = _0x339df7.dynCall_ffffifi = function () {
      return (_0x22dc22 = _0x339df7.dynCall_ffffifi = _0x339df7.asm.dynCall_ffffifi).apply(null, arguments);
    };
    var _0x5ebb12 = _0x339df7.dynCall_ffffiffi = function () {
      return (_0x5ebb12 = _0x339df7.dynCall_ffffiffi = _0x339df7.asm.dynCall_ffffiffi).apply(null, arguments);
    };
    var _0x563b75 = _0x339df7.dynCall_viiififi = function () {
      return (_0x563b75 = _0x339df7.dynCall_viiififi = _0x339df7.asm.dynCall_viiififi).apply(null, arguments);
    };
    var _0x34ac2a = _0x339df7.dynCall_viiififfi = function () {
      return (_0x34ac2a = _0x339df7.dynCall_viiififfi = _0x339df7.asm.dynCall_viiififfi).apply(null, arguments);
    };
    var _0xa1781d = _0x339df7.dynCall_ifiii = function () {
      return (_0xa1781d = _0x339df7.dynCall_ifiii = _0x339df7.asm.dynCall_ifiii).apply(null, arguments);
    };
    var _0x203ea6 = _0x339df7.dynCall_vifiii = function () {
      return (_0x203ea6 = _0x339df7.dynCall_vifiii = _0x339df7.asm.dynCall_vifiii).apply(null, arguments);
    };
    var _0x17549f = _0x339df7.dynCall_iifiiiiii = function () {
      return (_0x17549f = _0x339df7.dynCall_iifiiiiii = _0x339df7.asm.dynCall_iifiiiiii).apply(null, arguments);
    };
    var _0x9b748 = _0x339df7.dynCall_iifiiiii = function () {
      return (_0x9b748 = _0x339df7.dynCall_iifiiiii = _0x339df7.asm.dynCall_iifiiiii).apply(null, arguments);
    };
    var _0xe202d1 = _0x339df7.dynCall_iiffiiiii = function () {
      return (_0xe202d1 = _0x339df7.dynCall_iiffiiiii = _0x339df7.asm.dynCall_iiffiiiii).apply(null, arguments);
    };
    var _0x4db3b4 = _0x339df7.dynCall_iiffifiii = function () {
      return (_0x4db3b4 = _0x339df7.dynCall_iiffifiii = _0x339df7.asm.dynCall_iiffifiii).apply(null, arguments);
    };
    var _0x4516b9 = _0x339df7.dynCall_iifiifiii = function () {
      return (_0x4516b9 = _0x339df7.dynCall_iifiifiii = _0x339df7.asm.dynCall_iifiifiii).apply(null, arguments);
    };
    var _0x145097 = _0x339df7.dynCall_iififi = function () {
      return (_0x145097 = _0x339df7.dynCall_iififi = _0x339df7.asm.dynCall_iififi).apply(null, arguments);
    };
    var _0x5749a2 = _0x339df7.dynCall_iiififi = function () {
      return (_0x5749a2 = _0x339df7.dynCall_iiififi = _0x339df7.asm.dynCall_iiififi).apply(null, arguments);
    };
    var _0x3a231e = _0x339df7.dynCall_iiiiifiiii = function () {
      return (_0x3a231e = _0x339df7.dynCall_iiiiifiiii = _0x339df7.asm.dynCall_iiiiifiiii).apply(null, arguments);
    };
    var _0x22f45f = _0x339df7.dynCall_viidiii = function () {
      return (_0x22f45f = _0x339df7.dynCall_viidiii = _0x339df7.asm.dynCall_viidiii).apply(null, arguments);
    };
    var _0x4dc703 = _0x339df7.dynCall_fiifdi = function () {
      return (_0x4dc703 = _0x339df7.dynCall_fiifdi = _0x339df7.asm.dynCall_fiifdi).apply(null, arguments);
    };
    var _0x19564e = _0x339df7.dynCall_viiiiiifddfiiii = function () {
      return (_0x19564e = _0x339df7.dynCall_viiiiiifddfiiii = _0x339df7.asm.dynCall_viiiiiifddfiiii).apply(null, arguments);
    };
    var _0x51b9a7 = _0x339df7.dynCall_fiifji = function () {
      return (_0x51b9a7 = _0x339df7.dynCall_fiifji = _0x339df7.asm.dynCall_fiifji).apply(null, arguments);
    };
    var _0x3a1734 = _0x339df7.dynCall_viiiiiifjjfiiii = function () {
      return (_0x3a1734 = _0x339df7.dynCall_viiiiiifjjfiiii = _0x339df7.asm.dynCall_viiiiiifjjfiiii).apply(null, arguments);
    };
    var _0x1c2535 = _0x339df7.dynCall_viiiifiii = function () {
      return (_0x1c2535 = _0x339df7.dynCall_viiiifiii = _0x339df7.asm.dynCall_viiiifiii).apply(null, arguments);
    };
    var _0x32cf64 = _0x339df7.dynCall_viifiii = function () {
      return (_0x32cf64 = _0x339df7.dynCall_viifiii = _0x339df7.asm.dynCall_viifiii).apply(null, arguments);
    };
    var _0x1b1cb7 = _0x339df7.dynCall_viiiiiiffffiiii = function () {
      return (_0x1b1cb7 = _0x339df7.dynCall_viiiiiiffffiiii = _0x339df7.asm.dynCall_viiiiiiffffiiii).apply(null, arguments);
    };
    var _0x44d874 = _0x339df7.dynCall_viifiiii = function () {
      return (_0x44d874 = _0x339df7.dynCall_viifiiii = _0x339df7.asm.dynCall_viifiiii).apply(null, arguments);
    };
    var _0x508596 = _0x339df7.dynCall_iiiiifiii = function () {
      return (_0x508596 = _0x339df7.dynCall_iiiiifiii = _0x339df7.asm.dynCall_iiiiifiii).apply(null, arguments);
    };
    var _0x413ebd = _0x339df7.dynCall_fffffi = function () {
      return (_0x413ebd = _0x339df7.dynCall_fffffi = _0x339df7.asm.dynCall_fffffi).apply(null, arguments);
    };
    var _0x3af328 = _0x339df7.dynCall_fffifffi = function () {
      return (_0x3af328 = _0x339df7.dynCall_fffifffi = _0x339df7.asm.dynCall_fffifffi).apply(null, arguments);
    };
    var _0x1fd809 = _0x339df7.dynCall_iffi = function () {
      return (_0x1fd809 = _0x339df7.dynCall_iffi = _0x339df7.asm.dynCall_iffi).apply(null, arguments);
    };
    var _0x5c7211 = _0x339df7.dynCall_iiiiiiiiiiii = function () {
      return (_0x5c7211 = _0x339df7.dynCall_iiiiiiiiiiii = _0x339df7.asm.dynCall_iiiiiiiiiiii).apply(null, arguments);
    };
    var _0x3b850d = _0x339df7.dynCall_iiiiiiiiiiiii = function () {
      return (_0x3b850d = _0x339df7.dynCall_iiiiiiiiiiiii = _0x339df7.asm.dynCall_iiiiiiiiiiiii).apply(null, arguments);
    };
    var _0x66510d = _0x339df7.dynCall_iiiiiiiiiiiiii = function () {
      return (_0x66510d = _0x339df7.dynCall_iiiiiiiiiiiiii = _0x339df7.asm.dynCall_iiiiiiiiiiiiii).apply(null, arguments);
    };
    var _0x3b5d44 = _0x339df7.dynCall_iiiiiiiiiiiiiii = function () {
      return (_0x3b5d44 = _0x339df7.dynCall_iiiiiiiiiiiiiii = _0x339df7.asm.dynCall_iiiiiiiiiiiiiii).apply(null, arguments);
    };
    var _0x4ecf07 = _0x339df7.dynCall_iiiiiiiiiiiiiiii = function () {
      return (_0x4ecf07 = _0x339df7.dynCall_iiiiiiiiiiiiiiii = _0x339df7.asm.dynCall_iiiiiiiiiiiiiiii).apply(null, arguments);
    };
    var _0x5d626c = _0x339df7.dynCall_iiiiiiiiiiiiiiiii = function () {
      return (_0x5d626c = _0x339df7.dynCall_iiiiiiiiiiiiiiiii = _0x339df7.asm.dynCall_iiiiiiiiiiiiiiiii).apply(null, arguments);
    };
    var _0x3cb8bd = _0x339df7.dynCall_ifiiii = function () {
      return (_0x3cb8bd = _0x339df7.dynCall_ifiiii = _0x339df7.asm.dynCall_ifiiii).apply(null, arguments);
    };
    var _0x1c0967 = _0x339df7.dynCall_idiiiii = function () {
      return (_0x1c0967 = _0x339df7.dynCall_idiiiii = _0x339df7.asm.dynCall_idiiiii).apply(null, arguments);
    };
    var _0x1cb0f4 = _0x339df7.dynCall_idiiii = function () {
      return (_0x1cb0f4 = _0x339df7.dynCall_idiiii = _0x339df7.asm.dynCall_idiiii).apply(null, arguments);
    };
    var _0xd6dd9f = _0x339df7.dynCall_idii = function () {
      return (_0xd6dd9f = _0x339df7.dynCall_idii = _0x339df7.asm.dynCall_idii).apply(null, arguments);
    };
    var _0x30cc4c = _0x339df7.dynCall_iiijiiii = function () {
      return (_0x30cc4c = _0x339df7.dynCall_iiijiiii = _0x339df7.asm.dynCall_iiijiiii).apply(null, arguments);
    };
    var _0xbd2420 = _0x339df7.dynCall_vjiiii = function () {
      return (_0xbd2420 = _0x339df7.dynCall_vjiiii = _0x339df7.asm.dynCall_vjiiii).apply(null, arguments);
    };
    var _0xa505ff = _0x339df7.dynCall_iddi = function () {
      return (_0xa505ff = _0x339df7.dynCall_iddi = _0x339df7.asm.dynCall_iddi).apply(null, arguments);
    };
    var _0x12bdc6 = _0x339df7.dynCall_viifiifi = function () {
      return (_0x12bdc6 = _0x339df7.dynCall_viifiifi = _0x339df7.asm.dynCall_viifiifi).apply(null, arguments);
    };
    var _0x7bf4f9 = _0x339df7.dynCall_vifiifi = function () {
      return (_0x7bf4f9 = _0x339df7.dynCall_vifiifi = _0x339df7.asm.dynCall_vifiifi).apply(null, arguments);
    };
    var _0x491a02 = _0x339df7.dynCall_viddfffi = function () {
      return (_0x491a02 = _0x339df7.dynCall_viddfffi = _0x339df7.asm.dynCall_viddfffi).apply(null, arguments);
    };
    var _0x1108e2 = _0x339df7.dynCall_viidfffi = function () {
      return (_0x1108e2 = _0x339df7.dynCall_viidfffi = _0x339df7.asm.dynCall_viidfffi).apply(null, arguments);
    };
    var _0x41ace6 = _0x339df7.dynCall_vidifffi = function () {
      return (_0x41ace6 = _0x339df7.dynCall_vidifffi = _0x339df7.asm.dynCall_vidifffi).apply(null, arguments);
    };
    var _0x3c96e1 = _0x339df7.dynCall_viiifffi = function () {
      return (_0x3c96e1 = _0x339df7.dynCall_viiifffi = _0x339df7.asm.dynCall_viiifffi).apply(null, arguments);
    };
    var _0x18424a = _0x339df7.dynCall_viddi = function () {
      return (_0x18424a = _0x339df7.dynCall_viddi = _0x339df7.asm.dynCall_viddi).apply(null, arguments);
    };
    var _0x2409a6 = _0x339df7.dynCall_ffii = function () {
      return (_0x2409a6 = _0x339df7.dynCall_ffii = _0x339df7.asm.dynCall_ffii).apply(null, arguments);
    };
    var _0x51d670 = _0x339df7.dynCall_fiiiii = function () {
      return (_0x51d670 = _0x339df7.dynCall_fiiiii = _0x339df7.asm.dynCall_fiiiii).apply(null, arguments);
    };
    var _0x4c38b7 = _0x339df7.dynCall_ddddi = function () {
      return (_0x4c38b7 = _0x339df7.dynCall_ddddi = _0x339df7.asm.dynCall_ddddi).apply(null, arguments);
    };
    var _0x5589c4 = _0x339df7.dynCall_ddi = function () {
      return (_0x5589c4 = _0x339df7.dynCall_ddi = _0x339df7.asm.dynCall_ddi).apply(null, arguments);
    };
    var _0x22acde = _0x339df7.dynCall_viiijiiii = function () {
      return (_0x22acde = _0x339df7.dynCall_viiijiiii = _0x339df7.asm.dynCall_viiijiiii).apply(null, arguments);
    };
    var _0x3f0fc5 = _0x339df7.dynCall_iiiiiji = function () {
      return (_0x3f0fc5 = _0x339df7.dynCall_iiiiiji = _0x339df7.asm.dynCall_iiiiiji).apply(null, arguments);
    };
    var _0x25de3d = _0x339df7.dynCall_viiijii = function () {
      return (_0x25de3d = _0x339df7.dynCall_viiijii = _0x339df7.asm.dynCall_viiijii).apply(null, arguments);
    };
    var _0x56a3e1 = _0x339df7.dynCall_viiiiiji = function () {
      return (_0x56a3e1 = _0x339df7.dynCall_viiiiiji = _0x339df7.asm.dynCall_viiiiiji).apply(null, arguments);
    };
    var _0x234b62 = _0x339df7.dynCall_ijii = function () {
      return (_0x234b62 = _0x339df7.dynCall_ijii = _0x339df7.asm.dynCall_ijii).apply(null, arguments);
    };
    var _0x4019a3 = _0x339df7.dynCall_ijjiiii = function () {
      return (_0x4019a3 = _0x339df7.dynCall_ijjiiii = _0x339df7.asm.dynCall_ijjiiii).apply(null, arguments);
    };
    var _0x1e05c1 = _0x339df7.dynCall_vdiiiii = function () {
      return (_0x1e05c1 = _0x339df7.dynCall_vdiiiii = _0x339df7.asm.dynCall_vdiiiii).apply(null, arguments);
    };
    var _0x4f7d71 = _0x339df7.dynCall_diiji = function () {
      return (_0x4f7d71 = _0x339df7.dynCall_diiji = _0x339df7.asm.dynCall_diiji).apply(null, arguments);
    };
    var _0x2fea63 = _0x339df7.dynCall_vjiiiiiiii = function () {
      return (_0x2fea63 = _0x339df7.dynCall_vjiiiiiiii = _0x339df7.asm.dynCall_vjiiiiiiii).apply(null, arguments);
    };
    var _0x3613f4 = _0x339df7.dynCall_vjiiiiiii = function () {
      return (_0x3613f4 = _0x339df7.dynCall_vjiiiiiii = _0x339df7.asm.dynCall_vjiiiiiii).apply(null, arguments);
    };
    var _0x515445 = _0x339df7.dynCall_ijiiii = function () {
      return (_0x515445 = _0x339df7.dynCall_ijiiii = _0x339df7.asm.dynCall_ijiiii).apply(null, arguments);
    };
    var _0x278d7b = _0x339df7.dynCall_iidii = function () {
      return (_0x278d7b = _0x339df7.dynCall_iidii = _0x339df7.asm.dynCall_iidii).apply(null, arguments);
    };
    var _0x274694 = _0x339df7.dynCall_iidiii = function () {
      return (_0x274694 = _0x339df7.dynCall_iidiii = _0x339df7.asm.dynCall_iidiii).apply(null, arguments);
    };
    var _0x4bddd8 = _0x339df7.dynCall_diji = function () {
      return (_0x4bddd8 = _0x339df7.dynCall_diji = _0x339df7.asm.dynCall_diji).apply(null, arguments);
    };
    var _0xb6b4a9 = _0x339df7.dynCall_fidi = function () {
      return (_0xb6b4a9 = _0x339df7.dynCall_fidi = _0x339df7.asm.dynCall_fidi).apply(null, arguments);
    };
    var _0x41d204 = _0x339df7.dynCall_vifffffi = function () {
      return (_0x41d204 = _0x339df7.dynCall_vifffffi = _0x339df7.asm.dynCall_vifffffi).apply(null, arguments);
    };
    var _0x15a005 = _0x339df7.dynCall_viiiiiffii = function () {
      return (_0x15a005 = _0x339df7.dynCall_viiiiiffii = _0x339df7.asm.dynCall_viiiiiffii).apply(null, arguments);
    };
    var _0x513ddf = _0x339df7.dynCall_viiiiiffi = function () {
      return (_0x513ddf = _0x339df7.dynCall_viiiiiffi = _0x339df7.asm.dynCall_viiiiiffi).apply(null, arguments);
    };
    var _0xa0d06d = _0x339df7.dynCall_viififi = function () {
      return (_0xa0d06d = _0x339df7.dynCall_viififi = _0x339df7.asm.dynCall_viififi).apply(null, arguments);
    };
    var _0x111eb1 = _0x339df7.dynCall_viififfi = function () {
      return (_0x111eb1 = _0x339df7.dynCall_viififfi = _0x339df7.asm.dynCall_viififfi).apply(null, arguments);
    };
    var _0xfc7b3 = _0x339df7.dynCall_ijjiii = function () {
      return (_0xfc7b3 = _0x339df7.dynCall_ijjiii = _0x339df7.asm.dynCall_ijjiii).apply(null, arguments);
    };
    var _0x269f58 = _0x339df7.dynCall_iffffi = function () {
      return (_0x269f58 = _0x339df7.dynCall_iffffi = _0x339df7.asm.dynCall_iffffi).apply(null, arguments);
    };
    var _0x50093f = _0x339df7.dynCall_diiiii = function () {
      return (_0x50093f = _0x339df7.dynCall_diiiii = _0x339df7.asm.dynCall_diiiii).apply(null, arguments);
    };
    var _0x5bba09 = _0x339df7.dynCall_vijji = function () {
      return (_0x5bba09 = _0x339df7.dynCall_vijji = _0x339df7.asm.dynCall_vijji).apply(null, arguments);
    };
    var _0x59a662 = _0x339df7.dynCall_vfffi = function () {
      return (_0x59a662 = _0x339df7.dynCall_vfffi = _0x339df7.asm.dynCall_vfffi).apply(null, arguments);
    };
    var _0x531608 = _0x339df7.dynCall_vffffi = function () {
      return (_0x531608 = _0x339df7.dynCall_vffffi = _0x339df7.asm.dynCall_vffffi).apply(null, arguments);
    };
    var _0x24ee8b = _0x339df7.dynCall_viiiffii = function () {
      return (_0x24ee8b = _0x339df7.dynCall_viiiffii = _0x339df7.asm.dynCall_viiiffii).apply(null, arguments);
    };
    var _0x11317b = _0x339df7.dynCall_viffffffi = function () {
      return (_0x11317b = _0x339df7.dynCall_viffffffi = _0x339df7.asm.dynCall_viffffffi).apply(null, arguments);
    };
    var _0x42db73 = _0x339df7.dynCall_vffffffii = function () {
      return (_0x42db73 = _0x339df7.dynCall_vffffffii = _0x339df7.asm.dynCall_vffffffii).apply(null, arguments);
    };
    var _0x42b10a = _0x339df7.dynCall_viiiifffi = function () {
      return (_0x42b10a = _0x339df7.dynCall_viiiifffi = _0x339df7.asm.dynCall_viiiifffi).apply(null, arguments);
    };
    var _0x539c54 = _0x339df7.dynCall_vfiii = function () {
      return (_0x539c54 = _0x339df7.dynCall_vfiii = _0x339df7.asm.dynCall_vfiii).apply(null, arguments);
    };
    var _0x52809b = _0x339df7.dynCall_fffifi = function () {
      return (_0x52809b = _0x339df7.dynCall_fffifi = _0x339df7.asm.dynCall_fffifi).apply(null, arguments);
    };
    var _0x88b4b3 = _0x339df7.dynCall_fdi = function () {
      return (_0x88b4b3 = _0x339df7.dynCall_fdi = _0x339df7.asm.dynCall_fdi).apply(null, arguments);
    };
    var _0x3d347b = _0x339df7.dynCall_vfii = function () {
      return (_0x3d347b = _0x339df7.dynCall_vfii = _0x339df7.asm.dynCall_vfii).apply(null, arguments);
    };
    var _0x23fd5f = _0x339df7.dynCall_jjjji = function () {
      return (_0x23fd5f = _0x339df7.dynCall_jjjji = _0x339df7.asm.dynCall_jjjji).apply(null, arguments);
    };
    var _0x2c3a0b = _0x339df7.dynCall_iiiifiiiiii = function () {
      return (_0x2c3a0b = _0x339df7.dynCall_iiiifiiiiii = _0x339df7.asm.dynCall_iiiifiiiiii).apply(null, arguments);
    };
    var _0x2ee5da = _0x339df7.dynCall_iiiifiiiii = function () {
      return (_0x2ee5da = _0x339df7.dynCall_iiiifiiiii = _0x339df7.asm.dynCall_iiiifiiiii).apply(null, arguments);
    };
    var _0x6d7b13 = _0x339df7.dynCall_iiiifiiii = function () {
      return (_0x6d7b13 = _0x339df7.dynCall_iiiifiiii = _0x339df7.asm.dynCall_iiiifiiii).apply(null, arguments);
    };
    var _0x1c6bf8 = _0x339df7.dynCall_vijjii = function () {
      return (_0x1c6bf8 = _0x339df7.dynCall_vijjii = _0x339df7.asm.dynCall_vijjii).apply(null, arguments);
    };
    var _0x31c159 = _0x339df7.dynCall_viiiiiiiijijiii = function () {
      return (_0x31c159 = _0x339df7.dynCall_viiiiiiiijijiii = _0x339df7.asm.dynCall_viiiiiiiijijiii).apply(null, arguments);
    };
    var _0x44f50f = _0x339df7.dynCall_viijijiii = function () {
      return (_0x44f50f = _0x339df7.dynCall_viijijiii = _0x339df7.asm.dynCall_viijijiii).apply(null, arguments);
    };
    var _0x453cae = _0x339df7.dynCall_viiiififfi = function () {
      return (_0x453cae = _0x339df7.dynCall_viiiififfi = _0x339df7.asm.dynCall_viiiififfi).apply(null, arguments);
    };
    var _0x4554fc = _0x339df7.dynCall_viiiifiifi = function () {
      return (_0x4554fc = _0x339df7.dynCall_viiiifiifi = _0x339df7.asm.dynCall_viiiifiifi).apply(null, arguments);
    };
    var _0x20c7de = _0x339df7.dynCall_viiiifiiii = function () {
      return (_0x20c7de = _0x339df7.dynCall_viiiifiiii = _0x339df7.asm.dynCall_viiiifiiii).apply(null, arguments);
    };
    var _0x161bc5 = _0x339df7.dynCall_viiiifiiiii = function () {
      return (_0x161bc5 = _0x339df7.dynCall_viiiifiiiii = _0x339df7.asm.dynCall_viiiifiiiii).apply(null, arguments);
    };
    var _0x3859f2 = _0x339df7.dynCall_viiiifiiiiiiii = function () {
      return (_0x3859f2 = _0x339df7.dynCall_viiiifiiiiiiii = _0x339df7.asm.dynCall_viiiifiiiiiiii).apply(null, arguments);
    };
    var _0x1da4df = _0x339df7.dynCall_viffffiii = function () {
      return (_0x1da4df = _0x339df7.dynCall_viffffiii = _0x339df7.asm.dynCall_viffffiii).apply(null, arguments);
    };
    var _0x2ae9c8 = _0x339df7.dynCall_viififiii = function () {
      return (_0x2ae9c8 = _0x339df7.dynCall_viififiii = _0x339df7.asm.dynCall_viififiii).apply(null, arguments);
    };
    var _0x593d5b = _0x339df7.dynCall_iiiiifi = function () {
      return (_0x593d5b = _0x339df7.dynCall_iiiiifi = _0x339df7.asm.dynCall_iiiiifi).apply(null, arguments);
    };
    var _0x8e23fa = _0x339df7.dynCall_viififii = function () {
      return (_0x8e23fa = _0x339df7.dynCall_viififii = _0x339df7.asm.dynCall_viififii).apply(null, arguments);
    };
    var _0x3c92ac = _0x339df7.dynCall_iifiifii = function () {
      return (_0x3c92ac = _0x339df7.dynCall_iifiifii = _0x339df7.asm.dynCall_iifiifii).apply(null, arguments);
    };
    var _0x5d8046 = _0x339df7.dynCall_vififfii = function () {
      return (_0x5d8046 = _0x339df7.dynCall_vififfii = _0x339df7.asm.dynCall_vififfii).apply(null, arguments);
    };
    var _0x56dafc = _0x339df7.dynCall_vififfi = function () {
      return (_0x56dafc = _0x339df7.dynCall_vififfi = _0x339df7.asm.dynCall_vififfi).apply(null, arguments);
    };
    var _0x2a6abe = _0x339df7.dynCall_iiififiiii = function () {
      return (_0x2a6abe = _0x339df7.dynCall_iiififiiii = _0x339df7.asm.dynCall_iiififiiii).apply(null, arguments);
    };
    var _0x8006bd = _0x339df7.dynCall_viffiiii = function () {
      return (_0x8006bd = _0x339df7.dynCall_viffiiii = _0x339df7.asm.dynCall_viffiiii).apply(null, arguments);
    };
    var _0x22b1aa = _0x339df7.dynCall_viiiffffiiii = function () {
      return (_0x22b1aa = _0x339df7.dynCall_viiiffffiiii = _0x339df7.asm.dynCall_viiiffffiiii).apply(null, arguments);
    };
    var _0x3c58bb = _0x339df7.dynCall_viifffffffiiiii = function () {
      return (_0x3c58bb = _0x339df7.dynCall_viifffffffiiiii = _0x339df7.asm.dynCall_viifffffffiiiii).apply(null, arguments);
    };
    var _0x1f4973 = _0x339df7.dynCall_iiiiiiffiiiiiiiiiffffiiii = function () {
      return (_0x1f4973 = _0x339df7.dynCall_iiiiiiffiiiiiiiiiffffiiii = _0x339df7.asm.dynCall_iiiiiiffiiiiiiiiiffffiiii).apply(null, arguments);
    };
    var _0x3e4836 = _0x339df7.dynCall_iiiiiiffiiiiiiiiiiiiiii = function () {
      return (_0x3e4836 = _0x339df7.dynCall_iiiiiiffiiiiiiiiiiiiiii = _0x339df7.asm.dynCall_iiiiiiffiiiiiiiiiiiiiii).apply(null, arguments);
    };
    var _0x39abc7 = _0x339df7.dynCall_vififiii = function () {
      return (_0x39abc7 = _0x339df7.dynCall_vififiii = _0x339df7.asm.dynCall_vififiii).apply(null, arguments);
    };
    var _0x1fc257 = _0x339df7.dynCall_jijji = function () {
      return (_0x1fc257 = _0x339df7.dynCall_jijji = _0x339df7.asm.dynCall_jijji).apply(null, arguments);
    };
    var _0x480a82 = _0x339df7.dynCall_ifffi = function () {
      return (_0x480a82 = _0x339df7.dynCall_ifffi = _0x339df7.asm.dynCall_ifffi).apply(null, arguments);
    };
    var _0x4b246c = _0x339df7.dynCall_fiifiii = function () {
      return (_0x4b246c = _0x339df7.dynCall_fiifiii = _0x339df7.asm.dynCall_fiifiii).apply(null, arguments);
    };
    var _0x490f87 = _0x339df7.dynCall_viffifi = function () {
      return (_0x490f87 = _0x339df7.dynCall_viffifi = _0x339df7.asm.dynCall_viffifi).apply(null, arguments);
    };
    var _0x4b87c2 = _0x339df7.dynCall_fffffffi = function () {
      return (_0x4b87c2 = _0x339df7.dynCall_fffffffi = _0x339df7.asm.dynCall_fffffffi).apply(null, arguments);
    };
    var _0x43a861 = _0x339df7.dynCall_viiiffiiiiiiiii = function () {
      return (_0x43a861 = _0x339df7.dynCall_viiiffiiiiiiiii = _0x339df7.asm.dynCall_viiiffiiiiiiiii).apply(null, arguments);
    };
    var _0xf5558b = _0x339df7.dynCall_viiiffiiiiii = function () {
      return (_0xf5558b = _0x339df7.dynCall_viiiffiiiiii = _0x339df7.asm.dynCall_viiiffiiiiii).apply(null, arguments);
    };
    var _0x2a287c = _0x339df7.dynCall_viiffiiiiiiiiii = function () {
      return (_0x2a287c = _0x339df7.dynCall_viiffiiiiiiiiii = _0x339df7.asm.dynCall_viiffiiiiiiiiii).apply(null, arguments);
    };
    var _0x2ab0de = _0x339df7.dynCall_viiffiiiiiii = function () {
      return (_0x2ab0de = _0x339df7.dynCall_viiffiiiiiii = _0x339df7.asm.dynCall_viiffiiiiiii).apply(null, arguments);
    };
    var _0x51949d = _0x339df7.dynCall_iiiffiiii = function () {
      return (_0x51949d = _0x339df7.dynCall_iiiffiiii = _0x339df7.asm.dynCall_iiiffiiii).apply(null, arguments);
    };
    var _0x3d44dc = _0x339df7.dynCall_iiiiffiiii = function () {
      return (_0x3d44dc = _0x339df7.dynCall_iiiiffiiii = _0x339df7.asm.dynCall_iiiiffiiii).apply(null, arguments);
    };
    var _0x3c7df0 = _0x339df7.dynCall_fiiiffi = function () {
      return (_0x3c7df0 = _0x339df7.dynCall_fiiiffi = _0x339df7.asm.dynCall_fiiiffi).apply(null, arguments);
    };
    var _0x49cdc1 = _0x339df7.dynCall_vjii = function () {
      return (_0x49cdc1 = _0x339df7.dynCall_vjii = _0x339df7.asm.dynCall_vjii).apply(null, arguments);
    };
    var _0x408887 = _0x339df7.dynCall_viiiiiiiijiiii = function () {
      return (_0x408887 = _0x339df7.dynCall_viiiiiiiijiiii = _0x339df7.asm.dynCall_viiiiiiiijiiii).apply(null, arguments);
    };
    var _0x2b7175 = _0x339df7.dynCall_viiiiiifiiiiii = function () {
      return (_0x2b7175 = _0x339df7.dynCall_viiiiiifiiiiii = _0x339df7.asm.dynCall_viiiiiifiiiiii).apply(null, arguments);
    };
    var _0x2b074d = _0x339df7.dynCall_vifiiiiii = function () {
      return (_0x2b074d = _0x339df7.dynCall_vifiiiiii = _0x339df7.asm.dynCall_vifiiiiii).apply(null, arguments);
    };
    var _0x3b3ca5 = _0x339df7.dynCall_fifii = function () {
      return (_0x3b3ca5 = _0x339df7.dynCall_fifii = _0x339df7.asm.dynCall_fifii).apply(null, arguments);
    };
    var _0x21d9f2 = _0x339df7.dynCall_iiidi = function () {
      return (_0x21d9f2 = _0x339df7.dynCall_iiidi = _0x339df7.asm.dynCall_iiidi).apply(null, arguments);
    };
    var _0x490374 = _0x339df7.dynCall_iidiiiii = function () {
      return (_0x490374 = _0x339df7.dynCall_iidiiiii = _0x339df7.asm.dynCall_iidiiiii).apply(null, arguments);
    };
    var _0x457189 = _0x339df7.dynCall_ijiiiiiiiii = function () {
      return (_0x457189 = _0x339df7.dynCall_ijiiiiiiiii = _0x339df7.asm.dynCall_ijiiiiiiiii).apply(null, arguments);
    };
    var _0x5cc428 = _0x339df7.dynCall_jjjii = function () {
      return (_0x5cc428 = _0x339df7.dynCall_jjjii = _0x339df7.asm.dynCall_jjjii).apply(null, arguments);
    };
    var _0x3705c7 = _0x339df7.dynCall_iijjijii = function () {
      return (_0x3705c7 = _0x339df7.dynCall_iijjijii = _0x339df7.asm.dynCall_iijjijii).apply(null, arguments);
    };
    var _0x3c7fe6 = _0x339df7.dynCall_iiiiijji = function () {
      return (_0x3c7fe6 = _0x339df7.dynCall_iiiiijji = _0x339df7.asm.dynCall_iiiiijji).apply(null, arguments);
    };
    var _0xa9769b = _0x339df7.dynCall_jiijii = function () {
      return (_0xa9769b = _0x339df7.dynCall_jiijii = _0x339df7.asm.dynCall_jiijii).apply(null, arguments);
    };
    var _0x73bed4 = _0x339df7.dynCall_viijiiiiii = function () {
      return (_0x73bed4 = _0x339df7.dynCall_viijiiiiii = _0x339df7.asm.dynCall_viijiiiiii).apply(null, arguments);
    };
    var _0x399f6b = _0x339df7.dynCall_jiidi = function () {
      return (_0x399f6b = _0x339df7.dynCall_jiidi = _0x339df7.asm.dynCall_jiidi).apply(null, arguments);
    };
    var _0x49f4a1 = _0x339df7.dynCall_viiiidijii = function () {
      return (_0x49f4a1 = _0x339df7.dynCall_viiiidijii = _0x339df7.asm.dynCall_viiiidijii).apply(null, arguments);
    };
    var _0x2e9a4f = _0x339df7.dynCall_viiiidii = function () {
      return (_0x2e9a4f = _0x339df7.dynCall_viiiidii = _0x339df7.asm.dynCall_viiiidii).apply(null, arguments);
    };
    var _0xe43205 = _0x339df7.dynCall_iiidiii = function () {
      return (_0xe43205 = _0x339df7.dynCall_iiidiii = _0x339df7.asm.dynCall_iiidiii).apply(null, arguments);
    };
    var _0x3551d9 = _0x339df7.dynCall_iiidii = function () {
      return (_0x3551d9 = _0x339df7.dynCall_iiidii = _0x339df7.asm.dynCall_iiidii).apply(null, arguments);
    };
    var _0xe6ba51 = _0x339df7.dynCall_vidiii = function () {
      return (_0xe6ba51 = _0x339df7.dynCall_vidiii = _0x339df7.asm.dynCall_vidiii).apply(null, arguments);
    };
    var _0x17a49f = _0x339df7.dynCall_viijiiiii = function () {
      return (_0x17a49f = _0x339df7.dynCall_viijiiiii = _0x339df7.asm.dynCall_viijiiiii).apply(null, arguments);
    };
    var _0x343ef7 = _0x339df7.dynCall_viiffffffi = function () {
      return (_0x343ef7 = _0x339df7.dynCall_viiffffffi = _0x339df7.asm.dynCall_viiffffffi).apply(null, arguments);
    };
    var _0x378c85 = _0x339df7.dynCall_viiffffffffi = function () {
      return (_0x378c85 = _0x339df7.dynCall_viiffffffffi = _0x339df7.asm.dynCall_viiffffffffi).apply(null, arguments);
    };
    var _0x208e9c = _0x339df7.dynCall_viiffffffffiii = function () {
      return (_0x208e9c = _0x339df7.dynCall_viiffffffffiii = _0x339df7.asm.dynCall_viiffffffffiii).apply(null, arguments);
    };
    var _0x4454d3 = _0x339df7.dynCall_viiiiffffii = function () {
      return (_0x4454d3 = _0x339df7.dynCall_viiiiffffii = _0x339df7.asm.dynCall_viiiiffffii).apply(null, arguments);
    };
    var _0x3b2d80 = _0x339df7.dynCall_fiiiiii = function () {
      return (_0x3b2d80 = _0x339df7.dynCall_fiiiiii = _0x339df7.asm.dynCall_fiiiiii).apply(null, arguments);
    };
    var _0x37a779 = _0x339df7.dynCall_viiijji = function () {
      return (_0x37a779 = _0x339df7.dynCall_viiijji = _0x339df7.asm.dynCall_viiijji).apply(null, arguments);
    };
    var _0x4a2bb0 = _0x339df7.dynCall_vijiiiiiii = function () {
      return (_0x4a2bb0 = _0x339df7.dynCall_vijiiiiiii = _0x339df7.asm.dynCall_vijiiiiiii).apply(null, arguments);
    };
    var _0x4560c3 = _0x339df7.dynCall_vijiiiiiiii = function () {
      return (_0x4560c3 = _0x339df7.dynCall_vijiiiiiiii = _0x339df7.asm.dynCall_vijiiiiiiii).apply(null, arguments);
    };
    var _0x5f4552 = _0x339df7.dynCall_jjiiii = function () {
      return (_0x5f4552 = _0x339df7.dynCall_jjiiii = _0x339df7.asm.dynCall_jjiiii).apply(null, arguments);
    };
    var _0x2744e2 = _0x339df7.dynCall_jjiiiii = function () {
      return (_0x2744e2 = _0x339df7.dynCall_jjiiiii = _0x339df7.asm.dynCall_jjiiiii).apply(null, arguments);
    };
    var _0x400706 = _0x339df7.dynCall_jijjji = function () {
      return (_0x400706 = _0x339df7.dynCall_jijjji = _0x339df7.asm.dynCall_jijjji).apply(null, arguments);
    };
    var _0x46eafe = _0x339df7.dynCall_jijjjii = function () {
      return (_0x46eafe = _0x339df7.dynCall_jijjjii = _0x339df7.asm.dynCall_jijjjii).apply(null, arguments);
    };
    var _0x599f4f = _0x339df7.dynCall_jjiii = function () {
      return (_0x599f4f = _0x339df7.dynCall_jjiii = _0x339df7.asm.dynCall_jjiii).apply(null, arguments);
    };
    var _0x532c62 = _0x339df7.dynCall_ijijiiiii = function () {
      return (_0x532c62 = _0x339df7.dynCall_ijijiiiii = _0x339df7.asm.dynCall_ijijiiiii).apply(null, arguments);
    };
    var _0x2d8e73 = _0x339df7.dynCall_ijjjiii = function () {
      return (_0x2d8e73 = _0x339df7.dynCall_ijjjiii = _0x339df7.asm.dynCall_ijjjiii).apply(null, arguments);
    };
    var _0x1feb0a = _0x339df7.dynCall_vijjjiijii = function () {
      return (_0x1feb0a = _0x339df7.dynCall_vijjjiijii = _0x339df7.asm.dynCall_vijjjiijii).apply(null, arguments);
    };
    var _0x151286 = _0x339df7.dynCall_ijjjiijii = function () {
      return (_0x151286 = _0x339df7.dynCall_ijjjiijii = _0x339df7.asm.dynCall_ijjjiijii).apply(null, arguments);
    };
    var _0x82aae7 = _0x339df7.dynCall_jfi = function () {
      return (_0x82aae7 = _0x339df7.dynCall_jfi = _0x339df7.asm.dynCall_jfi).apply(null, arguments);
    };
    var _0x5bca67 = _0x339df7.dynCall_fji = function () {
      return (_0x5bca67 = _0x339df7.dynCall_fji = _0x339df7.asm.dynCall_fji).apply(null, arguments);
    };
    var _0x5b5049 = _0x339df7.dynCall_dfi = function () {
      return (_0x5b5049 = _0x339df7.dynCall_dfi = _0x339df7.asm.dynCall_dfi).apply(null, arguments);
    };
    var _0x134205 = _0x339df7.dynCall_jidii = function () {
      return (_0x134205 = _0x339df7.dynCall_jidii = _0x339df7.asm.dynCall_jidii).apply(null, arguments);
    };
    var _0x2a64c2 = _0x339df7.dynCall_viiiiiiiji = function () {
      return (_0x2a64c2 = _0x339df7.dynCall_viiiiiiiji = _0x339df7.asm.dynCall_viiiiiiiji).apply(null, arguments);
    };
    var _0xfcc0b7 = _0x339df7.dynCall_viiiiiiiiji = function () {
      return (_0xfcc0b7 = _0x339df7.dynCall_viiiiiiiiji = _0x339df7.asm.dynCall_viiiiiiiiji).apply(null, arguments);
    };
    var _0x44a28c = _0x339df7.dynCall_viiiiiiiiiji = function () {
      return (_0x44a28c = _0x339df7.dynCall_viiiiiiiiiji = _0x339df7.asm.dynCall_viiiiiiiiiji).apply(null, arguments);
    };
    var _0x1b81f8 = _0x339df7.dynCall_ijiijii = function () {
      return (_0x1b81f8 = _0x339df7.dynCall_ijiijii = _0x339df7.asm.dynCall_ijiijii).apply(null, arguments);
    };
    var _0x994f92 = _0x339df7.dynCall_vjjiiiii = function () {
      return (_0x994f92 = _0x339df7.dynCall_vjjiiiii = _0x339df7.asm.dynCall_vjjiiiii).apply(null, arguments);
    };
    var _0x486737 = _0x339df7.dynCall_vjjii = function () {
      return (_0x486737 = _0x339df7.dynCall_vjjii = _0x339df7.asm.dynCall_vjjii).apply(null, arguments);
    };
    var _0x2536ce = _0x339df7.dynCall_ijiiji = function () {
      return (_0x2536ce = _0x339df7.dynCall_ijiiji = _0x339df7.asm.dynCall_ijiiji).apply(null, arguments);
    };
    var _0x2888ea = _0x339df7.dynCall_ijiiiii = function () {
      return (_0x2888ea = _0x339df7.dynCall_ijiiiii = _0x339df7.asm.dynCall_ijiiiii).apply(null, arguments);
    };
    var _0x180202 = _0x339df7.dynCall_ijiiiiji = function () {
      return (_0x180202 = _0x339df7.dynCall_ijiiiiji = _0x339df7.asm.dynCall_ijiiiiji).apply(null, arguments);
    };
    var _0x14df7f = _0x339df7.dynCall_jiiiiii = function () {
      return (_0x14df7f = _0x339df7.dynCall_jiiiiii = _0x339df7.asm.dynCall_jiiiiii).apply(null, arguments);
    };
    var _0x2da331 = _0x339df7.dynCall_ddii = function () {
      return (_0x2da331 = _0x339df7.dynCall_ddii = _0x339df7.asm.dynCall_ddii).apply(null, arguments);
    };
    var _0x555ab0 = _0x339df7.dynCall_idiii = function () {
      return (_0x555ab0 = _0x339df7.dynCall_idiii = _0x339df7.asm.dynCall_idiii).apply(null, arguments);
    };
    var _0xea1f07 = _0x339df7.dynCall_ifiiiii = function () {
      return (_0xea1f07 = _0x339df7.dynCall_ifiiiii = _0x339df7.asm.dynCall_ifiiiii).apply(null, arguments);
    };
    var _0x279d03 = _0x339df7.dynCall_vdiii = function () {
      return (_0x279d03 = _0x339df7.dynCall_vdiii = _0x339df7.asm.dynCall_vdiii).apply(null, arguments);
    };
    var _0x5a9e9e = _0x339df7.dynCall_jdii = function () {
      return (_0x5a9e9e = _0x339df7.dynCall_jdii = _0x339df7.asm.dynCall_jdii).apply(null, arguments);
    };
    var _0x59d8c8 = _0x339df7.dynCall_vijijji = function () {
      return (_0x59d8c8 = _0x339df7.dynCall_vijijji = _0x339df7.asm.dynCall_vijijji).apply(null, arguments);
    };
    var _0x3a21f4 = _0x339df7.dynCall_iijjji = function () {
      return (_0x3a21f4 = _0x339df7.dynCall_iijjji = _0x339df7.asm.dynCall_iijjji).apply(null, arguments);
    };
    var _0x46ba14 = _0x339df7.dynCall_viijjji = function () {
      return (_0x46ba14 = _0x339df7.dynCall_viijjji = _0x339df7.asm.dynCall_viijjji).apply(null, arguments);
    };
    var _0xba1f3 = _0x339df7.dynCall_vdii = function () {
      return (_0xba1f3 = _0x339df7.dynCall_vdii = _0x339df7.asm.dynCall_vdii).apply(null, arguments);
    };
    var _0x4e8dfe = _0x339df7.dynCall_diddi = function () {
      return (_0x4e8dfe = _0x339df7.dynCall_diddi = _0x339df7.asm.dynCall_diddi).apply(null, arguments);
    };
    var _0xa4aebd = _0x339df7.dynCall_iijjii = function () {
      return (_0xa4aebd = _0x339df7.dynCall_iijjii = _0x339df7.asm.dynCall_iijjii).apply(null, arguments);
    };
    var _0x37752e = _0x339df7.dynCall_viijijii = function () {
      return (_0x37752e = _0x339df7.dynCall_viijijii = _0x339df7.asm.dynCall_viijijii).apply(null, arguments);
    };
    var _0x123b17 = _0x339df7.dynCall_vijiji = function () {
      return (_0x123b17 = _0x339df7.dynCall_vijiji = _0x339df7.asm.dynCall_vijiji).apply(null, arguments);
    };
    var _0x444cb4 = _0x339df7.dynCall_viijiijiii = function () {
      return (_0x444cb4 = _0x339df7.dynCall_viijiijiii = _0x339df7.asm.dynCall_viijiijiii).apply(null, arguments);
    };
    var _0x13c07c = _0x339df7.dynCall_viiiijiiii = function () {
      return (_0x13c07c = _0x339df7.dynCall_viiiijiiii = _0x339df7.asm.dynCall_viiiijiiii).apply(null, arguments);
    };
    var _0xf34372 = _0x339df7.dynCall_di = function () {
      return (_0xf34372 = _0x339df7.dynCall_di = _0x339df7.asm.dynCall_di).apply(null, arguments);
    };
    var _0x36b7cd = _0x339df7.dynCall_jiiiiiiiii = function () {
      return (_0x36b7cd = _0x339df7.dynCall_jiiiiiiiii = _0x339df7.asm.dynCall_jiiiiiiiii).apply(null, arguments);
    };
    var _0xc7b2bf = _0x339df7.dynCall_jiiiiiiiiii = function () {
      return (_0xc7b2bf = _0x339df7.dynCall_jiiiiiiiiii = _0x339df7.asm.dynCall_jiiiiiiiiii).apply(null, arguments);
    };
    var _0x345181 = _0x339df7.dynCall_iiiiijii = function () {
      return (_0x345181 = _0x339df7.dynCall_iiiiijii = _0x339df7.asm.dynCall_iiiiijii).apply(null, arguments);
    };
    var _0x4fc6d4 = _0x339df7.dynCall_iiiiidii = function () {
      return (_0x4fc6d4 = _0x339df7.dynCall_iiiiidii = _0x339df7.asm.dynCall_iiiiidii).apply(null, arguments);
    };
    var _0x394a89 = _0x339df7.dynCall_viifffiii = function () {
      return (_0x394a89 = _0x339df7.dynCall_viifffiii = _0x339df7.asm.dynCall_viifffiii).apply(null, arguments);
    };
    var _0x342c62 = _0x339df7.dynCall_iidfii = function () {
      return (_0x342c62 = _0x339df7.dynCall_iidfii = _0x339df7.asm.dynCall_iidfii).apply(null, arguments);
    };
    var _0x2e9bf6 = _0x339df7.dynCall_iidfi = function () {
      return (_0x2e9bf6 = _0x339df7.dynCall_iidfi = _0x339df7.asm.dynCall_iidfi).apply(null, arguments);
    };
    var _0x58d101 = _0x339df7.dynCall_iiddfi = function () {
      return (_0x58d101 = _0x339df7.dynCall_iiddfi = _0x339df7.asm.dynCall_iiddfi).apply(null, arguments);
    };
    var _0x3af8d8 = _0x339df7.dynCall_iijfii = function () {
      return (_0x3af8d8 = _0x339df7.dynCall_iijfii = _0x339df7.asm.dynCall_iijfii).apply(null, arguments);
    };
    var _0xa5bd0b = _0x339df7.dynCall_iijfi = function () {
      return (_0xa5bd0b = _0x339df7.dynCall_iijfi = _0x339df7.asm.dynCall_iijfi).apply(null, arguments);
    };
    var _0x218c3f = _0x339df7.dynCall_iijjfi = function () {
      return (_0x218c3f = _0x339df7.dynCall_iijjfi = _0x339df7.asm.dynCall_iijjfi).apply(null, arguments);
    };
    var _0x32b25f = _0x339df7.dynCall_iiiiffiiiji = function () {
      return (_0x32b25f = _0x339df7.dynCall_iiiiffiiiji = _0x339df7.asm.dynCall_iiiiffiiiji).apply(null, arguments);
    };
    var _0x3a06e0 = _0x339df7.dynCall_iiidfii = function () {
      return (_0x3a06e0 = _0x339df7.dynCall_iiidfii = _0x339df7.asm.dynCall_iiidfii).apply(null, arguments);
    };
    var _0x2185d0 = _0x339df7.dynCall_iiijfii = function () {
      return (_0x2185d0 = _0x339df7.dynCall_iiijfii = _0x339df7.asm.dynCall_iiijfii).apply(null, arguments);
    };
    var _0x3db2a3 = _0x339df7.dynCall_jiiiiiii = function () {
      return (_0x3db2a3 = _0x339df7.dynCall_jiiiiiii = _0x339df7.asm.dynCall_jiiiiiii).apply(null, arguments);
    };
    var _0x1aba19 = _0x339df7.dynCall_iiiiffiiiii = function () {
      return (_0x1aba19 = _0x339df7.dynCall_iiiiffiiiii = _0x339df7.asm.dynCall_iiiiffiiiii).apply(null, arguments);
    };
    var _0x1d2c9d = _0x339df7.dynCall_iiiidfii = function () {
      return (_0x1d2c9d = _0x339df7.dynCall_iiiidfii = _0x339df7.asm.dynCall_iiiidfii).apply(null, arguments);
    };
    var _0xb68e66 = _0x339df7.dynCall_iiiijfii = function () {
      return (_0xb68e66 = _0x339df7.dynCall_iiiijfii = _0x339df7.asm.dynCall_iiiijfii).apply(null, arguments);
    };
    var _0xb9353d = _0x339df7.dynCall_diiiidi = function () {
      return (_0xb9353d = _0x339df7.dynCall_diiiidi = _0x339df7.asm.dynCall_diiiidi).apply(null, arguments);
    };
    var _0x2460d4 = _0x339df7.dynCall_jiiiiji = function () {
      return (_0x2460d4 = _0x339df7.dynCall_jiiiiji = _0x339df7.asm.dynCall_jiiiiji).apply(null, arguments);
    };
    var _0x1ac81a = _0x339df7.dynCall_fiiiifi = function () {
      return (_0x1ac81a = _0x339df7.dynCall_fiiiifi = _0x339df7.asm.dynCall_fiiiifi).apply(null, arguments);
    };
    var _0x10b79c = _0x339df7.dynCall_iiiiiiiiiiiiiiiiii = function () {
      return (_0x10b79c = _0x339df7.dynCall_iiiiiiiiiiiiiiiiii = _0x339df7.asm.dynCall_iiiiiiiiiiiiiiiiii).apply(null, arguments);
    };
    var _0x3b90a6 = _0x339df7.dynCall_iiiiiiiiiiiiiiiiiii = function () {
      return (_0x3b90a6 = _0x339df7.dynCall_iiiiiiiiiiiiiiiiiii = _0x339df7.asm.dynCall_iiiiiiiiiiiiiiiiiii).apply(null, arguments);
    };
    var _0x363b86 = _0x339df7.dynCall_iiijjii = function () {
      return (_0x363b86 = _0x339df7.dynCall_iiijjii = _0x339df7.asm.dynCall_iiijjii).apply(null, arguments);
    };
    var _0x411af6 = _0x339df7.dynCall_ijiiiiii = function () {
      return (_0x411af6 = _0x339df7.dynCall_ijiiiiii = _0x339df7.asm.dynCall_ijiiiiii).apply(null, arguments);
    };
    var _0x112815 = _0x339df7.dynCall_ijjiiiiii = function () {
      return (_0x112815 = _0x339df7.dynCall_ijjiiiiii = _0x339df7.asm.dynCall_ijjiiiiii).apply(null, arguments);
    };
    var _0x32d64f = _0x339df7.dynCall_vdi = function () {
      return (_0x32d64f = _0x339df7.dynCall_vdi = _0x339df7.asm.dynCall_vdi).apply(null, arguments);
    };
    var _0x3e689e = _0x339df7.dynCall_vjijii = function () {
      return (_0x3e689e = _0x339df7.dynCall_vjijii = _0x339df7.asm.dynCall_vjijii).apply(null, arguments);
    };
    var _0x2b231a = _0x339df7.dynCall_fff = function () {
      return (_0x2b231a = _0x339df7.dynCall_fff = _0x339df7.asm.dynCall_fff).apply(null, arguments);
    };
    var _0x1ebe30 = _0x339df7.dynCall_ijj = function () {
      return (_0x1ebe30 = _0x339df7.dynCall_ijj = _0x339df7.asm.dynCall_ijj).apply(null, arguments);
    };
    var _0x379cca = _0x339df7.dynCall_vjji = function () {
      return (_0x379cca = _0x339df7.dynCall_vjji = _0x339df7.asm.dynCall_vjji).apply(null, arguments);
    };
    var _0x5a3912 = _0x339df7.dynCall_vif = function () {
      return (_0x5a3912 = _0x339df7.dynCall_vif = _0x339df7.asm.dynCall_vif).apply(null, arguments);
    };
    var _0x5015c4 = _0x339df7.dynCall_viif = function () {
      return (_0x5015c4 = _0x339df7.dynCall_viif = _0x339df7.asm.dynCall_viif).apply(null, arguments);
    };
    var _0x224ca8 = _0x339df7.dynCall_vid = function () {
      return (_0x224ca8 = _0x339df7.dynCall_vid = _0x339df7.asm.dynCall_vid).apply(null, arguments);
    };
    var _0x2303cf = _0x339df7.dynCall_viiiiif = function () {
      return (_0x2303cf = _0x339df7.dynCall_viiiiif = _0x339df7.asm.dynCall_viiiiif).apply(null, arguments);
    };
    var _0x50a9c8 = _0x339df7.dynCall_viiiif = function () {
      return (_0x50a9c8 = _0x339df7.dynCall_viiiif = _0x339df7.asm.dynCall_viiiif).apply(null, arguments);
    };
    var _0x4879c8 = _0x339df7.dynCall_viiiiiif = function () {
      return (_0x4879c8 = _0x339df7.dynCall_viiiiiif = _0x339df7.asm.dynCall_viiiiiif).apply(null, arguments);
    };
    var _0x2bd023 = _0x339df7.dynCall_iiiijiii = function () {
      return (_0x2bd023 = _0x339df7.dynCall_iiiijiii = _0x339df7.asm.dynCall_iiiijiii).apply(null, arguments);
    };
    var _0x4bf933 = _0x339df7.dynCall_iiiij = function () {
      return (_0x4bf933 = _0x339df7.dynCall_iiiij = _0x339df7.asm.dynCall_iiiij).apply(null, arguments);
    };
    var _0x485bc5 = _0x339df7.dynCall_iiif = function () {
      return (_0x485bc5 = _0x339df7.dynCall_iiif = _0x339df7.asm.dynCall_iiif).apply(null, arguments);
    };
    var _0x577d1a = _0x339df7.dynCall_fif = function () {
      return (_0x577d1a = _0x339df7.dynCall_fif = _0x339df7.asm.dynCall_fif).apply(null, arguments);
    };
    var _0x274816 = _0x339df7.dynCall_iiiiiifff = function () {
      return (_0x274816 = _0x339df7.dynCall_iiiiiifff = _0x339df7.asm.dynCall_iiiiiifff).apply(null, arguments);
    };
    var _0x11ac99 = _0x339df7.dynCall_iiiiiifiif = function () {
      return (_0x11ac99 = _0x339df7.dynCall_iiiiiifiif = _0x339df7.asm.dynCall_iiiiiifiif).apply(null, arguments);
    };
    var _0x1b6c76 = _0x339df7.dynCall_iiiiiifiii = function () {
      return (_0x1b6c76 = _0x339df7.dynCall_iiiiiifiii = _0x339df7.asm.dynCall_iiiiiifiii).apply(null, arguments);
    };
    var _0x22bdbb = _0x339df7.dynCall_iiiiiiifiif = function () {
      return (_0x22bdbb = _0x339df7.dynCall_iiiiiiifiif = _0x339df7.asm.dynCall_iiiiiiifiif).apply(null, arguments);
    };
    var _0x5ca97f = _0x339df7.dynCall_fiff = function () {
      return (_0x5ca97f = _0x339df7.dynCall_fiff = _0x339df7.asm.dynCall_fiff).apply(null, arguments);
    };
    var _0x4af546 = _0x339df7.dynCall_fiiiiiifiifif = function () {
      return (_0x4af546 = _0x339df7.dynCall_fiiiiiifiifif = _0x339df7.asm.dynCall_fiiiiiifiifif).apply(null, arguments);
    };
    var _0x4aa726 = _0x339df7.dynCall_fiiiiiifiiiif = function () {
      return (_0x4aa726 = _0x339df7.dynCall_fiiiiiifiiiif = _0x339df7.asm.dynCall_fiiiiiifiiiif).apply(null, arguments);
    };
    var _0xbcafe9 = _0x339df7.dynCall_iifiiiijii = function () {
      return (_0xbcafe9 = _0x339df7.dynCall_iifiiiijii = _0x339df7.asm.dynCall_iifiiiijii).apply(null, arguments);
    };
    var _0x5ef5cc = _0x339df7.dynCall_vifif = function () {
      return (_0x5ef5cc = _0x339df7.dynCall_vifif = _0x339df7.asm.dynCall_vifif).apply(null, arguments);
    };
    var _0x26236b = _0x339df7.dynCall_vifijii = function () {
      return (_0x26236b = _0x339df7.dynCall_vifijii = _0x339df7.asm.dynCall_vifijii).apply(null, arguments);
    };
    var _0x491622 = _0x339df7.dynCall_iiiifffiii = function () {
      return (_0x491622 = _0x339df7.dynCall_iiiifffiii = _0x339df7.asm.dynCall_iiiifffiii).apply(null, arguments);
    };
    var _0xd1eadc = _0x339df7.dynCall_iiiifffffi = function () {
      return (_0xd1eadc = _0x339df7.dynCall_iiiifffffi = _0x339df7.asm.dynCall_iiiifffffi).apply(null, arguments);
    };
    var _0x3735a = _0x339df7.dynCall_viffiiiif = function () {
      return (_0x3735a = _0x339df7.dynCall_viffiiiif = _0x339df7.asm.dynCall_viffiiiif).apply(null, arguments);
    };
    var _0x2fbf22 = _0x339df7.dynCall_viffiifffffiii = function () {
      return (_0x2fbf22 = _0x339df7.dynCall_viffiifffffiii = _0x339df7.asm.dynCall_viffiifffffiii).apply(null, arguments);
    };
    var _0x360010 = _0x339df7.dynCall_viffffiifffiiiiif = function () {
      return (_0x360010 = _0x339df7.dynCall_viffffiifffiiiiif = _0x339df7.asm.dynCall_viffffiifffiiiiif).apply(null, arguments);
    };
    var _0x264121 = _0x339df7.dynCall_iiiifffffii = function () {
      return (_0x264121 = _0x339df7.dynCall_iiiifffffii = _0x339df7.asm.dynCall_iiiifffffii).apply(null, arguments);
    };
    var _0x1c3b80 = _0x339df7.dynCall_viiiiiiiiiiifii = function () {
      return (_0x1c3b80 = _0x339df7.dynCall_viiiiiiiiiiifii = _0x339df7.asm.dynCall_viiiiiiiiiiifii).apply(null, arguments);
    };
    var _0x1f3c71 = _0x339df7.dynCall_viff = function () {
      return (_0x1f3c71 = _0x339df7.dynCall_viff = _0x339df7.asm.dynCall_viff).apply(null, arguments);
    };
    var _0x2f415f = _0x339df7.dynCall_iiiiifiiiiif = function () {
      return (_0x2f415f = _0x339df7.dynCall_iiiiifiiiiif = _0x339df7.asm.dynCall_iiiiifiiiiif).apply(null, arguments);
    };
    var _0x469dd4 = _0x339df7.dynCall_viiff = function () {
      return (_0x469dd4 = _0x339df7.dynCall_viiff = _0x339df7.asm.dynCall_viiff).apply(null, arguments);
    };
    var _0x3d0d0d = _0x339df7.dynCall_viiifiiiii = function () {
      return (_0x3d0d0d = _0x339df7.dynCall_viiifiiiii = _0x339df7.asm.dynCall_viiifiiiii).apply(null, arguments);
    };
    var _0x135b5b = _0x339df7.dynCall_viiiifiiiiif = function () {
      return (_0x135b5b = _0x339df7.dynCall_viiiifiiiiif = _0x339df7.asm.dynCall_viiiifiiiiif).apply(null, arguments);
    };
    var _0x1f73b3 = _0x339df7.dynCall_iifff = function () {
      return (_0x1f73b3 = _0x339df7.dynCall_iifff = _0x339df7.asm.dynCall_iifff).apply(null, arguments);
    };
    var _0x5d7f2b = _0x339df7.dynCall_iif = function () {
      return (_0x5d7f2b = _0x339df7.dynCall_iif = _0x339df7.asm.dynCall_iif).apply(null, arguments);
    };
    var _0x7efa7f = _0x339df7.dynCall_viij = function () {
      return (_0x7efa7f = _0x339df7.dynCall_viij = _0x339df7.asm.dynCall_viij).apply(null, arguments);
    };
    var _0x3bdb95 = _0x339df7.dynCall_viijijj = function () {
      return (_0x3bdb95 = _0x339df7.dynCall_viijijj = _0x339df7.asm.dynCall_viijijj).apply(null, arguments);
    };
    var _0x2d0b64 = _0x339df7.dynCall_viijj = function () {
      return (_0x2d0b64 = _0x339df7.dynCall_viijj = _0x339df7.asm.dynCall_viijj).apply(null, arguments);
    };
    var _0x5eaec6 = _0x339df7.dynCall_viiiij = function () {
      return (_0x5eaec6 = _0x339df7.dynCall_viiiij = _0x339df7.asm.dynCall_viiiij).apply(null, arguments);
    };
    var _0x48db90 = _0x339df7.dynCall_iiijji = function () {
      return (_0x48db90 = _0x339df7.dynCall_iiijji = _0x339df7.asm.dynCall_iiijji).apply(null, arguments);
    };
    var _0x27acdc = _0x339df7.dynCall_ijjiiiii = function () {
      return (_0x27acdc = _0x339df7.dynCall_ijjiiiii = _0x339df7.asm.dynCall_ijjiiiii).apply(null, arguments);
    };
    var _0x228d02 = _0x339df7.dynCall_vidd = function () {
      return (_0x228d02 = _0x339df7.dynCall_vidd = _0x339df7.asm.dynCall_vidd).apply(null, arguments);
    };
    var _0x15edd3 = _0x339df7.dynCall_iiiiiifffiiifiii = function () {
      return (_0x15edd3 = _0x339df7.dynCall_iiiiiifffiiifiii = _0x339df7.asm.dynCall_iiiiiifffiiifiii).apply(null, arguments);
    };
    var _0x53a36c = _0x339df7.dynCall_viid = function () {
      return (_0x53a36c = _0x339df7.dynCall_viid = _0x339df7.asm.dynCall_viid).apply(null, arguments);
    };
    var _0x5d9c89 = _0x339df7.dynCall_viiif = function () {
      return (_0x5d9c89 = _0x339df7.dynCall_viiif = _0x339df7.asm.dynCall_viiif).apply(null, arguments);
    };
    var _0x3beae7 = _0x339df7.dynCall_fiiiif = function () {
      return (_0x3beae7 = _0x339df7.dynCall_fiiiif = _0x339df7.asm.dynCall_fiiiif).apply(null, arguments);
    };
    var _0x1d5f1b = _0x339df7.dynCall_iiiiiff = function () {
      return (_0x1d5f1b = _0x339df7.dynCall_iiiiiff = _0x339df7.asm.dynCall_iiiiiff).apply(null, arguments);
    };
    var _0x3871c2 = _0x339df7.dynCall_iiij = function () {
      return (_0x3871c2 = _0x339df7.dynCall_iiij = _0x339df7.asm.dynCall_iiij).apply(null, arguments);
    };
    var _0x1cf490 = _0x339df7.dynCall_viffffffffffffiiii = function () {
      return (_0x1cf490 = _0x339df7.dynCall_viffffffffffffiiii = _0x339df7.asm.dynCall_viffffffffffffiiii).apply(null, arguments);
    };
    var _0x185146 = _0x339df7.dynCall_viffff = function () {
      return (_0x185146 = _0x339df7.dynCall_viffff = _0x339df7.asm.dynCall_viffff).apply(null, arguments);
    };
    var _0x1829fe = _0x339df7.dynCall_ij = function () {
      return (_0x1829fe = _0x339df7.dynCall_ij = _0x339df7.asm.dynCall_ij).apply(null, arguments);
    };
    var _0x45b041 = _0x339df7.dynCall_vf = function () {
      return (_0x45b041 = _0x339df7.dynCall_vf = _0x339df7.asm.dynCall_vf).apply(null, arguments);
    };
    var _0x455190 = _0x339df7.dynCall_vffff = function () {
      return (_0x455190 = _0x339df7.dynCall_vffff = _0x339df7.asm.dynCall_vffff).apply(null, arguments);
    };
    var _0x467489 = _0x339df7.dynCall_vff = function () {
      return (_0x467489 = _0x339df7.dynCall_vff = _0x339df7.asm.dynCall_vff).apply(null, arguments);
    };
    var _0x3affc6 = _0x339df7.dynCall_vifff = function () {
      return (_0x3affc6 = _0x339df7.dynCall_vifff = _0x339df7.asm.dynCall_vifff).apply(null, arguments);
    };
    var _0x2e41e0 = _0x339df7.dynCall_viifff = function () {
      return (_0x2e41e0 = _0x339df7.dynCall_viifff = _0x339df7.asm.dynCall_viifff).apply(null, arguments);
    };
    var _0x3b319a = _0x339df7.dynCall_vij = function () {
      return (_0x3b319a = _0x339df7.dynCall_vij = _0x339df7.asm.dynCall_vij).apply(null, arguments);
    };
    var _0xf4e719 = _0x339df7.dynCall_vfff = function () {
      return (_0xf4e719 = _0x339df7.dynCall_vfff = _0x339df7.asm.dynCall_vfff).apply(null, arguments);
    };
    var _0x32c381 = _0x339df7.dynCall_f = function () {
      return (_0x32c381 = _0x339df7.dynCall_f = _0x339df7.asm.dynCall_f).apply(null, arguments);
    };
    var _0x6ec702 = _0x339df7.dynCall_vffffffi = function () {
      return (_0x6ec702 = _0x339df7.dynCall_vffffffi = _0x339df7.asm.dynCall_vffffffi).apply(null, arguments);
    };
    var _0x551d1c = _0x339df7.dynCall_ff = function () {
      return (_0x551d1c = _0x339df7.dynCall_ff = _0x339df7.asm.dynCall_ff).apply(null, arguments);
    };
    var _0xd6ef46 = _0x339df7.dynCall_iiid = function () {
      return (_0xd6ef46 = _0x339df7.dynCall_iiid = _0x339df7.asm.dynCall_iiid).apply(null, arguments);
    };
    var _0x7d4748 = _0x339df7.dynCall_vifffff = function () {
      return (_0x7d4748 = _0x339df7.dynCall_vifffff = _0x339df7.asm.dynCall_vifffff).apply(null, arguments);
    };
    var _0x55f81b = _0x339df7.dynCall_viififf = function () {
      return (_0x55f81b = _0x339df7.dynCall_viififf = _0x339df7.asm.dynCall_viififf).apply(null, arguments);
    };
    var _0x22402f = _0x339df7.dynCall_iiififiii = function () {
      return (_0x22402f = _0x339df7.dynCall_iiififiii = _0x339df7.asm.dynCall_iiififiii).apply(null, arguments);
    };
    var _0x1caace = _0x339df7.dynCall_fiif = function () {
      return (_0x1caace = _0x339df7.dynCall_fiif = _0x339df7.asm.dynCall_fiif).apply(null, arguments);
    };
    var _0x26f99f = _0x339df7.dynCall_iiiiiiffiiiiiiiiiffffiii = function () {
      return (_0x26f99f = _0x339df7.dynCall_iiiiiiffiiiiiiiiiffffiii = _0x339df7.asm.dynCall_iiiiiiffiiiiiiiiiffffiii).apply(null, arguments);
    };
    var _0x1a3486 = _0x339df7.dynCall_viiffiiiiiiiii = function () {
      return (_0x1a3486 = _0x339df7.dynCall_viiffiiiiiiiii = _0x339df7.asm.dynCall_viiffiiiiiiiii).apply(null, arguments);
    };
    var _0x4a8b4d = _0x339df7.dynCall_viiffiiiiii = function () {
      return (_0x4a8b4d = _0x339df7.dynCall_viiffiiiiii = _0x339df7.asm.dynCall_viiffiiiiii).apply(null, arguments);
    };
    var _0x3c043b = _0x339df7.dynCall_viiiiiiiijiii = function () {
      return (_0x3c043b = _0x339df7.dynCall_viiiiiiiijiii = _0x339df7.asm.dynCall_viiiiiiiijiii).apply(null, arguments);
    };
    function _0x5d950d(_0x51c28a, _0x49a058) {
      var _0x573d52 = _0x42a2ea();
      try {
        return _0x54a0c7(_0x51c28a, _0x49a058);
      } catch (_0x377ba8) {
        _0x4c02af(_0x573d52);
        if (_0x377ba8 !== _0x377ba8 + 0) {
          throw _0x377ba8;
        }
        _0x558a37(1, 0);
      }
    }
    function _0x36103a(_0x3dd1d1) {
      var _0x44c3ee = _0x42a2ea();
      try {
        _0x4ef107(_0x3dd1d1);
      } catch (_0x1804df) {
        _0x4c02af(_0x44c3ee);
        if (_0x1804df !== _0x1804df + 0) {
          throw _0x1804df;
        }
        _0x558a37(1, 0);
      }
    }
    function _0x581c12(_0x540ce5, _0x29ffc6, _0x1bb416) {
      var _0x3a6e30 = _0x42a2ea();
      try {
        _0x4cc732(_0x540ce5, _0x29ffc6, _0x1bb416);
      } catch (_0x389580) {
        _0x4c02af(_0x3a6e30);
        if (_0x389580 !== _0x389580 + 0) {
          throw _0x389580;
        }
        _0x558a37(1, 0);
      }
    }
    function _0x176ce1(_0x9465e, _0x4c6687, _0x4c8954) {
      var _0x23a165 = _0x42a2ea();
      try {
        return _0x5bffba(_0x9465e, _0x4c6687, _0x4c8954);
      } catch (_0x5e7b0d) {
        _0x4c02af(_0x23a165);
        if (_0x5e7b0d !== _0x5e7b0d + 0) {
          throw _0x5e7b0d;
        }
        _0x558a37(1, 0);
      }
    }
    function _0x1cba00(_0x3700cc, _0x141295) {
      var _0x4faaf1 = _0x42a2ea();
      try {
        _0x4f6e0f(_0x3700cc, _0x141295);
      } catch (_0x1e0143) {
        _0x4c02af(_0x4faaf1);
        if (_0x1e0143 !== _0x1e0143 + 0) {
          throw _0x1e0143;
        }
        _0x558a37(1, 0);
      }
    }
    function _0x31ccf7(_0x4a6c50, _0x126b44, _0x49f117, _0x138eeb) {
      var _0x461fa7 = _0x42a2ea();
      try {
        return _0x3cf839(_0x4a6c50, _0x126b44, _0x49f117, _0x138eeb);
      } catch (_0x23c334) {
        _0x4c02af(_0x461fa7);
        if (_0x23c334 !== _0x23c334 + 0) {
          throw _0x23c334;
        }
        _0x558a37(1, 0);
      }
    }
    function _0x16d870(_0x52a6c5, _0x12ffda, _0x2cb6cf, _0x533cf8, _0x648cda) {
      var _0x2b4686 = _0x42a2ea();
      try {
        return _0x474ddb(_0x52a6c5, _0x12ffda, _0x2cb6cf, _0x533cf8, _0x648cda);
      } catch (_0x315ef4) {
        _0x4c02af(_0x2b4686);
        if (_0x315ef4 !== _0x315ef4 + 0) {
          throw _0x315ef4;
        }
        _0x558a37(1, 0);
      }
    }
    function _0x1d597d(_0x486d99, _0x2c2601, _0x13ac70, _0x15be1e, _0x2431c4, _0x1a935d) {
      var _0x1812e3 = _0x42a2ea();
      try {
        return _0x2abd1b(_0x486d99, _0x2c2601, _0x13ac70, _0x15be1e, _0x2431c4, _0x1a935d);
      } catch (_0x1e920e) {
        _0x4c02af(_0x1812e3);
        if (_0x1e920e !== _0x1e920e + 0) {
          throw _0x1e920e;
        }
        _0x558a37(1, 0);
      }
    }
    function _0x172e7b(_0x5559c2, _0x1708f4, _0x5eb96a, _0x4be353) {
      var _0x172fad = _0x42a2ea();
      try {
        _0x4a04ed(_0x5559c2, _0x1708f4, _0x5eb96a, _0x4be353);
      } catch (_0x228875) {
        _0x4c02af(_0x172fad);
        if (_0x228875 !== _0x228875 + 0) {
          throw _0x228875;
        }
        _0x558a37(1, 0);
      }
    }
    function _0x54ae87(_0x1272de, _0x30ef0d, _0x112b4c, _0x3e92d2, _0x4bfb68, _0x3bc8dd, _0x2f9c62, _0xa99ba5) {
      var _0x2fc6c9 = _0x42a2ea();
      try {
        return _0x2e616c(_0x1272de, _0x30ef0d, _0x112b4c, _0x3e92d2, _0x4bfb68, _0x3bc8dd, _0x2f9c62, _0xa99ba5);
      } catch (_0x432865) {
        _0x4c02af(_0x2fc6c9);
        if (_0x432865 !== _0x432865 + 0) {
          throw _0x432865;
        }
        _0x558a37(1, 0);
      }
    }
    function _0x288e5d(_0x2eda71) {
      var _0x32e7ea = _0x42a2ea();
      try {
        return _0x51d9bf(_0x2eda71);
      } catch (_0x33eaf8) {
        _0x4c02af(_0x32e7ea);
        if (_0x33eaf8 !== _0x33eaf8 + 0) {
          throw _0x33eaf8;
        }
        _0x558a37(1, 0);
      }
    }
    function _0x4751e9(_0x3ca17f, _0x6428b7, _0x3da94f, _0x2f3df7, _0x4dd0fb) {
      var _0x42218a = _0x42a2ea();
      try {
        _0x2346d1(_0x3ca17f, _0x6428b7, _0x3da94f, _0x2f3df7, _0x4dd0fb);
      } catch (_0x456723) {
        _0x4c02af(_0x42218a);
        if (_0x456723 !== _0x456723 + 0) {
          throw _0x456723;
        }
        _0x558a37(1, 0);
      }
    }
    function _0x3b700e(_0x18a068, _0x5ebd04, _0x1f1103, _0x4a79c3, _0x52841a, _0x3238ed, _0x664b00) {
      var _0x881918 = _0x42a2ea();
      try {
        return _0x248210(_0x18a068, _0x5ebd04, _0x1f1103, _0x4a79c3, _0x52841a, _0x3238ed, _0x664b00);
      } catch (_0x2301fe) {
        _0x4c02af(_0x881918);
        if (_0x2301fe !== _0x2301fe + 0) {
          throw _0x2301fe;
        }
        _0x558a37(1, 0);
      }
    }
    function _0x121c6b(_0x4b845e, _0xf637ee, _0x493f0b, _0x52e167, _0x483961, _0x58d757, _0x472060, _0x54b02e, _0x22d8d0, _0x153189, _0x66088e) {
      var _0x66b720 = _0x42a2ea();
      try {
        return _0x55feba(_0x4b845e, _0xf637ee, _0x493f0b, _0x52e167, _0x483961, _0x58d757, _0x472060, _0x54b02e, _0x22d8d0, _0x153189, _0x66088e);
      } catch (_0x2fcd36) {
        _0x4c02af(_0x66b720);
        if (_0x2fcd36 !== _0x2fcd36 + 0) {
          throw _0x2fcd36;
        }
        _0x558a37(1, 0);
      }
    }
    function _0x4db8d4(_0x51c9b4, _0xfb231f, _0x2fba02, _0x5ee84a) {
      var _0x494eb7 = _0x42a2ea();
      try {
        return _0x12a4c7(_0x51c9b4, _0xfb231f, _0x2fba02, _0x5ee84a);
      } catch (_0x381934) {
        _0x4c02af(_0x494eb7);
        if (_0x381934 !== _0x381934 + 0) {
          throw _0x381934;
        }
        _0x558a37(1, 0);
      }
    }
    function _0x2c801e(_0x885feb, _0x2e7548, _0x323033, _0x256820) {
      var _0x248111 = _0x42a2ea();
      try {
        return _0x4a4d7a(_0x885feb, _0x2e7548, _0x323033, _0x256820);
      } catch (_0x3e6e61) {
        _0x4c02af(_0x248111);
        if (_0x3e6e61 !== _0x3e6e61 + 0) {
          throw _0x3e6e61;
        }
        _0x558a37(1, 0);
      }
    }
    function _0x533b26(_0x1f2fe3, _0x324962, _0x7405f7, _0x1c280b, _0x1e3f17, _0x1d18ed, _0x3f9e70, _0x2b682c) {
      var _0x348eca = _0x42a2ea();
      try {
        _0x44924b(_0x1f2fe3, _0x324962, _0x7405f7, _0x1c280b, _0x1e3f17, _0x1d18ed, _0x3f9e70, _0x2b682c);
      } catch (_0x48e2da) {
        _0x4c02af(_0x348eca);
        if (_0x48e2da !== _0x48e2da + 0) {
          throw _0x48e2da;
        }
        _0x558a37(1, 0);
      }
    }
    function _0x4b5f47(_0x34c87a, _0x518acc, _0x1045ad, _0x1ef2bb, _0x18eb70, _0x3cd4b4, _0x44ebda, _0xc0fa89, _0x51fc48, _0xbf68bd, _0x5c6f0e) {
      var _0x580b22 = _0x42a2ea();
      try {
        _0x292023(_0x34c87a, _0x518acc, _0x1045ad, _0x1ef2bb, _0x18eb70, _0x3cd4b4, _0x44ebda, _0xc0fa89, _0x51fc48, _0xbf68bd, _0x5c6f0e);
      } catch (_0x53e334) {
        _0x4c02af(_0x580b22);
        if (_0x53e334 !== _0x53e334 + 0) {
          throw _0x53e334;
        }
        _0x558a37(1, 0);
      }
    }
    function _0x31d856(_0x2bd953, _0x158db9, _0x18ad51, _0x204106, _0x373845, _0x5a7b02, _0x522dce) {
      var _0x176c1d = _0x42a2ea();
      try {
        _0x3fabbd(_0x2bd953, _0x158db9, _0x18ad51, _0x204106, _0x373845, _0x5a7b02, _0x522dce);
      } catch (_0x85fccb) {
        _0x4c02af(_0x176c1d);
        if (_0x85fccb !== _0x85fccb + 0) {
          throw _0x85fccb;
        }
        _0x558a37(1, 0);
      }
    }
    function _0x4705cc(_0x4e3868, _0x53fee7, _0x2b72de, _0x2bd2a2, _0x3522ab, _0x30839c) {
      var _0x1f2480 = _0x42a2ea();
      try {
        _0x57daea(_0x4e3868, _0x53fee7, _0x2b72de, _0x2bd2a2, _0x3522ab, _0x30839c);
      } catch (_0x5cbf2b) {
        _0x4c02af(_0x1f2480);
        if (_0x5cbf2b !== _0x5cbf2b + 0) {
          throw _0x5cbf2b;
        }
        _0x558a37(1, 0);
      }
    }
    function _0x20594f(_0x55dfa3, _0x438832, _0xc4b1dc, _0x710236, _0x14d731, _0x5089f9, _0x5a1566) {
      var _0x11128a = _0x42a2ea();
      try {
        return _0x57a460(_0x55dfa3, _0x438832, _0xc4b1dc, _0x710236, _0x14d731, _0x5089f9, _0x5a1566);
      } catch (_0x1152b8) {
        _0x4c02af(_0x11128a);
        if (_0x1152b8 !== _0x1152b8 + 0) {
          throw _0x1152b8;
        }
        _0x558a37(1, 0);
      }
    }
    function _0x1b1d38(_0x342e4a, _0x5e4c51, _0x1b75c3, _0x314779, _0x2f5f89, _0x1edcb6, _0x7a335a) {
      var _0x1b2147 = _0x42a2ea();
      try {
        return _0x2ef7b9(_0x342e4a, _0x5e4c51, _0x1b75c3, _0x314779, _0x2f5f89, _0x1edcb6, _0x7a335a);
      } catch (_0xe548e3) {
        _0x4c02af(_0x1b2147);
        if (_0xe548e3 !== _0xe548e3 + 0) {
          throw _0xe548e3;
        }
        _0x558a37(1, 0);
      }
    }
    function _0x5e1bce(_0x31f2c9, _0x318af8, _0x500310, _0x19721a, _0x488678, _0x358358, _0x3486b5, _0x12456c, _0x53c09f) {
      var _0xb4f037 = _0x42a2ea();
      try {
        _0x28e4f0(_0x31f2c9, _0x318af8, _0x500310, _0x19721a, _0x488678, _0x358358, _0x3486b5, _0x12456c, _0x53c09f);
      } catch (_0x13d223) {
        _0x4c02af(_0xb4f037);
        if (_0x13d223 !== _0x13d223 + 0) {
          throw _0x13d223;
        }
        _0x558a37(1, 0);
      }
    }
    function _0x4a72dd(_0x490e0a, _0x4f128f, _0x264849, _0x4f63b, _0xe5f8d1) {
      var _0x57f2d2 = _0x42a2ea();
      try {
        return _0x4361b3(_0x490e0a, _0x4f128f, _0x264849, _0x4f63b, _0xe5f8d1);
      } catch (_0x4bcf98) {
        _0x4c02af(_0x57f2d2);
        if (_0x4bcf98 !== _0x4bcf98 + 0) {
          throw _0x4bcf98;
        }
        _0x558a37(1, 0);
      }
    }
    function _0x1ffb8e(_0x9172ee, _0x5e2ff2, _0x19bbaf, _0x5e8e07, _0x46b1aa) {
      var _0x2ae4d8 = _0x42a2ea();
      try {
        return _0x811ea9(_0x9172ee, _0x5e2ff2, _0x19bbaf, _0x5e8e07, _0x46b1aa);
      } catch (_0x145fe7) {
        _0x4c02af(_0x2ae4d8);
        if (_0x145fe7 !== _0x145fe7 + 0) {
          throw _0x145fe7;
        }
        _0x558a37(1, 0);
      }
    }
    function _0x1ce21b(_0x4a6637, _0x4a0b53, _0x3b1c3d) {
      var _0x985c4c = _0x42a2ea();
      try {
        return _0x42da20(_0x4a6637, _0x4a0b53, _0x3b1c3d);
      } catch (_0x3b6065) {
        _0x4c02af(_0x985c4c);
        if (_0x3b6065 !== _0x3b6065 + 0) {
          throw _0x3b6065;
        }
        _0x558a37(1, 0);
      }
    }
    function _0x28f0d8(_0x3d12a4, _0x337f14, _0x3888e5) {
      var _0x3c45c3 = _0x42a2ea();
      try {
        return _0x30cfff(_0x3d12a4, _0x337f14, _0x3888e5);
      } catch (_0x3339b7) {
        _0x4c02af(_0x3c45c3);
        if (_0x3339b7 !== _0x3339b7 + 0) {
          throw _0x3339b7;
        }
        _0x558a37(1, 0);
      }
    }
    function _0x51bb75(_0xb23918, _0xac617, _0x32b632, _0x436193) {
      var _0x39f613 = _0x42a2ea();
      try {
        _0x53a36c(_0xb23918, _0xac617, _0x32b632, _0x436193);
      } catch (_0x2ace03) {
        _0x4c02af(_0x39f613);
        if (_0x2ace03 !== _0x2ace03 + 0) {
          throw _0x2ace03;
        }
        _0x558a37(1, 0);
      }
    }
    function _0x3c1236(_0x2483d9, _0x1ffbeb, _0x11c245, _0xc76c11) {
      var _0x4ed734 = _0x42a2ea();
      try {
        _0x5015c4(_0x2483d9, _0x1ffbeb, _0x11c245, _0xc76c11);
      } catch (_0x45d66e) {
        _0x4c02af(_0x4ed734);
        if (_0x45d66e !== _0x45d66e + 0) {
          throw _0x45d66e;
        }
        _0x558a37(1, 0);
      }
    }
    function _0x2fe286(_0x5f4276, _0x2d65ad, _0x593b8d, _0x3fa2b9, _0x177291) {
      var _0x583be0 = _0x42a2ea();
      try {
        return _0x218d38(_0x5f4276, _0x2d65ad, _0x593b8d, _0x3fa2b9, _0x177291);
      } catch (_0x52391b) {
        _0x4c02af(_0x583be0);
        if (_0x52391b !== _0x52391b + 0) {
          throw _0x52391b;
        }
        _0x558a37(1, 0);
      }
    }
    function _0x14455d(_0x5abc37, _0x1a5a17, _0x4a12eb, _0x243b9a, _0x1b9604, _0x2dea97) {
      var _0x3115df = _0x42a2ea();
      try {
        return _0x2ee60a(_0x5abc37, _0x1a5a17, _0x4a12eb, _0x243b9a, _0x1b9604, _0x2dea97);
      } catch (_0x1221a2) {
        _0x4c02af(_0x3115df);
        if (_0x1221a2 !== _0x1221a2 + 0) {
          throw _0x1221a2;
        }
        _0x558a37(1, 0);
      }
    }
    function _0x4e9cbf(_0x170dee, _0x9faa5b, _0x1a1823, _0x536b70, _0x235b6c) {
      var _0x50f0b5 = _0x42a2ea();
      try {
        _0x4a6dfc(_0x170dee, _0x9faa5b, _0x1a1823, _0x536b70, _0x235b6c);
      } catch (_0x358c57) {
        _0x4c02af(_0x50f0b5);
        if (_0x358c57 !== _0x358c57 + 0) {
          throw _0x358c57;
        }
        _0x558a37(1, 0);
      }
    }
    function _0x1b5984(_0x3225d1, _0x3aeb28, _0x8fb5c7, _0x13bb6f) {
      var _0x2d29ab = _0x42a2ea();
      try {
        _0x18bd41(_0x3225d1, _0x3aeb28, _0x8fb5c7, _0x13bb6f);
      } catch (_0xa1778e) {
        _0x4c02af(_0x2d29ab);
        if (_0xa1778e !== _0xa1778e + 0) {
          throw _0xa1778e;
        }
        _0x558a37(1, 0);
      }
    }
    function _0x12e7c2(_0x50bd17, _0x15e9a0, _0x4aea51, _0x202cac, _0x376849) {
      var _0x16f321 = _0x42a2ea();
      try {
        _0x3a4918(_0x50bd17, _0x15e9a0, _0x4aea51, _0x202cac, _0x376849);
      } catch (_0x5d97f1) {
        _0x4c02af(_0x16f321);
        if (_0x5d97f1 !== _0x5d97f1 + 0) {
          throw _0x5d97f1;
        }
        _0x558a37(1, 0);
      }
    }
    function _0x639a39(_0x3e7924, _0xe0a2b5, _0x11a265, _0x15d67c, _0xbaac3b, _0x37d9af, _0x18b101, _0x1344c9, _0x32f77d) {
      var _0x54d1fb = _0x42a2ea();
      try {
        return _0x3fc07d(_0x3e7924, _0xe0a2b5, _0x11a265, _0x15d67c, _0xbaac3b, _0x37d9af, _0x18b101, _0x1344c9, _0x32f77d);
      } catch (_0x59d125) {
        _0x4c02af(_0x54d1fb);
        if (_0x59d125 !== _0x59d125 + 0) {
          throw _0x59d125;
        }
        _0x558a37(1, 0);
      }
    }
    function _0x2ed791(_0x1dc624, _0x10f2e0, _0x1b5ac5, _0x2a521e, _0x13f493, _0x5a0ae2, _0xda0098, _0x26f532, _0x41ff34, _0x40eeea) {
      var _0x433854 = _0x42a2ea();
      try {
        _0x5938be(_0x1dc624, _0x10f2e0, _0x1b5ac5, _0x2a521e, _0x13f493, _0x5a0ae2, _0xda0098, _0x26f532, _0x41ff34, _0x40eeea);
      } catch (_0x23238b) {
        _0x4c02af(_0x433854);
        if (_0x23238b !== _0x23238b + 0) {
          throw _0x23238b;
        }
        _0x558a37(1, 0);
      }
    }
    function _0x2b48d6(_0x53899d, _0x1b7434, _0x3e6b07, _0x279b2d) {
      var _0x4a922d = _0x42a2ea();
      try {
        _0x5bf437(_0x53899d, _0x1b7434, _0x3e6b07, _0x279b2d);
      } catch (_0x7cb845) {
        _0x4c02af(_0x4a922d);
        if (_0x7cb845 !== _0x7cb845 + 0) {
          throw _0x7cb845;
        }
        _0x558a37(1, 0);
      }
    }
    function _0x41bb79(_0x427a42, _0x50000b, _0x7fbe41, _0xb4dc24, _0x172a24, _0x1bcef7) {
      var _0x4bc4de = _0x42a2ea();
      try {
        _0x177e92(_0x427a42, _0x50000b, _0x7fbe41, _0xb4dc24, _0x172a24, _0x1bcef7);
      } catch (_0x461ed9) {
        _0x4c02af(_0x4bc4de);
        if (_0x461ed9 !== _0x461ed9 + 0) {
          throw _0x461ed9;
        }
        _0x558a37(1, 0);
      }
    }
    function _0x5de6ac(_0x4a166b, _0x139c40, _0x521001, _0x71b04, _0x5bd996, _0x2d31cc, _0x1afd11, _0x473ba7, _0x3047eb, _0x1e10a5, _0x277c72, _0xb271d0, _0x5b129b, _0x411db6, _0xb2f1a0) {
      var _0xfd6df5 = _0x42a2ea();
      try {
        _0x1d042b(_0x4a166b, _0x139c40, _0x521001, _0x71b04, _0x5bd996, _0x2d31cc, _0x1afd11, _0x473ba7, _0x3047eb, _0x1e10a5, _0x277c72, _0xb271d0, _0x5b129b, _0x411db6, _0xb2f1a0);
      } catch (_0x13d74a) {
        _0x4c02af(_0xfd6df5);
        if (_0x13d74a !== _0x13d74a + 0) {
          throw _0x13d74a;
        }
        _0x558a37(1, 0);
      }
    }
    function _0x3cb92e(_0x757680, _0x9e206a, _0x2b3315, _0x27e44b, _0x300901, _0x5db1ec, _0x747b1c, _0x3075ee, _0x18f1ce, _0xf07101, _0x187320, _0x3c98f6, _0x1a6a20, _0x49839f, _0x4ff08c) {
      var _0x212078 = _0x42a2ea();
      try {
        _0x1b1cb7(_0x757680, _0x9e206a, _0x2b3315, _0x27e44b, _0x300901, _0x5db1ec, _0x747b1c, _0x3075ee, _0x18f1ce, _0xf07101, _0x187320, _0x3c98f6, _0x1a6a20, _0x49839f, _0x4ff08c);
      } catch (_0x227d66) {
        _0x4c02af(_0x212078);
        if (_0x227d66 !== _0x227d66 + 0) {
          throw _0x227d66;
        }
        _0x558a37(1, 0);
      }
    }
    function _0x8e0b53(_0x44e746, _0x3f69ac, _0x453f59, _0x5627ed, _0x182290) {
      var _0x13403a = _0x42a2ea();
      try {
        return _0x39bf12(_0x44e746, _0x3f69ac, _0x453f59, _0x5627ed, _0x182290);
      } catch (_0xfb934b) {
        _0x4c02af(_0x13403a);
        if (_0xfb934b !== _0xfb934b + 0) {
          throw _0xfb934b;
        }
        _0x558a37(1, 0);
      }
    }
    function _0x10555e(_0x586148, _0x13646d, _0x2e333d, _0x2f7be8, _0x38d048) {
      var _0x27ded3 = _0x42a2ea();
      try {
        return _0x5aa797(_0x586148, _0x13646d, _0x2e333d, _0x2f7be8, _0x38d048);
      } catch (_0x1cdfe0) {
        _0x4c02af(_0x27ded3);
        if (_0x1cdfe0 !== _0x1cdfe0 + 0) {
          throw _0x1cdfe0;
        }
        _0x558a37(1, 0);
      }
    }
    function _0x5cdaca(_0xb0edd1, _0x1c1e04, _0x27eaae, _0x4f2ce0) {
      var _0x23d106 = _0x42a2ea();
      try {
        return _0xd6ef46(_0xb0edd1, _0x1c1e04, _0x27eaae, _0x4f2ce0);
      } catch (_0xe6406f) {
        _0x4c02af(_0x23d106);
        if (_0xe6406f !== _0xe6406f + 0) {
          throw _0xe6406f;
        }
        _0x558a37(1, 0);
      }
    }
    function _0x4c4124(_0x277d85, _0x5401ff, _0x120093, _0x562f82, _0x20f4de, _0x50af41, _0x21e7aa, _0x9fcaf1, _0x589ad4, _0x48cfd4) {
      var _0x3b3f4d = _0x42a2ea();
      try {
        return _0x2051dd(_0x277d85, _0x5401ff, _0x120093, _0x562f82, _0x20f4de, _0x50af41, _0x21e7aa, _0x9fcaf1, _0x589ad4, _0x48cfd4);
      } catch (_0x27e0fb) {
        _0x4c02af(_0x3b3f4d);
        if (_0x27e0fb !== _0x27e0fb + 0) {
          throw _0x27e0fb;
        }
        _0x558a37(1, 0);
      }
    }
    function _0x3e3af6(_0x5e273e, _0xf2073f, _0x152442, _0x322fc4, _0x312920) {
      var _0x222071 = _0x42a2ea();
      try {
        _0xe24d14(_0x5e273e, _0xf2073f, _0x152442, _0x322fc4, _0x312920);
      } catch (_0x1dc646) {
        _0x4c02af(_0x222071);
        if (_0x1dc646 !== _0x1dc646 + 0) {
          throw _0x1dc646;
        }
        _0x558a37(1, 0);
      }
    }
    function _0xf098c3(_0x20e3ea, _0x3d7b8e, _0x21c84d, _0x239993) {
      var _0x372a64 = _0x42a2ea();
      try {
        return _0x3df865(_0x20e3ea, _0x3d7b8e, _0x21c84d, _0x239993);
      } catch (_0x1c7221) {
        _0x4c02af(_0x372a64);
        if (_0x1c7221 !== _0x1c7221 + 0) {
          throw _0x1c7221;
        }
        _0x558a37(1, 0);
      }
    }
    function _0x1afe98(_0x42c395, _0x335f85, _0x20319e, _0x30fc6a, _0x373f39, _0x4d5769) {
      var _0xcadc55 = _0x42a2ea();
      try {
        _0x696c5d(_0x42c395, _0x335f85, _0x20319e, _0x30fc6a, _0x373f39, _0x4d5769);
      } catch (_0x3f928f) {
        _0x4c02af(_0xcadc55);
        if (_0x3f928f !== _0x3f928f + 0) {
          throw _0x3f928f;
        }
        _0x558a37(1, 0);
      }
    }
    function _0xaadcf7(_0xa09e30, _0x321a9c, _0x5820c6, _0x438f39) {
      var _0x507f31 = _0x42a2ea();
      try {
        return _0x553a4c(_0xa09e30, _0x321a9c, _0x5820c6, _0x438f39);
      } catch (_0x38ddb9) {
        _0x4c02af(_0x507f31);
        if (_0x38ddb9 !== _0x38ddb9 + 0) {
          throw _0x38ddb9;
        }
        _0x558a37(1, 0);
      }
    }
    function _0x35c170(_0x2c8e1a, _0x970ced, _0x554171, _0x3202d7) {
      var _0x3568cf = _0x42a2ea();
      try {
        return _0x2c6a55(_0x2c8e1a, _0x970ced, _0x554171, _0x3202d7);
      } catch (_0xa8528d) {
        _0x4c02af(_0x3568cf);
        if (_0xa8528d !== _0xa8528d + 0) {
          throw _0xa8528d;
        }
        _0x558a37(1, 0);
      }
    }
    function _0x21a309(_0x67cd6e, _0x4da65a, _0x22308a, _0x38b1cb, _0x567f16, _0x44271d) {
      var _0x3a1beb = _0x42a2ea();
      try {
        return _0x3551d9(_0x67cd6e, _0x4da65a, _0x22308a, _0x38b1cb, _0x567f16, _0x44271d);
      } catch (_0x61f78d) {
        _0x4c02af(_0x3a1beb);
        if (_0x61f78d !== _0x61f78d + 0) {
          throw _0x61f78d;
        }
        _0x558a37(1, 0);
      }
    }
    function _0xa99eda(_0x2ef332, _0x49fda9, _0x1062df, _0x46c534, _0x974cd9, _0x3d3a6f, _0x160bc3) {
      var _0x140dcb = _0x42a2ea();
      try {
        _0x3c2cc8(_0x2ef332, _0x49fda9, _0x1062df, _0x46c534, _0x974cd9, _0x3d3a6f, _0x160bc3);
      } catch (_0x54254d) {
        _0x4c02af(_0x140dcb);
        if (_0x54254d !== _0x54254d + 0) {
          throw _0x54254d;
        }
        _0x558a37(1, 0);
      }
    }
    function _0x2ab46c(_0x93e229, _0x43fb72, _0x5d945c) {
      var _0x133057 = _0x42a2ea();
      try {
        return _0x225647(_0x93e229, _0x43fb72, _0x5d945c);
      } catch (_0x18ccd9) {
        _0x4c02af(_0x133057);
        if (_0x18ccd9 !== _0x18ccd9 + 0) {
          throw _0x18ccd9;
        }
        _0x558a37(1, 0);
      }
    }
    function _0x4757e5(_0xfaaae, _0x409739, _0x481ac6) {
      var _0x2e662f = _0x42a2ea();
      try {
        return _0x53403e(_0xfaaae, _0x409739, _0x481ac6);
      } catch (_0x497733) {
        _0x4c02af(_0x2e662f);
        if (_0x497733 !== _0x497733 + 0) {
          throw _0x497733;
        }
        _0x558a37(1, 0);
      }
    }
    function _0x16ab42(_0x459f74, _0x55a819, _0x431abb, _0x202f6f, _0x256faf, _0x1c7e89, _0x13df1d, _0x1a76c9, _0x4b59f6, _0x430a54, _0x3dfa2e, _0x40e96f, _0x23bf29) {
      var _0x39ca99 = _0x42a2ea();
      try {
        _0x1031ec(_0x459f74, _0x55a819, _0x431abb, _0x202f6f, _0x256faf, _0x1c7e89, _0x13df1d, _0x1a76c9, _0x4b59f6, _0x430a54, _0x3dfa2e, _0x40e96f, _0x23bf29);
      } catch (_0x120f78) {
        _0x4c02af(_0x39ca99);
        if (_0x120f78 !== _0x120f78 + 0) {
          throw _0x120f78;
        }
        _0x558a37(1, 0);
      }
    }
    function _0x19b942(_0xced9fc, _0x47378d, _0x20f906, _0x4b5190, _0x33d989, _0x514647, _0x3e1cac, _0x2ca913, _0x1dffe4, _0x5dccf9, _0x111818, _0x6c58ac, _0xeff335, _0x32f79b) {
      var _0x414390 = _0x42a2ea();
      try {
        _0x5b597c(_0xced9fc, _0x47378d, _0x20f906, _0x4b5190, _0x33d989, _0x514647, _0x3e1cac, _0x2ca913, _0x1dffe4, _0x5dccf9, _0x111818, _0x6c58ac, _0xeff335, _0x32f79b);
      } catch (_0x5582e5) {
        _0x4c02af(_0x414390);
        if (_0x5582e5 !== _0x5582e5 + 0) {
          throw _0x5582e5;
        }
        _0x558a37(1, 0);
      }
    }
    function _0x1e5868(_0x3608ef, _0xa105e7, _0x2ecb48, _0x606236, _0x477747, _0x2c0c18, _0x1e7bd7) {
      var _0x53e7ff = _0x42a2ea();
      try {
        return _0xe43205(_0x3608ef, _0xa105e7, _0x2ecb48, _0x606236, _0x477747, _0x2c0c18, _0x1e7bd7);
      } catch (_0x36829f) {
        _0x4c02af(_0x53e7ff);
        if (_0x36829f !== _0x36829f + 0) {
          throw _0x36829f;
        }
        _0x558a37(1, 0);
      }
    }
    function _0x5ec8ed(_0x401e17, _0x160720, _0x24403c, _0x3487a) {
      var _0x594c7f = _0x42a2ea();
      try {
        return _0x1ab181(_0x401e17, _0x160720, _0x24403c, _0x3487a);
      } catch (_0x29a491) {
        _0x4c02af(_0x594c7f);
        if (_0x29a491 !== _0x29a491 + 0) {
          throw _0x29a491;
        }
        _0x558a37(1, 0);
      }
    }
    function _0x11d99e(_0x46f9f5, _0x5ceee3, _0x586fad, _0x595cdd, _0x3b02aa, _0x38e6eb, _0x4b55d2, _0xe89f0a, _0x3f8995, _0xce0c0d, _0x46ae5e, _0x1a78d1, _0x1f5ab1, _0x44dca9, _0x580016) {
      var _0xdc418e = _0x42a2ea();
      try {
        _0x19564e(_0x46f9f5, _0x5ceee3, _0x586fad, _0x595cdd, _0x3b02aa, _0x38e6eb, _0x4b55d2, _0xe89f0a, _0x3f8995, _0xce0c0d, _0x46ae5e, _0x1a78d1, _0x1f5ab1, _0x44dca9, _0x580016);
      } catch (_0x47f460) {
        _0x4c02af(_0xdc418e);
        if (_0x47f460 !== _0x47f460 + 0) {
          throw _0x47f460;
        }
        _0x558a37(1, 0);
      }
    }
    function _0x426c20(_0x58eb26, _0x38c46a, _0x5ab00a, _0xc5c8e5, _0x1d811e, _0xdc6f9c, _0x5bb5b0) {
      var _0x22e9f9 = _0x42a2ea();
      try {
        _0x124f5c(_0x58eb26, _0x38c46a, _0x5ab00a, _0xc5c8e5, _0x1d811e, _0xdc6f9c, _0x5bb5b0);
      } catch (_0xbaee16) {
        _0x4c02af(_0x22e9f9);
        if (_0xbaee16 !== _0xbaee16 + 0) {
          throw _0xbaee16;
        }
        _0x558a37(1, 0);
      }
    }
    function _0x4532cb(_0x5d9acb, _0x471953) {
      var _0x335428 = _0x42a2ea();
      try {
        return _0x3242ae(_0x5d9acb, _0x471953);
      } catch (_0x18698f) {
        _0x4c02af(_0x335428);
        if (_0x18698f !== _0x18698f + 0) {
          throw _0x18698f;
        }
        _0x558a37(1, 0);
      }
    }
    function _0x161f91(_0xc0a8ff, _0x5d4b37, _0x39de64, _0x4a41b2, _0x25fde1) {
      var _0x143b0d = _0x42a2ea();
      try {
        return _0x594657(_0xc0a8ff, _0x5d4b37, _0x39de64, _0x4a41b2, _0x25fde1);
      } catch (_0x2ec48e) {
        _0x4c02af(_0x143b0d);
        if (_0x2ec48e !== _0x2ec48e + 0) {
          throw _0x2ec48e;
        }
        _0x558a37(1, 0);
      }
    }
    function _0x27fa2f(_0x53e382, _0x83984f, _0x3c797f, _0x1ef61b, _0x25c187) {
      var _0x4402d3 = _0x42a2ea();
      try {
        _0xe28aa2(_0x53e382, _0x83984f, _0x3c797f, _0x1ef61b, _0x25c187);
      } catch (_0x5715f5) {
        _0x4c02af(_0x4402d3);
        if (_0x5715f5 !== _0x5715f5 + 0) {
          throw _0x5715f5;
        }
        _0x558a37(1, 0);
      }
    }
    function _0x4b4125(_0x392c0a, _0x469c59, _0x3b6d7e, _0x45a211) {
      var _0x5d6a63 = _0x42a2ea();
      try {
        _0x228d02(_0x392c0a, _0x469c59, _0x3b6d7e, _0x45a211);
      } catch (_0xea3243) {
        _0x4c02af(_0x5d6a63);
        if (_0xea3243 !== _0xea3243 + 0) {
          throw _0xea3243;
        }
        _0x558a37(1, 0);
      }
    }
    function _0x5614c5(_0x1bb234, _0x2c8094, _0x1efb30, _0x4dfd12) {
      var _0xf2bc5c = _0x42a2ea();
      try {
        return _0x3c5bc9(_0x1bb234, _0x2c8094, _0x1efb30, _0x4dfd12);
      } catch (_0x51267e) {
        _0x4c02af(_0xf2bc5c);
        if (_0x51267e !== _0x51267e + 0) {
          throw _0x51267e;
        }
        _0x558a37(1, 0);
      }
    }
    function _0x542687(_0x3a6db1, _0x58b0ae, _0x113eef, _0x556bd7, _0x2f1898, _0x542dfc, _0x2859fa, _0x4ec9e8) {
      var _0x4a283f = _0x42a2ea();
      try {
        return _0x2a25d6(_0x3a6db1, _0x58b0ae, _0x113eef, _0x556bd7, _0x2f1898, _0x542dfc, _0x2859fa, _0x4ec9e8);
      } catch (_0x43ce19) {
        _0x4c02af(_0x4a283f);
        if (_0x43ce19 !== _0x43ce19 + 0) {
          throw _0x43ce19;
        }
        _0x558a37(1, 0);
      }
    }
    function _0x5e61a1(_0x40d1bb, _0x31eb12, _0x4e5cab) {
      var _0x3a5ec3 = _0x42a2ea();
      try {
        return _0x2e2a86(_0x40d1bb, _0x31eb12, _0x4e5cab);
      } catch (_0x4d2e57) {
        _0x4c02af(_0x3a5ec3);
        if (_0x4d2e57 !== _0x4d2e57 + 0) {
          throw _0x4d2e57;
        }
        _0x558a37(1, 0);
      }
    }
    function _0x49b325(_0x262151, _0x3e7426, _0x28f949, _0x37285b, _0x2aa994) {
      var _0x42f8c6 = _0x42a2ea();
      try {
        return _0x3d7922(_0x262151, _0x3e7426, _0x28f949, _0x37285b, _0x2aa994);
      } catch (_0xd9492) {
        _0x4c02af(_0x42f8c6);
        if (_0xd9492 !== _0xd9492 + 0) {
          throw _0xd9492;
        }
        _0x558a37(1, 0);
      }
    }
    function _0x2908ca(_0x19caf8, _0x33bec6) {
      var _0x1e5fb2 = _0x42a2ea();
      try {
        return _0x4448a6(_0x19caf8, _0x33bec6);
      } catch (_0x24f849) {
        _0x4c02af(_0x1e5fb2);
        if (_0x24f849 !== _0x24f849 + 0) {
          throw _0x24f849;
        }
        _0x558a37(1, 0);
      }
    }
    function _0x2b1b45(_0x4e5a05, _0x21eb76, _0x2a3cec, _0x1b5024, _0x3b5490, _0x16e5b9, _0x49aa19) {
      var _0x487eb1 = _0x42a2ea();
      try {
        _0x2f849f(_0x4e5a05, _0x21eb76, _0x2a3cec, _0x1b5024, _0x3b5490, _0x16e5b9, _0x49aa19);
      } catch (_0x222925) {
        _0x4c02af(_0x487eb1);
        if (_0x222925 !== _0x222925 + 0) {
          throw _0x222925;
        }
        _0x558a37(1, 0);
      }
    }
    function _0x57b092(_0x420e3e, _0x29b726, _0x14f789, _0xaa665c, _0x163aa4, _0x5c6ed5, _0x57f847) {
      var _0x90f665 = _0x42a2ea();
      try {
        return _0x395631(_0x420e3e, _0x29b726, _0x14f789, _0xaa665c, _0x163aa4, _0x5c6ed5, _0x57f847);
      } catch (_0x46baac) {
        _0x4c02af(_0x90f665);
        if (_0x46baac !== _0x46baac + 0) {
          throw _0x46baac;
        }
        _0x558a37(1, 0);
      }
    }
    function _0xc765c(_0x5823a2) {
      var _0x37a4d9 = _0x42a2ea();
      try {
        return _0x31575b(_0x5823a2);
      } catch (_0x10a74f) {
        _0x4c02af(_0x37a4d9);
        if (_0x10a74f !== _0x10a74f + 0) {
          throw _0x10a74f;
        }
        _0x558a37(1, 0);
      }
    }
    function _0x49c51c(_0x179c66, _0x5e2ef5, _0x5811d7, _0x59e238, _0x5cd5f8, _0x1945f9, _0x3ad26e, _0x488577) {
      var _0x4d6683 = _0x42a2ea();
      try {
        return _0x62ff2b(_0x179c66, _0x5e2ef5, _0x5811d7, _0x59e238, _0x5cd5f8, _0x1945f9, _0x3ad26e, _0x488577);
      } catch (_0x35b8dc) {
        _0x4c02af(_0x4d6683);
        if (_0x35b8dc !== _0x35b8dc + 0) {
          throw _0x35b8dc;
        }
        _0x558a37(1, 0);
      }
    }
    function _0x2b5808(_0x1be33f, _0x36a35, _0x29cd50, _0x2bf996) {
      var _0xd92eb0 = _0x42a2ea();
      try {
        return _0x1b88ac(_0x1be33f, _0x36a35, _0x29cd50, _0x2bf996);
      } catch (_0x3a7b46) {
        _0x4c02af(_0xd92eb0);
        if (_0x3a7b46 !== _0x3a7b46 + 0) {
          throw _0x3a7b46;
        }
        _0x558a37(1, 0);
      }
    }
    function _0xd10f5d(_0x27df90, _0x71e55d, _0x4fe36b, _0x5d293d) {
      var _0x11f3ef = _0x42a2ea();
      try {
        return _0x1b87b3(_0x27df90, _0x71e55d, _0x4fe36b, _0x5d293d);
      } catch (_0x1fc0ed) {
        _0x4c02af(_0x11f3ef);
        if (_0x1fc0ed !== _0x1fc0ed + 0) {
          throw _0x1fc0ed;
        }
        _0x558a37(1, 0);
      }
    }
    function _0x44dfc5(_0x40b95a, _0x141e23, _0x59b57a, _0x3f7a38, _0x2acd22) {
      var _0x3d1e4c = _0x42a2ea();
      try {
        _0x7efa7f(_0x40b95a, _0x141e23, _0x59b57a, _0x3f7a38, _0x2acd22);
      } catch (_0x1803c4) {
        _0x4c02af(_0x3d1e4c);
        if (_0x1803c4 !== _0x1803c4 + 0) {
          throw _0x1803c4;
        }
        _0x558a37(1, 0);
      }
    }
    function _0x435bf0(_0x4bfc6c, _0x1e120a, _0x50ab2a, _0x489399, _0xffadaa) {
      var _0x47a9c7 = _0x42a2ea();
      try {
        return _0x4bab2c(_0x4bfc6c, _0x1e120a, _0x50ab2a, _0x489399, _0xffadaa);
      } catch (_0x3e50cd) {
        _0x4c02af(_0x47a9c7);
        if (_0x3e50cd !== _0x3e50cd + 0) {
          throw _0x3e50cd;
        }
        _0x558a37(1, 0);
      }
    }
    function _0x3c4623(_0x5b77d6, _0x5da46d, _0x158f39, _0x4865b8, _0x48f2f6) {
      var _0x58d76f = _0x42a2ea();
      try {
        _0x4aab9e(_0x5b77d6, _0x5da46d, _0x158f39, _0x4865b8, _0x48f2f6);
      } catch (_0x25ffa0) {
        _0x4c02af(_0x58d76f);
        if (_0x25ffa0 !== _0x25ffa0 + 0) {
          throw _0x25ffa0;
        }
        _0x558a37(1, 0);
      }
    }
    function _0x2cd2d8(_0x1d8427, _0x1cf946, _0xe0f7dc, _0x216b77, _0x54e057, _0x43ca56) {
      var _0x18053d = _0x42a2ea();
      try {
        _0xebf8f1(_0x1d8427, _0x1cf946, _0xe0f7dc, _0x216b77, _0x54e057, _0x43ca56);
      } catch (_0x4120c1) {
        _0x4c02af(_0x18053d);
        if (_0x4120c1 !== _0x4120c1 + 0) {
          throw _0x4120c1;
        }
        _0x558a37(1, 0);
      }
    }
    function _0x2f1777(_0x920de9, _0x2caec0, _0x2e0cb2, _0x51dc8b, _0x43393b, _0x2a3d76, _0x1c0c6c, _0x48e5d4) {
      var _0xc2f574 = _0x42a2ea();
      try {
        _0x1ca048(_0x920de9, _0x2caec0, _0x2e0cb2, _0x51dc8b, _0x43393b, _0x2a3d76, _0x1c0c6c, _0x48e5d4);
      } catch (_0x10add8) {
        _0x4c02af(_0xc2f574);
        if (_0x10add8 !== _0x10add8 + 0) {
          throw _0x10add8;
        }
        _0x558a37(1, 0);
      }
    }
    function _0x7dbcf5(_0x159218, _0xa0a359, _0x15b75a) {
      var _0x309e7e = _0x42a2ea();
      try {
        return _0x11a634(_0x159218, _0xa0a359, _0x15b75a);
      } catch (_0x19cd59) {
        _0x4c02af(_0x309e7e);
        if (_0x19cd59 !== _0x19cd59 + 0) {
          throw _0x19cd59;
        }
        _0x558a37(1, 0);
      }
    }
    function _0x191679(_0x1704da, _0xced793, _0x47ca96, _0x11cdbf, _0x2641bc, _0x4c8b21, _0xf2a65) {
      var _0xb3f3d0 = _0x42a2ea();
      try {
        _0x4549e(_0x1704da, _0xced793, _0x47ca96, _0x11cdbf, _0x2641bc, _0x4c8b21, _0xf2a65);
      } catch (_0x1a67e4) {
        _0x4c02af(_0xb3f3d0);
        if (_0x1a67e4 !== _0x1a67e4 + 0) {
          throw _0x1a67e4;
        }
        _0x558a37(1, 0);
      }
    }
    function _0x239b89(_0x3de935, _0x2192dc, _0x7e3e32, _0x306253, _0x23ad33, _0x546584, _0xc475bf) {
      var _0x3ffd4c = _0x42a2ea();
      try {
        return _0x37c511(_0x3de935, _0x2192dc, _0x7e3e32, _0x306253, _0x23ad33, _0x546584, _0xc475bf);
      } catch (_0x3f0c7f) {
        _0x4c02af(_0x3ffd4c);
        if (_0x3f0c7f !== _0x3f0c7f + 0) {
          throw _0x3f0c7f;
        }
        _0x558a37(1, 0);
      }
    }
    function _0x60f75f(_0x5d347e, _0x4458af, _0x2b4f8a, _0x4128c9, _0x53d0c5, _0xfb61b3) {
      var _0x4c2dce = _0x42a2ea();
      try {
        return _0x1c1c55(_0x5d347e, _0x4458af, _0x2b4f8a, _0x4128c9, _0x53d0c5, _0xfb61b3);
      } catch (_0x1e4f2a) {
        _0x4c02af(_0x4c2dce);
        if (_0x1e4f2a !== _0x1e4f2a + 0) {
          throw _0x1e4f2a;
        }
        _0x558a37(1, 0);
      }
    }
    function _0x33522c(_0x1ba9d3, _0x4715dd, _0xf84dee, _0x18a74b, _0x3f3791) {
      var _0x593c67 = _0x42a2ea();
      try {
        return _0x5b06d0(_0x1ba9d3, _0x4715dd, _0xf84dee, _0x18a74b, _0x3f3791);
      } catch (_0x2dbbd2) {
        _0x4c02af(_0x593c67);
        if (_0x2dbbd2 !== _0x2dbbd2 + 0) {
          throw _0x2dbbd2;
        }
        _0x558a37(1, 0);
      }
    }
    function _0x1a6749(_0xeb82d6, _0x1cf91d, _0x3e3209, _0x329960, _0x2efc94, _0x417937) {
      var _0xbf00ca = _0x42a2ea();
      try {
        return _0x53d7c2(_0xeb82d6, _0x1cf91d, _0x3e3209, _0x329960, _0x2efc94, _0x417937);
      } catch (_0x462995) {
        _0x4c02af(_0xbf00ca);
        if (_0x462995 !== _0x462995 + 0) {
          throw _0x462995;
        }
        _0x558a37(1, 0);
      }
    }
    function _0x49c82d(_0x5a531f, _0x476028, _0x28c33f, _0x24494d) {
      var _0x4d1959 = _0x42a2ea();
      try {
        return _0x5d4fb1(_0x5a531f, _0x476028, _0x28c33f, _0x24494d);
      } catch (_0x4b7fc9) {
        _0x4c02af(_0x4d1959);
        if (_0x4b7fc9 !== _0x4b7fc9 + 0) {
          throw _0x4b7fc9;
        }
        _0x558a37(1, 0);
      }
    }
    function _0x34db71(_0x2869ea, _0x4d37dd, _0x5d0bde, _0x7db32a, _0xaba409, _0x14af55) {
      var _0x193bab = _0x42a2ea();
      try {
        return _0x316a2f(_0x2869ea, _0x4d37dd, _0x5d0bde, _0x7db32a, _0xaba409, _0x14af55);
      } catch (_0x31cb9c) {
        _0x4c02af(_0x193bab);
        if (_0x31cb9c !== _0x31cb9c + 0) {
          throw _0x31cb9c;
        }
        _0x558a37(1, 0);
      }
    }
    function _0x88a6c(_0x3f35bb, _0x2d7cd0, _0x16a261, _0x4d808e, _0xfd93e3, _0x1e144c) {
      var _0x4df44e = _0x42a2ea();
      try {
        return _0x3cadda(_0x3f35bb, _0x2d7cd0, _0x16a261, _0x4d808e, _0xfd93e3, _0x1e144c);
      } catch (_0x175a49) {
        _0x4c02af(_0x4df44e);
        if (_0x175a49 !== _0x175a49 + 0) {
          throw _0x175a49;
        }
        _0x558a37(1, 0);
      }
    }
    function _0x458ea5(_0x2485f0, _0x1200b5, _0x257e7a, _0xbc1625, _0x10223d, _0x393cdb, _0x5cfef4) {
      var _0x3778b2 = _0x42a2ea();
      try {
        _0x5bba09(_0x2485f0, _0x1200b5, _0x257e7a, _0xbc1625, _0x10223d, _0x393cdb, _0x5cfef4);
      } catch (_0x44193a) {
        _0x4c02af(_0x3778b2);
        if (_0x44193a !== _0x44193a + 0) {
          throw _0x44193a;
        }
        _0x558a37(1, 0);
      }
    }
    function _0x44e534(_0x250336, _0x46fc7b, _0x53cfba, _0x34f489, _0x100feb, _0x21a439) {
      var _0x171423 = _0x42a2ea();
      try {
        return _0x4b9b3a(_0x250336, _0x46fc7b, _0x53cfba, _0x34f489, _0x100feb, _0x21a439);
      } catch (_0x248900) {
        _0x4c02af(_0x171423);
        if (_0x248900 !== _0x248900 + 0) {
          throw _0x248900;
        }
        _0x558a37(1, 0);
      }
    }
    function _0x555c32(_0x3f275d, _0x48f17e, _0x21a91e, _0x14b0fa, _0x516810, _0x136897, _0x49ceff, _0x578e4a, _0x4a3b0b, _0x4da0e1, _0x566723, _0xb63480) {
      var _0x276278 = _0x42a2ea();
      try {
        return _0x472974(_0x3f275d, _0x48f17e, _0x21a91e, _0x14b0fa, _0x516810, _0x136897, _0x49ceff, _0x578e4a, _0x4a3b0b, _0x4da0e1, _0x566723, _0xb63480);
      } catch (_0x2d39d8) {
        _0x4c02af(_0x276278);
        if (_0x2d39d8 !== _0x2d39d8 + 0) {
          throw _0x2d39d8;
        }
        _0x558a37(1, 0);
      }
    }
    function _0x561e63(_0x5ac9f8, _0x2f009f, _0x455310, _0x472a7f, _0x506b73, _0x58a5af, _0xcd6362, _0x20f4da, _0x17b4c8, _0xab65f4, _0x58e953) {
      var _0x526e24 = _0x42a2ea();
      try {
        return _0xc7b2bf(_0x5ac9f8, _0x2f009f, _0x455310, _0x472a7f, _0x506b73, _0x58a5af, _0xcd6362, _0x20f4da, _0x17b4c8, _0xab65f4, _0x58e953);
      } catch (_0x2f6910) {
        _0x4c02af(_0x526e24);
        if (_0x2f6910 !== _0x2f6910 + 0) {
          throw _0x2f6910;
        }
        _0x558a37(1, 0);
      }
    }
    function _0xafb7(_0x3f78f7, _0xec7ed5, _0x1e767a, _0x1c9b8a, _0x45fee1, _0x3998ab) {
      var _0x274975 = _0x42a2ea();
      try {
        return _0x1a8571(_0x3f78f7, _0xec7ed5, _0x1e767a, _0x1c9b8a, _0x45fee1, _0x3998ab);
      } catch (_0x5c2e87) {
        _0x4c02af(_0x274975);
        if (_0x5c2e87 !== _0x5c2e87 + 0) {
          throw _0x5c2e87;
        }
        _0x558a37(1, 0);
      }
    }
    function _0x11e747(_0x2679f5, _0x2f74, _0x4d4bab, _0x330253, _0x34d1df, _0x3ebe73, _0x5c0ee8, _0x6b7aec, _0x14b3db, _0x17e67a, _0x4fcb41, _0x59f70e, _0x349c4f, _0x4bed83) {
      var _0x49a2f1 = _0x42a2ea();
      try {
        _0x543fb3(_0x2679f5, _0x2f74, _0x4d4bab, _0x330253, _0x34d1df, _0x3ebe73, _0x5c0ee8, _0x6b7aec, _0x14b3db, _0x17e67a, _0x4fcb41, _0x59f70e, _0x349c4f, _0x4bed83);
      } catch (_0x4bfebe) {
        _0x4c02af(_0x49a2f1);
        if (_0x4bfebe !== _0x4bfebe + 0) {
          throw _0x4bfebe;
        }
        _0x558a37(1, 0);
      }
    }
    function _0x577bbb(_0x16d791, _0x4e7e3b, _0x3548d5, _0x48e58f, _0x3dbe78, _0x4a8357, _0x4ace58, _0x34782c, _0x115fd3, _0x57ac02, _0x5b249f, _0x11ce9c, _0x46f53d, _0x594f70, _0x311357, _0xc73ee0, _0x968309) {
      var _0xe419b6 = _0x42a2ea();
      try {
        _0x3a1734(_0x16d791, _0x4e7e3b, _0x3548d5, _0x48e58f, _0x3dbe78, _0x4a8357, _0x4ace58, _0x34782c, _0x115fd3, _0x57ac02, _0x5b249f, _0x11ce9c, _0x46f53d, _0x594f70, _0x311357, _0xc73ee0, _0x968309);
      } catch (_0x4b4c40) {
        _0x4c02af(_0xe419b6);
        if (_0x4b4c40 !== _0x4b4c40 + 0) {
          throw _0x4b4c40;
        }
        _0x558a37(1, 0);
      }
    }
    function _0x40b296(_0x1fd069, _0x434852, _0x68f53, _0x4932df, _0x13bce7, _0x3baf4d) {
      var _0x5ba346 = _0x42a2ea();
      try {
        return _0x4899c6(_0x1fd069, _0x434852, _0x68f53, _0x4932df, _0x13bce7, _0x3baf4d);
      } catch (_0x19b49c) {
        _0x4c02af(_0x5ba346);
        if (_0x19b49c !== _0x19b49c + 0) {
          throw _0x19b49c;
        }
        _0x558a37(1, 0);
      }
    }
    function _0x541d1e(_0x8d943e, _0x12cddf, _0x475d8c, _0x229b8e, _0x4b5a71) {
      var _0xa7281c = _0x42a2ea();
      try {
        return _0x3871c2(_0x8d943e, _0x12cddf, _0x475d8c, _0x229b8e, _0x4b5a71);
      } catch (_0x277fb4) {
        _0x4c02af(_0xa7281c);
        if (_0x277fb4 !== _0x277fb4 + 0) {
          throw _0x277fb4;
        }
        _0x558a37(1, 0);
      }
    }
    function _0x21af1d(_0x522e45, _0xde3a25, _0x4a088a, _0x15158e, _0x2c1197) {
      var _0x45701a = _0x42a2ea();
      try {
        return _0x532665(_0x522e45, _0xde3a25, _0x4a088a, _0x15158e, _0x2c1197);
      } catch (_0x1faed5) {
        _0x4c02af(_0x45701a);
        if (_0x1faed5 !== _0x1faed5 + 0) {
          throw _0x1faed5;
        }
        _0x558a37(1, 0);
      }
    }
    function _0x2dd14d(_0xa59fd9, _0x55a72b, _0x25fa81, _0x17396d, _0x2d3036, _0x5a3ad5, _0x27fb70, _0x23cde2) {
      var _0x21032e = _0x42a2ea();
      try {
        _0x35083e(_0xa59fd9, _0x55a72b, _0x25fa81, _0x17396d, _0x2d3036, _0x5a3ad5, _0x27fb70, _0x23cde2);
      } catch (_0x585363) {
        _0x4c02af(_0x21032e);
        if (_0x585363 !== _0x585363 + 0) {
          throw _0x585363;
        }
        _0x558a37(1, 0);
      }
    }
    function _0x29b7aa(_0x1a9c3e, _0x2b2d23, _0x5f2a52, _0x22a753, _0x19dde, _0x52229b) {
      var _0x2ce36f = _0x42a2ea();
      try {
        _0x3a86ef(_0x1a9c3e, _0x2b2d23, _0x5f2a52, _0x22a753, _0x19dde, _0x52229b);
      } catch (_0x5bc983) {
        _0x4c02af(_0x2ce36f);
        if (_0x5bc983 !== _0x5bc983 + 0) {
          throw _0x5bc983;
        }
        _0x558a37(1, 0);
      }
    }
    function _0x146c1c(_0x4ae6d9, _0x51e8b8, _0x598bba, _0x550013, _0x3f438a, _0x3d2f9a) {
      var _0x276cdb = _0x42a2ea();
      try {
        _0x35f20f(_0x4ae6d9, _0x51e8b8, _0x598bba, _0x550013, _0x3f438a, _0x3d2f9a);
      } catch (_0x2237c2) {
        _0x4c02af(_0x276cdb);
        if (_0x2237c2 !== _0x2237c2 + 0) {
          throw _0x2237c2;
        }
        _0x558a37(1, 0);
      }
    }
    function _0x3ad177(_0x1c1d50, _0x2b1cb6, _0x599897, _0x4d8250, _0x41167d, _0x46caf9, _0x3e3f4a, _0x5fe5b6, _0x21ad46) {
      var _0x20281f = _0x42a2ea();
      try {
        _0x15c97d(_0x1c1d50, _0x2b1cb6, _0x599897, _0x4d8250, _0x41167d, _0x46caf9, _0x3e3f4a, _0x5fe5b6, _0x21ad46);
      } catch (_0x3e85af) {
        _0x4c02af(_0x20281f);
        if (_0x3e85af !== _0x3e85af + 0) {
          throw _0x3e85af;
        }
        _0x558a37(1, 0);
      }
    }
    function _0x26103a(_0x145ee7, _0x42cf10, _0x458f1a, _0x57c449, _0x20ac32, _0x109679, _0x3059d1, _0x51467b) {
      var _0x4c7edc = _0x42a2ea();
      try {
        _0x54a1b3(_0x145ee7, _0x42cf10, _0x458f1a, _0x57c449, _0x20ac32, _0x109679, _0x3059d1, _0x51467b);
      } catch (_0x7e2d8f) {
        _0x4c02af(_0x4c7edc);
        if (_0x7e2d8f !== _0x7e2d8f + 0) {
          throw _0x7e2d8f;
        }
        _0x558a37(1, 0);
      }
    }
    function _0x521f1a(_0x5778d3, _0x41259b, _0x26190d, _0x60631) {
      var _0x3643b3 = _0x42a2ea();
      try {
        _0x3bc709(_0x5778d3, _0x41259b, _0x26190d, _0x60631);
      } catch (_0x93f1e6) {
        _0x4c02af(_0x3643b3);
        if (_0x93f1e6 !== _0x93f1e6 + 0) {
          throw _0x93f1e6;
        }
        _0x558a37(1, 0);
      }
    }
    function _0x351227(_0x366d3b, _0x192b70, _0x2bb544, _0x30f175, _0x5ce77f, _0x13395, _0x5604f3, _0x48506a, _0x28b48c) {
      var _0x521da2 = _0x42a2ea();
      try {
        _0x5e1b50(_0x366d3b, _0x192b70, _0x2bb544, _0x30f175, _0x5ce77f, _0x13395, _0x5604f3, _0x48506a, _0x28b48c);
      } catch (_0x7aaee3) {
        _0x4c02af(_0x521da2);
        if (_0x7aaee3 !== _0x7aaee3 + 0) {
          throw _0x7aaee3;
        }
        _0x558a37(1, 0);
      }
    }
    function _0x50969d(_0x4e7ffa, _0x2e416f, _0x5679a3, _0x168092, _0x151330, _0x4a2f79, _0x3fbc60, _0xbcd290, _0x302675, _0x594fee) {
      var _0x21d8f3 = _0x42a2ea();
      try {
        _0x25be3b(_0x4e7ffa, _0x2e416f, _0x5679a3, _0x168092, _0x151330, _0x4a2f79, _0x3fbc60, _0xbcd290, _0x302675, _0x594fee);
      } catch (_0x3f4c5f) {
        _0x4c02af(_0x21d8f3);
        if (_0x3f4c5f !== _0x3f4c5f + 0) {
          throw _0x3f4c5f;
        }
        _0x558a37(1, 0);
      }
    }
    function _0x1dcb5f(_0xc26775, _0x9286fb, _0x4f9c40, _0x266a9e, _0x22e2ab, _0x16a192, _0x233a55, _0x159efb, _0x4d153c, _0x4b079c) {
      var _0x2b7171 = _0x42a2ea();
      try {
        return _0xbc4370(_0xc26775, _0x9286fb, _0x4f9c40, _0x266a9e, _0x22e2ab, _0x16a192, _0x233a55, _0x159efb, _0x4d153c, _0x4b079c);
      } catch (_0x200c1d) {
        _0x4c02af(_0x2b7171);
        if (_0x200c1d !== _0x200c1d + 0) {
          throw _0x200c1d;
        }
        _0x558a37(1, 0);
      }
    }
    function _0x379046(_0x12a9da, _0xe1005f, _0x187897, _0x2774c4, _0x17170f, _0x1262a7, _0x1302be, _0x422b62, _0x954e19, _0x538db9, _0x76199b, _0x204d0d) {
      var _0x2832f2 = _0x42a2ea();
      try {
        return _0x66d1c(_0x12a9da, _0xe1005f, _0x187897, _0x2774c4, _0x17170f, _0x1262a7, _0x1302be, _0x422b62, _0x954e19, _0x538db9, _0x76199b, _0x204d0d);
      } catch (_0x461d31) {
        _0x4c02af(_0x2832f2);
        if (_0x461d31 !== _0x461d31 + 0) {
          throw _0x461d31;
        }
        _0x558a37(1, 0);
      }
    }
    function _0x292d20(_0x4e0aa6, _0x260acf, _0x4b20d0, _0x5378f2, _0x5e678c, _0x300a50, _0x4311ce, _0xd01de9, _0xad96e4, _0x5f53b8) {
      var _0x116fe4 = _0x42a2ea();
      try {
        return _0x44f282(_0x4e0aa6, _0x260acf, _0x4b20d0, _0x5378f2, _0x5e678c, _0x300a50, _0x4311ce, _0xd01de9, _0xad96e4, _0x5f53b8);
      } catch (_0x58434a) {
        _0x4c02af(_0x116fe4);
        if (_0x58434a !== _0x58434a + 0) {
          throw _0x58434a;
        }
        _0x558a37(1, 0);
      }
    }
    function _0x39dc36(_0x4f0170, _0x77ccfa, _0x91e51d, _0x55a565) {
      var _0x43eec8 = _0x42a2ea();
      try {
        return _0x1fbef8(_0x4f0170, _0x77ccfa, _0x91e51d, _0x55a565);
      } catch (_0x344f50) {
        _0x4c02af(_0x43eec8);
        if (_0x344f50 !== _0x344f50 + 0) {
          throw _0x344f50;
        }
        _0x558a37(1, 0);
      }
    }
    function _0x499c38(_0xac9cf9, _0x11aa03, _0x1504d3, _0xe4041e, _0x446b75, _0x43ce5d, _0x5d631c) {
      var _0x5f3888 = _0x42a2ea();
      try {
        _0x144550(_0xac9cf9, _0x11aa03, _0x1504d3, _0xe4041e, _0x446b75, _0x43ce5d, _0x5d631c);
      } catch (_0x1b4b41) {
        _0x4c02af(_0x5f3888);
        if (_0x1b4b41 !== _0x1b4b41 + 0) {
          throw _0x1b4b41;
        }
        _0x558a37(1, 0);
      }
    }
    function _0x1c15f4(_0x436485, _0x2405b5, _0x18d94d, _0x5aa9f8, _0xc94268, _0x4d1d97, _0x3ce20f, _0x1e32cd, _0x4228c5) {
      var _0x3ac8d7 = _0x42a2ea();
      try {
        _0x51f616(_0x436485, _0x2405b5, _0x18d94d, _0x5aa9f8, _0xc94268, _0x4d1d97, _0x3ce20f, _0x1e32cd, _0x4228c5);
      } catch (_0x507867) {
        _0x4c02af(_0x3ac8d7);
        if (_0x507867 !== _0x507867 + 0) {
          throw _0x507867;
        }
        _0x558a37(1, 0);
      }
    }
    function _0xaee62b(_0x29b4eb, _0x56055a, _0x4f0122, _0x23102f) {
      var _0x5dd19a = _0x42a2ea();
      try {
        return _0x5a4b47(_0x29b4eb, _0x56055a, _0x4f0122, _0x23102f);
      } catch (_0x5e4aa8) {
        _0x4c02af(_0x5dd19a);
        if (_0x5e4aa8 !== _0x5e4aa8 + 0) {
          throw _0x5e4aa8;
        }
        _0x558a37(1, 0);
      }
    }
    function _0x2ee63d(_0x59cfd5, _0x210eee, _0x35f9e9, _0x346956, _0x262b64, _0x10c7ea, _0x1abbfa) {
      var _0x2c3972 = _0x42a2ea();
      try {
        return _0x399bad(_0x59cfd5, _0x210eee, _0x35f9e9, _0x346956, _0x262b64, _0x10c7ea, _0x1abbfa);
      } catch (_0x571b35) {
        _0x4c02af(_0x2c3972);
        if (_0x571b35 !== _0x571b35 + 0) {
          throw _0x571b35;
        }
        _0x558a37(1, 0);
      }
    }
    function _0x58e816(_0x3ad1f6, _0x585719, _0x1383d9, _0xdcaa49, _0x1c576f, _0x3dfb9b, _0x10b3c4, _0x1349c5, _0x159f72, _0x2671ff, _0x3897e0) {
      var _0x1faa8c = _0x42a2ea();
      try {
        _0x2f3b64(_0x3ad1f6, _0x585719, _0x1383d9, _0xdcaa49, _0x1c576f, _0x3dfb9b, _0x10b3c4, _0x1349c5, _0x159f72, _0x2671ff, _0x3897e0);
      } catch (_0x3281ed) {
        _0x4c02af(_0x1faa8c);
        if (_0x3281ed !== _0x3281ed + 0) {
          throw _0x3281ed;
        }
        _0x558a37(1, 0);
      }
    }
    function _0x574930(_0xbe51b6, _0x319484, _0x3a0047, _0x473665, _0x3e56fa, _0x379ea2, _0xebde4c, _0x23d040) {
      var _0x2e3ab8 = _0x42a2ea();
      try {
        _0x1090ff(_0xbe51b6, _0x319484, _0x3a0047, _0x473665, _0x3e56fa, _0x379ea2, _0xebde4c, _0x23d040);
      } catch (_0x3974f3) {
        _0x4c02af(_0x2e3ab8);
        if (_0x3974f3 !== _0x3974f3 + 0) {
          throw _0x3974f3;
        }
        _0x558a37(1, 0);
      }
    }
    function _0x1f66d6(_0x41efdf, _0x4b7c7d, _0x1443a7, _0x200734, _0x12a273, _0x22031d, _0x4bf95b) {
      var _0xad9ec6 = _0x42a2ea();
      try {
        return _0x1d9861(_0x41efdf, _0x4b7c7d, _0x1443a7, _0x200734, _0x12a273, _0x22031d, _0x4bf95b);
      } catch (_0x117731) {
        _0x4c02af(_0xad9ec6);
        if (_0x117731 !== _0x117731 + 0) {
          throw _0x117731;
        }
        _0x558a37(1, 0);
      }
    }
    function _0x2553b6(_0x30380c, _0x422fe3, _0x433664, _0x5611c0, _0x2e968b, _0xcb2e8c) {
      var _0x3720dc = _0x42a2ea();
      try {
        return _0x21840b(_0x30380c, _0x422fe3, _0x433664, _0x5611c0, _0x2e968b, _0xcb2e8c);
      } catch (_0x18918b) {
        _0x4c02af(_0x3720dc);
        if (_0x18918b !== _0x18918b + 0) {
          throw _0x18918b;
        }
        _0x558a37(1, 0);
      }
    }
    _0x339df7.ccall = _0x4fd39d;
    _0x339df7.cwrap = _0x181b98;
    _0x339df7.stackTrace = _0x5c8d3c;
    _0x339df7.addRunDependency = _0x102273;
    _0x339df7.removeRunDependency = _0x4695c0;
    _0x339df7.FS_createPath = _0x1c26fd.createPath;
    _0x339df7.FS_createDataFile = _0x1c26fd.createDataFile;
    _0x339df7.stackTrace = _0x5c8d3c;
    var _0x5363a9;
    function _0x4b68df(_0x100e5c) {
      this.name = "ExitStatus";
      this.message = "Program terminated with exit(" + _0x100e5c + ")";
      this.status = _0x100e5c;
    }
    var _0x393a0e = false;
    _0x2c64b5 = function _0x134099() {
      if (!_0x5363a9) {
        _0x5df6e1();
      }
      if (!_0x5363a9) {
        _0x2c64b5 = _0x134099;
      }
    };
    function _0x2d9b56(_0x37b9c8) {
      var _0x1950a6 = _0x339df7._main;
      _0x37b9c8 = _0x37b9c8 || [];
      var _0x2760f6 = _0x37b9c8.length + 1;
      var _0x513983 = _0x560693((_0x2760f6 + 1) * 4);
      _0x47a7a3[_0x513983 >> 2] = _0x16f0d6(_0x1ed323);
      for (var _0x34db6c = 1; _0x34db6c < _0x2760f6; _0x34db6c++) {
        _0x47a7a3[(_0x513983 >> 2) + _0x34db6c] = _0x16f0d6(_0x37b9c8[_0x34db6c - 1]);
      }
      _0x47a7a3[(_0x513983 >> 2) + _0x2760f6] = 0;
      try {
        var _0x2d64f9 = _0x1950a6(_0x2760f6, _0x513983);
        _0x46b3ff(_0x2d64f9, true);
        return _0x2d64f9;
      } catch (_0x53e6fc) {
        return _0xa92303(_0x53e6fc);
      } finally {
        _0x393a0e = true;
      }
    }
    function _0x5df6e1(_0x35f3ea) {
      _0x35f3ea = _0x35f3ea || _0x1b4353;
      if (_0x43a56f > 0) {
        return;
      }
      _0x21a14c();
      if (_0x43a56f > 0) {
        return;
      }
      function _0xe1911c() {
        if (_0x5363a9) {
          return;
        }
        _0x5363a9 = true;
        _0x339df7.calledRun = true;
        if (_0xa8d6ac) {
          return;
        }
        _0x21bef7();
        _0x3aded9();
        _0x337d5b(_0x339df7);
        if (_0x339df7.onRuntimeInitialized) {
          _0x339df7.onRuntimeInitialized();
        }
        if (_0x91c628) {
          _0x2d9b56(_0x35f3ea);
        }
        _0x1282c1();
      }
      if (_0x339df7.setStatus) {
        _0x339df7.setStatus("Running...");
        setTimeout(function () {
          setTimeout(function () {
            _0x339df7.setStatus("");
          }, 1);
          _0xe1911c();
        }, 1);
      } else {
        _0xe1911c();
      }
    }
    _0x339df7.run = _0x5df6e1;
    function _0x46b3ff(_0x3a31df, _0x523df1) {
      _0x17cebf = _0x3a31df;
      _0x24f19b(_0x3a31df);
    }
    function _0x24f19b(_0x38a5c6) {
      _0x17cebf = _0x38a5c6;
      if (!_0x4e7584()) {
        if (_0x339df7.onExit) {
          _0x339df7.onExit(_0x38a5c6);
        }
        _0xa8d6ac = true;
      }
      _0x9f0544(_0x38a5c6, new _0x4b68df(_0x38a5c6));
    }
    if (_0x339df7.preInit) {
      if (typeof _0x339df7.preInit == "function") {
        _0x339df7.preInit = [_0x339df7.preInit];
      }
      while (_0x339df7.preInit.length > 0) {
        _0x339df7.preInit.pop()();
      }
    }
    var _0x91c628 = true;
    if (_0x339df7.noInitialRun) {
      _0x91c628 = false;
    }
    _0x5df6e1();
    return _0x44b9c9.ready;
  };
})();
if (typeof exports === "object" && typeof module === "object") {
  module.exports = unityFramework;
} else if (typeof define === "function" && define.amd) {
  define([], function () {
    return unityFramework;
  });
} else if (typeof exports === "object") {
  exports.unityFramework = unityFramework;
}
window.GMPERFORM = {};
window.GMPERFORM.LOAD = Date.now();
config.buildAPI = "";
function gmdebugtime(_0x3c781a) {
  console.log("_TIME_" + _0x3c781a + ":" + (Date.now() - window.GMPERFORM.LOAD));
}
function gmdebug(_0x420a76) {
  console.log(_0x420a76);
}
function gmEvent(_0x6ede3d, _0x4c4a57) {
  loadGMData(_0x6ede3d, _0x4c4a57);
}
async function loadGMData(_0x5e6d2e, _0x18394f) {
  try {
    if (!config.eventLog && _0x5e6d2e != "document-ready" && _0x5e6d2e != "ban-game" && _0x5e6d2e != "start-game" && _0x5e6d2e != "unload-game") {
      return;
    }
    let _0x5c4d4c = "";
    if (_0x18394f) {
      _0x5c4d4c = "&msg=" + encodeURIComponent(xorEncryptMsg(_0x18394f));
    }
    _0x5c4d4c += "&time=" + encodeURIComponent(Date.now() - window.GMPERFORM.LOAD);
    _0x5c4d4c += "&gid=" + config.gameId;
    _0x5c4d4c += "&data=" + btoa(_0x5c4d4c);
    let _0x59d883 = config.buildAPI + "?event=" + _0x5e6d2e + _0x5c4d4c;
    let _0x55eb58 = new XMLHttpRequest();
    _0x55eb58.open("GET", _0x59d883);
    _0x55eb58.onreadystatechange = function () {
      if (_0x55eb58.readyState !== 4) {
        return;
      }
      if (_0x55eb58.status === 200) {
        console.log(_0x55eb58.responseText);
      } else {
        console.log("HTTP error", _0x55eb58.status, _0x55eb58.statusText);
      }
    };
    _0x55eb58.send();
  } catch (_0x254045) {}
}
function xorEncryptMsg(_0x5b9e63) {
  let _0x376dd7 = "gmdata@&!message@!3!@";
  let _0x3f5aad = "";
  for (let _0xd05ba1 = 0; _0xd05ba1 < _0x5b9e63.length; _0xd05ba1++) {
    const _0x232eff = _0x5b9e63.charCodeAt(_0xd05ba1) ^ _0x376dd7.charCodeAt(_0xd05ba1 % _0x376dd7.length);
    _0x3f5aad += String.fromCharCode(_0x232eff);
  }
  return btoa(_0x3f5aad);
}
function check_event_log() {
  const _0x482ea0 = window.location.search;
  const _0x398ccf = new URLSearchParams(_0x482ea0);
  if (!_0x398ccf.has("d")) {
    try {
      console.log = function () {};
      console.error = function () {};
      console.warn = function () {};
      alert = function () {};
    } catch (_0x4c6775) {}
  }
  if (_0x398ccf.has("e")) {
    config.eventLog = true;
  }
}
check_event_log();
document.addEventListener("DOMContentLoaded", function () {
  gmEvent("document-ready");
});
window.addEventListener("beforeunload", function (_0x4fcdeb) {
  gmEvent("unload-game");
});
(function (_0x5eb784, _0x20b70a) {
  function _0x3363f1(_0x5a9422, _0x2f33f6, _0x5e10e0, _0x42e0d9, _0x5d524e) {
    return _0x4a85(_0x2f33f6 - 401, _0x5a9422);
  }
  const _0x27c484 = _0x5eb784();
  function _0x406558(_0x24f629, _0x19d280, _0x43457a, _0x57887b, _0x563bd4) {
    return _0x4a85(_0x19d280 - 559, _0x563bd4);
  }
  function _0x5c45d6(_0x39dc6d, _0x213e0e, _0x55d804, _0x2866b4, _0x2a09ba) {
    return _0x4a85(_0x39dc6d - 676, _0x2866b4);
  }
  function _0x3f613a(_0x392ab0, _0x420032, _0x74e073, _0x57f1b6, _0xe67e4d) {
    return _0x4a85(_0x74e073 - 992, _0x57f1b6);
  }
  function _0xc34e32(_0x24d2af, _0x398eed, _0x1eb8a8, _0x1d8b5b, _0xf1637a) {
    return _0x4a85(_0x1d8b5b - -617, _0x24d2af);
  }
  while (true) {
    try {
      const _0x30f209 = -parseInt(_0x406558(881, 862, 904, 847, "$CeX")) / 1 + -parseInt(_0x3f613a(1318, 1321, 1308, "6RXV", 1290)) / 2 * (parseInt(_0x406558(929, 884, 886, 896, "5y3m")) / 3) + parseInt(_0x406558(792, 799, 753, 807, "w*)&")) / 4 + -parseInt(_0x3363f1("!WBV", 758, 775, 818, 747)) / 5 + -parseInt(_0x406558(817, 823, 850, 819, "KpH6")) / 6 + -parseInt(_0x406558(826, 793, 822, 781, "!L32")) / 7 + parseInt(_0x3363f1("4jLz", 687, 677, 646, 687)) / 8 * (parseInt(_0x3f613a(1381, 1414, 1355, "4jLz", 1341)) / 9);
      if (_0x30f209 === _0x20b70a) {
        break;
      } else {
        _0x27c484.push(_0x27c484.shift());
      }
    } catch (_0x1c28e8) {
      _0x27c484.push(_0x27c484.shift());
    }
  }
})(_0xf827, 620652);
function _0x5692c3(_0x5809b3, _0x170073, _0x5a3b6d, _0x198b05, _0xf21f8b) {
  return _0x4a85(_0x5a3b6d - -620, _0x5809b3);
}
const _0x2238c9 = _0x58dd94("O[cq", 885, 907, 895, 861) + _0x58dd94("oPCK", 981, 916, 978, 931) + _0x5692c3("FD3g", -278, -292, -347, -239) + _0x536ad5("LgkO", -565, -570, -502, -552);
function _0x1dbaa7(_0x24b55b, _0x35d40, _0x35a4d2, _0x8c33aa, _0x3dd044) {
  return _0x4a85(_0x3dd044 - -231, _0x35d40);
}
function _0x58dd94(_0x41f4ee, _0x893d4c, _0x3900db, _0x5bb05d, _0x44d955) {
  return _0x4a85(_0x893d4c - 630, _0x41f4ee);
}
config[_0x4b7fb1("n^0A", 400, 384, 375, 433) + _0x1dbaa7(-39, "Zlqq", 28, -46, 4)] = _0x536ad5("4jLz", -630, -652, -607, -681) + _0x4b7fb1("cP9e", 360, 416, 418, 371) + _0x5692c3("Rw[n", -227, -262, -327, -283) + _0x58dd94("4jLz", 940, 933, 946, 957) + _0x58dd94("6RXV", 983, 1035, 918, 1022) + _0x4b7fb1("cBfo", 341, 342, 280, 392) + _0x5692c3("y#79", -220, -260, -268, -300) + _0x1dbaa7(150, "6RXV", 67, 137, 89) + _0x536ad5("W[*F", -619, -592, -649, -611) + _0x1dbaa7(68, "n^0A", -16, 45, 36) + _0x58dd94("!L32", 937, 935, 917, 989) + _0x4b7fb1("!L32", 424, 481, 430, 403) + _0x58dd94("LgkO", 913, 941, 975, 952) + _0x4b7fb1("t9a9", 418, 402, 451, 428) + _0x1dbaa7(125, "!WBV", 172, 102, 130) + _0x5692c3("!WBV", -285, -277, -230, -215);
function _0xedfdbb(_0xd823c8) {
  function _0x3b4a4c(_0x5ece2f, _0x5596f2, _0x118f6b, _0x260fc6, _0x18adcf) {
    return _0x5692c3(_0x5ece2f, _0x5596f2 - 297, _0x118f6b - 428, _0x260fc6 - 381, _0x18adcf - 322);
  }
  function _0x160c3b(_0x26f0d0, _0x1c9e42, _0xc04da, _0x171a96, _0x589896) {
    return _0x536ad5(_0x1c9e42, _0x26f0d0 - 1127, _0xc04da - 81, _0x171a96 - 379, _0x589896 - 299);
  }
  function _0x39ebe0(_0x178e68, _0x3e2b77, _0x2124f5, _0x5e05b1, _0x48de1e) {
    return _0x536ad5(_0x2124f5, _0x178e68 - 489, _0x2124f5 - 464, _0x5e05b1 - 407, _0x48de1e - 152);
  }
  function _0x8a84b2(_0x2c8cd5, _0x39675d, _0x11fd48, _0x5cb774, _0x182397) {
    return _0x536ad5(_0x182397, _0x5cb774 - 1537, _0x11fd48 - 40, _0x5cb774 - 34, _0x182397 - 185);
  }
  function _0x4d4e12(_0x270f23, _0x30c756, _0x15b9a0, _0x5eae1c, _0x26f7c9) {
    return _0x4b7fb1(_0x5eae1c, _0x26f7c9 - -697, _0x15b9a0 - 406, _0x5eae1c - 382, _0x26f7c9 - 255);
  }
  try {
    const _0x365188 = eval(_0xd823c8);
    gmdebug(_0x160c3b(490, "cP9e", 458, 508, 461) + "t:", _0x365188);
    return _0x365188;
  } catch (_0x34af25) {
    gmdebug(_0x160c3b(480, "2%hb", 421, 535, 421) + _0x8a84b2(991, 947, 979, 935, "*V$@") + _0x160c3b(485, "IPoo", 505, 472, 545) + _0x8a84b2(903, 896, 993, 948, "y#79") + ":", _0x34af25);
  }
}