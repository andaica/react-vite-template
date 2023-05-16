#!/bin/bash
usage() { echo "Usage: $0 [-e <master|stage|prod>]" 1>&2; exit 1; }

while getopts ":e:" o; do
    case "${o}" in
        e)
            e=${OPTARG}
            if [ "$e" == "stage" ] || [ "$e" == "master" ] || [ "$e" == "prod" ]; then
              echo "ENV = ${e}"
            else
              usage
            fi
            ;;
        *)
            usage
            ;;
    esac
done
shift $((OPTIND-1))

if [ -z "${e}" ]; then
    usage
fi

#echo "ENV = ${e}"

if [ "$e" == "stage" ]; then
    docker rm -f my_vite_demo || true
    docker run -d --restart always -p 3000:80 --name my_vite_demo vite_demo_latest
    docker image prune -f

elif [ "$e" == "master" ]; then
    docker rm -f my_vite_demo || true
    docker run -d --restart always -p 3000:80 --name my_vite_demo vite_demo_latest
    docker image prune -f

elif [ "$e" == "prod" ]; then
    docker rm -f my_vite_demo || true
    docker run -d --restart always -p 3000:80 --name my_vite_demo vite_demo_latest
    docker image prune -f
    
else
  echo "Done."
fi