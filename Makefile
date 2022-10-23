clean:
	rm -rf ./vss_* ./vss

# for linux
setup: clean
	curl -OL https://github.com/vssio/vss/releases/latest/download/vss_linux_amd64.tar.gz
	tar -xvf vss_linux_amd64.tar.gz
	cp vss_linux_amd64/vss .

build:
	./vss build